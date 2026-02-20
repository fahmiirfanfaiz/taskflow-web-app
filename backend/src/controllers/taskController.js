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

// GET all tasks
exports.getAllTasks = async(req, res) => {
    try{
        const tasks = await Task.find();
        if (tasks.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No tasks found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Tasks retrieved successfully',
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// GET a single task by ID
exports.getTaskById = async(req, res) => {
    const {id} = req.params;
    try {
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Task retrieved successfully',
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.updateTask = async(req, res) => {
    const {id} = req.params;
    const {title, description, status, priority, dueDate} = req.body;
    try{
        const updatedTask = await Task.findByIdAndUpdate(id, {
            title,
            description,
            status,
            priority,
            dueDate
        }, {new: true});
        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            data: updatedTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE a task by ID
exports.deleteTask = async(req, res) => {
    const {id} = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Task deleted successfully',
            data: deletedTask
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};