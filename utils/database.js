const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    port: '8889',
    user: 'root',
    password: 'root',
    database: 'todolist_database'
});

module.exports = pool.promise();