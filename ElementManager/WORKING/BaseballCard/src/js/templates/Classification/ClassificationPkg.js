/**
 * Classification module definition
 */

var Header = require('./Header.js');
var Footer = require('./Footer.js');

angular.module('ClassificationPkg', [])
  .service('Header', Header)
  .service('Footer', Footer);