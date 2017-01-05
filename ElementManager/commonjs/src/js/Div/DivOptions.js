/**
 * Options for Div element wrapper
 * 
 * @returns {DivOptions}
 */

function DivOptions() {
  'use strict';
  this.textContent = null;
  this.template = null;
  this.events = null;
  this.style = null;
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
DivOptions.prototype.getTemplate = function() {
  'use strict';
  return this.template;
};
DivOptions.prototype.setTemplate = function(content) {
  'use strict';
  this.template = content;
  return this;
};
DivOptions.prototype.getEvents = function() {
  'use strict';
  return this.events;
};
DivOptions.prototype.setEvents = function(content) {
  'use strict';
  this.events = content;
  return this;
};
DivOptions.prototype.getStyle = function() {
  'use strict';
  return this.style;
};
DivOptions.prototype.setStyle = function(content) {
  'use strict';
  this.style = content;
  return this;
};

module.exports = DivOptions;