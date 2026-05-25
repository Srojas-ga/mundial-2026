// src/modules/auth/auth.service.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const pool = require('../../config/db');
const env = require('../../config/env');
const logger = require('../../config/logger');

const SALT_ROUNDS = 10;
const MAX_FAILED_ATTEMPTS = 5;
const LOCK_DURATION_MINUTES = 15;

class AuthService {
  async register({ nombre, email, password }) {
    const correlacionId = uuidv4();

    // Verificar si el email ya existe
    const [existing] = await pool.execute(
      'SELECT usuario_id FROM USUARIO WHERE email = ?',
      [email]
    );
    if (existing.length > 0) {
      const error = new Error('El email ya está registrado');
      error.statusCode = 409;
      throw error;
    }

    // Hashear contraseña
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    // Insertar usuario
    const [result] = await pool.execute(
      `INSERT INTO USUARIO (nombre, email, password_hash, tipo, estado, fecha_registro)
       VALUES (?, ?, ?, 'aficionado', 'activo', NOW())`,
      [nombre, email, passwordHash]
    );

    const usuarioId = result.insertId;

    // Crear preferencias por defecto
    await pool.execute(
      `INSERT INTO PREFERENCIA (usuario_id, idioma, zona_horaria, canal_notificacion)
       VALUES (?, 'es', 'America/Bogota', 'push')`,
      [usuarioId]
    );

    // Crear álbum inicial
    await pool.execute(
      `INSERT INTO ALBUM (usuario_id, total_laminas, total_completado, fecha_inicio)
       VALUES (?, 0, 0, NOW())`,
      [usuarioId]
    );

    // Paquete de bienvenida
    await pool.execute(
      `INSERT INTO PAQUETE (usuario_id, origen, estado, fecha_obtencion)
       VALUES (?, 'bienvenida', 'disponible', NOW())`,
      [usuarioId]
    );

    // Registrar en LOG
    await pool.execute(
      `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
       VALUES ('registro_usuario', ?, ?, ?, NOW())`,
      [`Nuevo usuario registrado: ${email}`, usuarioId, correlacionId]
    );

    logger.info(`Usuario registrado: ${email}`, { correlacionId, usuarioId });

    // Generar token
    const token = this._generateToken(usuarioId, email, 'aficionado');

    return {
      token,
      user: {
        id: usuarioId.toString(),
        name: nombre,
        email,
        avatar: '👤',
        favoriteTeams: [],
        cities: [],
      },
    };
  }

  async login({ email, password }) {
    const correlacionId = uuidv4();

    // Buscar usuario
    const [users] = await pool.execute(
      'SELECT * FROM USUARIO WHERE email = ?',
      [email]
    );

    if (users.length === 0) {
      await this._logEvent('login_fallido', `Intento con email inexistente: ${email}`, null, correlacionId);
      const error = new Error('Credenciales inválidas');
      error.statusCode = 401;
      throw error;
    }

    const user = users[0];

    // Verificar bloqueo temporal
    if (user.intentos_fallidos >= MAX_FAILED_ATTEMPTS && user.ultimo_intento_fallido) {
      const lockUntil = new Date(user.ultimo_intento_fallido);
      lockUntil.setMinutes(lockUntil.getMinutes() + LOCK_DURATION_MINUTES);
      if (new Date() < lockUntil) {
        await this._logEvent('login_bloqueado', `Cuenta bloqueada: ${email}`, user.usuario_id, correlacionId);
        const error = new Error(`Cuenta bloqueada temporalmente. Intenta de nuevo en ${LOCK_DURATION_MINUTES} minutos.`);
        error.statusCode = 429;
        throw error;
      }
      // Reset if lock period passed
      await pool.execute(
        'UPDATE USUARIO SET intentos_fallidos = 0 WHERE usuario_id = ?',
        [user.usuario_id]
      );
    }

    // Verificar estado
    if (user.estado !== 'activo') {
      const error = new Error('Cuenta desactivada. Contacta a soporte.');
      error.statusCode = 403;
      throw error;
    }

    // Verificar contraseña
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) {
      await pool.execute(
        'UPDATE USUARIO SET intentos_fallidos = intentos_fallidos + 1, ultimo_intento_fallido = NOW() WHERE usuario_id = ?',
        [user.usuario_id]
      );
      await this._logEvent('login_fallido', `Contraseña incorrecta para: ${email}`, user.usuario_id, correlacionId);

      const currentAttempts = (user.intentos_fallidos || 0) + 1;
      if (currentAttempts >= MAX_FAILED_ATTEMPTS) {
        await this._logEvent('cuenta_bloqueada', `Cuenta bloqueada tras ${MAX_FAILED_ATTEMPTS} intentos: ${email}`, user.usuario_id, correlacionId);
      }

      const error = new Error('Credenciales inválidas');
      error.statusCode = 401;
      throw error;
    }

    // Login exitoso — reset intentos
    await pool.execute(
      'UPDATE USUARIO SET intentos_fallidos = 0, ultimo_intento_fallido = NULL WHERE usuario_id = ?',
      [user.usuario_id]
    );

    // Obtener equipos favoritos
    const [teams] = await pool.execute(
      'SELECT equipo_id FROM USUARIO_EQUIPO_FAVORITO WHERE usuario_id = ?',
      [user.usuario_id]
    );

    // Obtener ciudades favoritas
    const [cities] = await pool.execute(
      'SELECT ciudad FROM USUARIO_CIUDAD_FAVORITA WHERE usuario_id = ?',
      [user.usuario_id]
    );

    await this._logEvent('login_exitoso', `Login exitoso: ${email}`, user.usuario_id, correlacionId);

    const token = this._generateToken(user.usuario_id, user.email, user.tipo);

    return {
      token,
      user: {
        id: user.usuario_id.toString(),
        name: user.nombre,
        email: user.email,
        avatar: user.avatar || '👤',
        favoriteTeams: teams.map(t => t.equipo_id.toString()),
        cities: cities.map(c => c.ciudad),
      },
    };
  }

  _generateToken(usuarioId, email, tipo) {
    return jwt.sign(
      { usuario_id: usuarioId, email, tipo },
      env.jwt.secret,
      { expiresIn: env.jwt.expiresIn }
    );
  }

  async _logEvent(tipo, descripcion, usuarioId, correlacionId) {
    try {
      await pool.execute(
        `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, correlacion_id, fecha)
         VALUES (?, ?, ?, ?, NOW())`,
        [tipo, descripcion, usuarioId, correlacionId]
      );
    } catch (err) {
      logger.error('Error al registrar log:', err.message);
    }
  }
  async updatePassword(usuarioId, currentPassword, newPassword) {
    const correlacionId = uuidv4();
    const [users] = await pool.execute('SELECT * FROM USUARIO WHERE usuario_id = ?', [usuarioId]);
    if (users.length === 0) throw new Error('Usuario no encontrado');
    const user = users[0];
    const valid = await bcrypt.compare(currentPassword, user.password_hash);
    if (!valid) {
      const error = new Error('La contraseña actual es incorrecta');
      error.statusCode = 400;
      throw error;
    }
    const passwordHash = await bcrypt.hash(newPassword, SALT_ROUNDS);
    await pool.execute('UPDATE USUARIO SET password_hash = ? WHERE usuario_id = ?', [passwordHash, usuarioId]);
    await this._logEvent('cambio_password', `Cambio de contraseña`, usuarioId, correlacionId);
    return { message: 'Contraseña actualizada' };
  }
}

module.exports = new AuthService();
