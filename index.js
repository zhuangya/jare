'use strict';

const validUrl = require('valid-url');
const assert = require('assert');

module.exports = function jare (url, prefix) {
  var check = true;

  if (typeof prefix === 'object') {
    let option = prefix;
    prefix = option.prefix;
    check = option.check;
  }

  if (check) {
    assert.equal(validUrl.isUri(url), url, 'not a valid url');
  }

  prefix = prefix || 'http://cf.jare.io/?u=';
  return prefix + encodeURIComponent(url);

};
