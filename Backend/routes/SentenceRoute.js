const express = require('express');
const router = express.Router();
const sentenceNotaController = require('../controllers/SentenceController');

router.post('/', sentenceNotaController.createSentenceNota);
router.get('/sentence-notas', sentenceNotaController.getAllSentenceNotas);
router.get('/sentence-notas/:id', sentenceNotaController.getSentenceNotaById);
router.put('/sentence-notas/:id', sentenceNotaController.updateSentenceNota);
router.delete('/sentence-notas/:id', sentenceNotaController.deleteSentenceNota);

module.exports = router;