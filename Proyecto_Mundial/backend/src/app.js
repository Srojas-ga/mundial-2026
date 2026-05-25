// src/app.js — Instancia Express, registra middlewares globales y todas las rutas
const express = require('express');
const cors = require('cors');
const env = require('./config/env');
const logger = require('./config/logger');
const loggerMiddleware = require('./middlewares/logger.middleware');
const errorMiddleware = require('./middlewares/error.middleware');
const { startSyncJob } = require('./jobs/sync-partidos.job');

// Rutas
const authRoutes = require('./modules/auth/auth.routes');
const usuariosRoutes = require('./modules/usuarios/usuarios.routes');
const partidosRoutes = require('./modules/partidos/partidos.routes');
const agendaRoutes = require('./modules/agenda/agenda.routes');
const notificacionesRoutes = require('./modules/notificaciones/notificaciones.routes');
const entradasRoutes = require('./modules/entradas/entradas.routes');
const pollasRoutes = require('./modules/pollas/pollas.routes');
const albumRoutes = require('./modules/album/album.routes');
const soporteRoutes = require('./modules/soporte/soporte.routes');
const adminRoutes = require('./modules/admin/admin.routes');

const app = express();

// ── Middlewares globales ──
app.use(cors({ origin: env.corsOrigin, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

// ── Swagger (solo en desarrollo) ──
if (env.nodeEnv !== 'production') {
  try {
    const swaggerUi = require('swagger-ui-express');
    const YAML = require('yaml');
    const fs = require('fs');
    const path = require('path');
    const swaggerPath = path.join(__dirname, '../swagger.yaml');
    if (fs.existsSync(swaggerPath)) {
      const swaggerDoc = YAML.parse(fs.readFileSync(swaggerPath, 'utf8'));
      app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc, {
        customCss: '.swagger-ui .topbar { display: none }',
        customSiteTitle: 'Mundial 2026 API Docs',
      }));
      logger.info('📖 Swagger UI disponible en /api-docs');
    }
  } catch (err) {
    logger.warn('Swagger UI no disponible:', err.message);
  }
}

// ── Health check ──
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Mundial 2026 API funcionando correctamente',
    timestamp: new Date().toISOString(),
    environment: env.nodeEnv,
  });
});

// ── Rutas de la API ──
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/partidos', partidosRoutes);
app.use('/api/agenda', agendaRoutes);
app.use('/api/notificaciones', notificacionesRoutes);
app.use('/api/entradas', entradasRoutes);
app.use('/api/pollas', pollasRoutes);
app.use('/api/album', albumRoutes);
app.use('/api/soporte', soporteRoutes);
app.use('/api/admin', adminRoutes);

// ── 404 handler ──
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Ruta no encontrada: ${req.method} ${req.originalUrl}`,
  });
});

// ── Error handler global ──
app.use(errorMiddleware);

// ── Iniciar servidor ──
const PORT = env.port;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    logger.info(`🚀 Mundial 2026 API corriendo en http://localhost:${PORT}`);
    logger.info(`📖 Documentación API en http://localhost:${PORT}/api-docs`);

    // Iniciar job de sincronización
    startSyncJob();
  });
}

module.exports = app;
