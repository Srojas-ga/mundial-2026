// src/modules/partidos/partidos.routes.js
const { Router } = require('express');
const auth = require('../../middlewares/auth.middleware');
const partidosController = require('./partidos.controller');

const router = Router();

router.get('/', auth, partidosController.getAll);
router.get('/:id', auth, partidosController.getById);
router.get('/:id/eventos', auth, partidosController.getEventos);

module.exports = router;
