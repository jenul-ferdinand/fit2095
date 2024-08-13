// Modules Imports 
const express = require('express')
const ejs = require('ejs')
const path = require('path')

// Express Server Setup
let app = express()
const PORT_NUMBER = 8080

app.listen(PORT_NUMBER, function () {
    console.log(`Listening on port ${PORT_NUMBER}`)
})
    
// Decode the body of incoming requests with 'urlencoded' format.
app.use(express.urlencoded({ extended: true }))
// Specifying the location of the static assets
app.use(express.static('public/images'))
app.use(express.static('public/css'))

// Configure Express for EJS
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

// ENDPOINTS
// | 1 | Home Page              | /             | GET   | Respond with index.html                               |
// | 2 | Addition Page          | /addition     | GET   | Respond with addition.html                            |
// | 3 | Subtraction Page       | /subtraction  | GET   | Respond with subtraction.html                         |
// | 4 | Addition Operation     | /addition     | POST  | Perform the operation and respond with result.html    |
// | 5 | Subtraction Operation  | /subtraction  | POST  | Perform the opeartion and respond with result.html

// GET Home Page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/index.html'))
})

// GET Addition Page
app.get('/addition', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/addition.html'))
})

// GET Subtraction Page
app.get('/subtraction', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/subtraction.html'))
});

// POST Addition Operation
app.post('/addition', function (req, res) {
    let obj = req.body;
    let n1 = obj.no1;
    let n2 = obj.no2;
    let result = parseInt(n1) + parseInt(n2);
    res.render('result', { no1: n1, no2: n2, result: result, op: '+' });
});

// POST Subtraciton Operation
app.post('/subtraction', function (req, res) {
    let obj = req.body;
    let n1 = obj.no1;
    let n2 = obj.no2;
    let result = parseInt(n1) - parseInt(n2);
    res.render('result', { no1: n1, no2: n2, result: result, op: '-' });
});

// GET 404 Not Found Page
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'views/404.html'));
});


