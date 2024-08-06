const express = require('express');
const path = require('path');

const PORT_NUMBER = 8080;
const VIEWS_PATH = path.join(__dirname, '/views/');
const app = express();

// LISTENING FOR PORT_NUMBER
app.listen(PORT_NUMBER, function() {
    console.log(`Listening on port ${PORT_NUMBER}`);
});

// HOME PAGE
app.get('/', function (req, res) {
    let fileName = VIEWS_PATH + 'index.html';
    res.sendFile(fileName);
});

// ADD PATIENT
app.get('/patient/add', function (req, res) {
    let fname = req.query.fname;
    let lname = req.query.lname;
    res.send(`Thank you, ${fname} ${lname}`);
});

// LOCATION
app.get('/location', function (req, res) {
    let fileName = VIEWS_PATH + 'location.html';
    res.sendFile(fileName);
});

// 404 Redirect
app.get('*', function (req, res) {
    res.status(404).sendFile(VIEWS_PATH + '404.html');
});

