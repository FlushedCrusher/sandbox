/*
 * Element base class
 * 
 */
// Toggle.prototype = Object.create(Element.prototype);
function Element(type) {
  'use strict';
  this.element = type ? document.createElement(type) : null;
}
/*
 * Element display modifiers
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
 * Element visibility modifiers
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
 * Element children modifiers
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
 * Element parent modifiers
 */
Element.prototype.addToParent = function(component) {
  'use strict';
  var elem = this.element.parentElemen | this.element;
  elem.appendChild(component);
  return this;
};
Element.prototype.removeFromParent = function(component) {
  'use strict';
  var elem = this.element.parentElement | this.element;
  elem.removeChild(component);
  return this;
};

module.exports = Element;