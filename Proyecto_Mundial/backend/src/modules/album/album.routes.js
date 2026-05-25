// src/modules/album/album.routes.js
const { Router } = require('express');
const auth = require('../../middlewares/auth.middleware');
const albumController = require('./album.controller');

const router = Router();

router.get('/', auth, albumController.getAlbum);
router.get('/paquetes', auth, albumController.getPaquetes);
router.post('/paquetes/:id/abrir', auth, albumController.abrirPaquete);
router.get('/intercambios', auth, albumController.getIntercambios);
router.post('/intercambios', auth, albumController.createIntercambio);
router.patch('/intercambios/:id', auth, albumController.updateIntercambio);

module.exports = router;
