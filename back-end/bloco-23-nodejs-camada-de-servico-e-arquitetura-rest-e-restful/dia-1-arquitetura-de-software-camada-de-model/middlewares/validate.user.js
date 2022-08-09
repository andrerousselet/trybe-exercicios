function isValid (req, res, next) {
  const { firstName, lastName, email, password } = req.body
  switch (true) {
    case !firstName || !lastName || !email || !password:
      return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    case password.length < 6:
      return res.status(400).json({ message: 'O campo "password" deve ter pelo menos 6 caracteres.' })
    default: next()
  }
}

function isValidEdit (req, res, next) {
  const regexpEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  const { firstName, lastName, email, password } = req.body
  switch (true) {
    case !firstName:
      return res.status(400).json({ message: 'O campo "firstName" é obrigatório' })
    case !lastName:
      return res.status(400).json({ message: 'O campo "lastName" é obrigatório' })
    case !email:
      return res.status(400).json({ message: 'O campo "email" é obrigatório' })
    case !password:
      return res.status(400).json({ message: 'O campo "password" é obrigatório' })
    case !firstName.length:
      return res.status(400).json({ message: 'O campo "firstName" não pode ser vazio' })
    case !lastName.length:
      return res.status(400).json({ message: 'O campo "lastName" não pode ser vazio' })
    case !email.length:
      return res.status(400).json({ message: 'O campo "email" não pode ser vazio' })
    case !regexpEmail.test(email):
      return res.status(400).json({ message: 'O campo "email" deve ter um formato válido' })
    case !password.length:
      return res.status(400).json({ message: 'O campo "password" não pode ser vazio' })
    case password.length < 6:
      return res.status(400).json({ message: 'O campo "password" deve ter pelo menos 6 caracteres.' })
    default: next()
  }
}

module.exports = { isValid, isValidEdit }
