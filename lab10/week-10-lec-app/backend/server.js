const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Car = require('./models/car');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');

// Create the HTTP Server
const server = http.createServer(app);
// Create the Socket.io Server
const io = new Server(server);

// Socket IO Connection
io.on('connection', (socket) => {
    console.log('new connection');

    // W10 Event
    socket.on('w10event', (data) => {
        console.log(data);
        data = data + ' from server';
        io.emit('w10serverevent', data);
    });

    // W10 Event 2 
    socket.on('w10event2', (data) => {
        console.log(data);
        data = data + ' from server 2';
        socket.emit('w10serverevent2', data);
    });
});

// Method to connect to the database
async function connect() {
    await mongoose.connect('mongodb://localhost:27017/week10app');
}

// * We load the builded frontend application
app.use(express.static('./dist/week9app/browser'));

// * Middleware to parse JSON payloads
app.use(express.json());

// * Middleware to enable Cross Origin Resource sharing
// app.use(cors());

// Connect to MongoDB
connect();
// Server listens to port 8080
server.listen(8080);


// ! ==== APIs ====
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
