import CreateElement from './createElement.js';
import { CEButton, CEIcon } from './custom-elements/init.js';

class Project extends CreateElement {
  constructor(data, attributes, events) {
    super(
      'article',
      [
        new CreateElement('h3', [data?.title || 'Unknown project'], { class: ['project__title'] }),
        new CreateElement('p', [data?.description || 'Unknown description'], { class: ['project__description'] }),
        new CreateElement('div', [
          new CEButton([new CEIcon('star')], { size: 'sm', boxed: true, transparent: true, variant: data.actions[0] ? 'secondary' : null }),
          new CEButton([new CEIcon('visibility')], { size: 'sm', boxed: true, transparent: true, variant: data.actions[1] ? 'secondary' : null }),
          new CEButton([new CEIcon('family_history')], { size: 'sm', boxed: true, transparent: true, variant: data.actions[2] ? 'secondary' : null }),
        ], { class: ['project__actions'] }),
      ],
      { ...(attributes || {}), class: [...(attributes?.class || []), 'project'] },
      events
    );

    this.starBtn = this.children[2].children[0];
    this.visibilityBtn = this.children[2].children[1];
    this.familyHistoryBtn = this.children[2].children[2];

    this.starBtn.updateEvents([['click', () => this.starBtn.setSettings({ ...this.starBtn.settings, variant: this.starBtn.settings.variant ? null : 'secondary' })]]);
    this.visibilityBtn.updateEvents([['click', () => this.visibilityBtn.setSettings({ ...this.visibilityBtn.settings, variant: this.visibilityBtn.settings.variant ? null : 'secondary' })]]);
    this.familyHistoryBtn.updateEvents([['click', () => this.familyHistoryBtn.setSettings({ ...this.familyHistoryBtn.settings, variant: this.familyHistoryBtn.settings.variant ? null : 'secondary' })]]);
  }
}

export default Project;
