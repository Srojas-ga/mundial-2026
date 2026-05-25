// src/modules/agenda/agenda.repository.js
const pool = require('../../config/db');

class AgendaRepository {
  async findByUsuario(usuarioId) {
    const [rows] = await pool.execute(
      `SELECT ap.agenda_partido_id, ap.recordatorio, ap.notas,
        p.partido_id, p.fecha, p.hora, p.fase, p.estado, p.goles_local, p.goles_visitante,
        el.equipo_id AS local_id, el.nombre AS local_nombre, el.bandera AS local_bandera, el.grupo_mundial AS local_grupo, el.ranking_fifa AS local_ranking,
        ev.equipo_id AS visit_id, ev.nombre AS visit_nombre, ev.bandera AS visit_bandera, ev.grupo_mundial AS visit_grupo, ev.ranking_fifa AS visit_ranking,
        est.nombre AS estadio_nombre, est.ciudad AS estadio_ciudad
       FROM AGENDA_PARTIDO ap
       JOIN PARTIDO p ON ap.partido_id = p.partido_id
       LEFT JOIN EQUIPO el ON p.equipo_local_id = el.equipo_id
       LEFT JOIN EQUIPO ev ON p.equipo_visitante_id = ev.equipo_id
       LEFT JOIN ESTADIO est ON p.estadio_id = est.estadio_id
       WHERE ap.usuario_id = ?
       ORDER BY p.fecha ASC, p.hora ASC`,
      [usuarioId]
    );
    return rows;
  }

  async add(usuarioId, partidoId, recordatorio, notas) {
    const [result] = await pool.execute(
      `INSERT INTO AGENDA_PARTIDO (usuario_id, partido_id, recordatorio, notas)
       VALUES (?, ?, ?, ?)`,
      [usuarioId, partidoId, recordatorio || false, notas || null]
    );
    return result.insertId;
  }

  async remove(id, usuarioId) {
    const [result] = await pool.execute(
      'DELETE FROM AGENDA_PARTIDO WHERE agenda_partido_id = ? AND usuario_id = ?',
      [id, usuarioId]
    );
    return result.affectedRows > 0;
  }
}

module.exports = new AgendaRepository();
