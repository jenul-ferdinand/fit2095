const mongoose = require("mongoose");
const Car = require("./models/car");
const Fleet = require("./models/fleet");
const express = require("express");
const path = require("path");
const app = express();
const { ObjectId } = require('mongodb')
app.listen(8080);

const url = "mongodb://localhost:27017/week6db";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function connect() {
	await mongoose.connect(url);
}
connect()
	.catch((err) => console.log(err))
// .then(processData);

let fleet;
async function processData() {
	console.log("Start processing data");
	// fleet = await Fleet.findOne({ name: "fleet3" });
	fleet = new Fleet({ name: "fleet3" });
	let obj = await fleet.save();
	console.log(fleet);
}
app.get('/add-car', function (req, res) {
	res.sendFile(path.join(__dirname, "views", "add-car.html"));
})

app.post("/add-car", async (req, res) => {
	let obj = req.body;
	console.log(req.body)
	try {
		let aCar = new Car({ maker: obj.maker, model: obj.model, year: parseInt(obj.year) });
		await aCar.save();
		let fleet = await Fleet.findOne({ _id: new ObjectId(req.body.fleetID) });
		fleet.cars.push(aCar._id);
		await fleet.save();
	} catch (err) {
		console.log(err);
	}
	res.redirect("fleet");
});

app.get("/cars", async (req, res) => {
	let cars = await Car.find({});
	res.json(cars);
});

app.get("/fleet", async (req, res) => {
	// let fleet = await Fleet.find({});
	let fleet = await Fleet.find({}).populate("cars");
	res.json(fleet);
});

app.delete("/cars", async (req, res) => {
	let id = req.body.model;
	let aCar = await Car.findOne({ model: id });
	console.log(aCar._id);
	let index = fleet.cars.indexOf(aCar._id);
	console.log("index=" + index);
	fleet.cars.splice(index, 1);
	await Car.findOneAndDelete({ model: id });
	await fleet.save();
	res.redirect("/fleet");
});
