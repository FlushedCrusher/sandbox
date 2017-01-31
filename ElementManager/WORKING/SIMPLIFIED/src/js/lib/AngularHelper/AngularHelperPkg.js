
var AngularHelper = require('./AngularHelper.js');

/**
 * Angular Package for AngularHelper modules
 * @module AngularHelperPkg
 * @requires {AngularHelper}
 */
angular.module('AngularHelperPkg', [])
/** Instance of AngularHelper */
.service('AngularHelper',  [AngularHelper]);