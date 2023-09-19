const express = require('express');
const router = express.Router();
const testTrackerController = require('../controllers/TestDataController');

router.post('/', testTrackerController.createTestTracker);
router.get('/test-trackers', testTrackerController.getAllTestTrackers);
router.get('/test-trackers/:id', testTrackerController.getTestTrackerById);
router.put('/test-trackers/:id', testTrackerController.updateTestTracker);
router.delete('/test-trackers/:id', testTrackerController.deleteTestTracker);

module.exports = router;