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

module.exports = isValid
