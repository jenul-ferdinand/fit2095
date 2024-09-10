const express = require('express');
const Animal = require('../models/animal');
const router = express.Router();

// GET List All Animals
router.get('/', async function (req, res) {
    try {
        let animals = await Animal.find({});
        return res.status(200).json({ animals });
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

// POST Add Animal
router.post('/add', async function (req, res) {
    try {
        const animal = new Animal({
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight
        });
        await animal.save();
        res.redirect('/33119805/animals');
    } catch (error) {
        // Handle validation errors
        if (error.name == 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ error: 'Validation Error', messages: errors });
        }
        
        // Return 500 Internal Server Error for unknown errors
        res.status(500).send('Internal Server Error');
    }
});

// PUT Update Animal
router.put('/', async function (req, res) {
    try {
        const { animal_id, new_name, new_age, new_weight } = req.body;
        await Animal.findByIdAndUpdate(
            animal_id,
            { name: new_name, age: new_age, weight: new_weight },
            { new: true, runValidators: true }
        );
        res.redirect('/33119805/animals');
    } catch (error) {
        // Handle validation errors
        if (error.name == 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ error: 'Validation Error', messages: errors });
        }
        
        // Return 500 Internal Server Error for unknown errors
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
