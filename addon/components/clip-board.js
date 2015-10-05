/* global Clipboard */
import Ember from 'ember';
import layout from '../templates/components/clip-board';


const { alias } = Ember.computed;

export default Ember.Component.extend({
  tagName: 'button',
  layout: layout,
  attributeBindings: [
    'data-clipboard-action', 'data-clipboard-target', 'data-clipboard-text'
  ],

  action: 'copy',
  target: null,
  text: null,

  'data-clipboard-action': alias('action'),
  'data-clipboard-target': alias('target'),
  'data-clipboard-text': alias('text'),

  didInsertElement() {
    this.initializeClipboard();
  },

  initializeClipboard() {
    const clipboard = new Clipboard(`#${this.elementId}`);

    clipboard.on('success', event => {
      this.sendAction('onSuccess', event);
    });

    clipboard.on('error', event => {
      this.sendAction('onError', event);
    });
  }
});
