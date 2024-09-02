const mongoose = require('mongoose'); 

const foodSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },

    calories: {
        type: Number,
        validate: {
            // Boolean validator function
            validator: function(value) {
                return value >= 0 && value <= 9999;
            }, 

            // The message if the validator is false
            message: 'Calories must be between 0 and 9999'
        }
    }
});

// Export the `Food` as a schema
module.exports = mongoose.model('Food', foodSchema);