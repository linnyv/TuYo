const express = require('express');
const router = express.Router();
const CornellNotaController = require('../controllers/CornellController');

router.get('/', CornellNotaController.getAllCornellNotas);
router.get('/cornellnotas/:id', CornellNotaController.getCornellNotaById);
router.post('/cornellnotas', CornellNotaController.createCornellNota);
router.put('/cornellnotas/:id', CornellNotaController.updateCornellNota);
router.delete('/cornellnotas/:id', CornellNotaController.deleteCornellNota);

module.exports = router;