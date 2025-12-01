const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const todoModel = require('./src/config/models/todoModel');

app.use(express.json());

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await todoModel.getAllTasks();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const id = req.params.id;      
    const result = await todoModel.deleteTask(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete task' });
  } 
});
// app.get('/api/tasks/:id', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const tasks = await todoModel.getTaskById(id);
//     const task = tasks[0] || null;
//     if (!task) return res.status(404).json({ error: 'Task not found' });
//     res.json(task);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to fetch task' });
//   }
// });

app.post('/api/tasks', async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log(title, description);
    const result = await todoModel.createTask(title, description);
    res.status(201).json({ message: 'Task created', insertId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create task' });
  }
});

app.put('/api/tasks/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, is_completed } = req.body;
    const result = await todoModel.updateTask(id, title, description, is_completed);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update task' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});