
function WatchListSvc($injector) {
  'use strict';
  this.CONFIG = $injector.get('Config');
  this._http = $injector.get('$http');
  this._q = $injector.get('$q');
  var exConfiguratorSvc = $injector.get('ex-configurator-service');

  this.CONST = this.CONFIG.WATCHLIST_SVC;
  this.isTest = this.CONST.TEST || this.CONFIG.TEST.VALUE;
  this.URL = exConfiguratorSvc.get(this.CONST.KEY);
  this.watched = false;
  this.eyeConTip = this.CONST.EYECON_ADD_TIP;
}
WatchListSvc.prototype.getEyeConTip = function() {
  'use strict';
  return this.eyeConTip;
};
WatchListSvc.prototype.isWatched = function() {
  'use strict';
  return this.watched;
};
WatchListSvc.prototype.addToWatchList = function() {
  'use strict';
  this.eyeConTip = this.CONST.EYECON_REMOVE_TIP;
  this.watched = true;
  return this;
};
WatchListSvc.prototype.removeFromWatchList = function() {
  'use strict';
  this.eyeConTip = this.CONST.EYECON_ADD_TIP;
  this.watched = false;
  return this;
};
WatchListSvc.prototype.toggleWatched = function() {
  'use strict';
  this.eyeConTip = (this.eyeConTip === this.CONST.EYECON_ADD_TIP) ? this.CONST.EYECON_REMOVE_TIP : this.CONST.EYECON_ADD_TIP;
  this.watched = !this.watched;
  return this;
};

module.exports = WatchListSvc;