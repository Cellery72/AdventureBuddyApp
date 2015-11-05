/* global process */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
	mongoose = require('./config/mongoose'),
	express = require('./config/express'),
	passport = require('./config/passport');

var db = mongoose(),
	app = express(),
	passport = passport();

var userController = require('./app/controllers/users.server.controller.js');

app.listen(process.env.NODE_ENV);

module.exports = app;
console.log(process.env.NODE_ENV + ' server running at http://localhost:' + config.port);