// src/modules/pollas/pollas.repository.js
const pool = require('../../config/db');

class PollasRepository {
  async findAll() {
    const [rows] = await pool.execute(
      'SELECT * FROM POLLA ORDER BY fecha_creacion DESC'
    );
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute('SELECT * FROM POLLA WHERE polla_id = ?', [id]);
    return rows[0] || null;
  }

  async create(data) {
    const [result] = await pool.execute(
      `INSERT INTO POLLA (nombre, descripcion, codigo_invitacion, creador_id, pts_marcador_exacto, pts_ganador, fecha_creacion, estado)
       VALUES (?, ?, ?, ?, ?, ?, NOW(), 'activa')`,
      [data.nombre, data.descripcion || '', data.codigo_invitacion, data.creador_id, data.pts_marcador_exacto || 3, data.pts_ganador || 1]
    );
    return result.insertId;
  }

  async joinPolla(pollaId, usuarioId) {
    const [result] = await pool.execute(
      `INSERT INTO PARTICIPACION_POLLA (polla_id, usuario_id, puntos_total, posicion, fecha_union)
       VALUES (?, ?, 0, 0, NOW())`,
      [pollaId, usuarioId]
    );
    return result.insertId;
  }

  async findParticipacion(pollaId, usuarioId) {
    const [rows] = await pool.execute(
      'SELECT * FROM PARTICIPACION_POLLA WHERE polla_id = ? AND usuario_id = ?',
      [pollaId, usuarioId]
    );
    return rows[0] || null;
  }

  async getRanking(pollaId) {
    const [rows] = await pool.execute(
      `SELECT pp.*, u.nombre, u.avatar
       FROM PARTICIPACION_POLLA pp
       JOIN USUARIO u ON pp.usuario_id = u.usuario_id
       WHERE pp.polla_id = ?
       ORDER BY pp.puntos_total DESC`,
      [pollaId]
    );
    return rows;
  }

  async savePronostico(participacionId, partidoId, golesLocal, golesVisitante) {
    // Check if already exists
    const [existing] = await pool.execute(
      'SELECT pronostico_id FROM PRONOSTICO WHERE participacion_id = ? AND partido_id = ?',
      [participacionId, partidoId]
    );

    if (existing.length > 0) {
      // Check if match is already in progress
      const [match] = await pool.execute(
        'SELECT estado FROM PARTIDO WHERE partido_id = ?',
        [partidoId]
      );
      if (match.length > 0 && match[0].estado !== 'programado') {
        const error = new Error('No se puede modificar el pronóstico, el partido ya comenzó');
        error.statusCode = 400;
        throw error;
      }

      await pool.execute(
        'UPDATE PRONOSTICO SET goles_local = ?, goles_visitante = ? WHERE pronostico_id = ?',
        [golesLocal, golesVisitante, existing[0].pronostico_id]
      );
      return existing[0].pronostico_id;
    }

    const [result] = await pool.execute(
      `INSERT INTO PRONOSTICO (participacion_id, partido_id, goles_local, goles_visitante, bloqueado)
       VALUES (?, ?, ?, ?, FALSE)`,
      [participacionId, partidoId, golesLocal, golesVisitante]
    );
    return result.insertId;
  }

  async calcularPuntos(pollaId) {
    // Get polla config
    const [pollaRows] = await pool.execute('SELECT * FROM POLLA WHERE polla_id = ?', [pollaId]);
    if (pollaRows.length === 0) return;
    const polla = pollaRows[0];

    // Get all participations
    const [participaciones] = await pool.execute(
      'SELECT * FROM PARTICIPACION_POLLA WHERE polla_id = ?',
      [pollaId]
    );

    for (const part of participaciones) {
      // Get all pronosticos for this participation
      const [pronosticos] = await pool.execute(
        `SELECT pr.*, p.goles_local AS real_local, p.goles_visitante AS real_visitante, p.estado
         FROM PRONOSTICO pr
         JOIN PARTIDO p ON pr.partido_id = p.partido_id
         WHERE pr.participacion_id = ? AND p.estado = 'finalizado'`,
        [part.participacion_id]
      );

      let totalPuntos = 0;
      for (const pron of pronosticos) {
        let puntos = 0;
        // Exact score
        if (pron.goles_local === pron.real_local && pron.goles_visitante === pron.real_visitante) {
          puntos = polla.pts_marcador_exacto;
        }
        // Correct winner
        else {
          const realResult = Math.sign(pron.real_local - pron.real_visitante);
          const predResult = Math.sign(pron.goles_local - pron.goles_visitante);
          if (realResult === predResult) {
            puntos = polla.pts_ganador;
          }
        }
        totalPuntos += puntos;

        // Update pronostico points
        await pool.execute(
          'UPDATE PRONOSTICO SET puntos = ? WHERE pronostico_id = ?',
          [puntos, pron.pronostico_id]
        );
      }

      // Update total points
      await pool.execute(
        'UPDATE PARTICIPACION_POLLA SET puntos_total = ? WHERE participacion_id = ?',
        [totalPuntos, part.participacion_id]
      );
    }

    // Update positions
    const [ranking] = await pool.execute(
      'SELECT participacion_id FROM PARTICIPACION_POLLA WHERE polla_id = ? ORDER BY puntos_total DESC',
      [pollaId]
    );
    for (let i = 0; i < ranking.length; i++) {
      await pool.execute(
        'UPDATE PARTICIPACION_POLLA SET posicion = ? WHERE participacion_id = ?',
        [i + 1, ranking[i].participacion_id]
      );
    }
  }
}

module.exports = new PollasRepository();
