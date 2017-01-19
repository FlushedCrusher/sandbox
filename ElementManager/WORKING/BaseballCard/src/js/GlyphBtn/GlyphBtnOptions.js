/**
 * Options for GlyphBtn element wrapper
 * 
 * @requires {ElementOptions}
 * @augments {ElementOptions}
 * @returns {GlyphBtnOptions}
 */

var ElementOptions = require('../Element/ElementOptions.js');

function GlyphBtnOptions() {
  'use strict';
  ElementOptions.call(this);
  this.type = 'a';
}
GlyphBtnOptions.prototype = Object.create(ElementOptions.prototype);

module.exports = GlyphBtnOptions;