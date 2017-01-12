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

  if(this._options.template) {
    this.setTemplate(this._options.template);
  } else if(this._options.textContent){
    this.setTextContent(this._options.textContent);
  }
}
Span.prototype = Object.create(Element.prototype);
Span.prototype.hasAngularTemplate = function() {
  'use strict';
  return (this._options.angularTemplate) ? true : false; // eslint-disable-line no-unneeded-ternary
};
Span.prototype.setTextContent = function(content) {
  'use strict';
  this.element.textContent = content;
  return this;
};
Span.prototype.setTemplate = function(content) {
  'use strict';
  this.element.innerHTML = content;
  return this;
};

module.exports = Span;