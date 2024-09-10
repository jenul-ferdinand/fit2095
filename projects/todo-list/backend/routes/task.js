const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.status(200).json(tasks);
});

// Create a new task
router.post('/', async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(200).json(newTask);
});

// Update a task
router.put('/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTask);
});

// Delete a task
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted" });
});

module.exports = router;
