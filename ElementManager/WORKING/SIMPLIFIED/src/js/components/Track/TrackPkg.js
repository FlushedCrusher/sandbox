/**
 * TrackPkg module definition
 * 
 * @requires {GeoserverTrack}
 */

var GeoserverTrack = require('./GeoserverTrack.js');

angular.module('TrackPkg', [])
  .factory('GeoserverTrack', function() {
    return GeoserverTrack;
  });