/**
 * ElementPkg module definition
 * 
 * @requires {AngularHelper}
 * @requires {Element}
 * @requires {ElementManager}
 * @requires {Guid}
 */

var Element = require('./Element.js');
var ElementManager = require('./ElementManager.js');

require('../AngularHelper/AngularHelperPkg.js');
require('../Guid/GuidPkg.js');

angular.module('ElementPkg',
  [
    'AngularHelperPkg',
    'GuidPkg'
  ])
  .factory('Element', function() {
    'use strict';
    return Element; 
  })
  .service('ElementManager', [
    '$injector',  
    ElementManager
  ]);