// src/modules/usuarios/usuarios.controller.js
const usuariosService = require('./usuarios.service');

class UsuariosController {
  async getById(req, res, next) {
    try {
      const user = await usuariosService.getById(req.params.id);
      res.json({ success: true, data: user });
    } catch (err) { next(err); }
  }

  async update(req, res, next) {
    try {
      const user = await usuariosService.update(req.params.id, req.body, req.user.usuario_id);
      res.json({ success: true, data: user });
    } catch (err) { next(err); }
  }

  async getPreferencias(req, res, next) {
    try {
      const prefs = await usuariosService.getPreferencias(req.params.id);
      res.json({ success: true, data: prefs });
    } catch (err) { next(err); }
  }

  async updatePreferencias(req, res, next) {
    try {
      const prefs = await usuariosService.updatePreferencias(req.params.id, req.body, req.user.usuario_id);
      res.json({ success: true, data: prefs });
    } catch (err) { next(err); }
  }

  async updateStatus(req, res, next) {
    try {
      if (parseInt(req.params.id) !== parseInt(req.user.usuario_id)) {
        return res.status(403).json({ success: false, message: 'No autorizado' });
      }
      await usuariosService.updateStatus(req.params.id, req.body.estado);
      res.json({ success: true, message: 'Estado actualizado' });
    } catch (err) { next(err); }
  }
}

module.exports = new UsuariosController();
