// models/taskModel.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre de la tarea es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripción de la tarea es obligatoria']
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;