// Node Module Imports
const express = require('express')
const ejs = require('ejs')
const mongodb = require('mongodb')
const { ObjectId } = require('mongodb')
const path = require('path')

// Class Imports 
const Unit = require('./units')
const MongoClient = mongodb.MongoClient


//* == Configure Express Server ==
let app = express()
const PORT = 8080

app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`)
})

// Bootstrap
app.use(express.static('node_modules/bootstrap/dist/css'));

// Specifying path for images
app.use(express.static('public/images'))

// Decode the body of incoming requests with 'urlencoded format'
app.use(express.urlencoded({ extended: true }))

//* == Configure Express for EJS ==
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')


//* == Configure MongoDB ==
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url)
let db;
let collection;

async function main() {
    await client.connect()              // We must `await` for this
    db = client.db('university')
    collection = db.collection('units')

    return 'Connected successfully to server.'
}

main().then(console.log)



//* ENDPOINTS
// GET Home Page
app.get('/', async function (req, res) {
    let activeStudents = await collection.find({isActive: true}).toArray()
    let inActiveStudents = await collection.find({isActive: false}).toArray()

    res.render('index.html', { activeStudents: activeStudents, inActiveStudents: inActiveStudents });
})

// GET List all Units
app.get('/jenul/units', async function (req, res) {
    let units = await collection.find({}).toArray()

    res.render('units.html', { units: units })
})

// GET List all Active Units
app.get('/jenul/units/active', async function (req, res) {
    let activeUnits = await collection.find({isActive: true}).toArray()

    res.render('units.html', { units: activeUnits })
})

// GET Add Unit Page
app.get('/jenul/units/add', async function (req, res) {
    let units = await collection.find({}).toArray()

    res.render('add-unit.html', {units: units})
})

// POST Add Unit
app.post('/jenul/units/add', async function (req, res) {
    let name = req.body.name
    let code = req.body.code
    let numStudents = req.body.numStudents
    let isActive = req.body.isActive
    let newUnit = new Unit(name, code, numStudents, isActive) 
    await collection.insertOne(newUnit)
    res.redirect('/jenul/units')
})

// GET Delete Unit
app.get('/jenul/units/remove/:mongoid', async function (req, res) {
    const id = new ObjectId(req.params.mongoid)
    await collection.deleteOne({_id: id})
    res.redirect('/jenul/units')
})


