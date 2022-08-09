const express = require('express')
const User = require('./models/User')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get('/', (_req, res) => res.status(200).send('Funcionando perfeitamente!'))

app.get('/users', async (_req, res) => {
  const users = await User.getAll()
  return res.status(200).json(users)
})

app.post('/users', async (req, res) => {
  const { firstName, lastName, email, password } = req.body
  await User.create(firstName, lastName, email, password)
  return res.status(201).json({ message: 'Usuário criado com sucesso!' })
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
