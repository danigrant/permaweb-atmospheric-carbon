const express = require('express')
const app = express()
const ArchivalScript = require('./index')

app.get('/', function(req, res) {
  res.send('hello earth 👋🌏')
});

app.get('/run', function(req, res) {
  ArchivalScript.run()
  res.send('200 OK')
});

app.listen(process.env.PORT || 3000)
