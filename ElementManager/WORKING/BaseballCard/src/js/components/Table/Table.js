/**
 * Basic Table element wrapper
 * 
 * @requires {Element}
 * @requires {ElementOptions}
 * @requires {TableOptions}
 * @augments {Element}
 * @param {TableOptions} options
 * @returns {Table}
 */

var Element = require('../Element/Element.js');
var ElementOptions = require('../Element/ElementOptions.js');
var TableOptions = require('./TableOptions.js');

function Table(options) {
  'use strict';

  this._options = options ? options : new TableOptions();
  Element.call(this, this._options);

  this.cellCache = [];
  this.cellTemplate =
    '<label for="{{#id}}" style="color: #bfbfbf;">{{#label}}</label>' +
    '<div class="{{#class}}">' +
    ' <p id="{{#id}}" name="{{#id}}">' +
    '   {{#content}}' +
    ' </p>' +
    '</div>';

  this.create(this._options);

}
Table.prototype = Object.create(Element.prototype);
Table.prototype.create = function(options) {
  'use strict';
  if(options.rows && options.columns) {
    this.body = this._createTable(options.rows, options.columns);
    this.addChild(this.body);
  } else {
    this.body = this._createBody();
  }
  if(options.header && options.columns) {
    this.header = this._createHeader(options.header, options.columns);
    this.body.addFirstChild(this.header);
  }
  return this;
};
Table.prototype._createTable = function(rows, columns) {
  'use strict';
  var body = this._createBody();
  for(var i = 0; i < rows; i++) {
    var row = this._createRow();
    for(var j = 0; j < columns; j++ ) {
      var cell = this._createCell();
      row.addChild(cell);
      this.cellCache.push(cell);
    }
    body.addChild(row);
  }
  return body;
};
Table.prototype._createHeader = function(text, span) {
  'use strict';
  var header = this._createRow();
  var headerCellOptions = new ElementOptions();
  headerCellOptions
    .setAttribute({
      key: 'colspan',
      value: span
    })
    .setType('td');
  var headerText = new Element({
    type: 'i',
    textContent: text
  });
  var headerCell = this._createCell(headerCellOptions);
  headerCell.addChild(headerText);
  header.addChild(headerCell);
  return header;
};
Table.prototype._createBody = function(_options) {
  'use strict';
  var body = _options ? new Element(_options) : new Element('tbody');
  return body;
};
Table.prototype._createRow = function(_options) {
  'use strict';
  var row = _options ? new Element(_options) : new Element('tr');
  return row;
};
Table.prototype._createCell = function(_options) {
  'use strict';
  var cell = _options ? new Element(_options) : new Element('td');
  return cell;
};
Table.prototype.setCellContent = function(data) {
  'use strict';
  this._createCellContent(data);
  return this;
};
Table.prototype._createCellContent = function(data) {
  'use strict';
  var i = 0;
  while(data.length <= this.cellCache.length && data.length > i) {
    this.cellCache[i].setTemplate(this._processCellTemplate(data[i]));
    i++;
  }
  return this;
};
Table.prototype._processCellTemplate = function(data) {
  'use strict';
  var template = this.cellTemplate;
  data.id = data.label.toLowerCase();
  var keys = Object.keys(data);
  keys.forEach(function(key) {
    var _key = '{{#' + key + '}}',
      pattern = new RegExp(_key, 'g');
    template = template.replace(pattern, data[key]);
  });
  return template;
};

module.exports = Table;