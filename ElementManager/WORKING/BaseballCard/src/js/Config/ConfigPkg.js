/**
 * ConfigPkg module definition
 */

var Config = require('./Config.js');

angular.module('ConfigPkg', [])
  .constant('Config', Config);