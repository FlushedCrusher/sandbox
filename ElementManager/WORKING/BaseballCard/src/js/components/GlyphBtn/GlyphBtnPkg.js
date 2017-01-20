/**
 * GlyphBtnPkg module definition
 * 
 * @requires {GlyphBtn}
 * @requires {GlyphBtnOptions}
 */

var GlyphBtn = require('./GlyphBtn.js');
var GlyphBtnOptions = require('./GlyphBtnOptions.js');

angular.module('GlyphBtnPkg', [])
  .factory('GlyphBtn', function() {
    'use strict';
    return GlyphBtn;
  })
  .factory('GlyphBtnOptions',  function() {
    'use strict';
    return GlyphBtnOptions;
  });