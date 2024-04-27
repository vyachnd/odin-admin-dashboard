/*
  --------------------------------------------------------------------------------------------------
  SETTINGS
  --------------------------------------------------------------------------------------------------
  Icon                        String
  Title                       String
  Variant                     'base', 'secondary', 'warning', 'error', 'submit'
*/

import CreateElement from '../../createElement.js';
import { CEIcon, CELink } from '../init.js';

class CEHeading extends CreateElement {
  constructor(settings, attributes) {
    super(
      'div',
      [
        (settings?.icon ? new CEIcon(settings?.icon, {}, { class: ['ce-heading__icon'] }) : null),
        new CreateElement('div', [
          new CreateElement('h1', [settings?.title || 'Title'], { class: ['ce-heading__title'] }),
          new CreateElement('p', [
            'by ',
            new CELink(['vyachnd'], { size: 'sm', variant: settings?.variant }, { href: 'https://www.github.com/vyachnd', class: ['ce-heading__link'] }),
          ], { class: ['ce-heading__subtitle'] }),
        ], { class: ['ce-heading__container'] }),
      ].filter((child) => child),
      attributes,
    );

    this.settings = {};

    this.setSettings(settings || {});
  }

  setSettings(settings) {
    this.updateAttributes({
      ...this.attributes,
      class: [...(this.attributes.class || []), 'ce-heading'],
      dataset: { ...settings },
    });

    this.settings = settings;
  }
}

export default CEHeading;
