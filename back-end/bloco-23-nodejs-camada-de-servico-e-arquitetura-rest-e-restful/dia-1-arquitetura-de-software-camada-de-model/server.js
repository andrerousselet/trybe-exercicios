const express = require('express')
const User = require('./models/User')
const user = require('./middlewares/validate.user')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get('/', (_req, res) => res.status(200).send('Funcionando perfeitamente!'))

app.get('/users', async (_req, res) => {
  const users = await User.getAll()
  if (!users.length) return res.status(200).json([])
  return res.status(200).json(users)
})

app.get('/users/:id', async (req, res) => {
  const { id } = req.params
  const user = await User.getById(id)
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado!' })
  return res.status(200).json(user)
})

app.post('/users', user.isValid, async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  await User.create(firstName, lastName, email, password)
  return res.status(201).json({ message: 'Usuário criado com sucesso!' })
})

app.put('/users/:id', user.isValidEdit, async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, email } = req.body
  const user = await User.getById(id)
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado!' })
  await User.edit(user)
  return res.status(200).json({ id, firstName, lastName, email })
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
