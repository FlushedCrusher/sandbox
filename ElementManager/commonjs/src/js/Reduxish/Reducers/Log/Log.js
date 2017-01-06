function Log(store) {
  'use strict';
  this.store = store;
}
Log.prototype.execute = function() {
  'use strict';
  console.debug(
    "|- Previous State -|-------- Action --------|- Current State -| \n" + 
    "| " + JSON.stringify(this.store.getPreviousState()) + ",                " + 
    JSON.stringify(this.store.getLastAction()) + ",     " + 
    JSON.stringify(this.store.getState())
  );
};

module.exports = Log;