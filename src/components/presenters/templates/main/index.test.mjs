// @flow
import test from 'ava';
import main from './index.mjs';

test('main', t => {
  t.snapshot(main({ castMediaPlayerId: 'player' }).trim());
});

