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

module.exports = EventOptions;