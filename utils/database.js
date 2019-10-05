const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'todolist_database'
});

module.exports = pool.promise();