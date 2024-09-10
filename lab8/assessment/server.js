const express = require('express');
const mongoose = require('mongoose');

// Mongoose connection
const url = 'mongodb://127.0.0.1:27017/zoo';
async function connectDB() {
    await mongoose.connect(url);
    console.log('Connected successfully to MongoDB');
}
connectDB();

// Express server setup
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(8080, () => console.log('Server running on port 8080'));

// Route imports
const zooRouter = require('./routes/zoo-routes');
const animalRouter = require('./routes/animal-routes');

// Use routes
app.use('/33119805/zoos', zooRouter);
app.use('/33119805/animals', animalRouter);
