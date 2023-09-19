const express = require('express');
const router = express.Router();
const mapNotaController = require('../controllers/MapController');


router.post('/', mapNotaController.createMapNota);
router.get('/map-notas', mapNotaController.getAllMapNotas);
router.get('/map-notas/:id', mapNotaController.getMapNotaById);
router.put('/map-notas/:id', mapNotaController.updateMapNota);
router.delete('/map-notas/:id', mapNotaController.deleteMapNota);

module.exports = router;