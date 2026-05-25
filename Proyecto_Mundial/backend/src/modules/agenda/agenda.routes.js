// src/modules/agenda/agenda.routes.js
const { Router } = require('express');
const auth = require('../../middlewares/auth.middleware');
const agendaController = require('./agenda.controller');

const router = Router();

router.get('/', auth, agendaController.getAll);
router.post('/', auth, agendaController.add);
router.delete('/:id', auth, agendaController.remove);

module.exports = router;
