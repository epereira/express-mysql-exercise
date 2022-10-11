require('dotenv').config();
const mysql = require('mysql2/promise');

const database = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

database.getConnection()
    .then(connection => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.log('Error connecting to database');
        console.log(err);
    });

module.exports = database;
