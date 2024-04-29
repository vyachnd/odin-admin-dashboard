import CreateElement from './createElement.js';
import { CEButton, CEHeading, CEIcon } from './custom-elements/init.js';

const menu = [
  [
    { icon: 'dashboard', title: 'Home' },
    { icon: 'account_box', title: 'Profile' },
    { icon: 'chat_bubble', title: 'Messages' },
    { icon: 'schedule', title: 'History' },
    { icon: 'library_books', title: 'Tasks' },
    { icon: 'diversity_3', title: 'Communities' },
  ],

  [
    { icon: 'settings', title: 'Settings' },
    { icon: 'contact_support', title: 'Support' },
    { icon: 'verified_user', title: 'Privacy' },
  ],
];

class Sidebar extends CreateElement {
  constructor(attributes, events) {
    super('aside', [], { ...(attributes || {}), class: [...(attributes?.class || []), 'sidebar'] }, events);

    this.activeMenu = null;
    this.menuClosed = false;

    this.updateChildren([
      new CreateElement('header', [
        new CEHeading({ icon: 'dashboard', title: 'DASHBOARD' }),
        new CEButton([new CEIcon('menu')], { boxed: true, fill: false }, {}, [['click', this.toggleMenu.bind(this)]]),
      ], { class: ['sidebar__header'] }),

      new CreateElement('nav', [
        new CreateElement('ul', [
          ...menu[0].map((item) => {
            const btn = new CEButton([
              new CEIcon(item.icon),
              item.title,
            ], { fill: false }, { class: ['nav__item'] });
            const listItem = new CreateElement('li', [btn], { class: ['list__item'] });

            btn.updateEvents([
              ['click', () => this.toggleBtn(btn)],
            ]);

            if (!this.activeMenu) this.toggleBtn(btn);

            return listItem;
          }),
        ], { class: ['nav__list'] }),

        new CreateElement('ul', [
          ...menu[1].map((item) => new CreateElement('li', [
            new CEButton([
              new CEIcon(item.icon),
              item.title,
            ], { fill: false }, { class: ['nav__item'] }),
          ], { class: ['list__item'] })),
        ], { class: ['nav__list'] }),
      ], { class: ['sidebar__nav'] }),
    ]);

    this.toggleMenu();
  }

  toggleBtn(btn) {
    if (this.activeMenu === btn) return;

    if (this.activeMenu) {
      this.activeMenu.setSettings({
        ...this.activeMenu.settings,
        variant: null,
        fill: false,
      });
    }

    btn.setSettings({
      ...btn.settings,
      variant: 'secondary',
      fill: true,
      transparent: true,
    });

    this.activeMenu = btn;
  }

  toggleMenu() {
    this.updateAttributes({
      ...this.attributes,
      dataset: {
        ...(this.attributes.dataset || {}),
        closed: this.menuClosed,
      }
    });

    this.menuClosed = !this.menuClosed;
  }
}

export default Sidebar;
