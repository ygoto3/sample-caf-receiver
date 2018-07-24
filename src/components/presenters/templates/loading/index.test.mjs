// @flow
import test from 'ava';
import loading from './index.mjs';

test('loading', t => {
  t.snapshot(loading().trim());
});
