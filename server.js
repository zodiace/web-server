var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = 3000;

// app.get('/', function (req, res) {
// 	res.send('Hello World!');
// })


app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server has started on port ' + PORT);
});