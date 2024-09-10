// Module imports
const express = require('express');
const House = require('../models/house'); // Import the House model
const Builder = require('../models/builder'); // Import the Builder model

// Create instance of router
router = express.Router();

// GET Add House Page
router.get('/add', async function (req, res) {
    try {
        const builders = await Builder.find({}); 
        const housesCount = await House.countDocuments(); 
        res.render('add_house.html', { housesCount: housesCount, builders: builders });
    } catch (err) {
        console.error("Error in GET /houses/add:", err);
        res.status(500).send('Internal Server Error');
    }
});

// POST Add House
router.post('/add', async function (req, res) {
    try {
        const newHouse = new House({
            size: req.body.size,
            storey: req.body.storey,
            cost: req.body.cost,
        });

        const savedHouse = await newHouse.save();

        // Associate the house with a builder
        const builder = await Builder.findById(req.body.builder);
        builder.houses.push(savedHouse._id);
        await builder.save();

        res.redirect('/33119805/houses');
    } catch (err) {
        console.error("Error in POST /houses/add:", err);
        res.status(500).send('Internal Server Error');
    }
});

// GET List All Houses
router.get('/', async function (req, res) {
    try {
        let houses = await House.find({}).populate('builder').exec();

        res.render('houses.html', { houses: houses });
    } catch (err) {
        console.error("Error in GET /houses:", err);
        res.status(500).send('Internal Server Error');
    }
});

// Export the router
module.exports = router;
