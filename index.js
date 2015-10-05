/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-clipboard',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/clipboard/dist/clipboard.js');
  }
};
