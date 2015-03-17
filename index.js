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
  res.send(broken);
});

app.get('/page2', function (req, res) {
  setTimeout((res.send('this page is slow')), 300000);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
