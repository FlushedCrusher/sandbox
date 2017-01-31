
var GeoserverTrack = require('./GeoserverTrack.js');

/**
 * Angular Package for Track modules
 * @module TrackPkg
 * @requires {GeoserverTrack}
 */
angular.module('TrackPkg', [])
/** GeoserverTrack Constructor */
.factory('GeoserverTrack', [function() {
  'use strict';
  return GeoserverTrack;
}]);