// Module Imports 
const mongoose = require('mongoose');

// Schema for the Car
const builderSchema = mongoose.Schema ({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (val) {
                return val >= 5
            },
            message: 'Minimum letters is 5'
        }
    },

    location: {
        type: String,
        required: true,
        validate: {
            validator: function (val) {
                return val >= 7
            },
            message: 'Minimum letters is 7'
        }
    },

    houses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'House'
    }]
});

// Export the Schema
module.exports = mongoose.model('Builder', builderSchema);