/**
 * Reduxish
 * 
 * @requires {Store}
 * @returns {Reduxish}
 */

var Store = require('./Store.js');

function Reduxish () {
  'use strict';
  this.store = undefined;
}
Reduxish.prototype.createStore = function(reducer) {
  'use strict';
  this.store = new Store(reducer);
  this.store.dispatch({});
  return this.store;
};

module.exports = Reduxish;