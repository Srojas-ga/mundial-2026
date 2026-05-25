// src/modules/partidos/partidos.repository.js
const pool = require('../../config/db');

class PartidosRepository {
  async findAll(filters = {}) {
    let sql = `
      SELECT p.*, 
        el.equipo_id AS local_id, el.nombre AS local_nombre, el.bandera AS local_bandera, el.grupo_mundial AS local_grupo, el.ranking_fifa AS local_ranking,
        ev.equipo_id AS visit_id, ev.nombre AS visit_nombre, ev.bandera AS visit_bandera, ev.grupo_mundial AS visit_grupo, ev.ranking_fifa AS visit_ranking,
        est.nombre AS estadio_nombre, est.ciudad AS estadio_ciudad
      FROM PARTIDO p
      LEFT JOIN EQUIPO el ON p.equipo_local_id = el.equipo_id
      LEFT JOIN EQUIPO ev ON p.equipo_visitante_id = ev.equipo_id
      LEFT JOIN ESTADIO est ON p.estadio_id = est.estadio_id
    `;
    const params = [];
    const conditions = [];

    if (filters.estado) { conditions.push('p.estado = ?'); params.push(filters.estado); }
    if (filters.fase) { conditions.push('p.fase = ?'); params.push(filters.fase); }
    if (filters.fecha) { conditions.push('DATE(p.fecha) = ?'); params.push(filters.fecha); }

    if (conditions.length > 0) sql += ' WHERE ' + conditions.join(' AND ');
    sql += ' ORDER BY p.fecha ASC, p.hora ASC';

    const [rows] = await pool.execute(sql, params);
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute(
      `SELECT p.*, 
        el.equipo_id AS local_id, el.nombre AS local_nombre, el.bandera AS local_bandera, el.grupo_mundial AS local_grupo, el.ranking_fifa AS local_ranking,
        ev.equipo_id AS visit_id, ev.nombre AS visit_nombre, ev.bandera AS visit_bandera, ev.grupo_mundial AS visit_grupo, ev.ranking_fifa AS visit_ranking,
        est.nombre AS estadio_nombre, est.ciudad AS estadio_ciudad
      FROM PARTIDO p
      LEFT JOIN EQUIPO el ON p.equipo_local_id = el.equipo_id
      LEFT JOIN EQUIPO ev ON p.equipo_visitante_id = ev.equipo_id
      LEFT JOIN ESTADIO est ON p.estadio_id = est.estadio_id
      WHERE p.partido_id = ?`,
      [id]
    );
    return rows[0] || null;
  }

  async findEventos(partidoId) {
    const [rows] = await pool.execute(
      `SELECT ep.*, e.nombre AS equipo_nombre, e.bandera AS equipo_bandera
       FROM EVENTO_PARTIDO ep
       LEFT JOIN EQUIPO e ON ep.equipo_id = e.equipo_id
       WHERE ep.partido_id = ?
       ORDER BY ep.minuto ASC`,
      [partidoId]
    );
    return rows;
  }

  async create(data) {
    const [result] = await pool.execute(
      `INSERT INTO PARTIDO (equipo_local_id, equipo_visitante_id, estadio_id, fecha, hora, fase, estado, provisional, fuente_datos)
       VALUES (?, ?, ?, ?, ?, ?, 'programado', ?, ?)`,
      [data.equipo_local_id, data.equipo_visitante_id, data.estadio_id, data.fecha, data.hora, data.fase, data.provisional || false, data.fuente_datos || 'manual']
    );
    return result.insertId;
  }

  async update(id, data) {
    const fields = [];
    const values = [];
    const allowed = ['equipo_local_id', 'equipo_visitante_id', 'estadio_id', 'fecha', 'hora', 'fase', 'estado', 'goles_local', 'goles_visitante', 'provisional', 'fuente_datos'];
    for (const key of allowed) {
      if (data[key] !== undefined) { fields.push(`${key} = ?`); values.push(data[key]); }
    }
    if (fields.length === 0) return;
    values.push(id);
    await pool.execute(`UPDATE PARTIDO SET ${fields.join(', ')} WHERE partido_id = ?`, values);
  }
}

module.exports = new PartidosRepository();
