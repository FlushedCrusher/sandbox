/**
 * Basic Nav element wrapper
 * 
 * @requires {Element}
 * @requires {NavOptions}
 * @augments {Element}
 * @param {NavOptions} options
 * @returns {Nav}
 */

var Element = require('../Element/Element.js');
var NavOptions = require('./NavOptions.js');

var Li = require('../Li/Li.js');
var LiOptions = require('../Li/LiOptions.js');

var Link = require('../Link/Link.js');
var LinkOptions = require('../Link/LinkOptions.js');

var EventOptions = require('../Events/EventOptions.js');

function Nav(options) {
  'use strict';

  this._options = options ? options : new NavOptions();
  this._item_options = new LiOptions();
  this._item_link_options = new LinkOptions();
  this._item_events = new EventOptions();

  Element.call(this, this._options);

  if(this._options.template) {
    this.setTemplate(this._options.template);
  } else if(this._options.textContent){
    this.setTextContent(this._options.textContent);
  }
  if(this._options.src) {
    this.setSrc(this._options.src);
  }

  this.create();
}
Nav.prototype = Object.create(Element.prototype);
Nav.prototype.create = function() {
  'use strict';
  this._item_events
    .set('onclick', function() {
      alert('clicked!');
    });
  this._item_options
    .setAttribute({
      key: 'role',
      value: 'navigation'
    })
    .setEvents(this._item_events);
};
Nav.prototype.setTextContent = function(content) {
  'use strict';
  this.element.textContent = content;
  return this;
};
Nav.prototype.setTemplate = function(content) {
  'use strict';
  this.element.innerHTML = content;
  return this;
};
Nav.prototype.addItem = function(attrs) {
  'use strict';
  var _item = this.createItem(attrs);
  this.addChild(_item);
  return this;
};
Nav.prototype.createItem = function(attrs) {
  'use strict';
  var io = this._item_options.clone();
  var lo = this._item_link_options.clone();
  lo.setTextContent(attrs.text);
  var _item = new Li(io);
  var _link = new Link(lo);
  _item.addChild(_link);
  return _item;
};

module.exports = Nav;