/**
 * Options for Element element wrapper
 * 
 * @returns {ElementOptions}
 */

function ElementOptions() {
  'use strict';
  this.textContent = null;
  this.template = null;
  this.events = null;
  this.style = null;
  this.attributes = [];
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
ElementOptions.prototype.setAttribute = function(_attribute) {
  'use strict';
  this.attributes.push(_attribute);
  return this;
};
ElementOptions.prototype.getAttributes = function() {
  'use strict';
  return this.attributes;
};
ElementOptions.prototype.clone = function() {
  'use strict';
  var clone = this._assign(this);
  return clone;
};
ElementOptions.prototype._assign = function(obj) {
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
        temp[key] = self._assign(obj[key]);
    }
    return temp;
};

module.exports = ElementOptions;