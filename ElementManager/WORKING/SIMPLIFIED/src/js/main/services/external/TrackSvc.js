
function TrackSvc($injector) {
  'use strict';
  this.CONFIG = $injector.get('Config');
  this._http = $injector.get('$http');
  this._q = $injector.get('$q');
  this._track = $injector.get('GeoserverTrack');
  var exConfiguratorSvc = $injector.get('ex-configurator-service');
  
  this.CONST = this.CONFIG.TRACK_SVC;
  this.isTest = this.CONST.TEST || this.CONFIG.TEST.VALUE;
  this.URL = exConfiguratorSvc.get(this.CONST.KEY);
}
TrackSvc.prototype.getTrackData = function(data) {
  'use strict';
  var _data = this.isTest ? this.CONFIG.TEST.DATA : data;
  return new this._track(_data);
};

module.exports = TrackSvc;