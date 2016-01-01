var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = process.evn.PORT || 3000;

// app.get('/', function (req, res) {
// 	res.send('Hello World!');
// })

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server has started on port ' + PORT);
});