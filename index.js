var express = require('express');
var Spooky = require('spooky');
var app = express();
var spooky = new Spooky();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
