// Module imports
const express = require('express');
const House = require('../models/house');
const Builder = require('../models/builder');

// Create an instance of the router
const router = express.Router();

// GET Add House Page
router.get('/add', async function (req, res) {
    try {
        let builders = await Builder.find({});

        res.render('add_house.html', { builders: builders });
    } catch (err) {
        console.error("Error in GET /houses/add:", err);
        res.status(500).send('Internal Server Error');
    }
});

// POST Add a House
router.post('/add', async function (req, res) {
    try {
        let newHouse = new House({
            size: req.body.size,
            storey: req.body.storey,
            cost: req.body.cost,
            builder: req.body.builderId
        });

        await newHouse.save();

        let builder = await Builder.findById(req.body.builderId);
        builder.houses.push(newHouse._id);
        await builder.save();

        res.redirect('/33119805/houses');
    } catch (err) {
        console.error("Error in POST /houses/add:", err);
        res.status(500).send('Internal Server Error');
    }
});

// Export the router
module.exports = router;
