/**
 * Top Filter
 * @name Container
 */
(function (root, construct) {
    'use strict';
    if (typeof module === 'object' && module.exports) {

        require("./css/style.css");

        var TopFilterOptions = require("./_default/options.js");
        var TopFilterControl = require("./components/control.js");
        var TopFilterPickList = require("./components/pickList.js");

        module.exports = construct(
            TopFilterOptions,
            TopFilterControl,
            TopFilterPickList,
            StateMachine
        );
    }
    else {
        root.TopFilter = construct(
            root.TopFilterOptions,
            root.TopFilterControl,
            root.TopFilterPickList,
            root.StateMachine
        );
    }
}(this, function (
    TopFilterOptions,
    TopFilterControl,
    TopFilterPickList,
    StateMachine
) {
    'use strict';

    function TopFilter(options) {
        var me = this;
        me.Control = TopFilterControl;
        me.PickList = TopFilterPickList;
        me.controlCache = new Map();
        me.pickListCache = new Map();
        me.defualtOptions = TopFilterOptions;
        me.options = options;
        me.defualtOptions.fsm.methods = {
            onCreate: me._create.bind(me),
            onBuild: me._build.bind(me),
            onDraw: me._draw.bind(me),
            onUpdate: me._update.bind(me),
            onDelete: me._delete.bind(me)
        };
        me.fsm = new StateMachine(me.defualtOptions.fsm);
        return me;
    }

    TopFilter.ACTIONS = Object.freeze({
        CREATE: Symbol("create"),
        BUILD: Symbol("build"),
        DRAW: Symbol("draw"),
        UPDATE: Symbol("update"),
        DELETE: Symbol("delete")
    });

    TopFilter.prototype.apply = function (options) {
        var me = this;
        var _options = options || {};
        me.options = $.extend(
            true, {},
            me.defualtOptions,
            me.options,
            _options
        );

        switch (me.options.action) {
            case TopFilter.ACTIONS.CREATE:
                me.fsm.create();
                break;
            case TopFilter.ACTIONS.BUILD:
                me.fsm.build();
                break;
            case TopFilter.ACTIONS.DRAW:
                me.fsm.draw();
                break;
            case TopFilter.ACTIONS.UPDATE:
                me.fsm.update();
                break;
            case TopFilter.ACTIONS.DELETE:
                me.fsm.delete();
                break;
            default:
                break;
        }
        return me;
    };

    TopFilter.prototype._create = function () {
        var me = this;
        me.root = document.getElementById(me.options.root) || document.body;
        me.element = document.createElement('div');
        me.controls = document.createElement('div');
        me.controls.style.height = "inherit";
        me.controls.classList.add("btn-group");
        me.controls.setAttribute("role", "group");
        me.controls.setAttribute("aria-label", "Top Filter Button Group");
        me.controls.style.float = me.options.reverseLayout ? "left" : "right";
        me.pickLists = document.createElement('div');
        me.pickLists.style.height = "inherit";
        me.pickLists.style.display = "flex";
        me.pickLists.style.flexDirection = "row";
        me.pickLists.style.float = me.options.reverseLayout ? "right" : "left";
        me.options.controls.forEach((_control) => {
            me.controlCache.set(_control.id, new me.Control(_control));
            me.controlCache.get(_control.id).apply($.extend(true, {}, _control, {
                action: me.Control.ACTIONS.CREATE
            }));
        });
        me.options.pickLists.forEach((_pickList) => {
            me.pickListCache.set(_pickList.id, new me.PickList(_pickList));
            me.pickListCache.get(_pickList.id).apply($.extend(true, {}, _pickList, {
                action: me.PickList.ACTIONS.CREATE
            }));
        });
        
        me._update();
    };

    TopFilter.prototype._build = function () {
        var me = this;
        me.controlCache.forEach((_control) => {
            me.controls.appendChild(_control.element);
        });
        me.pickListCache.forEach((_pickList) => {
            me.pickLists.appendChild(_pickList.element);
        });
        me.element.appendChild(me.controls);
        me.element.appendChild(me.pickLists);
    };

    TopFilter.prototype._draw = function () {
        var me = this;
        me.root.appendChild(me.element);
    };

    TopFilter.prototype._update = function () {
        var me = this;
        me.element.id = me.options.id;
        me.element.style.width = me.options.width;
        me.element.style.height = me.options.height;
        me.element.className = "";
        me.element.classList.add(...me.options.classes);

        me.options.controls.forEach((_control) => {
            me.controlCache.get(_control.id).apply($.extend(true, {}, _control, {
                action: me.Control.ACTIONS.UPDATE
            }));
        });
        me.options.pickLists.forEach((_pickList) => {
            me.pickListCache.get(_pickList.id).apply($.extend(true, {}, _pickList, {
                action: me.PickList.ACTIONS.UPDATE
            }));
        });
    };

    TopFilter.prototype._delete = function () {
        var me = this;
        me.element.remove();
        delete me.element;
        me.controlCache.clear();
        m.pickListCache.clear();
    };

    return TopFilter;
}));