const CornellNota = require('../models/Cornell');

const CornellNotaController = {
  getAllCornellNotas: async (req, res) => {
    try {
      const cornellNotas = await CornellNota.find();
      res.json(cornellNotas);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error has occurred, call Mr. Robot' });
    }
  },

  getCornellNotaById: async (req, res) => {
    try {
      const cornellNota = await CornellNota.findById(req.params.id);
      if (!cornellNota) {
        return res.status(404).json({ error: 'CornellNota not found, try again' });
      }
      res.json(cornellNota);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error has occurred, call Mr. Robot' });
    }
  },

  createCornellNota: async (req, res) => {
    try {
      const newCornellNota = new CornellNota(req.body);
      const savedCornellNota = await newCornellNota.save();
      res.status(201).json(savedCornellNota);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error has occurred, call Mr. Robot' });
    }
  },

  updateCornellNota: async (req, res) => {
    try {
      const updatedCornellNota = await CornellNota.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedCornellNota) {
        return res.status(404).json({ error: 'CornellNota not found, try again' });
      }
      res.json(updatedCornellNota);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error has occurred, call Mr. Robot' });
    }
  },

  deleteCornellNota: async (req, res) => {
    try {
      const deletedCornellNota = await CornellNota.findByIdAndDelete(
        req.params.id
      );
      if (!deletedCornellNota) {
        return res.status(404).json({ error: 'CornellNota not found, try again' });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error has occurred, call Mr. Robot' });
    }
  },
};

module.exports = CornellNotaController;