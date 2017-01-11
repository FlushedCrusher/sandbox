/**
 * Options for Element element wrapper
 * 
 * @returns {ElementOptions}
 */

function ElementOptions() {
  'use strict';
  this.angularTemplate = null;
  this.textContent = null;
  this.template = null;
  this.events = null;
  this.style = null;
  this.classList = [];
}
ElementOptions.prototype.getTextContent = function() {
  'use strict';
  return this.textContent;
};
ElementOptions.prototype.setTextContent = function(content) {
  'use strict';
  this.textContent = content;
  return this;
};
ElementOptions.prototype.getAngularTemplate = function() {
  'use strict';
  return this.angularTemplate;
};
ElementOptions.prototype.setAngularTemplate = function(content) {
  'use strict';
  this.angularTemplate = content;
  return this;
};
ElementOptions.prototype.getTemplate = function() {
  'use strict';
  return this.template;
};
ElementOptions.prototype.setTemplate = function(content) {
  'use strict';
  this.template = content;
  return this;
};
ElementOptions.prototype.getEvents = function() {
  'use strict';
  return this.events;
};
ElementOptions.prototype.setEvents = function(content) {
  'use strict';
  this.events = content;
  return this;
};
ElementOptions.prototype.getStyle = function() {
  'use strict';
  return this.style;
};
ElementOptions.prototype.setStyle = function(content) {
  'use strict';
  this.style = content;
  return this;
};
ElementOptions.prototype.addClass = function(_class) {
  'use strict';
  this.classList.push(_class);
  return this;
};
ElementOptions.prototype.getClasses = function() {
  'use strict';
  return this.classList;
};

module.exports = ElementOptions;