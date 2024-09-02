const mongoose = require('mongoose');
const express = require('express');
const foodRouter = require('./routes/food-routes');
const recipeRouter = require('./routes/recipe-routes');

//? Configure Express
const app = express();   // Initalise express app
app.listen(8080);        // Listen for port 8080
app.use(express.json()); // We are not receiving with urlencoded, because we're recieving with json.

//? Configure Mongoose
const url = 'mongodb://127.0.0.1:27017/week7-lecture';

async function connectDB(url) {
    await mongoose.connect(url);
    return 'Connected to Database Successfully'
}

connectDB(url)
    .then(console.log)
    .catch((err) => console.log(err));

//? Configure Express App
app.use('/food', foodRouter)
app.use('/recipe', recipeRouter)

