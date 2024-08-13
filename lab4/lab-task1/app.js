const express = require('express');
const Book = require('./book');
const ejs = require('ejs');
const path = require('path');

let app = express();
let db = [];
const PORT_NUMBER = 8080;

app.use(express.static('node_modules/bootstrap/dist/css'));
app.use(express.static('images'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.urlencoded({ extended:true }));

// Listening for Port 8080
app.listen(PORT_NUMBER, function () {
    console.log(`Listening on port ${PORT_NUMBER}`);
});

// GET Homepage
app.get('/', function (req, res) {
    res.render('index');
});

// GET Add Book
app.get('/add-book', function (req, res) {
    res.render('add-book');
});

// GET View Books
app.get('/view-books', function (req, res) {
    res.render('view-books', { records: db });
});

// POST New Booik
app.post('/add-book-post', function (req, res) {
    let newBook = new Book(req.body.title, req.body.author, req.body.year);

    db.push(newBook);

    res.redirect('/view-books');
});

// 404 Not Found Page
app.get('*', function (req, res) {
    res.render('404');
});

