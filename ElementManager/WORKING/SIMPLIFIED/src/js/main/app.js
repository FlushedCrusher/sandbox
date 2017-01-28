'use strict'; // eslint-disable-line strict

var run = require('./run.js');
var InfoSvc = require('./services/InfoSvc.js');
var TrackService = require('./services/external/TrackService.js');
var InfoCtrl = require('./controllers/InfoCtrl.js');

require('./config/ConfigPkg.js');
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
    '$templateCache',
    '$timeout',
    '$scope',
    InfoCtrl
  ]);