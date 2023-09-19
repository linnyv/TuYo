const mongoose = require('mongoose');

const ChartNotasSchema = new mongoose.Schema({
    topic: { 
        type: String, required: true,
    },
    course: { 
        type: String, required: true,
    },
    date: { 
        type: String, required: true,
    },
    columns: [{ 
        name: {
            type: String, required: true
        },
  }],
    rows: [{ type: String}], 
});

const ChartNota = mongoose.model('Chart', ChartNotasSchema);

module.exports = ChartNota;