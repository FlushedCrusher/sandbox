/**
 * Angular Package for Track modules
 * 
 * @requires {GeoserverTrack}
 */
var GeoserverTrack = require('./GeoserverTrack.js');

/**
 * TrackPkg module definition
 * @class TrackPkg
 */
angular.module('TrackPkg', [])
/**
 * Geoserver Implementation of a Track
 * @class GeoserverTrack
 */
.factory('GeoserverTrack', [function() {
  'use strict';
  return GeoserverTrack;
}]);