let express = require('express'); // Import the express node module
let app = express(); // Define express w/ variable 

let carsRouter = require('./router/cars');
let driversRouter = require('./router/drivers');

app.listen(8080); // Listening for port 8080

app.use('/cars', carsRouter);
app.use('/drivers', driversRouter);

// This is the main page '/'
app.get('/', function (req, res) {
    res.send('Hi this is week 3');
});

// This is a route to '/code'
app.get('/code', function (req, res) {
    res.send('The unit code is FIT2095');
});

// Question Mark (?) means the 'b' an optional search parameter
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd');
});

// Regex: '+' meaning that we can have multiple 'b's e.g. abbbbbcd
app.get('/ab+cd', function (req, res) {
    res.send('We got it..')
});

// Regex: '*' meaning that we can have anything where the '+' is e.g. ab(RANDOM)cd, ab(fjdskjfhd)cd
app.get('/ab*cd', function (req, res) {k
    res.send('ab*cd');
});

// Examples of query string usage in some websites
// SEEK: https://www.seek.com.au/Software-Developer-jobs/in-Melbourne-VIC-3000?salaryrange=0-150000&salarytype=annual
// Domain: https://www.domain.com.au/sale/glen-waverley-vic-3150/?price=0-2750000&excludeunderoffer=1
// See drivers.js and cars.js

// MIDDLEWARE-ROUTING TABLE: See cars.js and drivers.js