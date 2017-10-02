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
    transitions: [
      { name: 'create', from: ['raw', 'modified', 'deleted'], to: 'created' },
      { name: 'build', from: 'created', to: 'built' },
      { name: 'draw', from: ['built', 'modified'], to: 'modified'},
      { name: 'update', from: ['built', 'modified'], to: 'modified' },
      { name: 'delete', from: ['built', 'modified'], to: 'deleted' }
    ]
  };

  var controls = [
    {
      id: "go-button",
      name: "Go",
      width: "70px",
      enabled: true,
      classes: ["top-filter-button-style", "btn", "btn-default"],
      callback: () => {
        alert("You clicked a button!");
      }
    },
    {
      id: "reset-button",
      name: "Reset",
      width: "70px",
      enabled: true,
      classes: ["top-filter-button-style", "btn", "btn-default"],
      callback: () => {
        alert("You clicked a button!");
      }
    }
  ];

  var pickLists = [
    {
      id: "pick-list",
      name: "Picker",
      maxRows: 4,
      open: false,
      data: [
        { name: "Option 1", value: "Scrappy" },
        { name: "Option 2", value: "Sophie" }
      ],
      classes: ["pick-list-style"],
      clearCallback: () => {
        alert("You clicked a button!");
      },
      selectAllCallback: () => {
        alert("You clicked a button!");
      }
    }
  ];

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