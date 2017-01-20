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

}
Li.prototype = Object.create(Element.prototype);

module.exports = Li;