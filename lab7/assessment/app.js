// Import Node Modules
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

// Import models
const Builder = require('./models/builder');
const House = require('./models/house');

// Configure Mongoose
const url = 'mongodb://127.0.0.1:27017/week7-assessment';
async function connectDB(url) {
    await mongoose.connect(url);
    return 'Connected successfully';
}
connectDB(url).then(console.log).catch((err) => console.log(err));

// Router Imports
const buildersRouter = require('./routes/builders-routes');
const housesRouter = require('./routes/houses-routes');
const addHouseRouter = require('./routes/add-house-routes'); 

// Configure Express
const app = express();
app.listen(8080);

// Configure Express for EJS
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Configure Routers
app.get('/', async (req, res) => {
    try {
        const builders = await Builder.find({});
        const houses = await House.find({});
        res.render('index.html', { builders: builders, houses: houses });
    } catch (err) {
        console.error("Error in GET /:", err);
        res.status(500).send('Internal Server Error');
    }
});
app.use('/33119805/builders', buildersRouter);
app.use('/33119805/houses', housesRouter);
app.use('/33119805/houses', addHouseRouter); 
