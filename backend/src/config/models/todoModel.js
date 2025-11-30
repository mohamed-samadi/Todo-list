const db = require('../db');

const tasks = await db.query("SELECT * FROM tasks");
