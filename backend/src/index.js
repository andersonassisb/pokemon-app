const express = require('express');
const cors = require('cors');
const app = express();
const port = 3030;

const pokemons = require('./pokemons.json');

app.use(cors());

app.get('/', (req, res) => res.json({ api_version: '1.0.0' }));

app.get('/pokemons', (req, res) => res.json(pokemons));

app.get('/pokemons/:number', (req, res) =>
  !pokemons[req.params.number - 1]
    ? res.json({ error: 'Pokemon not found' })
    : res.json(pokemons[req.params.number - 1])
);

app.listen(port, () => console.log('Rodando...'));
