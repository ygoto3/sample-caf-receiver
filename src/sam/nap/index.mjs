// @flow
import main from './main.mjs';

export default function(model/*: Model*/)/*: void*/ {
  switch (model.page) {
    case 'main':
      main(model);
      break;
  }
}
