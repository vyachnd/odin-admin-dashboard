/*
  --------------------------------------------------------------------------------------------------
  SETTINGS
  --------------------------------------------------------------------------------------------------
  Size                        'xs', 'sm', 'base', 'lg', 'xl'
  Variant                     'base', 'secondary', 'warning', 'error', 'submit'
  Align                       'base', 'center', 'right'
  Active                      Boolean
  Fill                        Boolean
  Transparent                 Boolean
  Rounded                     Boolean
  Disabled                    Boolean
*/

import CreateElement from '../../createElement.js';
import { CEIcon } from '../init.js';

class CEButton extends CreateElement {
  constructor(children, settings, attributes, events) {
    super('button', [], attributes, events);

    this.settings = {};

    this.setSettings(settings || {});
    this.setChildren(children || []);
  }

  setSettings(settings) {
    const icons = this.children.filter((child) => child instanceof CEIcon);

    icons.forEach((icon) => {
      icon.setSettings({
        ...icon.settings,
        size: settings?.size,
      });
    });

    this.updateAttributes({
      type: 'button',
      ...this.attributes,
      class: [...(this.attributes?.class || []), 'ce-button'],
      dataset: { fill: true, ...settings },
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
          class: [...(child.attributes?.class || []), 'ce-button__icon'],
        });
        child.setSettings({ size: this.settings?.size, ...child.settings });
      } else if (typeof child === 'string') {
        children[i] = new CreateElement(
          'span',
          [child?.element?.textContent || child],
          { class: ['ce-button__caption'] },
        );
      }
    }

    this.updateChildren(children);
  }
}

export default CEButton;
