// Module Imports 
const mongoose = require('mongoose');

// Schema for the Car
const houseSchema = mongoose.Schema ({
    size: { 
        type: Number,
        required : true,
        validate: {
            validator: function (size) {
                return size >= 50 && size <= 1500;
            },
            message: 'The house size must be between 50 and 1500'
        }
    },

    storey: {
        type: Number,
        required: true,
        validate: {
            validator: function (storey) {
                return storey >= 1 && storey <= 3;
            },
            message: 'The house must be between 1 and 3 storeys, inclusive.'
        }
    },

    cost: {
        type: Number,
        required: true,
    }
});

// Export the Schema
module.exports = mongoose.model('House', houseSchema);