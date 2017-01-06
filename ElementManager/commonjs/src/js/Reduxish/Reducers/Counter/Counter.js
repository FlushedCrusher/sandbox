
var shiftLeft = require('./ShiftLeft.js');
var shiftRight = require('./ShiftRight.js');

function Counter( state, action ) {
  'use strict';
  
  var state = (typeof state !== 'undefined') ? state : 0;
  switch(action.type) {
    case 'SHIFT_LEFT':
      return shiftLeft(state);
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'SHIFT_RIGHT':
      return shiftRight(state);
    default:
      return state;
  }
};

module.exports = Counter;