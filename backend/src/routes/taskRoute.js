const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// CREATE a new task
router.post('/api/tasks', taskController.createTask);

// GET all tasks
router.get('/api/tasks', taskController.getAllTasks);

// GET a single task by ID
router.get('/api/tasks/:id', taskController.getTaskById);

// UPDATE a task by ID
router.put('/api/tasks/:id', taskController.updateTask);

// DELETE a task by ID
router.delete('/api/tasks/:id', taskController.deleteTask);

module.exports = router;