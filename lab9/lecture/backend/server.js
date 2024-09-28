const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Car = require('./models/car');
const cors = require('cors');


// Connect to the database
async function connect() {
    await mongoose.connect('mongodb://localhost:27017/carDB');
}


app.use(express.static('./dist/week9app/browser'));

app.use(express.json());
app.use(cors());


connect();
app.listen(8080);
app.get('/api/cars', async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
});
app.post('/api/cars', async (req, res) => {
    const car = new Car(req.body);
    await car.save();
    res.json(car);
});
app.get('/api/cars/:id', async (req, res) => {
    const car = await Car.findById(req.params.id);
    res.json(car);
});
app.put('/api/cars/:id', async (req, res) => {
    const car = await Car.findById(req.params.id);
    car.set(req.body);
    await car.save();
    res.json(car);
});
app.delete('/api/cars/:id', async (req, res) => {
    const car = await Car.findByIdAndDelete(req.params.id);
    res.json(car);
});
