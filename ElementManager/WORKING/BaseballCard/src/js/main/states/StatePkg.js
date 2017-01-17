/**
 * StatePkg module definition
 */
'use strict'; // eslint-disable-line strict

require('../../Banner/BannerPkg.js');
require('../../Div/DivPkg.js');
require('../../Span/SpanPkg.js');
require('../../Element/ElementPkg.js');
require('../../Events/EventsPkg.js');
require('../../Style/StylePkg.js');
require('../../Test/TestPkg.js');
require('../../Config/ConfigPkg.js');
require('../../AngularHelper/AngularHelperPkg.js');
require('../../Img/ImgPkg.js');

var Info = require('./info/Info.js');

angular.module('StatePkg', [
  'DivPkg',
  'SpanPkg',
  'ElementPkg',
  'EventsPkg',
  'StylePkg',
  'BannerPkg',
  'TestPkg',
  'ConfigPkg',
  'AngularHelperPkg',
  'ImgPkg'
])
  .service('Info', [
    '$injector',
    '$compile',
    Info
  ]);