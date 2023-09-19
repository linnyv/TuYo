const mongoose = require('mongoose');

const GPASchema = new mongoose.Schema({
    semester_quarter: { 
        type: String, required: true,
        enum: [
            'Semester',
            'Quarter'
        ]
    },
    gpa: { 
        type: Number, required: true,
    },
    year : { 
        type: Number, required: true,
    },
   period: {
        type: String, required: true,
        enum: [
        'Fall',
        'Winter',
        'Spring',
        'Summer',
        'First Quarter',
        'Second Quarter',
        'Third Quarter',
        'Fourth Quarter',
   ]
},
});

const GPATracker = mongoose.model('GPA', GPASchema);

module.exports = GPATracker;