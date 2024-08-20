// Modules import
const express = require('express')
const ejs = require('ejs')

// Class import
const Teacher = require('./teacher')

// Express server setup
const app = express()
const PORT = 8080

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`)
})

// Bootstrap
app.use(express.static('node_modules/bootstrap/dist/css'));


// Decode the body of incoming requests with 'urlencoded format'
app.use(express.urlencoded({ extended: true }))
// Specifying path for images
app.use(express.static('public/images'))

// Express for EJS
app.engine('html', ejs.renderFile);
app.set('view engine', 'html')

// Variables
teachers = []

// GET Home Page
app.get('/', function (req, res) {
    let date = new Date().toLocaleString()

    res.render('index.html', { date: date});
})

// GET List All Teachers
app.get('/jenul/teachers', function (req, res) {
    res.render('teachers.html', { teachers : teachers })
});

// GET Add Teacher
app.get('/jenul/teachers/add', function (req, res) {
    res.render('add-teacher.html', { teachers : teachers });
});

// POST Add Teacher
app.post('/jenul/teachers/add', function (req, res) {
    let name = req.body.name
    let salary = req.body.salary
    let rank = req.body.rank
    let newTeacher = new Teacher(name, salary, rank)
    teachers.push(newTeacher)
    res.redirect('/jenul/teachers')
})


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


