/**
 * Dom Element wrapper
 * 
 * @returns {Element}
 */

function Element(template) {
  'use strict';
  this.template = template;
  this.assign(this.template);
}
Element.prototype.assign = function(template) {
  'use strict';
  this.children = [];
  this.operator = angular.element(template);
  this.element = this.operator[0];
  return this;
};
// Children Modifiers //
Element.prototype.getChildren = function() {
  'use strict';
  return this.operator.children();
};
Element.prototype.addChild = function(component) {
  'use strict';
  this.children.push(component);
  return this;
};
// Class Modifiers //
Element.prototype.hasClass = function(_class) {
  'use strict';
  return this.operator.hasClass(_class);
};
Element.prototype.addClass = function(_class) {
  'use strict';
  this.operator.addClass(_class);
  return this;
};
Element.prototype.removeClass = function(_class) {
  'use strict';
  this.operator.removeClass(_class);
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
// Attribute Modifiers //
Element.prototype.getAttribute = function(attribute) {
  'use strict';
  return this.operator.attr(attribute);
};
Element.prototype.hasAttribute = function(attribute) {
  'use strict';
  return this.getAttribute(attribute) ? true : false; // eslint-disable-line no-unneeded-ternary
};
Element.prototype.setAttribute = function(name, value) {
  'use strict';
  this.operator.attr(name, value);
  return this;
};
Element.prototype.removeAttribute = function(key) {
  'use strict';
  this.operator.removeAttr(key);
  return this;
};
Element.prototype.setAttributes = function(_attributes) {
  'use strict';
  var self = this;
  _attributes.forEach(function(_attribute) {
    self.setAttribute(_attribute.name, _attribute.value);
  });
  return this;
};
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
};
// Text Content Modifiers //
Element.prototype.setTextContent = function(content) {
  'use strict';
  this.operator.text(content);
  return this;
};

module.exports = Element;