'use strict';

module.exports = function jare (url, prefix) {
  prefix = prefix || 'http://cf.jare.io/?u=';
  return prefix + encodeURIComponent(url);
};
