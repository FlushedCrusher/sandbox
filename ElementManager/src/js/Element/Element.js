/**
 * Dom Element wrapper
 * 
 * @requires {EventList}
 * @param {String} type Element type
 * @returns {Element}
 */

var EventList = require('../Events/EventList.js');

function Element(type) {
  'use strict';
  this.element = type ? document.createElement(type) : null;
}
Element.prototype.show = function() {
  'use strict';
  var elem = this.element;
  elem.style.display = 'block';
  return this;
};
Element.prototype.hide = function() {
  'use strict';
  var elem = this.element;
  elem.style.display = 'none';
  return this;
};
Element.prototype.toggleDisplay = function() {
  'use strict';
  var elem = this.element;
  elem.style.display = (elem.style.display === 'none') ? 'block' : 'none';
  return this;
};
Element.prototype.visible = function() {
  'use strict';
  var elem = this.element;
  elem.style.visibility = 'visible';
  return this;
};
Element.prototype.invisible = function() {
  'use strict';
  var elem = this.element;
  elem.style.visibility = 'hidden';
  return this;
};
Element.prototype.toggleVisibility = function() {
  'use strict';
  var elem = this.element;
  elem.style.visibility = (elem.style.visibility === 'hidden') ? 'visible' : 'hidden';
  return this;
};
Element.prototype.addChild = function(component) {
  'use strict';
  var elem = this.element;
  elem.appendChild(component);
  return this;
};
Element.prototype.removeChild = function(component) {
  'use strict';
  var elem = this.element;
  elem.removeChild(component);
  return this;
};
Element.prototype.addToParent = function(component) {
  'use strict';
  var elem = this.element.parentElement || this.element;
  elem.appendChild(component);
  return this;
};
Element.prototype.removeFromParent = function(component) {
  'use strict';
  var elem = this.element.parentElement || this.element;
  elem.removeChild(component);
  return this;
};
Element.prototype.setEvent = function(key, action) {
  'use strict';
  if(this.element[key] !== undefined && EventList.includes(key)) { 
    this.element[key] = action;
  }
};
Element.prototype.removeEvent = function(key) {
  'use strict';
  if(this.element[key] !== undefined && EventList.includes(key)) { 
    this.element[key] = null;
  }
};
Element.prototype.setEvents = function(events) {
  'use strict';
  var self = this;
  for (var key in events) {
    if (!events.hasOwnProperty(key)) {
      continue;
    }
    var action = events[key];
    self.setEvent(key, action);
  }
};
Element.prototype.setStyle = function(style) {
  'use strict';
  if(style.cssText) {
    this.element.style.cssText = style.cssText;
  }
  return this;
};
Element.prototype.clearStyle = function() {
  'use strict';
  this.element.style.cssText = "";
};

module.exports = Element;