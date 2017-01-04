'use strict'; // eslint-disable-line strict

var ElementManager = require('../Element/ElementManager.js'); // eslint-disable-line no-unused-vars
var elementManager = new ElementManager();

var Div = require('../Div/Div.js');
elementManager.register('Div', Div);
elementManager.create('Div', {
  name: 'myDivOptions'
}).nest('Div', {
  name: 'myDivOptions'
}).nest('Div', {
  name: 'myDivOptions'
}).nest('Div', {
  name: 'myDivOptions'
}).nest('Div', {
  name: 'myDivOptions'
});

window.ElementManager = elementManager;