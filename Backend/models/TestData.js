const mongoose = require('mongoose');

const TestDataSchema = new mongoose.Schema({
    score: { 
        type: String , 
        required: true,
    },
    year : { 
        type: Number, required: true,
    },
    test: {
        type: String, required: true,
        enum: [
            'DAT: Dental Admissions Test',
            'GMAT: Graduate Management Admission Test',
            'GRE: Graduate Record Examination',
            'LSAT: Law School Admission Test',
            'MAT: Miller Analogies Test',
            'MCAT:Medical College Admissions Test',
            'OAT: Optometry Admission Test',
            'PCAT: Pharmacy College Admission Test',
            'CBEST: California Basic Educational Skills Test',
           'WTMA: Wiesen Test of Mechanical Aptitude',
           'Other'
            
   ]
},
});

const TestTracker = mongoose.model('Test Data', TestDataSchema);

module.exports = TestTracker;