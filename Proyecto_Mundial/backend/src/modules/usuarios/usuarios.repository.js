// src/modules/usuarios/usuarios.repository.js
const pool = require('../../config/db');

class UsuariosRepository {
  async findById(id) {
    const [rows] = await pool.execute(
      'SELECT usuario_id, nombre, email, avatar, tipo, estado, fecha_registro FROM USUARIO WHERE usuario_id = ?',
      [id]
    );
    return rows[0] || null;
  }

  async findFavoriteTeams(usuarioId) {
    const [rows] = await pool.execute(
      `SELECT e.equipo_id, e.nombre, e.bandera, e.grupo_mundial, e.ranking_fifa
       FROM USUARIO_EQUIPO_FAVORITO uef
       JOIN EQUIPO e ON uef.equipo_id = e.equipo_id
       WHERE uef.usuario_id = ?`,
      [usuarioId]
    );
    return rows;
  }

  async findFavoriteCities(usuarioId) {
    const [rows] = await pool.execute(
      'SELECT ciudad FROM USUARIO_CIUDAD_FAVORITA WHERE usuario_id = ?',
      [usuarioId]
    );
    return rows.map(r => r.ciudad);
  }

  async update(id, data) {
    const fields = [];
    const values = [];
    if (data.nombre) { fields.push('nombre = ?'); values.push(data.nombre); }
    if (data.email) { fields.push('email = ?'); values.push(data.email); }
    if (data.avatar) { fields.push('avatar = ?'); values.push(data.avatar); }

    if (fields.length === 0) return;

    values.push(id);
    await pool.execute(
      `UPDATE USUARIO SET ${fields.join(', ')} WHERE usuario_id = ?`,
      values
    );
  }

  async findPreferencias(usuarioId) {
    const [rows] = await pool.execute(
      'SELECT * FROM PREFERENCIA WHERE usuario_id = ?',
      [usuarioId]
    );
    return rows[0] || null;
  }

  async updatePreferencias(usuarioId, data) {
    const fields = [];
    const values = [];
    if (data.idioma) { fields.push('idioma = ?'); values.push(data.idioma); }
    if (data.zona_horaria) { fields.push('zona_horaria = ?'); values.push(data.zona_horaria); }
    if (data.canal_notificacion) { fields.push('canal_notificacion = ?'); values.push(data.canal_notificacion); }

    if (fields.length > 0) {
      values.push(usuarioId);
      const [existing] = await pool.execute('SELECT usuario_id FROM PREFERENCIA WHERE usuario_id = ?', [usuarioId]);
      if (existing.length === 0) {
        await pool.execute(
          'INSERT INTO PREFERENCIA (usuario_id, idioma, zona_horaria, canal_notificacion) VALUES (?, ?, ?, ?)',
          [usuarioId, data.idioma || 'es', data.zona_horaria || 'UTC', data.canal_notificacion || 'push']
        );
      } else {
        await pool.execute(
          `UPDATE PREFERENCIA SET ${fields.join(', ')} WHERE usuario_id = ?`,
          values
        );
      }
    }

    // Actualizar equipos favoritos
    if (data.equipos_favoritos && Array.isArray(data.equipos_favoritos)) {
      await pool.execute('DELETE FROM USUARIO_EQUIPO_FAVORITO WHERE usuario_id = ?', [usuarioId]);
      for (const equipoId of data.equipos_favoritos) {
        await pool.execute(
          'INSERT INTO USUARIO_EQUIPO_FAVORITO (usuario_id, equipo_id) VALUES (?, ?)',
          [usuarioId, equipoId]
        );
      }
    }

    // Actualizar ciudades favoritas
    if (data.ciudades_favoritas && Array.isArray(data.ciudades_favoritas)) {
      await pool.execute('DELETE FROM USUARIO_CIUDAD_FAVORITA WHERE usuario_id = ?', [usuarioId]);
      for (const ciudad of data.ciudades_favoritas) {
        await pool.execute(
          'INSERT INTO USUARIO_CIUDAD_FAVORITA (usuario_id, ciudad) VALUES (?, ?)',
          [usuarioId, ciudad]
        );
      }
    }
  }

  async findAll() {
    const [rows] = await pool.execute(
      'SELECT usuario_id, nombre, email, tipo, estado, fecha_registro FROM USUARIO ORDER BY fecha_registro DESC'
    );
    return rows;
  }

  async updateStatus(id, estado) {
    await pool.execute(
      'UPDATE USUARIO SET estado = ? WHERE usuario_id = ?',
      [estado, id]
    );
  }
}

module.exports = new UsuariosRepository();
