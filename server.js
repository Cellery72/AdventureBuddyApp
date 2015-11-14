/* global process */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var mongoStore = require('connect-mongo')({session: expressSession});
var mongoose = require('mongoose');
require('./app/models/user.server.model.js');
var conn = mongoose.connect('mongodb://localhost/myapp');
var app = express();


app.set('views', __dirname + '/app/views');
app.set('view engine', 'html');
app.use(expressSession({
  secret: 'SECRET',
  cookie: {maxAge: 60*60*1000},
  store: new mongoStore({
      db: mongoose.connection.db,
      collection: 'sessions'
    })
  }));
require('./app/routes')(app);



var userController = require('./app/controllers/user.server.controller.js');

var port = 1337;
app.listen(port);

module.exports = app;
console.log(process.env.NODE_ENV + ' server running at http://localhost:' + port);
