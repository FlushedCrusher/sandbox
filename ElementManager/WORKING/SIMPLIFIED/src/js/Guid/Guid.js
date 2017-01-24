/**
 * Guid generator and hash
 * 
 * @returns {Guid}
 */

function Guid() {
  'use strict';
  this.hash = new Map();
}
/*
 * Generate a unique guid string
 * 
 * @returns {string} guid
 */
Guid.prototype.create = function() {
  'use strict';
  var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); // eslint-disable-line eqeqeq
    return v.toString(16);
  });
  if(this.hash.has(guid)) {
    guid = this.create();
  } else {
    this.hash.set(guid, guid);
  }
  return guid;
};

module.exports = Guid;