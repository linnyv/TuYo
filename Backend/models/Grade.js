const mongoose = require('mongoose');

const GradeSchema = new mongoose.Schema({
    course: { 
        type: String, required: true,
    },
    grade: { 
        type: String , 
        required: true,
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

const GradeTracker = mongoose.model('Grade', GradeSchema);

module.exports = GradeTracker;