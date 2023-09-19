const GradeTracker = require('../models/Grade');

const GradeTrackerController = {
  getAllGradeTrackers: async (req, res) => {
    try {
      const gradeTrackers = await GradeTracker.find();
      res.json(gradeTrackers);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error found, The Brain can fix it, let him conquer the world first!' });
    }
  },

  getGradeTrackerById: async (req, res) => {
    try {
      const gradeTracker = await GradeTracker.findById(req.params.id);
      if (!gradeTracker) {
        return res.status(404).json({ error: 'GradeTracker not found, did Pinky eat it?' });
      }
      res.json(gradeTracker);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error found, The Brain can fix it, let him first conquer the world first!' });
    }
  },

  createGradeTracker: async (req, res) => {
    try {
      const { course, grade, year, period } = req.body;
      const newGradeTracker = new GradeTracker({ 
        course,
        grade,
        year,
        period
      });
      const savedGradeTracker = await newGradeTracker.save();
      res.status(201).json(savedGradeTracker);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error found, The Brain can fix it, let him first conquer the world first!' });
    }
  },

  updateGradeTracker: async (req, res) => {
    try {
      const { course, grade, year, period } = req.body;
      const updatedGradeTracker = await GradeTracker.findByIdAndUpdate(
        req.params.id,
        {
          course,
          grade,
          year,
          period
        },
        { new: true }
      );
      if (!updatedGradeTracker) {
        return res.status(404).json({ error: 'GradeTracker not found, did Pinky eat it?' });
      }
      res.json(updatedGradeTracker);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error found, The Brain can fix it, let him first conquer the world first!' });
    }
  },

  deleteGradeTracker: async (req, res) => {
    try {
      const deletedGradeTracker = await GradeTracker.findByIdAndDelete(
        req.params.id
      );
      if (!deletedGradeTracker) {
        return res.status(404).json({ error: 'GradeTracker not found, did Pinky eat it?' });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error found, The Brain can fix it, let him first conquer the world first!' });
    }
  },
};

module.exports = GradeTrackerController;