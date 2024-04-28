import CreateElement from './modules/createElement.js';
import { CEButton, CEHeading, CEIcon, CELink } from './modules/custom-elements/init.js';

class Wrapper extends CreateElement {
  constructor(children, attributes, events) {
    super('div', [], attributes, events);

    this.#createWrapper(children);
  }

  #createWrapper(children) {
    console.log(children);
  }
}

const app = new CreateElement('div', [
  new CEIcon('dashboard', { size: 'xs' }),
  new CEIcon('dashboard', { size: 'sm', variant: 'secondary' }),
  new CEIcon('dashboard', { variant: 'submit' }),
  new CEIcon('dashboard', { size: 'lg', variant: 'warning' }),
  new CEIcon('dashboard', { size: 'xl', variant: 'error' }),

  new CEIcon('dashboard', { size: '2xl' }),
  new CEIcon('dashboard', { size: '3xl', variant: 'secondary' }),
  new CEIcon('dashboard', { size: '4xl', variant: 'submit' }),
  new CEIcon('dashboard', { size: '5xl', variant: 'warning' }),
  new CEIcon('dashboard', { size: '6xl', variant: 'error' }),

  new CEIcon('dashboard', { size: '7xl' }),
  new CEIcon('dashboard', { size: '8xl', variant: 'secondary' }),
  new CEIcon('dashboard', { size: '9xl', variant: 'submit' }),

  new CEButton(['Hello', new CEIcon('box')], { size: 'xs' }),
  new CEButton(['Hello', new CEIcon('box')], { size: 'sm' }),
  new CEButton(['Hello', new CEIcon('box')], {}),

  new CELink(['Hello', new CEIcon('box')], { size: 'xs' }),
  new CELink(['Hello', new CEIcon('box')], { size: 'sm' }),
  new CELink(['Hello', new CEIcon('box')], {}),

  new CEHeading({ icon: 'box', title: 'Hello' }),
]);

app.mount(document.body, true);
