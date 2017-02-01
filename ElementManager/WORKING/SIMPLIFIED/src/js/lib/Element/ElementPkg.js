/**
 * Angular Package for Element modules
 * @module lib/Element/ElementPkg
 * @requires {lib/AngularHelper/AngularHelper}
 * @requires {lib/Element/Element}
 * @requires {lib/Element/ElementManager}
 * @requires {lib/Guid/GuidPkg}
 */

var Element = require('lib/Element/Element');
var ElementManager = require('lib/Element/ElementManager');
require('lib/AngularHelper/AngularHelperPkg');
require('lib/Guid/GuidPkg');

angular.module('ElementPkg',
[
  'AngularHelperPkg',
  'GuidPkg'
])
/** Element COnstructor */
.factory('Element', function() {
  'use strict';
  return Element; 
})
/** ElementManager Instance */
.service('ElementManager', [
  '$injector',  
  ElementManager
]);