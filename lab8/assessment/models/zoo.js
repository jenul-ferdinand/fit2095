const mongoose = require('mongoose');

// Schema for Zoo
const ZooSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: function (val) {
                return val.length >= 3; 
            },
            message: 'Minimum letters is 3'
        }
    },
    location: {
        type: String,
        required: true,
        validate: {
            validator: function (val) {
                return val.length >= 10;
            },
            message: 'Minimum letters is 10'
        }
    },
    animals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal'
    }]
});

module.exports = mongoose.model('Zoo', ZooSchema);
