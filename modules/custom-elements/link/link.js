/*
  --------------------------------------------------------------------------------------------------
  SETTINGS
  --------------------------------------------------------------------------------------------------
  Variant                     'base', 'secondary', 'warning', 'error', 'submit'
  Disabled                    Boolean
*/

import CreateElement from '../../createElement.js';
import { CEIcon } from '../init.js';

class CELink extends CreateElement {
  constructor(children, settings, attributes, events) {
    super('a', [], { target: '_blank', ...(attributes || {}) }, events);

    this.settings = {};

    this.setSettings(settings || {});
    this.setChildren(children || []);
  }

  setSettings(settings) {
    this.updateAttributes({
      target: '_blank',
      ...this.attributes,
      class: [...(this.attributes?.class || []), 'ce-link'],
      dataset: {
        ...(this.attributes?.dataset || {}),
        ...settings,
      },
      disabled: Boolean(settings?.disabled),
    });

    this.settings = settings;
  }

  setChildren(children) {
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];

      if (child instanceof CEIcon) {
        child.updateAttributes({
          ...child.attributes,
          class: [...(child.attributes?.class || []), 'ce-link__icon'],
        });
        child.setSettings({ type: 'rounded', ...child.settings });
      } else if (typeof child === 'string') {
        children[i] = new CreateElement(
          'span',
          [child?.element?.textContent || child],
          { class: ['ce-link__caption'] },
        );
      }
    }

    this.updateChildren(children);
  }
}

export default CELink;
