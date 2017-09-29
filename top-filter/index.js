/**
 * Top Filter
 * @param {*} options 
 */
(function (root, construct) {
    'use strict';
    if (typeof module === 'object' && module.exports) {
        module.exports = construct;
    }
    else {
        root.TopFilter = construct;
    }
}(this, function (options) {
    'use strict';

    function isCommonJs() {
        return typeof module === "object";
    }

    function TopFilter(options) {
        isCommonJs() && require("./css/style.css");

        var me = this;

        this.element = document.createElement('div');
        this.element.id = options.id;
    }
    
    TopFilter.prototype.setOptions = function(options) {
        if(options) {
            this.options = options;
        } else {
            isCommonJs() && require("./_default/options.js");
        }

    };

    return TopFilter;
}));