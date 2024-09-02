const express = require('express');
const foodController = require('../controllers/food-controller');

// Create router instance
const router = express.Router();

// List food
// GET http://localhost:8080/food
router.get('/', foodController.getAllFood);

// Add new food item
// POST http://localhost:8080/food/add
router.post('/add', foodController.createFood);

// Remove a food item
// DELETE http://localhost:8080/food/remove
router.delete('/remove', foodController.removeFoodById);

module.exports = router;
