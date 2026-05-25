// src/modules/soporte/soporte.controller.js
const soporteService = require('./soporte.service');

class SoporteController {
  async getAll(req, res, next) {
    try {
      const cases = await soporteService.getByUsuario(req.user.usuario_id);
      res.json({ success: true, data: cases });
    } catch (err) { next(err); }
  }

  async getById(req, res, next) {
    try {
      const caso = await soporteService.getById(req.params.id, req.user.usuario_id);
      res.json({ success: true, data: caso });
    } catch (err) { next(err); }
  }

  async create(req, res, next) {
    try {
      const result = await soporteService.create(req.body, req.user.usuario_id);
      res.status(201).json({ success: true, data: result });
    } catch (err) { next(err); }
  }
}

module.exports = new SoporteController();
