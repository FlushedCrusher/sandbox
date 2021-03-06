/**
 * ImgPkg module definition
 * 
 * @requires {Img}
 * @requires {ImgOptions}
 */

var Img = require('./Img.js');
var ImgOptions = require('./ImgOptions.js');

angular.module('ImgPkg', [])
  .factory('Img', function() {
    'use strict';
    return Img;
  })
  .factory('ImgOptions',  function() {
    'use strict';
    return ImgOptions;
  });