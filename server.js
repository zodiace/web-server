var express = require('express');
var app = express();
var PORT = 3000;

// app.get('/', function (req, res) {
// 	res.send('Hello World!');
// })

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('Private route hit!')
		next();
	},
	logger: function (req, res, next) {
		console.log('Request:' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
	}
}

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server has started on port ' + PORT);
});