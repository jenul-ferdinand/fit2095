const Food = require('../models/food');

module.exports = {
    getAllFood: async function (req, res) {
        let food = await Food.find({});
        res.status(200).json(food);
    },

    createFood: async function (req, res) {
        let aFood = req.body;
        let foodDoc = new Food({ name: aFood.name, calories: aFood.calories });
        await foodDoc.save();
        res.status(200).json({
            id: foodDoc._id,
        })
    },

    removeFoodById: async function (req, res) {
        let id = req.query.id;
        let result = await Food.deleteOne({_id: id})
        res.status(200).json(result)
    }
}