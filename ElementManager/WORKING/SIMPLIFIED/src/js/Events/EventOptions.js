/**
 * Event options object
 * 
 * @requires {EventList}
 * @returns {EventOptions}
 */

var EventList = require('./EventList.js');

function EventOptions() {
  'use strict';
}
EventOptions.prototype.get = function(key) {
  'use strict';
  var action = null;
  if(EventList.includes(key)) {
    action = this[key];
  }
  return action;
};
EventOptions.prototype.set = function(key, action) {
  'use strict';
  if(EventList.includes(key)) {
    this[key] = action;
  }
  return this;
};
EventOptions.prototype.clone = function() {
  'use strict';
  var clone = this._clone(this);
  return clone;
};
EventOptions.prototype._clone = function(obj) {
  'use strict';
  var self = this;
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    var temp = new obj.constructor();
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue;
      }
        temp[key] = self._clone(obj[key]);
    }
    return temp;
};

module.exports = EventOptions;