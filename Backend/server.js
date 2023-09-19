require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

const ChartRoute = require('./routes/ChartRoute');
const CornellRoute = require ('./routes/CornellRoute');
const GPARoute = require ('./routes/GPARoute');
const GradeRoute = require ('./routes/GradeRoute');
const MapRoute = require ('./routes/MapRoute');
const OutlineRoute = require('./routes/OutlineRoute');
const SentenceRoute = require ('./routes/SentenceRoute');
const TestDataRoute = require ('./routes/TestDataRoute');
const UserRoute = require ('./routes/UserRoute');

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MongoDB has been sucessfully connected')
})
.catch((error) => {
    console.log(error)
});

app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT)
});

app.use(
    cors({
      origin: ['${PORT}'],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
  
app.use('/chartnotas', ChartRoute);
app.use('/cornellnotas', CornellRoute);
app.use('/gpatrackers', GPARoute);
app.use('/gradetrackers',GradeRoute);
app.use('/map-notas', MapRoute);
app.use('/outline-notas', OutlineRoute);
app.use('/sentence-notas', SentenceRoute);
app.use('/test-trackers', TestDataRoute);
app.use('/login', UserRoute);
app.use('/signUp', UserRoute)
