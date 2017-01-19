/**
 * StatePkg module definition
 */
'use strict'; // eslint-disable-line strict

require('../../Banner/BannerPkg.js');
require('../../Config/ConfigPkg.js');
require('../../Div/DivPkg.js');
require('../../GlyphBtn/GlyphBtnPkg.js');
require('../../Img/ImgPkg.js');
require('../../Li/LiPkg.js');
require('../../Link/LinkPkg.js');
require('../../Nav/NavPkg.js');
require('../../Span/SpanPkg.js');
require('../../Style/StylePkg.js');

require('../../AngularHelper/AngularHelperPkg.js');
require('../../Element/ElementPkg.js');
require('../../Events/EventsPkg.js');

require('./templates/Classification/ClassificationPkg.js');
require('./templates/Glyph/GlyphPkg.js');
require('./templates/Panel/PanelPkg.js');
require('./templates/Scrollable/ScrollablePkg.js');
require('./templates/Navigation/NavigationPkg.js');

var Info = require('./info/Info.js');

angular.module('StatePkg', [
  'BannerPkg',
  'ConfigPkg',
  'DivPkg',
  'GlyphBtnPkg',
  'ImgPkg',
  'LiPkg',
  'LinkPkg',
  'NavPkg',
  'SpanPkg',
  'StylePkg',

  'AngularHelperPkg',
  'ElementPkg',
  'EventsPkg',

  'ClassificationPkg',
  'GlyphPkg',
  'PanelPkg',
  'ScrollablePkg',
  'NavigationPkg'
])
  .service('Info', [
    '$injector',
    Info
  ]);