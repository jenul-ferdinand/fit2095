const Recipe = require('../models/recipe');

module.exports = {
    createRecipe: async function (req, res) {
        let aRecipe = req.body;
        let recipeDoc = new Recipe({ name: aRecipe.name });
        await recipeDoc.save();
        res.status(200).json({ id: recipeDoc._id });
    },

    getAllRecipes: async function (req, res) {
        let recipes = await Recipe.find({}).populate('ingredients');
        res.status(200).json(recipes);
    },

    addToIngredients: async function (req, res) {
        let foodId = req.body.foodId;
        let recipeId = req.body.recipeId;
        let theRecipe = await Recipe.findById(recipeId);
        // let theFood = await food.findById(foodId);
        theRecipe.ingredients.push(foodId);

        // Save the recipe
        await theRecipe.save();

        // Redirec to get all recipes
        res.redirect('/recipe');
    }
}