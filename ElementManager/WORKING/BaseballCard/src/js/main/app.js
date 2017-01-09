'use strict'; // eslint-disable-line strict

require('../Div/DivPkg.js');
require('../Element/ElementPkg.js');
require('../Events/EventsPkg.js');
require('../Style/StylePkg.js');
require('../Banner/BannerPkg.js');
require('../Test/TestPkg.js');

var info = require('./controllers/info.js');

angular.module('app',
  [
    'DivPkg',
    'ElementPkg',
    'EventsPkg',
    'StylePkg',
    'BannerPkg',
    'TestPkg'
  ])
  .controller('info', [
    '$injector',
    '$scope',
    info
  ]);