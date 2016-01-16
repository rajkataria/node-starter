var express = require('express');
var serveStatic = require('serve-static')
var app = express();

app.set('view engine', 'ejs'); // set up ejs for templating

app.use('/js3',serveStatic(__dirname + '/scripts/third_party'));
app.use('/resources',serveStatic(__dirname + '/scripts/third_party/potree/resources'));

app.get('/', function (req, res) {
	var person = 'Raj';
	res.render('main.ejs', {
		name: person
	});
});

app.get('/schedule', function (req, res) {
	res.render('schedule.ejs');
});

app.get('/viewer', function (req, res) {
	res.render('viewer.ejs');
});

app.listen(3000, function () {
	console.log('App listening on port 3000!');
})
