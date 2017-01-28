/**
 * ElementPkg module definition
 * 
 * @requires {Element}
 * @requires {ElementFactory}
 * @requires {ElementManager}
 */

var Element = require('./Element.js');
var ElementFactory = require('./ElementFactory.js');
var ElementManager = require('./ElementManager.js');

angular.module('ElementPkg', [])
  .factory('Element', Element)
  .service('ElementManager', ElementManager)
  .service('ElementFactory', ElementFactory);