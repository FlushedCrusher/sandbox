/**
 * Panel module definition
 */

var Panel = require('./Panel.js');
var PanelHeader = require('./PanelHeader.js');
var PanelBody = require('./PanelBody.js');

angular.module('PanelPkg', [])
  .service('Panel', Panel)
  .service('PanelHeader', PanelHeader)
  .service('PanelBody', PanelBody);