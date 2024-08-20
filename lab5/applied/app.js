// Node Module Imports
const express = require('express')
const ejs = require('ejs')
const mongodb = require('mongodb')
const path = require('path')

// Class Imports 
const Car = require('./models/car')
const MongoClient = mongodb.MongoClient


//* == Configure Express Server ==
let app = express()
const PORT = 8080

app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`)
})

app.use(express.urlencoded({ extended : true }))


//* == Configure Express for EJS ==
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')


//* == Configure MongoDB ==
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url)
let db
let collection

async function main() {
    await client.connect()              // We must `await` for this
    db = client.db('fleet')
    collection = db.collection('cars')

    return 'Connected successfully to server.'
}

main().then(console.log)


//* == End Points ==
// GET Home Page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})


// GET Add New Car Page
app.get('/addcar', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'add-car.html'))
})

// POST Add New Car
app.post('/addcar', async function (req, res) {
    let car = new Car(req.body.maker, req.body.model)
    let insertResult = await collection.insertOne(car)
    console.log(insertResult)
    res.redirect('/getcars')
})



// GET Delete Car Page
app.get('/delcar', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'delete-car.html'))
})

// POST Delete Car
app.post('/delcar', async function (req, res) {
    let id = parseInt(req.body.id)
    let filter = { id : id }
    await collection.deleteOne(filter)
    res.redirect('/getcars')
})

// GET List All Cars Page
app.get('/getcars', async function (req, res) {
    const findResult = await collection.find({}).toArray()
    res.render('get-cars.html', { cars: findResult })
})


// GET 404 Not Found Page
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})


