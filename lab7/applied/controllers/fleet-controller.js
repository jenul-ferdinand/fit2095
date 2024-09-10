const Fleet = require('../models/fleet');

module.exports = {
    // Create a fleet with an empty array
    createFleet: async function (req, res) { 
        let fleet = new Fleet({ name: req.body.name });
        await fleet.save();
        res.json(fleet);
    },

    // Get all the fleet
    getAll: async function (req, res) { 
        let fleets = await Fleet.find({}).populate('cars');
        res.json(fleets)
    },

    // Add cars ID in the array
    addCar: async function (req, res) { 
        let carId = req.body.carId;     // MongoDB's ID
        let fleetId = req.body.fleetId; // MongoDB's ID
        let fleet = await Fleet.findById({_id: fleetId}); // Find the Fleet by its ID

        // Append the CarID to the cars array
        fleet.cars.push(carId); 
        
        // Savethe Fleeti
        await fleet.save(); 

        // Respond with JSON
        res.json({message: 'Successfully added a Car to the Fleet'})
    }
};