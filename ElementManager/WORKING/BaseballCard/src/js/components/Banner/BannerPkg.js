/**
 * BannerPkg module definition
 * 
 * @requires {Banner}
 * @requires {BannerOptions}
 */

var Banner = require('./Banner.js');
var BannerOptions = require('./BannerOptions.js');

angular.module('BannerPkg', [])
  .factory('Banner', function() {
    'use strict';
    return Banner;
  })
  .factory('BannerOptions',  function() {
    'use strict';
    return BannerOptions;
  });