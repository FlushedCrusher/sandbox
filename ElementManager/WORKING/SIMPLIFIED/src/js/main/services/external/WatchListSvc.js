
var Config = require('../../config/Config.js');
var CONST = Config.BASEBALLCARD.CONSTANTS;

function WatchListSvc($http, $q) {
  'use strict';
  this.watched = false;
  this.eyeConTip = CONST.EYECON_ADD_TIP;
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
  this.eyeConTip = CONST.EYECON_REMOVE_TIP;
  this.watched = true;
  return this;
};
WatchListSvc.prototype.removeFromWatchList = function() {
  'use strict';
  this.eyeConTip = CONST.EYECON_ADD_TIP;
  this.watched = false;
  return this;
};
WatchListSvc.prototype.toggleWatched = function() {
  'use strict';
  this.eyeConTip = (this.eyeConTip === CONST.EYECON_ADD_TIP) ? CONST.EYECON_REMOVE_TIP : CONST.EYECON_ADD_TIP;
  this.watched = !this.watched;
  return this;
};

module.exports = WatchListSvc;