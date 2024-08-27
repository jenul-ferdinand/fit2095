const mongoose = require("mongoose");

let fleetSchema = mongoose.Schema({
	name: String,
	cars: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Car",
		},
	],
});

module.exports = mongoose.model("Fleet", fleetSchema);
