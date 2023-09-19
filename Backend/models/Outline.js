const mongoose = require('mongoose');

const OutlineNotasSchema = new mongoose.Schema({
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
        ref: "Outline",
        default: null
    },
    cipotesId: [{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Outline",
        }],
});

const OutlineNota = mongoose.model('Outline', OutlineNotasSchema);

module.exports = OutlineNota;