/** ----------------------------------------------------------------------------
 * Dom Element wrapper
 * @module lib/Element/Element
 * @param {string | Object | HTMLElement} template
 * @exports {lib/Element/Element}
 * -------------------------------------------------------------------------- */

/**
 * @typedef {Object} attribute
 * @property {string} name Attribute name
 * @property {string} value Sttribute value
 */

/**
 * @constructor
 * @alias module:lib/Element/Element
 */
function Element(template) {
  'use strict';
  this.template = template;
  this.assign(this.template);
}
/** Assign object attributes
 * @param {string | Object | HTMLElement} template
 * @returns {Element}
 */
Element.prototype.assign = function(template) {
  'use strict';
  this.children = [];
  this.operator = angular.element(template);
  this.element = this.operator[0];
  return this;
};
/** Return single angular element of object element children
 * @returns {angular.element}
 */
Element.prototype.getChildren = function() {
  'use strict';
  return this.operator.children();
};
/** Add an angular element to object children array
 * @param {Element} component
 * @returns {Element}
 */
Element.prototype.addChild = function(component) {
  'use strict';
  this.children.push(component);
  return this;
};
/** Check if object element has a class
 * @param {string} _class
 * @returns {boolean}
 */
Element.prototype.hasClass = function(_class) {
  'use strict';
  return this.operator.hasClass(_class);
};
/** Add a class to object element
 * @param {string} _class
 * @returns {Element}
 */
Element.prototype.addClass = function(_class) {
  'use strict';
  this.operator.addClass(_class);
  return this;
};
/** Remove a class from object element
 * @param {string} _class
 * @returns {Element}
 */
Element.prototype.removeClass = function(_class) {
  'use strict';
  this.operator.removeClass(_class);
  return this;
};
/** Add many calsses to object element
 * @param {string[]} _classList
 * @returns {Element}
 */
Element.prototype.addClasses = function(_classList) {
  'use strict';
  var self = this;
  _classList.forEach(function(_class) {
    self.addClass(_class);
  });
  return this;
};
/** Remove many calsses from object element
 * @param {string[]} _classList
 * @returns {Element}
 */
Element.prototype.removeClasses = function(_classList) {
  'use strict';
  var self = this;
  _classList.forEach(function(_class) {
    self.removeClass(_class);
  });
  return this;
};
/** Remove all classes from object element
 * @returns {Element}
 */
Element.prototype.clearClasses = function() {
  'use strict';
  this.element.classList = "";
  return this;
};
/** Get an attribute from object element
 * @param {string} attribute
 * @returns {string}
 */
Element.prototype.getAttribute = function(attribute) {
  'use strict';
  return this.operator.attr(attribute);
};
/** heck if attribute exists for object element
 * @param {string} attribute
 * @returns {boolean}
 */
Element.prototype.hasAttribute = function(attribute) {
  'use strict';
  return this.getAttribute(attribute) ? true : false; // eslint-disable-line no-unneeded-ternary
};
/** Set object element attribute
 * @param {string} name
 * @param {string} value
 * @returns {Element}
 */
Element.prototype.setAttribute = function(name, value) {
  'use strict';
  this.operator.attr(name, value);
  return this;
};
/** Remove object element attribute
 * @param {string} name
 * @returns {Element}
 */
Element.prototype.removeAttribute = function(name) {
  'use strict';
  this.operator.removeAttr(name);
  return this;
};
/** Set many object element attributes
 * @param {attribute[]} _attributes
 * @returns {Element}
 */
Element.prototype.setAttributes = function(_attributes) {
  'use strict';
  var self = this;
  _attributes.forEach(function(_attribute) {
    self.setAttribute(_attribute.name, _attribute.value);
  });
  return this;
};
/** Remove all object element attributes
 * @returns {Element}
 */
Element.prototype.clearAttributes = function() {
  'use strict';
  var i = 0,
    _attrs = this.element.attributes;
  while(_attrs.length > i) {
    var key = _attrs[i].name;
    if(key === 'class' || key === 'style') {
      i++;
      continue;
    }
    this.removeAttribute(key);
  }
  return this;
};
/** Set object element text content
 * @param {string} content
 * @returns {Element}
 */
Element.prototype.setTextContent = function(content) {
  'use strict';
  this.operator.text(content);
  return this;
};

module.exports = Element;