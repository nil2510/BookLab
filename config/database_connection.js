const mysql = require('mysql');

var connection = mysql.createConnection({
    port : process.env.DB_PORT,
    host : process.env.DB_HOST,
    database : process.env.MYSQL_DB,
    user : process.env.DB_USER
});

module.exports = connection;