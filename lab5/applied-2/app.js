//? Module Imports
express = require('express')
ejs = require('ejs')
path = require('path')
mongodb = require('mongodb')

//* Setup Express Server
let app = express()
const PORT = 8080

app.listen(PORT, function () {
    console.log(`Listening on port: ${PORT}`)
})

app.use(express.urlencoded({ extended : true }))

// Configure Express for EJS
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

// Bootstrap
app.use(express.static('node_modules/bootstrap/dist/css'));


//* Configure MongoDB
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url)
let db;
let collection;

async function databaseConnect() {
    await client.connect()
    db = client.db('post-office')
    collection = db.collection('parcels')

    return `Connected successfully to the database server...`
}

databaseConnect().then(console.log)

app.get('/', function (req, res) {
    res.render('index.html')
})

app.get('/parcels', async function (req, res) {
    res.render('parcels.html', { parcels: await collection.find({}).toArray()})
})

app.get('/parcels/add', function (req, res) {
    res.render('add-parcel.html')
})

app.post('/parcels/add', async function (req, res) {
    let sender = req.body.sender
    let address = req.body.address
    let weight = req.body.weight
    let fragile = req.body.checkFragile ? true : false

    await collection.insertOne({ sender, address, weight, fragile })

    res.redirect('/parcels')
})

app.get('/parcels/delete', function (req, res) {
    res.render('delete-parcel.html')
})

app.post('/parcels/delete', async function (req, res) {
    let sender = toString(req.body.sender)
    let id = toString(req.body.id)

    await collection.deleteOne(sender)
    await collection.deleteOne(id)

    res.redirect('/parcels')
})