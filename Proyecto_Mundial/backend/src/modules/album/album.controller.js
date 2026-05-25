// src/modules/album/album.controller.js
const albumService = require('./album.service');

class AlbumController {
  async getAlbum(req, res, next) {
    try {
      const album = await albumService.getAlbum(req.user.usuario_id);
      res.json({ success: true, data: album });
    } catch (err) { next(err); }
  }

  async getPaquetes(req, res, next) {
    try {
      const paquetes = await albumService.getPaquetes(req.user.usuario_id);
      res.json({ success: true, data: paquetes });
    } catch (err) { next(err); }
  }

  async abrirPaquete(req, res, next) {
    try {
      const laminas = await albumService.abrirPaquete(req.params.id, req.user.usuario_id);
      res.json({ success: true, data: laminas });
    } catch (err) { next(err); }
  }

  async getIntercambios(req, res, next) {
    try {
      const intercambios = await albumService.getIntercambios(req.user.usuario_id);
      res.json({ success: true, data: intercambios });
    } catch (err) { next(err); }
  }

  async createIntercambio(req, res, next) {
    try {
      const result = await albumService.createIntercambio(req.body, req.user.usuario_id);
      res.status(201).json({ success: true, data: result });
    } catch (err) { next(err); }
  }

  async updateIntercambio(req, res, next) {
    try {
      const { estado } = req.body;
      const result = await albumService.updateIntercambio(req.params.id, estado, req.user.usuario_id);
      res.json({ success: true, data: result });
    } catch (err) { next(err); }
  }
}

module.exports = new AlbumController();
