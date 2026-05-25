// src/middlewares/error.middleware.js — Manejador global de errores, siempre responde JSON
const logger = require('../config/logger');
const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');

async function errorMiddleware(err, req, res, _next) {
  const correlacionId = req.correlacionId || uuidv4();
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? 'Error interno del servidor' : err.message;

  logger.error(`[${correlacionId}] ${err.message}`, {
    stack: err.stack,
    path: req.originalUrl,
    method: req.method,
    statusCode,
    correlacionId,
  });

  // Registrar error 500 en tabla LOG
  if (statusCode === 500) {
    try {
      await pool.execute(
        `INSERT INTO LOG (tipo_evento, descripcion, usuario_id, ip_origen, correlacion_id, fecha)
         VALUES (?, ?, ?, ?, ?, NOW())`,
        [
          'error_500',
          `${req.method} ${req.originalUrl}: ${err.message}`.substring(0, 500),
          req.user?.usuario_id || null,
          req.ip,
          correlacionId,
        ]
      );
    } catch (logErr) {
      logger.error('Error al guardar log en BD:', logErr.message);
    }
  }

  res.status(statusCode).json({
    success: false,
    message,
    correlacionId,
  });
}

module.exports = errorMiddleware;
