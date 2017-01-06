function Render(store) {
  'use strict';
  this.store = store;
}
Render.prototype.execute = function() {
  'use strict';
  document.body.innerText = this.store.getState();
};

module.exports = Render;