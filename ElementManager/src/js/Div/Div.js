var Element = require('../Element/Element.js');

function Div(options) {
  'use strict';
  Element.call(this, 'div');
  if(options) {
    this.setTextContent(options.textContent || "");
    this.setEvents(options.events || {});
  }
  
}
Div.prototype = Object.create(Element.prototype);
Div.prototype.setTextContent = function(content) {
  'use strict';
  this.element.textContent = content;
  return this;
};

module.exports = Div;