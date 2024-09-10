// Module imports
const express = require('express');
const Builder = require('../models/builder'); // Import the Builder model

// Create instance of router
const router = express.Router();

// GET List All Builders
router.get('/', async function (req, res) {
    try {
        let builders = await Builder.find({}).populate('houses'); // Populate the houses field
        // Send the list of builders in HTML
        res.render('builders.html', { builders: builders });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// GET Add Builder Page
router.get('/add', async function (req, res) {
    try {
        const buildersCount = await Builder.countDocuments();
        res.render('add_builder.html', { buildersCount: buildersCount });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// POST Add a New Builder
router.post('/add', async function (req, res) {
    try {
        const newBuilder = new Builder({
            name: req.body.name,
            location: req.body.location,
            houses: []
        });
        await newBuilder.save();
        res.redirect('/33119805/builders'); // Redirect to the builders list after adding
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Export the router
module.exports = router;
