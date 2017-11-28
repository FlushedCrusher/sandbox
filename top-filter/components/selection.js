/**
 * Top Filter
 * @name SelectionGroup
 */
(function (root, construct) {
    'use strict';
    if (typeof module === 'object' && module.exports) {

        module.exports = construct();
    }
    else {
        root.TopFilterSelectionGroup = construct();
    }
}(this, function () {
    'use strict';

    function SelectionGroup(options) {
        var me = this;
        me.options = options;
    }

    SelectionGroup.ACTIONS = Object.freeze({
        CREATE: Symbol("create"),
        UPDATE: Symbol("update"),
        DELETE: Symbol("delete")
    });

    SelectionGroup.prototype.apply = function (options) {
        var me = this;
        var _options = options || {};
        me.options = $.extend(
            true, {},
            me.options,
            _options
        );
        switch (me.options.action) {
            case SelectionGroup.ACTIONS.CREATE:
                me._create();
                break;
            case SelectionGroup.ACTIONS.UPDATE:
                me._update();
                break;
            case SelectionGroup.ACTIONS.DELETE:
                me._delete();
                break;
            default:
                break;
        }
    };

    SelectionGroup.prototype._create = function () {
        var me = this;
        me.element = document.createElement("div");
        me.element.classList.add("control-group", "row");
        me._update();
    };

    SelectionGroup.prototype._update = function () {
        var me = this;
        me.rows = me._getRows();
        me.element.innerText = "";
        me.rows.forEach((_row) => {
            me.element.appendChild(_row);
        });
    };

    SelectionGroup.prototype._delete = function () {
        var me = this;
        me.element.remove();
        delete me.element;
    };

    SelectionGroup.prototype._getRows = function () {
        var me = this;
        var _rows = [];
        me.chunkArray(me.options.data, me.options.maxRows).forEach((_options) => {
            var _row = document.createElement("div");
            _row.classList.add("controls", "span2", "col-xs-6");
            _options.forEach((_option) => {
                var _wrapper = document.createElement("label");
                _wrapper.classList.add("checkbox");
                var _checkBox = document.createElement("input");
                _checkBox.type = "checkbox";
                _checkBox.id = _option.id;
                _checkBox.value = _option.value;
                _wrapper.appendChild(_checkBox);
                _wrapper.appendChild(document.createTextNode(_option.name));
                _row.appendChild(_wrapper);
            });
            _rows.push(_row);
        });
        return _rows;
    };

    SelectionGroup.prototype.chunkArray = function (myArray, chunk_size) {
        var results = [];
        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }
        return results;
    };

    return SelectionGroup;

}));