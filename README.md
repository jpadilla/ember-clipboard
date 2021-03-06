# ember-clipboard

[![travis-status-image]][travis]
[![ember-observer-image]][ember-observer]

This is an Ember.js addon component for [clipboard.js][clipboard-js].

## Installation

```bash
$ ember install ember-clipboard
```

## Live Demo

View a live demo here: [https://jpadilla.github.io/ember-clipboard/][demo]

## Example

```handlebars
<!-- Target -->
<input id="foo" type="text" value="https://github.com/jpadilla/ember-clipboard.git">

<!-- Trigger -->
{{#clip-board class="btn" target="#foo"}}
  Click to copy
{{/clip-board}}
```

[demo]: https://jpadilla.github.io/ember-clipboard/
[clipboard-js]: https://zenorocha.github.io/clipboard.js/
[travis-status-image]: https://secure.travis-ci.org/jpadilla/ember-clipboard.svg
[travis]: http://travis-ci.org/jpadilla/ember-clipboard
[ember-observer-image]: http://emberobserver.com/badges/ember-clipboard.svg
[ember-observer]: http://emberobserver.com/addons/ember-clipboard
