// src/modules/partidos/partidos.controller.js
const partidosService = require('./partidos.service');

class PartidosController {
  async getAll(req, res, next) {
    try {
      const matches = await partidosService.getAll(req.query);
      res.json({ success: true, data: matches });
    } catch (err) { next(err); }
  }

  async getById(req, res, next) {
    try {
      const match = await partidosService.getById(req.params.id);
      res.json({ success: true, data: match });
    } catch (err) { next(err); }
  }

  async getEventos(req, res, next) {
    try {
      const eventos = await partidosService.getEventos(req.params.id);
      res.json({ success: true, data: eventos });
    } catch (err) { next(err); }
  }
}

module.exports = new PartidosController();
