/**
 * Dom Element wrapper
 * 
 * @requires {EventList}
 * @param {String} type Element type
 * @returns {Element}
 */

var EventList = require('../Events/EventList.js');

function Element(options) {
  'use strict';

  this.element =
    options.type ? 
      document.createElement(options.type) : 
      typeof options === 'string' ? 
        document.createElement(options) :
        null;

  if(options.events) {
    this.setEvents(options.events);
  }
  if(options.style) {
    this.setStyles(options.style);
  }
  if(options.classList) {
    this.addClasses(options.classList);
  }
}
/*
 * Display modifiers
 */
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
/*
 * Visibility modifiers
 */
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
/*
 * Child modifiers
 */
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
/*
 * Sibling modifiers
 */
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
/*
 * Event modifiers
 */
Element.prototype.setEvent = function(key, action) {
  'use strict';
  if(this.element[key] !== undefined && EventList.includes(key)) { 
    this.element[key] = action;
  }
  return this;
};
Element.prototype.removeEvent = function(key) {
  'use strict';
  if(this.element[key] !== undefined && EventList.includes(key)) { 
    this.element[key] = null;
  }
  return this;
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
  return this;
};
Element.prototype.clearEvents = function() {
  'use strict';
  var self = this;
  var _events = this.element;
  for (var key in _events) {
    if (!_events.hasOwnProperty(key) && !EventList.includes(key)) {
      continue;
    }
    self.removeEvent(key);
  }
  return this;
};
/*
 * Style modifiers
 */
Element.prototype.setStyle = function(key, style) {
  'use strict';
  this.element.style[key] = style;
  return this;
};
Element.prototype.removeStyle = function(style) {
  'use strict';
  var _styles = this.element.style;
  _styles[style] = null;
  return this;
};
Element.prototype.setStyles = function(styles) {
  'use strict';
  var self = this;
  for (var key in styles) {
    if (!styles.hasOwnProperty(key)) {
      continue;
    }
    var _style = styles[key];
    self.setStyle(key, _style);
  }
  return this;
};
Element.prototype.clearStyles = function() {
  'use strict';
  var self = this;
  var _styles = this.element.style;
  for (var style in _styles) {
    if (!_styles.hasOwnProperty(style)) {
      continue;
    }
    self.removeStyle(style);
  }
  return this;
};
/*
 * Class modifiers
 */
Element.prototype.addClass = function(_class) {
  'use strict';
  this.element.classList.add(_class);
  return this;
};
Element.prototype.removeClass = function(_class) {
  'use strict';
  this.element.classList.remove(_class);
  return this;
};
Element.prototype.addClasses = function(_classList) {
  'use strict';
  var self = this;
  _classList.forEach(function(_class) {
    self.addClass(_class);
  });
  return this;
};
Element.prototype.clearClasses = function() {
  'use strict';
  this.element.classList = "";
  return this;
};

module.exports = Element;