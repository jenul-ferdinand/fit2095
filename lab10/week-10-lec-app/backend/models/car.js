//develop a mongoose schema for a car with the following fields: make, model, year, and color
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let carSchema = new Schema({
    maker: String,
    model: String,
    year: String,
});
module.exports = mongoose.model('Car', carSchema);