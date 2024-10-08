const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io')

// Model Imports
const Student = require('./models/Student');


//! ====== Express/Socket.io Server Setup ======
// Create express server
const app = express();
const server = http.createServer(app);

// Initalise Socket.io
const io = socketio(server, {
    cors : {
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST']
    }
});

// Listening for socket.io connections
io.on('connection', (socket) => {
    console.log('New client connected');

    // Handle some event
    socket.on('convert', async (data) => {
        try {
            const aud = data;
            console.log(`Recieved aud: ${aud}`);
            const usd = aud * 0.68;
            console.log(`Sending USD back: ${usd}`);
            socket.emit('converted', usd)
        }
        catch (error) {
            console.error('Error in convert socket', error);
            socket.emit('error', { message: 'Error converting aud to usd' || 'Error converting aud to usd'});
        }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Start the server with the HTTP server
const PORT_NUMBER = 8080;
server.listen(PORT_NUMBER, function (error) { 
    if (error) {
        console.log(error);
        return;
    }
    console.log(`Listening on port ${PORT_NUMBER}`);
});

// Cross origin resource sharing
app.use(cors());
// Decode the body of incoming requests with `urlencoded` format.
app.use(express.urlencoded({ extended: false }));
// Automatically parse JSON data in incoming requests
app.use(express.json());

//! ====== Database ======
let db = [];

//! ====== Endpoints ======
//to get all Students
//test this endpoint by sending a GET request to http://localhost:8080/api/students
app.get('/api/students', async (req, res) => {
    res.json(db);
});
//to save a new Student
//test this endpoint by sending a POST request to http://localhost:8080/api/students
app.post('/api/students', async (req, res) => {
    let student = new Student(req.body.name, req.body.age, req.body.fees);
    db.push(student);
    res.json(student);
});
