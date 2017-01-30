/**
 * ElementPkg module definition
 * 
 * @requires {Element}
 * @requires {ElementFactory}
 * @requires {ElementManager}
 */


var ElementFactory = require('./ElementFactory.js');
// var Element = require('./html/Element.js');
// var ElementManager = require('./ElementManager.js');
var Element = require('./angular/Element.js');
var ElementManager = require('./angular/ElementManager.js');

angular.module('ElementPkg', [])
  .factory('Element', function() {
    'use strict';
    return Element; 
  })
  .service('ElementManager', ElementManager)
  .service('ElementFactory', ElementFactory);