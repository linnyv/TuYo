const GPATracker = require('../models/GPA');

const GPATrackerController = {
  getAllGPATrackers: async (req, res) => {
    try {
      const gpaTrackers = await GPATracker.find();
      res.json(gpaTrackers);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error, call Stark Enterprises' });
    }
  },

  getGPATrackerById: async (req, res) => {
    try {
      const gpaTracker = await GPATracker.findById(req.params.id);
      if (!gpaTracker) {
        return res.status(404).json({ error: 'GPATracker not found, Ironman is looking for it' });
      }
      res.json(gpaTracker);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error, call Stark Enterprises' });
    }
  },

  createGPATracker: async (req, res) => {
    try {
      const newGPATracker = new GPATracker(req.body);
      const savedGPATracker = await newGPATracker.save();
      res.status(201).json(savedGPATracker);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error, call Stark Enterprises' });
    }
  },

  updateGPATracker: async (req, res) => {
    try {
      const updatedGPATracker = await GPATracker.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedGPATracker) {
        return res.status(404).json({ error: 'GPATracker not found, Ironman is looking for it' });
      }
      res.json(updatedGPATracker);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error, call Stark Enterprises' });
    }
  },

  deleteGPATracker: async (req, res) => {
    try {
      const deletedGPATracker = await GPATracker.findByIdAndDelete(
        req.params.id
      );
      if (!deletedGPATracker) {
        return res.status(404).json({ error: 'GPATracker not found, Ironman is looking for it' });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error, call Stark Enterprises' });
    }
  },
};

module.exports = GPATrackerController;