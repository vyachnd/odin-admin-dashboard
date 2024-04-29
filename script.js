import CreateElement from './modules/createElement.js';
import Sidebar from './modules/sidebar.js';

const app = new CreateElement('div', [
  new Sidebar({ class: ['app__sidebar'] }),
  new CreateElement('main', [
    'Main Content'
  ], { class: ['app__main'] }),
], { id: 'app' });

app.mount(document.body, true);
