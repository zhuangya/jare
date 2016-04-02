'use strict';

import test from 'ava';
import jare from '.';

test('it should add prefix for a url', t => {
  t.is(jare('http://google.com/logo.gif'), 'http://cf.jare.io/?u=http%3A%2F%2Fgoogle.com%2Flogo.gif');
});

test('it should be able to specific another prefix', t => {
  t.is(jare('http://google.com/logo.gif', 'http://xo.jare.io/?u='), 'http://xo.jare.io/?u=http%3A%2F%2Fgoogle.com%2Flogo.gif');
});

test('it should only process with valid url', t => {
  t.throws(_ => {
    jare('there is no spoon');
  }, /not a valid url/);
});

test('it should not valid url if option.check = false', t => {
  t.is(jare('there is no spoon', { check: false }), 'http://cf.jare.io/?u=there%20is%20no%20spoon');
});
