// src/modules/notificaciones/notificaciones.service.js
const notifRepo = require('./notificaciones.repository');
const logger = require('../../config/logger');

class NotificacionesService {
  async getByUsuario(usuarioId, filters) {
    const rows = await notifRepo.findByUsuario(usuarioId, filters);
    return rows.map(r => ({
      id: r.notificacion_id.toString(),
      type: r.tipo,
      title: r.titulo,
      message: r.mensaje,
      time: r.fecha_envio,
      read: Boolean(r.leida),
      matchId: r.partido_id?.toString() || undefined,
    }));
  }

  async markAsRead(id, usuarioId) {
    const updated = await notifRepo.markAsRead(id, usuarioId);
    if (!updated) {
      const error = new Error('Notificación no encontrada');
      error.statusCode = 404;
      throw error;
    }
  }

  async send(data) {
    const notifId = await notifRepo.create(data);
    logger.info(`Notificación enviada: ${data.titulo} a usuario ${data.usuario_id}`);
    return notifId;
  }
}

module.exports = new NotificacionesService();
