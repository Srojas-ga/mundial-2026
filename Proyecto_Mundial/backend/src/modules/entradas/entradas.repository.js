// src/modules/entradas/entradas.repository.js
const pool = require('../../config/db');

class EntradasRepository {
  async findByUsuario(usuarioId) {
    const [rows] = await pool.execute(
      `SELECT e.*, r.estado AS reserva_estado, r.fecha_reserva, r.fecha_expiracion,
        p.partido_id, p.fecha AS partido_fecha, p.hora AS partido_hora, p.fase, p.estado AS partido_estado,
        p.goles_local, p.goles_visitante,
        el.equipo_id AS local_id, el.nombre AS local_nombre, el.bandera AS local_bandera, el.grupo_mundial AS local_grupo, el.ranking_fifa AS local_ranking,
        ev.equipo_id AS visit_id, ev.nombre AS visit_nombre, ev.bandera AS visit_bandera, ev.grupo_mundial AS visit_grupo, ev.ranking_fifa AS visit_ranking,
        est.nombre AS estadio_nombre, est.ciudad AS estadio_ciudad
       FROM ENTRADA e
       LEFT JOIN RESERVA r ON e.entrada_id = r.entrada_id AND r.usuario_id = ?
       LEFT JOIN PARTIDO p ON e.partido_id = p.partido_id
       LEFT JOIN EQUIPO el ON p.equipo_local_id = el.equipo_id
       LEFT JOIN EQUIPO ev ON p.equipo_visitante_id = ev.equipo_id
       LEFT JOIN ESTADIO est ON p.estadio_id = est.estadio_id
       WHERE e.usuario_id = ? OR r.usuario_id = ?
       ORDER BY p.fecha ASC`,
      [usuarioId, usuarioId, usuarioId]
    );
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM ENTRADA WHERE entrada_id = ?', [id]);
    return rows[0] || null;
  }

  async reservar(entradaId, usuarioId, codigoQr) {
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();

      // Lock the row for update to prevent double-booking
      const [entries] = await conn.execute(
        'SELECT * FROM ENTRADA WHERE entrada_id = ? FOR UPDATE',
        [entradaId]
      );

      if (entries.length === 0) {
        await conn.rollback();
        const error = new Error('Entrada no encontrada');
        error.statusCode = 404;
        throw error;
      }

      const entrada = entries[0];
      if (entrada.estado !== 'disponible') {
        await conn.rollback();
        const error = new Error('Esta entrada ya no está disponible');
        error.statusCode = 409;
        throw error;
      }

      // Update entrada status and assign user
      await conn.execute(
        `UPDATE ENTRADA SET estado = 'reservada', usuario_id = ?, codigo_qr = ? WHERE entrada_id = ?`,
        [usuarioId, codigoQr, entradaId]
      );

      // Create reserva with expiration (30 minutes)
      const fechaExpiracion = new Date();
      fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + 30);

      await conn.execute(
        `INSERT INTO RESERVA (entrada_id, usuario_id, estado, fecha_reserva, fecha_expiracion)
         VALUES (?, ?, 'pendiente', NOW(), ?)`,
        [entradaId, usuarioId, fechaExpiracion.toISOString().slice(0, 19).replace('T', ' ')]
      );

      await conn.commit();
      return { entradaId, codigoQr, fechaExpiracion };
    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  }

  async transferir(entradaId, fromUserId, toEmail) {
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();

      const [entries] = await conn.execute(
        'SELECT * FROM ENTRADA WHERE entrada_id = ? AND usuario_id = ? FOR UPDATE',
        [entradaId, fromUserId]
      );

      if (entries.length === 0) {
        await conn.rollback();
        const error = new Error('Entrada no encontrada o no te pertenece');
        error.statusCode = 404;
        throw error;
      }

      if (entries[0].estado !== 'pagada') {
        await conn.rollback();
        const error = new Error('Solo se pueden transferir entradas pagadas');
        error.statusCode = 400;
        throw error;
      }

      // Find destination user
      const [destUsers] = await conn.execute(
        'SELECT usuario_id FROM USUARIO WHERE email = ?',
        [toEmail]
      );

      if (destUsers.length === 0) {
        await conn.rollback();
        const error = new Error('Usuario destino no encontrado');
        error.statusCode = 404;
        throw error;
      }

      const destUserId = destUsers[0].usuario_id;

      // Transfer
      await conn.execute(
        `UPDATE ENTRADA SET usuario_id = ?, estado = 'transferida' WHERE entrada_id = ?`,
        [destUserId, entradaId]
      );

      // Record transfer
      const { v4: uuidv4 } = require('uuid');
      const correlacionId = uuidv4();

      await conn.execute(
        `INSERT INTO TRANSFERENCIA_ENTRADA (entrada_id, usuario_origen_id, usuario_destino_id, fecha_transferencia, correlacion_id)
         VALUES (?, ?, ?, NOW(), ?)`,
        [entradaId, fromUserId, destUserId, correlacionId]
      );

      await conn.commit();
      return { entradaId, destUserId, correlacionId };
    } catch (err) {
      await conn.rollback();
      throw err;
    } finally {
      conn.release();
    }
  }
}

module.exports = new EntradasRepository();
