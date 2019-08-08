const express = require('express');
const auth = require('basic-auth');
const Redis = require('ioredis');
const app = express();
const compare = require('tsscmp');

app.get('/', async (req, res) => {
  const redis = new Redis({
    host: 'redis',
  });
  const credentials = auth(req);
  let result = await redis.get('credentials');
  result = JSON.parse(result);
  if (!credentials || credentials.name !== result.name || credentials.pass !== result.pass) {
    res.status(401).send('Access denied');
  } else {
    res.status(200).send('Access granted');
  }
  redis.disconnect();
});

function check(name, expectedName, pass, expectedPass) {
  let valid = true;
  valid = compare(name, expectedName) && valid
  valid = compare(pass, expectedPass) && valid
  return valid
}

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000')
})