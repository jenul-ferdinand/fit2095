const mongoose = require('mongoose');
const Actor = require('../models/actor');

module.exports = { 
    getAll: async function (req, res) {
        const actors = Actor.find({});
        res.json(actors);
    },
    createOne: async function (req, res) {
        let newActorDetails = req.body;
        let actor = new Actor(newActorDetails);
        await actor.save();
        res.json(actor);
    },
    getOne: async function (req, res) {
        let actor = await Actor.findOne({ _id: req.params.id })
            .populate('movies')
            .exec();
        
        res.json(actor);
    },
    deleteOne: async function (req, res) {
        let doc = await Actor.findOneAndRemove({ _id: req.params.id });
        res.json(doc);
    }
}