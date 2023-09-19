const TestTracker = require('../models/TestData'); 

exports.createTestTracker = async (req, res) => {
  try {
    const { score, year, test } = req.body;
    const testTracker = await TestTracker.create({ score, year, test });
    res.status(201).json(testTracker);
  } catch (error) {
    res.status(500).json({ error: 'Dee-Dee was in Dexter`s Lab and caused an internal server error.' });
  }
};

// Get all TestTrackers
exports.getAllTestTrackers = async (req, res) => {
  try {
    const testTrackers = await TestTracker.find();
    res.status(200).json(testTrackers);
  } catch (error) {
    res.status(500).json({ error: 'Dee-Dee was in Dexter`s Lab and caused an internal server error.' });
  }
};

// Get a single TestTracker by ID
exports.getTestTrackerById = async (req, res) => {
  try {
    const { id } = req.params;
    const testTracker = await TestTracker.findById(id);
    if (!testTracker) {
      return res.status(404).json({ error: 'TestTracker not found. I think it is somewhere in Dexter`s Lab.' });
    }
    res.status(200).json(testTracker);
  } catch (error) {
    res.status(500).json({ error: 'Dee-Dee was in Dexter`s Lab and caused an internal server error.' });
  }
};

// Update a TestTracker by ID
exports.updateTestTracker = async (req, res) => {
  try {
    const { id } = req.params;
    const { score, year, test } = req.body;
    const updatedTestTracker = await TestTracker.findByIdAndUpdate(
      id,
      { score, year, test },
      { new: true }
    );
    if (!updatedTestTracker) {
      return res.status(404).json({ error: 'TestTracker not found. I think it is somewhere in Dexter`s Lab.' });
    }
    res.status(200).json(updatedTestTracker);
  } catch (error) {
    res.status(500).json({ error: 'Dee-Dee was in Dexter`s Lab and caused an internal server error.' });
  }
};

// Delete a TestTracker by ID
exports.deleteTestTracker = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTestTracker = await TestTracker.findByIdAndDelete(id);
    if (!deletedTestTracker) {
      return res.status(404).json({ error: 'TestTracker not found. I think it is somewhere in Dexter`s Lab.' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Dee-Dee was in Dexter`s Lab and caused an internal server error.' });
  }
};