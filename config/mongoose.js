var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);

	require('/client/user/user.server.model');

	return db;
};