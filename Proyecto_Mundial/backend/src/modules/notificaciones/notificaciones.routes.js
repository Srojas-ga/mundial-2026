// src/modules/notificaciones/notificaciones.routes.js
const { Router } = require('express');
const auth = require('../../middlewares/auth.middleware');
const notifController = require('./notificaciones.controller');

const router = Router();

router.get('/', auth, notifController.getAll);
router.patch('/:id/leer', auth, notifController.markAsRead);

module.exports = router;
