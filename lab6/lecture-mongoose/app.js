// Package Imports
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const { ObjectId } = require('mongodb')

// Class Imports
const Fleet = require('./models/fleet')
const Car = require('./models/car')



// Express Setup
const app = express()
app.listen(8080)
app.use(express.json())
app.use(express.urlencoded())



// Mongoose/MongoDB Setup
const url = 'mongodb://localhost:27017/week6db'

async function connect() {
    await mongoose.connect(url);
}

connect().catch((error) => console.log(error)).then(processData)

let fleet;
async function processData() {
    console.log('Start processing data')
    fleet = new Fleet({ name : 'fleet3'})
    let obj = await fleet.save()
    console.log(fleet)
}


// End Points
app.get('/add-car', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', 'add-car.html'))
})

app.post('/add-car', async function (req, res) {
    let obj = req.body
    console.log(req.body)
    try {
        let aCar = new Car({ maker: obj.maker, model: obj.model, year: parseInt(obj.year)})
        await aCar.save()
        let fleet = await Fleet.findOne({ _id: new ObjectId(req.body.fleetID + "") })

        // Add the new car's _id to the fleet's cars array
        fleet.cars.push(aCar._id)

        // Save fleet 
        await fleet.save()
    }
    catch (error) {
        console.log(error)
    }

    res.redirect('fleet')
})

app.get('/cars', async function (req, res) {
    let cars = await Car.find({})
    res.json(cars)
})

app.get('/fleet', async function (req, res) {
    let fleet = await Fleet.find({}).populate('cars')
    res.json(fleet)
})

app.delete('/cars', async function (req, res) {
    let id = req.body.model;
    let aCar = await Car.findOne({ model: id })
    console.log(aCar.id)
    let index = fleet.cars.indexOf(aCar.id)
    console.log('index= ' + index)
    fleet.cars.splice(index, 1)
    await Car.findOneAndDelete({ model: id })
    await fleet.save()
    res.redirect('/fleet')
})

