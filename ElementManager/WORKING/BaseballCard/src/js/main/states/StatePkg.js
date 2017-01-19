/**
 * StatePkg module definition
 */
'use strict'; // eslint-disable-line strict

require('../../AngularHelper/AngularHelperPkg.js');
require('../../Banner/BannerPkg.js');
require('../../Config/ConfigPkg.js');
require('../../Div/DivPkg.js');
require('../../Element/ElementPkg.js');
require('../../Events/EventsPkg.js');
require('../../GlyphBtn/GlyphBtnPkg.js');
require('../../Img/ImgPkg.js');
require('../../Li/LiPkg.js');
require('../../Link/LinkPkg.js');
require('../../Nav/NavPkg.js');
require('../../Span/SpanPkg.js');
require('../../Style/StylePkg.js');

var Info = require('./info/Info.js');

angular.module('StatePkg', [
  'AngularHelperPkg',
  'BannerPkg',
  'ConfigPkg',
  'DivPkg',
  'ElementPkg',
  'EventsPkg',
  'GlyphBtnPkg',
  'ImgPkg',
  'LiPkg',
  'LinkPkg',
  'NavPkg',
  'SpanPkg',
  'StylePkg',
])
  .service('Info', [
    '$injector',
    '$compile',
    Info
  ]);