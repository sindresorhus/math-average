'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.assert(fn(1, 3) === 2);
	t.assert(fn([1, 3]) === 2);
	t.end();
});
