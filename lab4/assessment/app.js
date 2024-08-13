// Modules import
const express = require('express')
const ejs = require('ejs')

// Class import
const Plant = require('./plant')

// Express server setup
const app = express()
const PORT = 8080

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`)
})

// Decode the body of incoming requests with 'urlencoded format'
app.use(express.urlencoded({ extended: true }))
// Specifying path for images
app.use(express.static('public/images'))

// Express for EJS
app.engine('html', ejs.renderFile);
app.set('view engine', 'html')

// Variables
plants = []

// GET Home Page
app.get('/', function (req, res) {
    res.render('index.html');
})

// GET Get Plants
app.get('/jenul/nursery', function (req, res) {
    res.json(plants);
});

// GET Add Plant
app.get('/jenul/nursery/add', function (req, res) {
    res.render('add-plant.html');
});

// POST Add Plant
app.post('/jenul/nursery/add', function (req, res) {
    const { plantName, plantPrice, plantFamily } = req.body;
    const newPlant = new Plant(plantName, plantPrice, plantFamily);
    plants.push(newPlant);
    res.redirect('/jenul/nursery');
});

// GET Delete Plant
app.get('/jenul/nursery/remove/:id', function (req, res) {
    const plantId = parseInt(req.params.id);
    plants = plants.filter(plant => plant.id != plantId);
    res.redirect('/jenul/nursery'); 
});

