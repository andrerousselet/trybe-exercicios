const express = require('express')
const User = require('./models/User')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get('/', (_req, res) => res.status(200).send('Funcionando perfeitamente!'))
app.get('/users', async (_req, res) => {
  const users = await User.getAll()
  res.status(200).json(users)
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
