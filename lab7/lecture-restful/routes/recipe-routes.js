const express = require('express');
const recipeController = require('../controllers/recipe-controller');

const router = express.Router();

router.post('/add', recipeController.createRecipe);

router.get('/', recipeController.getAllRecipes);

router.put('/additem', recipeController.addToIngredients);

module.exports = router;