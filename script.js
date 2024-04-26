import { CEButton, CECheckbox, CEHeading, CEIcon, CEInputText, CELink } from './modules/custom-elements/init.js';


const button = new CEButton(['Hello']);
const checkbox = new CECheckbox(['Hello']);
const heading = new CEHeading({ title: 'Hello' });
const icon = new CEIcon('box');
const inputText = new CEInputText([
  new CEIcon('search'),
]);
const link = new CELink([
  'Hello',
  new CEIcon('chevron_right'),
], {}, { href: 'https://www.github.com/vyachnd' });

button.mount(document.body, true);
checkbox.mount(document.body, true);
heading.mount(document.body, true);
icon.mount(document.body, true);
inputText.mount(document.body, true);
link.mount(document.body, true);
