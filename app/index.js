const express = require('express');
const Redis = require('ioredis');
const redis = new Redis({
  host: 'redis',
});
const app = express();

app.get('/', (req, res) => {
  res.status(200).send("welcome!");
});

app.listen(3000, () => {
  redis.set('credentials', JSON.stringify({
    name: 'john',
    pass: 'secret'
  }));
  console.log('Server running at http://127.0.0.1:3000')
})