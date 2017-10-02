/**
 * Top Filter
 * @name Control
 * 
 *  <button type="button" class="btn btn-default">Middle</button>
 * 
 */
(function (root, construct) {
  'use strict';
  if (typeof module === 'object' && module.exports) {

    module.exports = construct();
  }
  else {
    root.TopFilterControl = construct();
  }
}(this, function () {
  'use strict';

  function Control(options) {
    var me = this;
    me.options = options;
  }

  Control.ACTIONS = Object.freeze({
    CREATE: Symbol("create"),
    UPDATE: Symbol("update"),
    DELETE: Symbol("delete")
  });

  Control.prototype.apply = function (options) {
    var me = this;
    var _options = options || {};
    me.options = $.extend(
      true,
      {},
      me.options,
      _options
    );
    switch (me.options.action) {
      case Control.ACTIONS.CREATE:
        me._create();
        break;
      case Control.ACTIONS.UPDATE:
        me._update();
        break;
      case Control.ACTIONS.DELETE:
        me._delete();
        break;
      default:
        break;
    }
  };

  Control.prototype._create = function () {
    var me = this;
    me.element = document.createElement("button");
    me.element.type = "button";
    me.element.style.height = "inherit";
    me._update();
  };

  Control.prototype._update = function () {
    var me = this;
    me.element.id = me.options.id;
    me.element.style.width = me.options.width;
    me.element.innerText = me.options.name.trim();
    me.element.classList.add(...me.options.classes);
    me.element.classList.toggle("disabled", !me.options.enabled);
    me.element.onclick = me.options.callback;
  };
  Control.prototype._delete = function () {
    var me = this;
    me.element.remove();
    delete me.element;
  };

  return Control;

}));