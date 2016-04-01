'use strict';

const jare = require('./');
const assert = require('assert');

console.log('it should add prefix for a url');
assert.equal(jare('http://google.com/logo.gif'), 'http://cf.jare.io/?u=http%3A%2F%2Fgoogle.com%2Flogo.gif');

console.log('it should be able to specific another prefix');
assert.equal(jare('http://google.com/logo.gif', 'http://xo.jare.io/?u='), 'http://xo.jare.io/?u=http%3A%2F%2Fgoogle.com%2Flogo.gif');
