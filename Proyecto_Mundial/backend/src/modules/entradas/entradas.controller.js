// src/modules/entradas/entradas.controller.js
const entradasService = require('./entradas.service');

class EntradasController {
  async getAll(req, res, next) {
    try {
      const entradas = await entradasService.getByUsuario(req.user.usuario_id);
      res.json({ success: true, data: entradas });
    } catch (err) { next(err); }
  }

  async reservar(req, res, next) {
    try {
      const result = await entradasService.reservar(req.params.id, req.user.usuario_id);
      res.status(201).json({ success: true, data: result });
    } catch (err) { next(err); }
  }

  async transferir(req, res, next) {
    try {
      const { email } = req.body;
      const result = await entradasService.transferir(req.params.id, req.user.usuario_id, email);
      res.json({ success: true, data: result });
    } catch (err) { next(err); }
  }
}

module.exports = new EntradasController();
