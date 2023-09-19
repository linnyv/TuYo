const mongoose = require('mongoose');

const SentenceNotasSchema = new mongoose.Schema({
    topic: { 
        type: String, required: true,
    },
    course: { 
        type: String, required: true,
    },
    date: { 
        type: String, required: true,
    },
    notes: { 
        type: String, required: true,
    },
});

const SentenceNota = mongoose.model('Sentence', SentenceNotasSchema);

module.exports = SentenceNota;