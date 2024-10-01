const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bYear: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Actor', actorSchema);