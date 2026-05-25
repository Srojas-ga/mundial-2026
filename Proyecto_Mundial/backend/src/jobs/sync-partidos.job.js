// src/jobs/sync-partidos.job.js — Cron cada 30 segundos que actualiza partidos en curso
const cron = require('node-cron');
const pool = require('../config/db');
const sportsApi = require('../adapters/sports-api.adapter');
const logger = require('../config/logger');

function startSyncJob() {
  // Cada 30 segundos
  cron.schedule('*/30 * * * * *', async () => {
    try {
      const { data, provisional } = await sportsApi.getLiveMatches();

      if (data.length === 0) return;

      for (const match of data) {
        // Try to find the match in our DB by team names
        if (!match.equipo_local || !match.equipo_visitante) continue;

        const [existing] = await pool.execute(
          `SELECT p.partido_id FROM PARTIDO p
           JOIN EQUIPO el ON p.equipo_local_id = el.equipo_id
           JOIN EQUIPO ev ON p.equipo_visitante_id = ev.equipo_id
           WHERE el.nombre LIKE ? AND ev.nombre LIKE ? AND p.estado != 'finalizado'
           LIMIT 1`,
          [`%${match.equipo_local}%`, `%${match.equipo_visitante}%`]
        );

        if (existing.length > 0) {
          await pool.execute(
            `UPDATE PARTIDO SET estado = ?, goles_local = ?, goles_visitante = ?, provisional = ?, fuente_datos = 'api'
             WHERE partido_id = ?`,
            [match.estado, match.goles_local, match.goles_visitante, provisional, existing[0].partido_id]
          );

          // Block predictions if match is now live
          if (match.estado === 'en_curso') {
            await pool.execute(
              `UPDATE PRONOSTICO pr
               JOIN PARTICIPACION_POLLA pp ON pr.participacion_id = pp.participacion_id
               SET pr.bloqueado = TRUE
               WHERE pr.partido_id = ? AND pr.bloqueado = FALSE`,
              [existing[0].partido_id]
            );
          }
        }
      }

      logger.debug(`Sync partidos: ${data.length} partidos procesados (provisional=${provisional})`);
    } catch (err) {
      logger.error('Error en sync de partidos:', err.message);
    }
  });

  logger.info('⏰ Job de sincronización de partidos iniciado (cada 30s)');
}

module.exports = { startSyncJob };
