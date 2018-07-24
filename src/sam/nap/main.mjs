// @flow
import { actions } from '../index.mjs';

export default function (model/*: Model*/)/*: void*/ {
  if (model.initializingPage) {
    actions.initPage(model);
  }
}
