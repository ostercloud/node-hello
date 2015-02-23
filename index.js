require('newrelic');
var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.get('/page1', function (req, res) {
  res.send('this is page 1');
});

app.get('/page2', function (req, res) {
  res.send('this is page 2');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
