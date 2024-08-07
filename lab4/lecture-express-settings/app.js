const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ejs = require('ejs');

const app = express();
const studentsRouter = require('./routes/students');

app.use(morgan('tiny'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(function (req, res, next) {
    req.myId = Math.round(Math.random() * 100);
    next();
});

app.use(express.static('public/images'));

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.set('port_number', 6969);
app.use('/students', studentsRouter);

app.listen(app.get('port_number'), function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`listening on port ${app.get('port_number')}`);
});

let arr = [
    {maker: 'BMW', price: 1500},
    {maker: 'Toyota', price: 4000},
    {maker: 'Hyundai', price: 1000},
    {maker: 'Mazda', price: 600},
];

app.get('/students/new', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'new_student.html'));
});

app.post('/students/new', function (req, res) {
    let name = req.body.studentName;
    let age = req.body.studentAge;
    let msg = `Hi ${name} you are ${age} years old.`;
    res.send(msg);
});

app.get('/data', function (req, res) {
    let mySalary = Math.round(Math.random() * 1000);
    let repeatTimes = Math.round(Math.random() * 10);
    res.render('data.html', {name:'Jenul', salary: mySalary, n: repeatTimes, fleet: arr});
})



