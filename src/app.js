// @flow
import { config, actions } from './sam/index.mjs';
import renderer from './components/renderer/index.mjs';

const root = ((document.getElementById('root')/*: any*/)/*: HTMLDivElement*/);
const render = renderer(root);

config.display = representation => render(representation);

actions.goTo('main');
