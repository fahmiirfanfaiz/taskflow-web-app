const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// CREATE a new task
router.post('/api/tasks', taskController.createTask);

module.exports = router;