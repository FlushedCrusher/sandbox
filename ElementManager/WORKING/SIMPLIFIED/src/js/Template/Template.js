function Template() {
  'use strict';
  this.cache = new Map();
}
Template.prototype.set = function(name, template) {
  'use strict';
  this.cache.set(name, template);
  return this;
};
Template.prototype.get = function(name) {
  'use strict';
  return this.cache.get(name);
};

module.exports = Template;