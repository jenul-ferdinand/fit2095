// Module Imports 
const mongoose = require('mongoose');

// Schema for the Car
const carSchema = mongoose.Schema ({
    name: { 
        type: String,
        requred : true
    },

    year: {
        type: Number,
        required: true,
        validate: {
            validator: function (year) {
                // Check if the year is between 1950 and 2025.
                return year >= 1950 && year <= 2025
            },
            message: 'The year must be between 1950 and 2025'
        }
    }
});

// Export the Schema
module.exports = mongoose.model('Car', carSchema);