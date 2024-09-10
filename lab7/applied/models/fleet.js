// Module imports
const mongoose = require('mongoose');

// Fleet Schema
fleetSchema = mongoose.Schema ({
    // The name of the fleet
    name: String,

    // Array for storing a list of Car IDs
    cars: [{
        // The type of MongoDB ObjectID
        type: mongoose.Schema.Types.ObjectId,

        // Indicates that these ObjectIds reference documents in the "car" collection
        ref: 'Car' 
    }],
});

// Exporting the Schema
module.exports = mongoose.model('Fleet', fleetSchema);