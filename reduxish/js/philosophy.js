/*
 * Redux Philosophy
 */
 
// Store
function Store(reducer) {
  this.previousState
  this.state;
  this.lastAction;
  this.reducer = reducer;
  this.listeners = [];
}
Store.prototype.getState = function() {
  'use strict';
  return this.state;
};
Store.prototype.getPreviousState = function() {
  'use strict';
  return this.previousState;
};
Store.prototype.getLastAction = function() {
  'use strict';
  return this.lastAction;
};
Store.prototype.dispatch = function( action ) {
  'use strict';
  this.previousState =this.state;
  this.lastAction = Object.assign({}, action);
  this.state = this.reducer( this.state, action );
  this.listeners.forEach(function( callback ) {
    callback();
  });
};
Store.prototype.subscribe = function( callback ) {
  var self = this;
  this.listeners.push( callback );
  return function() {
    self.listeners = self.listeners.filter(function( l ) {
      l !== listener;
    })
  };
};

//Reduxish
function Reduxish () {}
Reduxish.prototype.createStore = function(reducer) {
  'use strict';
  
  this.store = new Store(reducer);
  this.store.dispatch({});
  return this.store;
};