const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    maker: {
        type: String,  // The data type of this attribute
        default: 'BMW' // Specifies the default value if no value is given
    },

    model: String,

    year: {
        type: Number, // The data type of this attribute
        // This allows us to validate a value given to this attribute
        validate: {

            // Given a boolean functon...
            validator: function (val) {
                return val >= 1990
            },

            // The message will be given if the validator returned false
            message: 'Year should be greater than 1990'
        }
    }
})

// mongoose.model('name of the collection in the database', some mongoose.Scheme())
module.exports = mongoose.model('Car', carSchema)

