const express = require('express');
const mongoose = require('mongoose');

// Actor router
const actors = require('./controllers/actor');
// Express
const app = express();
// Use json
app.use(express.json());
// Home path will be the 
app.use(express.static('../dist/movie-app/browser'));
// Listen for port 8080
app.listen(8080);

// Global middleware
app.use(function (req, res, next) {
    console.log(req.url);
    next();
});

// Connect to monogdb
async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/movies');
}
connect();

// Actor endpoints
app.get('/actors', actors.getAll);
app.get('/actors/:id', actors.getOne);
app.post('/actors/new', actors.createOne);
app.delete('/actors/:id', actors.deleteOne);

