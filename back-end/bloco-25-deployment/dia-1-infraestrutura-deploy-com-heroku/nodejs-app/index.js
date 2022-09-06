const express = require('express');
require('dotenv/config');

const app = express();

const PORT = process.env.PORT || 3000;
const ANY = process.env.ANY || 'QUALQUER COISA';

app.get('/', (_req, res) => res.status(200).send(ANY))

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`))
