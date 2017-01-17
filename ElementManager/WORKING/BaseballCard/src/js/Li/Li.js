/**
 * Basic Li element wrapper
 * 
 * @requires {Element}
 * @requires {LiOptions}
 * @augments {Element}
 * @param {LiOptions} options
 * @returns {Li}
 */

var Element = require('../Element/Element.js');
var LiOptions = require('./LiOptions.js');

function Li(options) {
  'use strict';

  this._options = options ? options : new LiOptions();

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
Li.prototype = Object.create(Element.prototype);
Li.prototype.setTextContent = function(content) {
  'use strict';
  this.element.textContent = content;
  return this;
};
Li.prototype.setTemplate = function(content) {
  'use strict';
  this.element.innerHTML = content;
  return this;
};

module.exports = Li;