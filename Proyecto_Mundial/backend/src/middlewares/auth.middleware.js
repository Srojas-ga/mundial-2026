// src/middlewares/auth.middleware.js — Verifica JWT, adjunta usuario al request
const jwt = require('jsonwebtoken');
const env = require('../config/env');

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Token de autenticación requerido',
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, env.jwt.secret);
    req.user = {
      usuario_id: decoded.usuario_id,
      email: decoded.email,
      tipo: decoded.tipo,
    };
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expirado, inicia sesión nuevamente',
      });
    }
    return res.status(401).json({
      success: false,
      message: 'Token inválido',
    });
  }
}

module.exports = authMiddleware;
