// @flow
import test from 'ava';
import main from './main.mjs';

test('main', t => {
  const model/*: Model*/ = ({
    hoge: 'hoge',
    castMediaPlayerId: 'castMediaPlayerId',
  }/*: any*/);
  const actual = main(model);
  t.deepEqual(actual, {
    castMediaPlayerId: 'castMediaPlayerId',
  });
});
