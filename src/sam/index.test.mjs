// @flow
import test from 'ava';
import { state } from './index.mjs';

test('state', t => {
  const representation = state((({
    page: 'loading',
  }/*: any*/)/*: Model*/));
  t.is(representation.trim(), '<main>loading...</main>');
});
