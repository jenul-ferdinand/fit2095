// Import Node Modules
const express = require('express');
const mongoose = require('mongoose');

// Configure Mongoose
const url = 'mongodb://127.0.0.1:27017/week7-applied'
async function connectDB(url) {
    await mongoose.connect(url);
    return 'Connected successfully';
}
connectDB(url).then(console.log).catch((err) => console.log(err));

// Router Imports
const fleetRouter = require('./routes/fleet-routes');
const carRouter = require('./routes/car-routes');

// Configure Expresss
app = express();
app.listen(8080);

// Middleware
app.use(express.json());

// Configure Routers
app.use('/fleet', fleetRouter);
app.use('/cars', carRouter);