/**
 * AngularHelperPkg module definition
 */

var AngularHelper = require('./AngularHelper.js');

angular.module('AngularHelperPkg', [])
  .service('AngularHelper',  AngularHelper);