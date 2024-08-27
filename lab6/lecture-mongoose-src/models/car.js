const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
	maker: {
		type: String,
		default: "BMW",
	},
	model: String,
	year: {
		type: Number,
		validate: {
			validator: function (newVal) {
				return newVal >= 1990;
			},
			message: "Year should be greater than 1990",
		},
	},
});

module.exports = mongoose.model("Car", carSchema);
