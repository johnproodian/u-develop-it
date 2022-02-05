const mysql = require('mysql2');

// Connect to database 
const db = mysql.createConnection({
    host: 'localhost',
    //Your mysql username,
    user: 'root',
    // Your mysql password
    password: 'myTantrum7!',
    database: 'election'
});


module.exports = db;