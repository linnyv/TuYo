require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose');


const GPARoute = require ('./routes/GPARoute');
const GradeRoute = require ('./routes/GradeRoute');
const TestDataRoute = require ('./routes/TestDataRoute');

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Listening on Port', process.env.PORT)
    });
})
.catch((error) => {
        console.log(error)
});

app.use('/gpatrackers', GPARoute);
app.use(GradeRoute);
app.use(TestDataRoute);
