const MapNota = require('../models/Map');

exports.createMapNota = async (req, res) => {
  try {
    const { topic, course, date, padreId, cipotesId } = req.body;
    const mapNota = await MapNota.create({ topic, course, date, padreId, cipotesId });
    res.status(201).json(mapNota);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error has been found, waiting on Brainiac 5 to fix it' });
  }
};

exports.getAllMapNotas = async (req, res) => {
  try {
    const mapNotas = await MapNota.find();
    res.status(200).json(mapNotas);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error has been found, waiting on Brainiac 5 to fix it' });
  }
};

exports.getMapNotaById = async (req, res) => {
  try {
    const { id } = req.params;
    const mapNota = await MapNota.findById(id);
    if (!mapNota) {
      return res.status(404).json({ error: 'MapNota not found, I think the Legion has it' });
    }
    res.status(200).json(mapNota);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error has been found, waiting on Brainiac 5 to fix it' });
  }
};

exports.updateMapNota = async (req, res) => {
  try {
    const { id } = req.params;
    const { topic, course, date, padreId, cipotesId } = req.body;
    const updatedMapNota = await MapNota.findByIdAndUpdate(
      id,
      { topic, course, date, padreId, cipotesId },
      { new: true }
    );
    if (!updatedMapNota) {
      return res.status(404).json({ error: 'MapNota not found, I think the Legion has it' });
    }
    res.status(200).json(updatedMapNota);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error has been found, waiting on Brainiac 5 to fix it' });
  }
};

exports.deleteMapNota = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMapNota = await MapNota.findByIdAndDelete(id);
    if (!deletedMapNota) {
      return res.status(404).json({ error: 'MapNota not found, I think the Legion has it' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error has been found, waiting on Brainiac 5 to fix it' });
  }
};