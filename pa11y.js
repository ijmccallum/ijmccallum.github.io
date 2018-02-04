'use strict';
var pa11y = require('pa11y');
var async = require('async');

var cliReporter = require('pa11y/reporter/cli');
var fs = require('fs');

var test = pa11y({
	log: {
		debug: console.log.bind(console),
		error: console.error.bind(console),
		info: console.log.bind(console)
	},
	ignore: []
});

test.run('./index.html', function(error, results) {
	if (error) {
		return console.error(error.message);
	}

	console.log(cliReporter.results(results, 'index.html'));
});