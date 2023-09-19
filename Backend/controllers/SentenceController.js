const SentenceNota = require('../models/Sentence'); 

exports.createSentenceNota = async (req, res) => {
  try {
    const { topic, course, date, notes } = req.body;
    const sentenceNota = await SentenceNota.create({ topic, course, date, notes });
    res.status(201).json(sentenceNota);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error found, Bulma is fixing it' });
  }
};

// Get all SentenceNotas
exports.getAllSentenceNotas = async (req, res) => {
  try {
    const sentenceNotas = await SentenceNota.find();
    res.status(200).json(sentenceNotas);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error found, Bulma is fixing it' });
  }
};

// Get a single SentenceNota by ID
exports.getSentenceNotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const sentenceNota = await SentenceNota.findById(id);
    if (!sentenceNota) {
      return res.status(404).json({ error: 'SentenceNota not found, we have to find it using Bulma`Dragon Radar' });
    }
    res.status(200).json(sentenceNota);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error found, Bulma is fixing it' });
  }
};

// Update a SentenceNota by ID
exports.updateSentenceNota = async (req, res) => {
  try {
    const { id } = req.params;
    const { topic, course, date, notes } = req.body;
    const updatedSentenceNota = await SentenceNota.findByIdAndUpdate(
      id,
      { topic, course, date, notes },
      { new: true }
    );
    if (!updatedSentenceNota) {
      return res.status(404).json({ error: 'SentenceNota not found, we have to find it using Bulma`Dragon Radar' });
    }
    res.status(200).json(updatedSentenceNota);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error found, Bulma is fixing it' });
  }
};

// Delete a SentenceNota by ID
exports.deleteSentenceNota = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSentenceNota = await SentenceNota.findByIdAndDelete(id);
    if (!deletedSentenceNota) {
      return res.status(404).json({ error: 'SentenceNota not found' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error found, Bulma is fixing it' });
  }
};