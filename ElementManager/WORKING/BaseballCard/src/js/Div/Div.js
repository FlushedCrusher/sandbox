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

  var _options = options ? options : new DivOptions();

  Element.call(this, _options);

  if(_options.template && typeof _options.template === 'object') {
    this.append(_options.template);
  } else if(_options.template){
    this.setTemplate(_options.template);
  } else if(_options.textContent){
    this.setTextContent(_options.textContent);
  }
}
Div.prototype = Object.create(Element.prototype);
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