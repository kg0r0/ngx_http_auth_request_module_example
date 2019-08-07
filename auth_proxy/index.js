const express = require('express');
const Redis = require('ioredis');
const app = express();

app.get('/', async (req, res) => {
  const redis = new Redis({
    host: 'redis',
  });
  const pong = await redis.ping();
  console.log(pong);
  redis.disconnect();
  if (!req.headers['authorization']) {
    res.status(401).send("NG");
  } else {
    res.status(200).send("OK");
  }
});

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000')
})