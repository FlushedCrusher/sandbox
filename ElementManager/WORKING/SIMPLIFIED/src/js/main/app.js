'use strict'; // eslint-disable-line strict

var run = require('./run.js');
var InfoSvc = require('./services/InfoSvc.js');
var TrackSvc = require('./services/external/TrackSvc.js');
var WatchListSvc = require('./services/external/WatchListSvc.js');
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
  .service('ex-track-service', [
    '$http',
    '$q',
    TrackSvc
  ])
  .service('ex-watch-list-service', [
    '$http',
    '$q',
    WatchListSvc
  ])
  .service('info-service', [
    '$injector',
    '$timeout',
    '$interval',
    InfoSvc
  ])
  .controller('info-controller', [
    '$injector',
    '$compile',
    '$sce',
    '$scope',
    InfoCtrl
  ]);