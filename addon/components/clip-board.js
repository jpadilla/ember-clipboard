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

  /*
  @private
  Internal reference to Clipboard instance
   */
  _clipboard: null,

  action: 'copy',
  target: null,
  text: null,

  'data-clipboard-action': alias('action'),
  'data-clipboard-target': alias('target'),
  'data-clipboard-text': alias('text'),

  didInsertElement() {
    this.initializeClipboard();
  },

  willDestroyElement() {
    this.teardownClipboard();
  },

  initializeClipboard() {
    const clipboard = new Clipboard(`#${this.elementId}`);
    this.set('_clipboard', clipboard);

    clipboard.on('success', event => {
      this.sendAction('onSuccess', event);
    });

    clipboard.on('error', event => {
      this.sendAction('onError', event);
    });
  },

  teardownClipboard() {
    const clipboard = this.get('_clipboard');
    clipboard.off('success error');
    clipboard.destroy();
    this.set('_clipboard', null);
  }
});
