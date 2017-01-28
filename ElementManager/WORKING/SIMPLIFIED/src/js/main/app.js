'use strict'; // eslint-disable-line strict

var run = require('./run.js');
var InfoSvc = require('./services/InfoSvc.js');
var TrackService = require('./services/external/TrackService.js');
var InfoCtrl = require('./controllers/InfoCtrl.js');

require('./config/ConfigPkg.js');
require('../lib/Element/ElementPkg.js');
require('../lib/Template/TemplatePkg.js');

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
  .service('TrackService', [
    TrackService
  ])
  .service('info-service', [
    '$injector',
    '$http',
    '$timeout',
    '$interval',
    'TrackService',
    InfoSvc
  ])
  .controller('info-controller', [
    '$injector',
    '$compile',
    '$scope',
    InfoCtrl
  ]);