// Import the `Car` Model
const Car = require('../models/car');

// Controllers
module.exports = {
    getAll: async function (req, res) {
        // Fetch all the 'Car' documents from the collection
        let car = await Car.find({});

        // Send the list of cars in JSON
        res.status(200).json(car);
    },

    createOne: async function (req, res) {
        try {
            let newCar = new Car({name: req.body.name, year: req.body.year});
            // Save the new Car to the DB
            await newCar.save();

            res.status(200).json(newCar)
        } catch (err) {
            // Check if the error is a ValidationError
            if (err.name === 'ValidationError') { 
                return res.status(400).json({err: err.message});
            } 

            // Other types of error
            res.status(500).json({err: 'An error occurred'});
        }
    }
};