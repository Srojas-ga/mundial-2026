// src/modules/usuarios/usuarios.routes.js
const { Router } = require('express');
const auth = require('../../middlewares/auth.middleware');
const usuariosController = require('./usuarios.controller');

const router = Router();

router.get('/:id', auth, usuariosController.getById);
router.put('/:id', auth, usuariosController.update);
router.get('/:id/preferencias', auth, usuariosController.getPreferencias);
router.put('/:id/preferencias', auth, usuariosController.updatePreferencias);
router.put('/:id/estado', auth, usuariosController.updateStatus);

module.exports = router;
