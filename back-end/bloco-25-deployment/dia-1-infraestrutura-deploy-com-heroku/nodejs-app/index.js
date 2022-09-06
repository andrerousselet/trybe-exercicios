const express = require('express');
require('dotenv/config');

const app = express();

app.get('/', (_req, res) => res.status(200).send('Está vivo!!!'))

app.listen(3000, () => console.log(`App rodando na porta 3000`))
