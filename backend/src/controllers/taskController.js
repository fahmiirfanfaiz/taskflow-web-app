const Task = require('../models/taskModel');

// CREATE a new task
exports.createTask = async(req, res) => {
    try {
        const {title, description, status, priority, dueDate} = req.body;
        const newTask = new Task({
            title,
            description,
            status,
            priority,
            dueDate
        });
        const savedTask = await newTask.save();
        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: savedTask
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message});
    }
}