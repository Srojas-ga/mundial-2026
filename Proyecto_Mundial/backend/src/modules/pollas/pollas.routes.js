// src/modules/pollas/pollas.routes.js
const { Router } = require('express');
const auth = require('../../middlewares/auth.middleware');
const pollasController = require('./pollas.controller');

const router = Router();

router.get('/', auth, pollasController.getAll);
router.post('/', auth, pollasController.create);
router.post('/unirse', auth, pollasController.join);
router.get('/:id/ranking', auth, pollasController.getRanking);
router.post('/:id/pronosticos', auth, pollasController.savePronosticos);

module.exports = router;
