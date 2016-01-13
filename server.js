var express = require('express');
var serveStatic = require('serve-static')
var app = express();

app.set('view engine', 'ejs'); // set up ejs for templating

app.get('/', function (req, res) {
  var person = 'Raj';
  res.render('main.ejs', {
    name: person
  });
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
})
