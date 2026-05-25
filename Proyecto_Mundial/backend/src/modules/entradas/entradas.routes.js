// src/modules/entradas/entradas.routes.js
const { Router } = require('express');
const { body } = require('express-validator');
const auth = require('../../middlewares/auth.middleware');
const validate = require('../../middlewares/validate.middleware');
const entradasController = require('./entradas.controller');

const router = Router();

router.get('/', auth, entradasController.getAll);
router.post('/:id/reservar', auth, entradasController.reservar);
router.post(
  '/:id/transferir',
  auth,
  [body('email').isEmail().withMessage('Email destino inválido')],
  validate,
  entradasController.transferir
);

module.exports = router;
