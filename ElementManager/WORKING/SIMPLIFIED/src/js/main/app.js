'use strict'; // eslint-disable-line strict

var run = require('./run.js');
var InfoSvc = require('./services/InfoSvc.js');
var TrackSvc = require('./services/external/TrackSvc.js');
var WatchListSvc = require('./services/external/WatchListSvc.js');
var ConfiguratorSvc = require('./services/external/ConfiguratorSvc.js');
var InfoCtrl = require('./controllers/InfoCtrl.js');

require('./config/ConfigPkg.js');
require('../lib/Element/ElementPkg.js');
require('../lib/Template/TemplatePkg.js');
require('../components/Track/TrackPkg.js');

angular.module('app',
  [
    'ui.bootstrap',
    'ConfigPkg',
    'ElementPkg',
    'TemplatePkg',
    'TrackPkg'
  ])
  .run([
    '$injector',
    run
  ])
  .service('ex-configurator-service', [
    '$injector',
    ConfiguratorSvc
  ])
  .service('ex-track-service', [
    '$injector',
    TrackSvc
  ])
  .service('ex-watch-list-service', [
    '$injector',
    WatchListSvc
  ])
  .service('info-service', [
    '$injector',
    InfoSvc
  ])
  .controller('info-controller', [
    '$injector',
    '$scope',
    InfoCtrl
  ]);