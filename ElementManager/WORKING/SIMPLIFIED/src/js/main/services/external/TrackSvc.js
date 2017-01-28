
var GeoserverTrack = require('../../../components/Track/GeoserverTrack.js');
var Config = require('../../config/Config.js');

function TrackSvc($http, $q) {
  'use strict';
  this.isTest = Config.BASEBALLCARD.TEST.VALUE;
}
TrackSvc.prototype.getTrackData = function(data) {
  'use strict';
  var _data = this.isTest ? Config.BASEBALLCARD.TEST.DATA : data;
  return new GeoserverTrack(_data);
};

module.exports = TrackSvc;