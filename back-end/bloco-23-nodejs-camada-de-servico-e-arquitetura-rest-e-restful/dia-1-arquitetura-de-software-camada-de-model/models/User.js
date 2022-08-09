const connection = require('./connection')

function serialize (user) {
  return {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    password: user.password
  }
}

async function getAll () {
  const [users] = await connection.execute(
    'SELECT id, first_name, last_name, email, password FROM model_ex.users;'
  )
  return users.map(serialize)
}

async function getById (id) {
  const [users] = await connection.execute(
    `SELECT id, first_name, last_name, email, password FROM model_ex.users
    WHERE id=?;`, [id]
  )
  return users.map(serialize)[0]
}

async function create (firstName, lastName, email, password) {
  await connection.execute(
    'INSERT INTO model_ex.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password]
  )
}

module.exports = { getAll, getById, create }
