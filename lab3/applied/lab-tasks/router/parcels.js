let express = require('express');
let router = express.Router();

const print = console.log;

// Parcels database
var database = []

// ADD PARCEL
router.get('/addparcel/', function (req, res) {
    let max = 1000
    let min = 0
    let id = Math.floor(Math.random() * (max - min + 1)) + min;
    let sender = req.query.sender;
    let address = req.query.address;
    database.push({id, sender, address});
    res.send(`Added {${id}, ${sender}, ${address}} to database`)
});

// LIST PARCELS
router.get('/getparcels/', function (req, res) {
    res.send(database);
});

// DELETE PARCEL BY ID
router.get('/deleteid/:id', function (req, res) {
    print(database);
    let idToDelete = parseInt(req.params.id);
    newDatabase = database.filter(parcel => parcel.id !== idToDelete);
    database.length = 0;
    Array.prototype.push.apply(database, newDatabase);
    print(database);
    res.send(`Deleted ${idToDelete}`);
});

module.exports = router;