'use strict';
var Promise = require('bluebird'),
	path = require('path'),
	chalk = require('chalk'),
	mongoose = require('mongoose');
	require('./message');

var DATABASE_URI = require(path.join(__dirname, '../env')).DATABASE_URI;
var db = mongoose.connect(DATABASE_URI).connection;

// Require our models -- these should register the model into mongoose
// so the rest of the application can simply call mongoose.model('User')
// anywhere the User model needs to be used.

var startDbPromise = new Promise(function (resolve, reject) {
    db.on('open', resolve);
    db.on('error', reject);
});

console.log(chalk.yellow('Opening connection to MongoDB . . .'));
startDbPromise.then(function () {
    console.log(chalk.green('MongoDB connection opened!'));
});
console.log(startDbPromise, "startDB");
module.exports = startDbPromise; 