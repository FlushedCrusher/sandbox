/**
 * Angular Package for AngularHelper modules
 * 
 * @requires {AngularHelper}
 */
var AngularHelper = require('./AngularHelper.js');

/**
 * AngularHelperPkg module definition
 * @class {AngularHelperPkg}
 */
angular.module('AngularHelperPkg', [])
/**
 * AngularHelperPkg module definition
 * @class {AngularHelper}
 */
.service('AngularHelper',  [AngularHelper]);