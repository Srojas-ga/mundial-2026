// src/modules/auth/auth.controller.js
const authService = require('./auth.service');

class AuthController {
  async register(req, res, next) {
    try {
      const { nombre, email, password } = req.body;
      const result = await authService.register({ nombre, email, password });
      res.status(201).json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const result = await authService.login({ email, password });
      res.json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }
  async updatePassword(req, res, next) {
    try {
      const { current, newPass } = req.body;
      const result = await authService.updatePassword(req.user.usuario_id, current, newPass);
      res.json({ success: true, data: result });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();
