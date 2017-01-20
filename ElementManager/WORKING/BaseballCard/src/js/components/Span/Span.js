/**
 * Basic Span element wrapper
 * 
 * @requires {Element}
 * @requires {SpanOptions}
 * @augments {Element}
 * @param {SpanOptions} options
 * @returns {Span}
 */

var Element = require('../Element/Element.js');
var SpanOptions = require('./SpanOptions.js');

function Span(options) {
  'use strict';

  this._options = options ? options : new SpanOptions();
  Element.call(this, this._options);

}
Span.prototype = Object.create(Element.prototype);

module.exports = Span;