var EventOptions = require('../Events/EventOptions.js');

function DivOptions() {
  'use strict';
  this.textContent = null;
  this.events = new EventOptions();
}
DivOptions.prototype.getTextContent = function() {
  'use strict';
  return this.textContent;
};
DivOptions.prototype.setTextContent = function(content) {
  'use strict';
  this.textContent = content;
  return this;
};

module.exports = DivOptions;