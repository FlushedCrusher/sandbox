/**
 * Top Filter
 * @name Selection
 */
(function (root, construct) {
    'use strict';
    if (typeof module === 'object' && module.exports) {

        module.exports = construct();
    }
    else {
        root.TopFilterSelection = construct();
    }
}(this, function () {
    'use strict';

    function Selection(options) {
        var me = this;
        me.options = options;
    }

    Selection.ACTIONS = Object.freeze({
        CREATE: Symbol("create"),
        UPDATE: Symbol("update"),
        DELETE: Symbol("delete")
    });

    Selection.prototype.apply = function (options) {
        var me = this;
        var _options = options || {};
        me.options = $.extend(
            true,
            {},
            me.options,
            _options
        );
        switch (me.options.action) {
            case Selection.ACTIONS.CREATE:
                me._create();
                break;
            case Selection.ACTIONS.UPDATE:
                me._update();
                break;
            case Selection.ACTIONS.DELETE:
                me._delete();
                break;
            default:
                break;
        }
    };

    Selection.prototype._create = function () {
        var me = this;

        me.element = document.createElement("div");
        me.element.classList.add("control-group")

        var _row = document.createElement("div");
        _row.classList.add("controls", "span2");

        var _wrapper = document.createElement("label");
        _wrapper.classList.add("checkbox");

        var _option = document.createElement("input");
        _option.type = "checkbox";
        _option.id = option.id;
        _option.value = option.value;
        _option.name = option.name;

        me._update()
    };

    Selection.prototype._update = function () {
        var me = this;

    };

    Selection.prototype._delete = function () {
        var me = this;
        me.element.remove();
        delete me.element;
    };

    return Selection;

}));