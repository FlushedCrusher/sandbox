/**
 * Angular Package for Track modules
 * @module components/Track/TrackPkg
 * @requires {components/Track/GeoserverTrack}
 */

var GeoserverTrack = require('components/Track/GeoserverTrack');

angular.module('TrackPkg', [])
/** GeoserverTrack Constructor */
.factory('GeoserverTrack', [function() {
  'use strict';
  return GeoserverTrack;
}]);