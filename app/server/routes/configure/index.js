'use strict';

var app = require('express')();
var path = require('path');

app.use(require('./parsing.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./error.middleware'));

app.use(require('./statics.middleware'));

app.get('/', function (req, res) {
	var index = path.join(__dirname, '..', '..', '..', 'client', 'index.html');
	res.sendFile(index);
});

module.exports = app;