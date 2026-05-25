// src/modules/admin/admin.controller.js
const adminService = require('./admin.service');

class AdminController {
  async getUsuarios(req, res, next) {
    try {
      const users = await adminService.getUsuarios();
      res.json({ success: true, data: users });
    } catch (err) { next(err); }
  }

  async updateUsuario(req, res, next) {
    try {
      const user = await adminService.updateUsuario(req.params.id, req.body);
      res.json({ success: true, data: user });
    } catch (err) { next(err); }
  }

  async createPartido(req, res, next) {
    try {
      const result = await adminService.createPartido(req.body);
      res.status(201).json({ success: true, data: result });
    } catch (err) { next(err); }
  }

  async updatePartido(req, res, next) {
    try {
      const result = await adminService.updatePartido(req.params.id, req.body);
      res.json({ success: true, data: result });
    } catch (err) { next(err); }
  }

  async calcularPuntos(req, res, next) {
    try {
      const ranking = await adminService.calcularPuntosPolla(req.params.id);
      res.json({ success: true, data: ranking });
    } catch (err) { next(err); }
  }
}

module.exports = new AdminController();
