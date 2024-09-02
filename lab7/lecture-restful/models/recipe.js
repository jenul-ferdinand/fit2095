const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    name: String,
    // Stores an array of objects
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }]
});

module.exports = mongoose.model('Recipe', recipeSchema)