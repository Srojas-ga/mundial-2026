// src/modules/notificaciones/notificaciones.repository.js
const pool = require('../../config/db');

class NotificacionesRepository {
  async findByUsuario(usuarioId, filters = {}) {
    let sql = 'SELECT * FROM NOTIFICACION WHERE usuario_id = ?';
    const params = [usuarioId];

    if (filters.leida !== undefined) {
      sql += ' AND leida = ?';
      params.push(filters.leida);
    }

    sql += ' ORDER BY fecha_envio DESC';
    const [rows] = await pool.execute(sql, params);
    return rows;
  }

  async markAsRead(id, usuarioId) {
    const [result] = await pool.execute(
      'UPDATE NOTIFICACION SET leida = TRUE, fecha_lectura = NOW() WHERE notificacion_id = ? AND usuario_id = ?',
      [id, usuarioId]
    );
    return result.affectedRows > 0;
  }

  async create(data) {
    const [result] = await pool.execute(
      `INSERT INTO NOTIFICACION (usuario_id, tipo, titulo, mensaje, partido_id, leida, fecha_envio)
       VALUES (?, ?, ?, ?, ?, FALSE, NOW())`,
      [data.usuario_id, data.tipo, data.titulo, data.mensaje, data.partido_id || null]
    );
    return result.insertId;
  }
}

module.exports = new NotificacionesRepository();
