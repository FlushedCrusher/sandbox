/**
 * Basic Div element wrapper
 * 
 * @requires {Element}
 * @requires {DivOptions}
 * @augments {Element}
 * @param {DivOptions} options
 * @returns {Div}
 */

var Element = require('../Element/Element.js');
var DivOptions = require('./DivOptions.js');

function Div(options) {
  'use strict';

  this._options = options ? options : new DivOptions();

  Element.call(this, this._options);

  if(this._options.template) {
    this.setTemplate(this._options.template);
  } else if(this._options.textContent){
    this.setTextContent(this._options.textContent);
  }
}
Div.prototype = Object.create(Element.prototype);
Div.prototype.hasAngularTemplate = function() {
  'use strict';
  return (this._options.angularTemplate) ? true : false;
};
Div.prototype.setTextContent = function(content) {
  'use strict';
  this.element.textContent = content;
  return this;
};
Div.prototype.setTemplate = function(content) {
  'use strict';
  this.element.innerHTML = content;
  return this;
};

module.exports = Div;