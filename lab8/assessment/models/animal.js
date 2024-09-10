const mongoose = require('mongoose');

// Schema for Animal
const AnimalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (val) {
                return val.length >= 5; 
            },
            message: 'Minimum letters is 5'
        }
    },
    age: {
        type: Number,
        required: true,
        validate: {
            validator: function (val) {
                return val >= 0 && val <= 100;
            },
            message: 'Must be between 0 and 100'
        }
    },
    weight: {
        type: Number,
        required: true,
        validate: {
            validator: function (val) {
                return val >= 1 && val <= 250; 
            },
            message: 'Must be between 1 and 250'
        }
    },
});

module.exports = mongoose.model('Animal', AnimalSchema);
