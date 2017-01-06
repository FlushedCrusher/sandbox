function KeyDown(store) {
  'use strict';
  this.store = store;
}
KeyDown.prototype.execute = function(event) {
  'use strict';
  switch(event.which) {
    case 37:
      this.store.dispatch({
        type: 'SHIFT_LEFT'
      });
      break;
    case 38:
      this.store.dispatch({
        type: 'INCREMENT'
      });
      break;
    case 39:
      this.store.dispatch({
        type: 'SHIFT_RIGHT'
      });
      break;
    case 40:
      this.store.dispatch({
        type: 'DECREMENT'
      });
      break;
    default:
      break;
  }
};

module.exports = KeyDown;