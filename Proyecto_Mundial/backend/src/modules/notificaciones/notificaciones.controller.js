// src/modules/notificaciones/notificaciones.controller.js
const notifService = require('./notificaciones.service');

class NotificacionesController {
  async getAll(req, res, next) {
    try {
      const notifs = await notifService.getByUsuario(req.user.usuario_id, req.query);
      res.json({ success: true, data: notifs });
    } catch (err) { next(err); }
  }

  async markAsRead(req, res, next) {
    try {
      await notifService.markAsRead(req.params.id, req.user.usuario_id);
      res.json({ success: true, message: 'Notificación marcada como leída' });
    } catch (err) { next(err); }
  }
}

module.exports = new NotificacionesController();
