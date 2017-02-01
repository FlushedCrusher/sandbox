/**
 * Angular Package for AngularHelper modules
 * @module lib/AngularHelper/AngularHelperPkg
 * @requires {lib/AngularHelper/AngularHelper}
 */

var AngularHelper = require('lib/AngularHelper/AngularHelper');

angular.module('AngularHelperPkg', [])
/** Instance of AngularHelper */
.service('AngularHelper',  [AngularHelper]);