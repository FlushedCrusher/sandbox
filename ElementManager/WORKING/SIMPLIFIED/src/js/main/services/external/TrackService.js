
var GeoserverTrack = require('../../../Track/GeoserverTrack.js');
var Config = require('../../config/Config.js');

function TrackService() {
  'use strict';
  this.isTest = Config.BASEBALLCARD.TEST.VALUE;
}
TrackService.prototype.getTrackData = function(data) {
  'use strict';
  var _data = this.isTest ? Config.BASEBALLCARD.TEST.DATA : data;
  return new GeoserverTrack(_data);
};

module.exports = TrackService;