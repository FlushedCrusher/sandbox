/**
 * GuidPkg module definition
 * 
 * @requires {Guid}
 */

var Guid = require('./Guid.js');

angular.module('GuidPkg', [])
  .service('Guid', Guid);