/**
 * Options for Table element wrapper
 * 
 * @requires {ElementOptions}
 * @augments {ElementOptions}
 * @returns {TableOptions}
 */

var ElementOptions = require('../Element/ElementOptions.js');

function TableOptions() {
  'use strict';
  ElementOptions.call(this);
  this.type = 'table';
  this.rows = 0;
  this.columns = 0;
  this.header = null;
}
TableOptions.prototype = Object.create(ElementOptions.prototype);
TableOptions.prototype.setRows = function(rows) {
  'use strict';
  this.rows = rows;
  return this;
};
TableOptions.prototype.getRows = function() {
  'use strict';
  return this.rows;
};
TableOptions.prototype.setColumns = function(columns) {
  'use strict';
  this.columns = columns;
  return this;
};
TableOptions.prototype.getColumns = function() {
  'use strict';
  return this.columns;
};
TableOptions.prototype.setHeader = function(header) {
  'use strict';
  this.header = header;
  return this;
};
TableOptions.prototype.getHeader = function() {
  'use strict';
  return this.header;
};

module.exports = TableOptions;