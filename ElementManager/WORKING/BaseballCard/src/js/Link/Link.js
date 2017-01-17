/**
 * Basic Link element wrapper
 * 
 * @requires {Element}
 * @requires {LinkOptions}
 * @augments {Element}
 * @param {LinkOptions} options
 * @returns {Link}
 */

var Element = require('../Element/Element.js');
var LinkOptions = require('./LinkOptions.js');

function Link(options) {
  'use strict';

  this._options = options ? options : new LinkOptions();

  Element.call(this, this._options);

  if(this._options.template) {
    this.setTemplate(this._options.template);
  } else if(this._options.textContent){
    this.setTextContent(this._options.textContent);
  }
  if(this._options.src) {
    this.setSrc(this._options.src);
  }
}
Link.prototype = Object.create(Element.prototype);
Link.prototype.setTextContent = function(content) {
  'use strict';
  this.element.textContent = content;
  return this;
};
Link.prototype.setTemplate = function(content) {
  'use strict';
  this.element.innerHTML = content;
  return this;
};

module.exports = Link;