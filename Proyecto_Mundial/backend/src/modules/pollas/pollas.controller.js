// src/modules/pollas/pollas.controller.js
const pollasService = require('./pollas.service');

class PollasController {
  async getAll(req, res, next) {
    try {
      const pollas = await pollasService.getAll();
      res.json({ success: true, data: pollas });
    } catch (err) { next(err); }
  }

  async create(req, res, next) {
    try {
      const result = await pollasService.create(req.body, req.user.usuario_id);
      res.status(201).json({ success: true, data: result });
    } catch (err) { next(err); }
  }

  async join(req, res, next) {
    try {
      const { codigo } = req.body;
      const result = await pollasService.join(codigo, req.user.usuario_id);
      res.json({ success: true, data: result });
    } catch (err) { next(err); }
  }

  async getRanking(req, res, next) {
    try {
      const ranking = await pollasService.getRanking(req.params.id);
      res.json({ success: true, data: ranking });
    } catch (err) { next(err); }
  }

  async savePronosticos(req, res, next) {
    try {
      const { pronosticos } = req.body;
      const result = await pollasService.savePronostico(req.params.id, req.user.usuario_id, pronosticos);
      res.json({ success: true, data: result });
    } catch (err) { next(err); }
  }
}

module.exports = new PollasController();
