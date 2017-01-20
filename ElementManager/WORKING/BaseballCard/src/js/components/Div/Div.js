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

}
Div.prototype = Object.create(Element.prototype);

module.exports = Div;