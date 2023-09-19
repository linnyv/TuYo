const express = require('express');
const router = express.Router();
const outlineNotaController = require('../controllers/OutlineController');

router.post('/', outlineNotaController.createOutlineNota);
router.get('/outline-notas', outlineNotaController.getAllOutlineNotas);
router.get('/outline-notas/:id', outlineNotaController.getOutlineNotaById);
router.put('/outline-notas/:id', outlineNotaController.updateOutlineNota);
router.delete('/outline-notas/:id', outlineNotaController.deleteOutlineNota);

module.exports = router;