const mongodb = require('mongodb');
const express = require('express');
const path = require('path');

const MongoClient = mongodb.MongoClient;
const URL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(URL);

const app = express();
app.listen(8080);
app.use(express.urlencoded({ extended:false }));

let db;
let collection;

async function connectDB() {
    await client.connect()

    db = client.db('fit2095')
    collection = db.collection('week5')

    console.log('Connected to MongoDB successfully')
}

// GET Home page with the form to add a student 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// POST The new student values
app.post('/students/new', async function (req, res) {
    // DEBUG
    console.log(req.body)   

    // Define the student
    let aStudent = {
        name: req.body.studentName,
        age: req.body.studentAge,
    }

    // Insert the student into the collection
    await collection.insertOne(aStudent)

    // Redirect to the students page
    res.redirect('/students')
})

// GET List of Students from MongoDB Database
app.get('/students', async function (req, res) {
    // No filter because we want to see everything
    let filter = {}

    // Getting all the stuff in the collection
    let result = await collection.find(filter).toArray()

    // Send the result as json
    res.send(result)
})

// GET Deleting the student by their name
app.get('/students/remove/:name', async function (req, res) {
    // Filter to delete by name
    let filter = {
        name: req.params.name,
    }

    // Delete all occurences of the filter
    await collection.deleteMany(filter)
    
    // Redirect to the students page
    res.redirect('/students')
});

connectDB()