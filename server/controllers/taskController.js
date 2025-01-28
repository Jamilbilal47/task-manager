const db = require('../config/db');

// Get all tasks
exports.getTasks = (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json(results);
    });
};

// Add a new task
exports.addTask = (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    db.query('INSERT INTO tasks (title) VALUES (?)', [title], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: results.insertId, title });
    });
};

// Update a task
exports.updateTask = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    db.query('UPDATE tasks SET title = ? WHERE id = ?', [title, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Task updated successfully' });
    });
};

// Delete a task
exports.deleteTask = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM tasks WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).json({ message: 'Task deleted successfully' });
    });
};
