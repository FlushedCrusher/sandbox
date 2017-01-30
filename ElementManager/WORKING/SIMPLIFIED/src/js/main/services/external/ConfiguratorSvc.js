
function ConfiguratorSvc($injector) {
  'use strict';
  this.CONFIG = $injector.get('Config');
  this._timeout = $injector.get('$timeout');
  this._location = $injector.get('$location');
  this._http = $injector.get('$http');
  this._q = $injector.get('$q');

  this.CONST = this.CONFIG.CONFIGURATOR_SVC;
  this.isTest = this.CONST.TEST || this.CONFIG.TEST.VALUE;
  this.baseURL = this._location.protocol() + '://' + this._location.host();
  this.URL = this.baseURL + this.CONST.URL;
  this.cache = new Map();
}
ConfiguratorSvc.prototype.get = function(key) {
  'use strict';
  if(this.isTest) {
    return this._timeout(function() {
      return key;
    }, 5000);
  }
  var self = this, request = this._q.defer();
  this._http.get(this.getRequestUrl(key))
    .success(
      function(response) {
        self.set(key, response);
        request.resolve('success');
      }
    )
    .error(
      function(error) {
        request.resolve('error');
      }
    );
  return request.promise;;
};
ConfiguratorSvc.prototype.all = function(keys) {
  'use strict';
  var self = this, results = [];
  keys.forEach(function(key) {
    results.push(self.getConfig(key));
  });
  return this_q.all(results);
};
ConfiguratorSvc.prototype.getRequestUrl = function(key) {
  'use strict';
  return this.URL.replace('{{configKey}}', key);
};

module.exports = ConfiguratorSvc;