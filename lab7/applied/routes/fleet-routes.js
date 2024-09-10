// Module imports 
const express = require('express');
const fleetController = require('../controllers/fleet-controller');

// Create instance of router
router = express.Router();

// GET List all fleets
router.get('/', fleetController.getAll);

// POST Create a fleet
router.post('/create', fleetController.createFleet);

// PUT Add a car
router.put('/create/car', fleetController.addCar);

// Export the router
module.exports = router;