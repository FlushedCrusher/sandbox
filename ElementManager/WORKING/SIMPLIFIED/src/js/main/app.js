'use strict'; // eslint-disable-line strict

var run = require('./run.js');
var InfoSvc = require('./services/InfoSvc.js');
var InfoCtrl = require('./controllers/InfoCtrl.js');

require('./Config/ConfigPkg.js');
require('../Element/ElementPkg.js');
require('../Template/TemplatePkg.js');

angular.module('app',
  [
    'ui.bootstrap',
    'ConfigPkg',
    'ElementPkg',
    'TemplatePkg'
  ])
  .run([
    '$injector',
    '$compile',
    '$templateCache',
    '$rootScope',
    run
  ])
  .service('info-service', [
    '$injector',
    '$http',
    '$timeout',
    InfoSvc
  ])
  .controller('info-controller', [
    '$injector',
    '$compile',
    '$templateCache',
    '$timeout',
    '$scope',
    InfoCtrl
  ]);