/**
 * AngularHelperPkg module definition
 * 
 * @requires {AngularHelper}
 */

var AngularHelper = require('./AngularHelper.js');

angular.module('AngularHelperPkg', [])
  .service('AngularHelper',  AngularHelper);