const express = require('express');
const Zoo = require('../models/zoo');
const Animal = require('../models/animal');
const router = express.Router();

// GET List All Zoos
router.get('/', async function (req, res) {
    try {
        let zoos = await Zoo.find({}).populate('animals');
        return res.status(200).json({ zoos });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

// POST Add Zoo
router.post('/add', async function (req, res) {
    try {
        const zoo = new Zoo({
            name: req.body.name,
            location: req.body.location,
            animals: []
        });
        await zoo.save();
        res.redirect('/33119805/zoos');
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

// PUT Add Animal to Zoo
router.put('/add-animal', async function (req, res) {
    try {
        const { zoo_id, animal_id } = req.body;

        // Find the zoo and add the animal to its array
        const zoo = await Zoo.findByIdAndUpdate(
            zoo_id, 
            { $push: { animals: animal_id } }, 
            { new: true, runValidators: true }
        );

        // Redirect to zoos
        res.redirect('/33119805/zoos');
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

// DELETE Delete Zoo
router.delete('/', async function (req, res) {
    try {
        const zoo_id = req.query.zoo_id;
        const zoo = Zoo.findById(zoo_id);
        await Animal.deleteMany({ _id: { $in : zoo.animals } });
        await Zoo.deleteOne({ _id: zoo_id })
        res.redirect('/33119805/zoos');
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
