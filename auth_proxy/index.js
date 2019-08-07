const express = require('express');
const app = express();

app.get('/', (req, res) => {
  if (!req.headers['authorization']) {
    res.status(401).send("NG");
  } else {
    res.status(200).send("OK");
  }
});

app.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000')
})