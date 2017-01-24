/**
 * Dom Element wrapper
 * 
 * @requires {EventList}
 * @param {string | object} type Element type | Element options
 * @returns {Element}
 */

var ElementOptions = require('./ElementOptions.js');
var EventList = require('../Events/EventList.js');

function Element(options) {
  'use strict';
  this.options =
    options ?
      options :
      this.options ?
        this.options :
        new ElementOptions();
  this.assign(this.options);
}
/*
 * Assign options to the element
 * 
 * @param {object} options
 * @returns {Element}
 */
Element.prototype.assign = function(options) {
  'use strict';
  this.children = [];
  this.element =
    options.type ? 
      document.createElement(options.type) : 
      typeof options === 'string' ? 
        document.createElement(options) :
        document.createElement('div');
  if(options.template) {
    this.clearTemplate();
    this.setTemplate(options.template);
  } else if(options.textContent){
    this.clearTextContent();
    this.setTextContent(options.textContent);
  }
  if(options.events) {
    this.clearEvents();
    this.setEvents(options.events);
  }
  if(options.style) {
    this.clearStyles();
    this.setStyles(options.style);
  }
  if(options.classList) {
    this.clearClasses();
    this.addClasses(options.classList);
  }
  if(options.attributes) {
    this.clearAttributes();
    this.setAttributes(options.attributes);
  }
  return this;
};
// Element inner content modifiers
Element.prototype.setTemplate = function(content) {
  'use strict';
  this.element.innerHTML = content;
  return this;
};
Element.prototype.clearTemplate = function() {
  'use strict';
  this.element.innerHTML = '';
  return this;
};
Element.prototype.setTextContent = function(content) {
  'use strict';
  this.element.textContent = content;
  return this;
};
Element.prototype.clearTextContent = function() {
  'use strict';
  this.element.textContent = '';
  return this;
};
// Display modifiers
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
// Visibility modifiers
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
// Object child modifiers
Element.prototype.addChild = function(component) {
  'use strict';
  this.children.push(component);
  return this;
};
Element.prototype.removeChild = function(component) { // eslint-disable-line no-unused-vars
  'use strict';
  // TODO: remove component from children array
  return this;
};
//  Append content to element
Element.prototype.append = function(content) {
  'use strict';
  this.element.append(content);
  return this;
};
// Element Child modifiers
Element.prototype.addElementChild = function(component) {
  'use strict';
  this.element.appendChild(component);
  return this;
};
Element.prototype.removeElementChild = function(component) {
  'use strict';
  var elem = this.element;
  elem.removeChild(component);
  return this;
};
// Element Sibling modifiers
Element.prototype.addElementSibling = function(component) {
  'use strict';
  var elem = this.element.parentElement || this.element;
  elem.appendChild(component);
  return this;
};
Element.prototype.removeElementSibling = function(component) {
  'use strict';
  var elem = this.element.parentElement || this.element;
  elem.removeChild(component);
  return this;
};
// Event modifiers
Element.prototype.hasEvent = function(key) {
  'use strict';
  return typeof this.element[key] === "function";
};
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
// Style modifiers
Element.prototype.hasStyle = function(style) {
  'use strict';
  return this.element.style[style] && this.element.style[style] !== '';
};
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
// Class modifiers
Element.prototype.hasClass = function(_class) {
  'use strict';
  return this.element.classList.contains(_class);
};
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
Element.prototype.removeClasses = function(_classList) {
  'use strict';
  var self = this;
  _classList.forEach(function(_class) {
    self.removeClass(_class);
  });
  return this;
};
Element.prototype.clearClasses = function() {
  'use strict';
  this.element.classList = "";
  return this;
};
// Abstract Attribute modifiers
Element.prototype.hasAttribute = function(attribute) {
  'use strict';
  return this.element.hasOwnProperty(attribute);
};
Element.prototype.setAttribute = function(key, value) {
  'use strict';
  this.element.setAttribute(key, value);
  return this;
};
Element.prototype.removeAttribute = function(key) {
  'use strict';
  this.element.removeAttribute(key);
  return this;
};
Element.prototype.setAttributes = function(_attributes) {
  'use strict';
  var self = this;
  _attributes.forEach(function(_attribute) {
    self.setAttribute(_attribute.key, _attribute.value);
  });
  return this;
};
Element.prototype.clearAttributes = function() {
  'use strict';
  var i = 0;
  while(this.element.attributes.length > i) {
    var key = this.element.attributes[0].name;
    if(key === 'class' || key === 'style') {
      i++;
      continue;
    }
    this.removeAttribute(this.element.attributes[0].name);
  }
};

module.exports = Element;