const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const cors = require('cors');
const app = express();

const url =
  process.env.MONGO_URL ||
  'mongodb+srv://read:read@pokelab-jinhn.mongodb.net/pokelab';
//const pokemons = require('./pokemons.json');

app.use(cors());

app.get('/', (req, res) => res.json({ api_version: '1.0.0' }));

app.get('/pokemons', async (req, res) => {
  const pokemons = await db
    .collection('pokemon')
    .find()
    .toArray();

  res.json(pokemons);
});

app.get('/pokemons/:number', (req, res) =>
  !pokemons[req.params.number - 1]
    ? res.json({ error: 'Pokemon not found' })
    : res.json(pokemons[req.params.number - 1])
);

(async () => {
  try {
    const client = await MongoClient.connect(url, {
      poolSize: 20,
      useNewUrlParser: true
    });

    global.db = client.db('pokelab');

    const port = process.env.PORT || 3030;
    app.listen(port, () => {
      app.emit('ready');
      console.log(`API is Running on Port ${port}`);
    });
  } catch (err) {
    console.log(err.stack);
  }
})();
