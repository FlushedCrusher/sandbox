/**
 * Top Filter
 * @name PickList
 */
(function (root, construct) {
  'use strict';
  if (typeof module === 'object' && module.exports) {

    module.exports = construct();
  }
  else {
    root.TopFilterPickList = construct();
  }
}(this, function () {
  'use strict';

  function PickList(options) {
    var me = this;
    me.options = options;
  }

  PickList.ACTIONS = Object.freeze({
    CREATE: Symbol("create"),
    UPDATE: Symbol("update"),
    DELETE: Symbol("delete")
  });

  PickList.prototype.apply = function (options) {
    var me = this;
    var _options = options || {};
    me.options = $.extend(
      true,
      {},
      me.options,
      _options
    );
    switch (me.options.action) {
      case PickList.ACTIONS.CREATE:
        me._create();
        break;
      case PickList.ACTIONS.UPDATE:
        me._update();
        break;
      case PickList.ACTIONS.DELETE:
        me._delete();
        break;
      default:
        break;
    }
  };

  PickList.prototype._create = function () {
    var me = this;

    // <div class="dropdown">
    //   <button class="btn btn-default dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Tutorials
    //    <span class="caret"></span>
    //    </button>
    //   <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
    //     <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
    //     <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
    //     <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
    //     <li role="presentation" class="divider"></li>
    //     <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li>
    //   </ul>
    // </div>

    me.element = document.createElement("div");
    me.element.classList.add("dropdown");
    me.element.style.height = "inherit";

    me.button = document.createElement("button");
    me.button.classList.add(...["btn", "btn-default", "dropdown-toggle"]);
    me.button.setAttribute("data-toggle", "dropdown");

    me.caret = document.createElement("span");
    me.caret.classList.add("caret");

    me._update()
  };

  PickList.prototype._update = function () {
    var me = this;

  };

  PickList.prototype._delete = function () {
    var me = this;
    me.element.remove();
    delete me.element;
  };

  return PickList;

}));