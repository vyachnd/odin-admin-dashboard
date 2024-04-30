import CreateElement from './createElement.js';
import { CEButton, CEIcon, CEInputText } from './custom-elements/init.js';

class Header extends CreateElement {
  constructor(attributes, events) {
    super('header', [
      // Top
      new CreateElement('div', [
        new CEInputText(
          [, new CEIcon('search')],
          {
            placeholder: 'Search...',
            variant: 'secondary', darkened: true, rounded: true, bordered: true,
          }, { class: ['header__search'] }
        ),

        new CreateElement('div', [
          new CEButton([new CEIcon('notifications')], { boxed: true, fill: false }, { class: ['actions__notification'] }),
        ], { class: ['header__actions'] }),

        new CreateElement('div', [
          new CreateElement('img', [], { src: 'https://avatars.githubusercontent.com/u/105167307?v=4', alt: 'vyachnd avatar', width: 40, height: 40, class: ['user__avatar'] }),
          new CreateElement('h3', ['Vyacheslav'], { class: ['user__name'] }),
          new CreateElement('span', ['@vyachnd'], { class: ['user__tag'] }),
        ], { class: ['header__user'] }),
      ], { class: ['header__container'] }),


      // Bottom
      new CreateElement('div', [
        new CreateElement('div', [
          new CreateElement('img', [], { src: 'https://avatars.githubusercontent.com/u/105167307?v=4', alt: 'vyachnd avatar', width: 40, height: 40, class: ['welcome__image'] }),
          new CreateElement('span', ['Welcome'], { class: ['welcome__subtitle'] }),
          new CreateElement('h2', ['Vyacheslav'], { class: ['welcome__title'] }),
        ], { class: ['header__welcome'] }),

        new CreateElement('div', [
          new CEButton(['New'], { variant: 'secondary' }, { class: ['actions__new'] }),
          new CEButton(['Upload'], { variant: 'secondary' }, { class: ['actions__upload'] }),
          new CEButton(['Share'], { variant: 'secondary' }, { class: ['actions__share'] }),
        ], { class: ['header__actions'] }),
      ], { class: ['header__container'] }),
    ], { ...(attributes || {}), class: [...(attributes?.class || []), 'header'] }, events);
  }
}

export default Header;
