/**
 * Basic Nav element wrapper
 * 
 * @requires {Element}
 * @requires {NavOptions}
 * @requires {Li}
 * @requires {LiOptions}
 * @requires {Link}
 * @requires {LinkOptions}
 * @requires {EventOptions}
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

  this.create();
}
Nav.prototype = Object.create(Element.prototype);
Nav.prototype.create = function() {
  'use strict';
  this._item_options
    .setAttribute({
      key: 'role',
      value: 'navigation'
    });
  this._item_link_options
    .setAttribute({
      key: 'href',
      value: ''
    });
};
Nav.prototype.addItems = function(items) {
  'use strict';
  var self = this;
  items.forEach(function(attrs) {
    self.addItem(attrs);
  });
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
  var itemOptions = this._item_options.clone();
  var linkOptions = this._item_link_options.clone();
  var linkEvents = this._item_events.clone();

  linkEvents
    .set('onclick', attrs.onClick || function() { alert('Nav Item clicked.'); });
  linkOptions
    .setTextContent(attrs.text || 'Unnamed')
    .setAttribute({
      key: 'ng-click',
      value: attrs.ngClick || ''
    })
    .setAttribute({
      key: 'data-index',
      value: this.children.length
    })
    .setEvents(linkEvents); 
  if(attrs.active) {
    itemOptions.addClass('active');
  }
  var _item = new Li(itemOptions);
  var _link = new Link(linkOptions);
  _item.addChild(_link);
  return _item;
};
Nav.prototype.setActive = function(item) {
  'use strict';
  var _item = this.children[item.dataset.index];
  this.children.forEach(function(child) {
    if(child._options.type !== 'li') {
      return;
    }
    child.removeClass('active');
  });
  _item.addClass('active');
};

module.exports = Nav;