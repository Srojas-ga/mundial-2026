// src/modules/agenda/agenda.controller.js
const agendaService = require('./agenda.service');

class AgendaController {
  async getAll(req, res, next) {
    try {
      const agenda = await agendaService.getByUsuario(req.user.usuario_id);
      res.json({ success: true, data: agenda });
    } catch (err) { next(err); }
  }

  async add(req, res, next) {
    try {
      const result = await agendaService.add(req.user.usuario_id, req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err) { next(err); }
  }

  async remove(req, res, next) {
    try {
      await agendaService.remove(req.params.id, req.user.usuario_id);
      res.json({ success: true, message: 'Eliminado de la agenda' });
    } catch (err) { next(err); }
  }
}

module.exports = new AgendaController();
