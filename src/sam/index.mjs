// @flow
import model from './model/index.mjs';
import views from './views.mjs';
import viewModels from './viewModels/index.mjs';
import nap from './nap/index.mjs';
import pageActions from './actions/index.mjs';

export function state(model/*: Model*/)/*: string*/ {
  const { page } = model;
  const representation = views[page](viewModels[page](model));
  return representation;
}

export const actions = {
  goTo(page/*: string*/)/*: void*/ {
    accept({ page, initializingPage: true });
  },
  initPage(model/*: Model*/)/*: void*/ {
    const data = pageActions[model.page].initPage(model);
    accept({ ...data, initializingPage: false });
  }
};

export function display(view/*: string*/)/*: void*/ {
  console.log(view);
}

// Wire everything
export function accept(data/*: Object*/) {
  const { model, display } = config;
  Object.assign(model, data);
  const representation = state(model);
  display(representation);
  nap(model);
}

export const config = { model, display };
