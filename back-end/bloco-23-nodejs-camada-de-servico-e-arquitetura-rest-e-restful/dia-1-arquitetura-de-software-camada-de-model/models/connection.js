const mysql = require('mysql2/promise')

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Hiziwa29',
  database: 'model_ex'
})

module.exports = connection
