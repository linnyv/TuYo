const express = require('express');
const router = express.Router();
const GradeTrackerController = require('../controllers/GradeController');

router.get('/', GradeTrackerController.getAllGradeTrackers);
router.get('/gradetrackers/:id', GradeTrackerController.getGradeTrackerById);
router.post('/gradetrackers', GradeTrackerController.createGradeTracker);
router.put('/gradetrackers/:id', GradeTrackerController.updateGradeTracker);
router.delete('/gradetrackers/:id', GradeTrackerController.deleteGradeTracker);

module.exports = router;