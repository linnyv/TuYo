const mongoose = require('mongoose');

const MapNotasSchema = new mongoose.Schema({
    topic: { 
        type: String, required: true,
    },
    course: { 
        type: String, required: true,
    },
    date: { 
        type: String, required: true,
    },
    padreId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Map",
        default: null
    },
    cipotesId: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Map",
        }],
});

const MapNota = mongoose.model('Map', MapNotasSchema);

module.exports = MapNota;