const express = require('express'); // Import the Express module
const path = require('path'); // Import the Path module

const print = console.log;
const VIEWS_PATH = path.join(__dirname, '/views/'); 

const PORT_NUMBER = 8080;
const app = express();


// LISTEN FOR PORT_NUMBER
app.use(express.static('node_modules/bootstrap/dist/css'));
app.listen(PORT_NUMBER, function () {
    print(`Listening on port ${PORT_NUMBER}`);
});

// PARCELS ROUTER
let parcelsRouter = require('./router/parcels');
app.use('/parcels', parcelsRouter);

// HOME PAGE
app.get('/', function (req, res) {
    let fileName = VIEWS_PATH + 'index.html';
    res.sendFile(fileName);
});

// ADDING TWO NUMBERS
app.get('/add/:no1/:no2', function (req, res) {
    let fileName = VIEWS_PATH + 'index.html';
    let number1 = parseInt(req.params.no1);
    let number2 = parseInt(req.params.no2);
    let result = number1 + number2;
    res.send(String(result));
});

// SUBTRACTING
app.get('/sub/', function (req, res) {
    let fileName = VIEWS_PATH + 'index.html';
    let number1 = parseInt(req.query.no1);
    let number2 = parseInt(req.query.no2);
    let result = number1 - number2;
    res.send(result + "");
});

// INFORMATION PAGE
app.get('/info/', function (req, res) {
    let fileName = VIEWS_PATH + 'info.html';
    res.sendFile(fileName);
});