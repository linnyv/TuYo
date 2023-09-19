const mongoose = require('mongoose');

const CornellNotasSchema = new mongoose.Schema({
    topic: { 
        type: String, required: true,
    },
    course: { 
        type: String, required: true,
    },
    date: { 
        type: String, required: true,
    },
    questionsYcues: { 
        type: String, required: true,
    },
    notes: { 
        type: String, required: true,
    },
    summary: { 
        type: String, required: true,
    },
});

const CornellNota = mongoose.model('Cornell', CornellNotasSchema);

module.exports = CornellNota;