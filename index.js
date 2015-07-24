'use strict';

var express = require('express');
var app = express();

// app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// app.set('views', __dirname + '/views');

// app.get('/', function(request, response) {
  // response.render('pages/index');
// });

app.get('/secret', function(request, response) {
  response.status(200).send("<h1>This page is secret. Go away.</h1>");
});

app.get('/random', function(request, response) {
  response.status(200).send("<h1>WELCOME, Kitten Lover!</h1>");
});


app.get('/*', function(req, res) {
  res.status(404).sendFile("404.html", {root: __dirname + "/public/"});
});

app.listen(process.env.PORT || 5000, function() {
  console.log('The server is running on port 5000');
});
