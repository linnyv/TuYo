const express = require('express');
const router = express.Router();
const GPATrackerController = require('../controllers/GPAController');

router.get('/', GPATrackerController.getAllGPATrackers);
router.get('/gpatrackers/:id', GPATrackerController.getGPATrackerById);
router.post('/gpatrackers', GPATrackerController.createGPATracker);
router.put('/gpatrackers/:id', GPATrackerController.updateGPATracker);
router.delete('/gpatrackers/:id', GPATrackerController.deleteGPATracker);

module.exports = router;