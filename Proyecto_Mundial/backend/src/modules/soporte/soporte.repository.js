// src/modules/soporte/soporte.repository.js
const pool = require('../../config/db');

class SoporteRepository {
  async findByUsuario(usuarioId) {
    const [rows] = await pool.execute(
      'SELECT * FROM SOLICITUD_SOPORTE WHERE usuario_id = ? ORDER BY fecha_creacion DESC',
      [usuarioId]
    );
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM SOLICITUD_SOPORTE WHERE solicitud_id = ?', [id]);
    return rows[0] || null;
  }

  async findRespuestas(solicitudId) {
    const [rows] = await pool.execute(
      `SELECT rs.*, u.nombre AS autor_nombre
       FROM RESPUESTA_SOPORTE rs
       LEFT JOIN USUARIO u ON rs.usuario_id = u.usuario_id
       ORDER BY rs.fecha_respuesta ASC`,
      []
    );
    // Filter by solicitud
    return rows.filter(r => r.solicitud_id === parseInt(solicitudId));
  }

  async create(data) {
    const [result] = await pool.execute(
      `INSERT INTO SOLICITUD_SOPORTE (usuario_id, categoria, asunto, descripcion, estado, fecha_creacion, fecha_actualizacion)
       VALUES (?, ?, ?, ?, 'abierto', NOW(), NOW())`,
      [data.usuario_id, data.categoria, data.asunto, data.descripcion]
    );
    return result.insertId;
  }
}

module.exports = new SoporteRepository();
