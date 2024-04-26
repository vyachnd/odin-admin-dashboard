import CreateElement from './modules/createElement.js';
import { CEIcon, CELink } from './modules/custom-elements/init.js';


const app = new CreateElement('div', [
  new CELink(['Hello', new CEIcon('chevron_right')], {}, { href: 'https://www.github.com/vyachnd' }),
  new CELink(['Hello', new CEIcon('chevron_right')], { variant: 'secondary' }, { href: 'https://www.github.com/vyachnd' }),
  new CELink(['Hello', new CEIcon('chevron_right')], { variant: 'submit' }, { href: 'https://www.github.com/vyachnd' }),
  new CELink(['Hello', new CEIcon('chevron_right')], { variant: 'warning' }, { href: 'https://www.github.com/vyachnd' }),
  new CELink(['Hello', new CEIcon('chevron_right')], { variant: 'error' }, { href: 'https://www.github.com/vyachnd' }),
]);

app.mount(document.body, true);
