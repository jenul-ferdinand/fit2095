// Module imports
const express = require('express');
const carController = require('../controllers/car-controller');

// Create instance of router
router = express.Router();

// GET List All Cars
router.get('/', carController.getAll);

// POST Create a Car
router.post('/create', carController.createOne);

// Export the router
module.exports = router;
