import CreateElement from './createElement.js';

class Announcement extends CreateElement {
  constructor(data, attributes, events) {
    super(
      'article',
      [
        new CreateElement('h4', [data.title], { class: ['announcement__title'] }),
        new CreateElement('p', [data.description], { class: ['announcement__description'] }),
      ],
      { ...(attributes || {}), class: [...(attributes?.class || []), 'announcement'], dataset: { variant: data.variant } },
      events
    );
  }
}

export default Announcement;
