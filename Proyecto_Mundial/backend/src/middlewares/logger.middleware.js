// src/middlewares/logger.middleware.js — Loguea cada request y lo inserta en tabla LOG
const logger = require('../config/logger');
const { v4: uuidv4 } = require('uuid');

function loggerMiddleware(req, res, next) {
  const correlacionId = uuidv4();
  req.correlacionId = correlacionId;

  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    const logData = {
      method: req.method,
      url: req.originalUrl,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      ip: req.ip,
      correlacionId,
      userId: req.user?.usuario_id || null,
    };

    if (res.statusCode >= 400) {
      logger.warn('Request completado con error', logData);
    } else {
      logger.info('Request completado', logData);
    }
  });

  next();
}

module.exports = loggerMiddleware;
