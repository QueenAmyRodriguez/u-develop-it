// Connect to database
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Bootcamp25!',
      database: 'election'
    },
    console.log('Connected to the election database.')
  );

  module.exports = db;