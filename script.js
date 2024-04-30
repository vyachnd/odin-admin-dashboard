import CreateElement from './modules/createElement.js';
import Header from './modules/header.js';
import Sidebar from './modules/sidebar.js';

const app = new CreateElement('div', [
  new Sidebar({ class: ['app__sidebar'] }),
  new CreateElement('main', [
    new Header(),
    new CreateElement('div', ['Projects']),
    new CreateElement('div', ['Announcements']),
    new CreateElement('div', ['Trending']),
  ], { class: ['app__main'] }),
], { id: 'app' });

app.mount(document.body, true);
