const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Routes
const taskRoutes = require('./routes/task');

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mean-todo-app')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Routes
app.use('/api/tasks', taskRoutes);

// Homepage
app.get('/', (req, res) => {
    return res.status(200).json({ msg : "Hello frontend... From backend."});
});

// Listen
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${8080}`);
});
