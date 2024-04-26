import CreateElement from './modules/createElement.js';
import { CEHeading } from './modules/custom-elements/init.js';


const app = new CreateElement('div', [
  new CEHeading({ title: 'Odin Dashboard', icon: 'dashboard' }),
  new CEHeading({ title: 'Odin Dashboard', icon: 'dashboard', variant: 'secondary' }),
  new CEHeading({ title: 'Odin Dashboard', icon: 'dashboard', variant: 'submit' }),
  new CEHeading({ title: 'Odin Dashboard', icon: 'dashboard', variant: 'warning' }),
  new CEHeading({ title: 'Odin Dashboard', icon: 'dashboard', variant: 'error' }),
]);

app.mount(document.body, true);
