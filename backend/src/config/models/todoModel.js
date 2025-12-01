const pool = require('../db');

module.exports = {
    getAllTasks: async () => {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query("SELECT * FROM tasks");
            return rows;
        } finally {
            connection.release();
        }
    },

    deleteTask: async (id) => {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.query("DELETE FROM tasks WHERE id = ?", [id]);
            return result;
        } finally {
            connection.release();
        }
    },
    // getTaskById: async (id) => {
    //     const connection = await pool.getConnection();
    //     try {
    //         const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [id]);
    //         return rows;
    //     } finally {
    //         connection.release();
    //     }
    // },

    createTask: async (title, description) =>{
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.query(
                "INSERT INTO tasks (title, description) VALUES (?, ?)",
                [title, description]
            );
            return result;
        } finally {
            connection.release();
        }
    },
    updateTask: async (id, title, description, is_completed) => {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.query(
                "UPDATE tasks SET title = ?, description = ?, is_completed = ? WHERE id = ?",
                [title, description, is_completed, id]
            );
            return result;
        } finally {
            connection.release();
        }
    }


};