/**
 * Default Options
 */
(function (root, construct) {
    'use strict';
    if (typeof module === 'object' && module.exports) {
        module.exports = construct;
    }
    else {
        root.TopFilterOptions = construct();
    }
}(this, function () {
    'use strict';

    var fsm = {
        init: 'raw',
        transitions: [{
                name: 'create',
                from: ['raw', 'modified', 'deleted'],
                to: 'created'
            },
            {
                name: 'build',
                from: 'created',
                to: 'built'
            },
            {
                name: 'draw',
                from: ['built', 'modified'],
                to: 'modified'
            },
            {
                name: 'update',
                from: ['built', 'modified'],
                to: 'modified'
            },
            {
                name: 'delete',
                from: ['built', 'modified'],
                to: 'deleted'
            }
        ]
    };

    var controls = [{
            id: "go-button",
            name: "Go",
            width: "70px",
            enabled: true,
            classes: ["top-filter-button-style", "btn", "btn-default"],
            callback: () => {
                alert("You clicked a button!");
            }
        }
    ];

    var pickLists = [{
        id: "pick-list",
        name: "Picker",
        open: false,
        selectionGroups: [{
            clearCallback: () => {
                alert("You clicked a button!");
            },
            selectAllCallback: () => {
                alert("You clicked a button!");
            },
            maxRows: 4,
            data: [{
                    id: "opt-1",
                    name: "Option 1",
                    value: "Scrappy"
                },
                {
                    id: "opt-2",
                    name: "Option 2",
                    value: "Sophie"
                },
                {
                    id: "opt-3",
                    name: "Option 3",
                    value: "Sophie"
                },
                {
                    id: "opt-4",
                    name: "Option 4",
                    value: "Sophie"
                },
                {
                    id: "opt-5",
                    name: "Option 5",
                    value: "Sophie"
                },
                {
                    id: "opt-6",
                    name: "Option 6",
                    value: "Sophie"
                }
            ]
        }],
        classes: ["dropdown", "pick-list-style"]
    },{
        id: "pick-list2",
        name: "Picker2",
        open: false,
        selectionGroups: [{
            clearCallback: () => {
                alert("You clicked a button!");
            },
            selectAllCallback: () => {
                alert("You clicked a button!");
            },
            maxRows: 4,
            data: [{
                    id: "opt-1b",
                    name: "Option 1",
                    value: "Scrappy"
                },
                {
                    id: "opt-2b",
                    name: "Option 2",
                    value: "Sophie"
                },
                {
                    id: "opt-3b",
                    name: "Option 3",
                    value: "Sophie"
                },
                {
                    id: "opt-4b",
                    name: "Option 4",
                    value: "Sophie"
                },
                {
                    id: "opt-5b",
                    name: "Option 5",
                    value: "Sophie"
                },
                {
                    id: "opt-6b",
                    name: "Option 6",
                    value: "Sophie"
                }
            ]
        }],
        classes: ["dropdown", "pick-list-style"]
    }];

    return {
        action: "create",
        root: "top-filter-component",
        id: "top-filter",
        width: "100%",
        height: "40px",
        classes: ["top-filter-style"],
        reverseLayout: false,
        controls: controls,
        pickLists: pickLists,
        fsm: fsm
    };
}));