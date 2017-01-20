/**
 * StatePkg module definition
 */
'use strict'; // eslint-disable-line strict

require('../components/Banner/BannerPkg.js');
require('../main/config/ConfigPkg.js');
require('../components/Div/DivPkg.js');
require('../components/GlyphBtn/GlyphBtnPkg.js');
require('../components/Img/ImgPkg.js');
require('../components/Li/LiPkg.js');
require('../components/Link/LinkPkg.js');
require('../components/Nav/NavPkg.js');
require('../components/Span/SpanPkg.js');
require('../components/Style/StylePkg.js');

require('../components/AngularHelper/AngularHelperPkg.js');
require('../components/Element/ElementPkg.js');
require('../components/Events/EventsPkg.js');

require('../templates/Classification/ClassificationPkg.js');
require('../templates/Glyph/GlyphPkg.js');
require('../templates/Panel/PanelPkg.js');
require('../templates/Scrollable/ScrollablePkg.js');
require('../templates/Navigation/NavigationPkg.js');

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