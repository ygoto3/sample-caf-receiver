// @flow
import test from 'ava';
import loading from './loading.mjs';

test('loading', t => {
  const model/*: Model*/ = ({}/*: any*/);
  const actual = loading(model);
  t.is(actual, model);
});
