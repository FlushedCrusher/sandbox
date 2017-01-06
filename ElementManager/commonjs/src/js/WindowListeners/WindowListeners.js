function WindowListeners() {
  'use strict';
}
WindowListeners.prototype.add = function(key, action) {
  'use strict';
  document.addEventListener(key, action, false);
  return this;
};

module.exports = WindowListeners;