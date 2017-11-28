/**
 * Top Filter
 * @name PickList
 */
(function (root, construct) {
    'use strict';
    if (typeof module === 'object' && module.exports) {
        var TopFilterSelectionGroup = require("./selection.js");
        module.exports = construct();
    }
    else {
        root.TopFilterPickList = construct(
            root.TopFilterSelectionGroup
        );
    }
}(this, function (
    TopFilterSelectionGroup
) {
    'use strict';

    function PickList(options) {
        var me = this;
        me.SelectionGroup = TopFilterSelectionGroup
        me.selectionGroupCache = new Map();
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
            true, {},
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
        me.element = document.createElement("div");
        me.element.style.height = "inherit";
        me.button = document.createElement("button");
        me.button.style.height = "inherit";
        me.button.classList.add("btn", "btn-default", "dropdown-toggle");
        me.button.setAttribute("data-toggle", "dropdown");
        me.caret = document.createElement("span");
        me.caret.classList.add("caret");
        me.content = document.createElement("ul");
        me.content.style.padding = "10px";
        me.content.classList.add("dropdown-menu");
        me.content.setAttribute("role", "menu");
        me.item = document.createElement("li");
        me.container = document.createElement("div");
        me.container.classList.add("container");
        me.options.selectionGroups.forEach((_group) => {
            me.selectionGroupCache.set(_group.id, new me.SelectionGroup(_group));
            me.selectionGroupCache.get(_group.id).apply($.extend(true, {}, _group, {
                action: me.SelectionGroup.ACTIONS.CREATE
            }));
        });
        me._update()
        me._build();
    };

    PickList.prototype._build = function() {
        var me = this;
        me.selectionGroupCache.forEach((_group) => {
            me.container.appendChild(_group.element);
        });
        me.button.textContent = me.options.name + " ";
        me.button.appendChild(me.caret);
        me.element.appendChild(me.button);
        me.content.appendChild(me.item);
        me.item.appendChild(me.container);
        me.element.appendChild(me.content);
    };

    PickList.prototype._update = function () {
        var me = this;
        me.element.className = "";
        me.element.classList.add(...me.options.classes);
        me.button.id = me.options.id;
        me.content.setAttribute("aria-labelledby", me.options.id);
        me.options.selectionGroups.forEach((_group) => {
            me.selectionGroupCache.get(_group.id).apply($.extend(true, {}, _group, {
                action: me.SelectionGroup.ACTIONS.UPDATE
            }));
        });
    };

    PickList.prototype._delete = function () {
        var me = this;
        me.element.remove();
        delete me.element;
    };

    return PickList;

}));