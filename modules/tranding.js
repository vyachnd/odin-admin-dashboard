import CreateElement from './createElement.js';

class Trending extends CreateElement {
  constructor(data, attributes, events) {
    super(
      'article',
      [
        new CreateElement('img', [], { src: data.image, alt: 'trending avatar', width: 40, height: 40, class: ['trending__avatar'] }),
        new CreateElement('h4', [data.tag], { class: ['trending__tag'] }),
        new CreateElement('p', [data.lastProject], { class: ['trending__lastProject'] }),
      ],
      { ...(attributes || {}), class: [...(attributes?.class || []), 'trending'] },
      events
    );
  }
}

export default Trending;
