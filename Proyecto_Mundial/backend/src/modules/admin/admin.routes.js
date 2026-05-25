// src/modules/admin/admin.routes.js
const { Router } = require('express');
const auth = require('../../middlewares/auth.middleware');
const role = require('../../middlewares/role.middleware');
const adminController = require('./admin.controller');

const router = Router();

router.get('/usuarios', auth, role('admin'), adminController.getUsuarios);
router.patch('/usuarios/:id', auth, role('admin'), adminController.updateUsuario);
router.post('/partidos', auth, role('admin'), adminController.createPartido);
router.put('/partidos/:id', auth, role('admin'), adminController.updatePartido);
router.post('/pollas/:id/calcular-puntos', auth, role('admin'), adminController.calcularPuntos);

module.exports = router;
