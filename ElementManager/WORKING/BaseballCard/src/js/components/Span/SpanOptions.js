/**
 * Options for Span element wrapper
 * 
 * @requires {ElementOptions}
 * @augments {ElementOptions}
 * @returns {SpanOptions}
 */

var ElementOptions = require('../Element/ElementOptions.js');

function SpanOptions() {
  'use strict';
  ElementOptions.call(this);
  this.type = 'span';
}
SpanOptions.prototype = Object.create(ElementOptions.prototype);

module.exports = SpanOptions;