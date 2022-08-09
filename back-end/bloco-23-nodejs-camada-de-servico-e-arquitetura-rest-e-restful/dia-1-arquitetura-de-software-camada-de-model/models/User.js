const connection = require('./connection')

async function getAll () {
  const [users] = await connection.execute(
    'SELECT id, first_name, last_name, email, password FROM model_ex.users;'
  )
  return users
}

module.exports = { getAll }
