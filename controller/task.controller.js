const TaskService = require("../services/task.services");

class TaskController {
    async createTask(req, res) {
        const { name, description } = req.body;

        // Verificar si los campos 'name' y 'description' están presentes
        if (!name || !description) {
            return res.status(400).json({ error: "Todos los campos son requeridos" });
        }

        try {
            const task = await TaskService.createTask({ name, description }); // Pasa solo name y description
            res.status(201).json(task); 
        } catch (error) {
            res.status(500).json({ 
                error: "Error al crear la tarea", 
                message: error.message 
            });
        }
    }

    async getAllTasks(req, res) {
        try {
            const tasks = await TaskService.getAllTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener las tareas" });
        }
    }

    async getTaskById(req, res) {
        try {
            const task = await TaskService.getTaskById(req.params.id);
            if (!task) {
                return res.status(404).json({ error: "Tarea no encontrada" });
            }
            res.json(task);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener la tarea" });
        }
    }

    async updateTask(req, res) {
        const { name, description } = req.body;

        // Verificar si los campos 'name' y 'description' están presentes
        if (!name || !description) {
            return res.status(400).json({ error: "Todos los campos son requeridos" });
        }

        try {
            const updatedTask = await TaskService.updateTask(req.params.id, { name, description }); // Solo pasa name y description
            if (!updatedTask) {
                return res.status(404).json({ error: "Tarea no encontrada" });
            }
            res.json(updatedTask);
        } catch (error) {
            res.status(500).json({ error: "Error al actualizar la tarea" });
        }
    }

    async deleteTask(req, res) {
        try {
            const deletedTask = await TaskService.deleteTask(req.params.id);
            if (!deletedTask) {
                return res.status(404).json({ error: "Tarea no encontrada" });
            }
            res.json({ message: 'Tarea eliminada' });
        } catch (error) {
            res.status(500).json({ error: "Error al eliminar la tarea" });
        }
    }
}

module.exports = new TaskController();