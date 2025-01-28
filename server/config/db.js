const mysql = require('mysql2');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'task_manager',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10, // Allows multiple connections
    queueLimit: 0,
    ssl: isProduction ? { rejectUnauthorized: true } : false, // Required for Aiven MySQL
};

// Use createPool instead of createConnection
const db = mysql.createPool(dbConfig);

db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log(`Connected to ${isProduction ? 'Aiven MySQL' : 'local MySQL'} database`);
    connection.release(); // Release the connection back to the pool
});

module.exports = db;
