var Element = require('../Element/Element.js');

function Div(options) {
  'use strict';
  Element.call(this, 'div');
  this.prototype = Object.create(Element.prototype);
  this.element.textContent = 'Hello World!';
}
module.exports = Div;