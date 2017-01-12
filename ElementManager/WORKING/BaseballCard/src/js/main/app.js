'use strict'; // eslint-disable-line strict

require('../Banner/BannerPkg.js');
require('../Div/DivPkg.js');
require('../Span/SpanPkg.js');
require('../Element/ElementPkg.js');

require('../Events/EventsPkg.js');
require('../Style/StylePkg.js');

require('../Test/TestPkg.js');
require('../Config/ConfigPkg.js');
require('../AngularHelper/AngularHelperPkg.js');

var run = require('./run.js');
var info = require('./controllers/info.js');

angular.module('app',
  [
    'DivPkg',
    'SpanPkg',
    'ElementPkg',
    'EventsPkg',
    'StylePkg',
    'BannerPkg',
    'TestPkg',
    'ConfigPkg',
    'AngularHelperPkg'
  ])
  .run([
    '$injector',
    '$compile',
    '$rootScope',
    run
  ])
  .controller('info', [
    '$injector',
    '$compile',
    '$scope',
    '$interval',
    info
  ]);