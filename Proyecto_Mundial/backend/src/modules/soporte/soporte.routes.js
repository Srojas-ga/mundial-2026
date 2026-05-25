// src/modules/soporte/soporte.routes.js
const { Router } = require('express');
const auth = require('../../middlewares/auth.middleware');
const soporteController = require('./soporte.controller');

const router = Router();

router.get('/', auth, soporteController.getAll);
router.post('/', auth, soporteController.create);
router.get('/:id', auth, soporteController.getById);

module.exports = router;
