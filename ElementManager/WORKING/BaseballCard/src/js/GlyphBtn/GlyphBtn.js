/**
 * Basic GlyphBtn element wrapper
 * 
 * @requires {Element}
 * @requires {GlyphBtnOptions}
 * @augments {Element}
 * @param {GlyphBtnOptions} options
 * @returns {GlyphBtn}
 */

var Element = require('../Element/Element.js');
var GlyphBtnOptions = require('./GlyphBtnOptions.js');

var Span = require('../Span/Span.js');
var SpanOptions = require('../Span/SpanOptions.js');

var StyleOptions = require('../Style/StyleOptions.js');
var EventOptions = require('../Events/EventOptions');

function GlyphBtn(options) {
  'use strict';

  this._options = options ? options : new GlyphBtnOptions();
  this._icon_options = new SpanOptions();
  this._icon_style = new StyleOptions();
  this._icon_events = new EventOptions();

  Element.call(this, this._options);

  if(this._options.template) {
    this.setTemplate(this._options.template);
  } else if(this._options.textContent){
    this.setTextContent(this._options.textContent);
  }
}
GlyphBtn.prototype = Object.create(Element.prototype);
GlyphBtn.prototype.create = function(attrs) {
  'use strict';
  if(attrs.add) {
    this.setIconAttributes(attrs.add);
  }
  if(attrs.style) {
    this.setIconStyle(attrs.style);
  }
  if(attrs.events) {
    this.setIconEvents(attrs.events);
  }
  if(attrs.callback) {
    this.setScopedCallback(attrs.callback);
  }
  this._icon_options
    .addClass(attrs.icon_package)
    .addClass(attrs.icon)
    .setStyle(this._icon_style)
    .setEvents(this._icon_events);
  var _icon = new Span(this._icon_options);
  this.addChild(_icon);
  return this;
};
GlyphBtn.prototype.setIconAttributes = function(_attrs) {
  'use strict';
  var self = this;
  _attrs.forEach(function(_attr) {
    self._icon_options.setAttribute(_attr);
  });
};
GlyphBtn.prototype.setIconStyle = function(_styles) {
  'use strict';
  var self = this;
  _styles.forEach(function(_style) {
    self._icon_style.set(_style.key, _style.value);
  });
};
GlyphBtn.prototype.setIconEvents = function(_events) {
  'use strict';
  var self = this;
  _events.forEach(function(_event) {
     self._icon_events.set(_event.key, _event.value);
  });
};
GlyphBtn.prototype.setScopedCallback = function(_callback) {
  'use strict';
  var self = this;
  var unscoped = this._icon_events.get('onclick');
  var newAction = function() {
    if(unscoped) {
      unscoped();
    }
    _callback.call(self.children[0]);
  };
  this._icon_events.set('onclick', newAction);
};
GlyphBtn.prototype.setTextContent = function(content) {
  'use strict';
  this.element.textContent = content;
  return this;
};
GlyphBtn.prototype.setTemplate = function(content) {
  'use strict';
  this.element.innerHTML = content;
  return this;
};

module.exports = GlyphBtn;