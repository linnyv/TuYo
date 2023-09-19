const OutlineNota = require('../models/Outline');

exports.createOutlineNota = async (req, res) => {
  try {
    const { topic, course, date, padreId, cipotesId } = req.body;
    const outlineNota = await OutlineNota.create({ topic, course, date, padreId, cipotesId });
    res.status(201).json(outlineNota);
  } catch (error) {
    res.status(500).json({ error: ' Wally found an internal server error when he was hiding in the server room' });
  }
};

exports.getAllOutlineNotas = async (req, res) => {
  try {
    const outlineNotas = await OutlineNota.find();
    res.status(200).json(outlineNotas);
  } catch (error) {
    res.status(500).json({ error: ' Wally found an internal server error when he was hiding in the server room' });
  }
};

exports.getOutlineNotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const outlineNota = await OutlineNota.findById(id);
    if (!outlineNota) {
      return res.status(404).json({ error: 'OutlineNota not found, Carmen Sandiego was hired to find it.' });
    }
    res.status(200).json(outlineNota);
  } catch (error) {
    res.status(500).json({ error: ' Wally found an internal server error when he was hiding in the server room' });
  }
};

exports.updateOutlineNota = async (req, res) => {
  try {
    const { id } = req.params;
    const { topic, course, date, padreId, cipotesId } = req.body;
    const updatedOutlineNota = await OutlineNota.findByIdAndUpdate(
      id,
      { topic, course, date, padreId, cipotesId },
      { new: true }
    );
    if (!updatedOutlineNota) {
      return res.status(404).json({ error: 'OutlineNota not found, Carmen Sandiego was hired to find it.' });
    }
    res.status(200).json(updatedOutlineNota);
  } catch (error) {
    res.status(500).json({ error: ' Wally found an internal server error when he was hiding in the server room' });
  }
};

exports.deleteOutlineNota = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOutlineNota = await OutlineNota.findByIdAndDelete(id);
    if (!deletedOutlineNota) {
      return res.status(404).json({ error: 'OutlineNota not found, Carmen Sandiego was hired to find it.' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: ' Wally found an internal server error when he was hiding in the server room' });
  }
};