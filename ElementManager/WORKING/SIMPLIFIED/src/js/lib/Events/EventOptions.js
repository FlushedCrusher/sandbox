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
EventOptions.prototype.get = function(name) {
  'use strict';
  var action = null;
  if(EventList.includes(name)) {
    action = this[name];
  }
  return action;
};
EventOptions.prototype.set = function(name, action) {
  'use strict';
  if(EventList.includes(name)) {
    this[name] = action;
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
    for (var name in obj) {
      if (!obj.hasOwnProperty(name)) {
        continue;
      }
        temp[name] = self._clone(obj[name]);
    }
    return temp;
};

module.exports = EventOptions;