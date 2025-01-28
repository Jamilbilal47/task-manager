const mysql = require('mysql2');
require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

const dbConfig = isProduction ? {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: true } // Required for Aiven MySQL
} : {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'task_manager',
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log(`Connected to ${isProduction ? 'Aiven MySQL' : 'local MySQL'} database`);
});

module.exports = db;

