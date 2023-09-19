const ChartNota = require('../models/Chart');

const ChartNotaController = {
  getAllChartNotas: async (req, res) => {
    try {
      const chartNotas = await ChartNota.find();
      res.json(chartNotas);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error, its being attacked by the Dalek' });
    }
  },

  getChartNotaById: async (req, res) => {
    try {
      const chartNota = await ChartNota.findById(req.params.id);
      if (!chartNota) {
        return res.status(404).json({ error: 'ChartNota not found, the 13th Doctor is looking for it.' });
      }
      res.json(chartNota);
    } catch (error) {
      res.status(500).json({ error: 'Internal server has an error, its being attacked by the Dalek' });
    }
  },

  createChartNota: async (req, res) => {
    try {
      const newChartNota = new ChartNota(req.body);
      const savedChartNota = await newChartNota.save();
      res.status(201).json(savedChartNota);
    } catch (error) {
      res.status(500).json({ error: 'Internal server has an error, its being attacked by the Dalek' });
    }
  },

  updateChartNota: async (req, res) => {
    try {
      const updatedChartNota = await ChartNota.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedChartNota) {
        return res.status(404).json({ error: 'ChartNota not found, the 13th Doctor is looking for it.' });
      }
      res.json(updatedChartNota);
    } catch (error) {
      res.status(500).json({ error: 'Internal server has an error, its being attacked by the Dalek'});
    }
  },

  deleteChartNota: async (req, res) => {
    try {
      const deletedChartNota = await ChartNota.findByIdAndDelete(req.params.id);
      if (!deletedChartNota) {
        return res.status(404).json({ error: 'ChartNota not found, the 13th Doctor is looking for it.' });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal server has an error, its being attacked by the Dalek' });
    }
  },
};

module.exports = ChartNotaController;