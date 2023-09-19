const express = require('express');
const router = express.Router();
const ChartNotaController = require('../controllers/ChartController');

router.get('/', ChartNotaController.getAllChartNotas);
router.get('/chartnotas/:id', ChartNotaController.getChartNotaById);
router.post('/chartnotas', ChartNotaController.createChartNota);
router.put('/chartnotas/:id', ChartNotaController.updateChartNota);
router.delete('/chartnotas/:id', ChartNotaController.deleteChartNota);

module.exports = router;