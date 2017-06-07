"use strict";
const mysql = require('mysql');

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'qwerty',
    database : 'store'
});

connection.connect();
module.exports = connection;
