/**
 * TemplatePkg module definition
 * 
 * @requires {EventOptions}
 */

var Template = require('./Template.js');

angular.module('TemplatePkg', [])
  .service('Template', Template);