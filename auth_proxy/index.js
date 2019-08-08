const express = require('express');
const auth = require('basic-auth');
const Redis = require('ioredis');
const app = express();
const compare = require('tsscmp');

app.get('/', async (req, res) => {
  const redis = new Redis({
    host: 'redis',
  });
  const pong = await redis.ping();
  const credentials = auth(req);
  console.log(pong);
  redis.disconnect();
  if (!credentials || !check(credentials.name, credentials.pass)) {
    res.status(401).send('Access denied');
  } else {
    res.status(200).send('Access granted');
  }
});

function check(name, pass) {
  let valid = true;
  valid = compare(name, 'name') && valid
  valid = compare(pass, 'password') && valid
  return valid
}

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000')
})