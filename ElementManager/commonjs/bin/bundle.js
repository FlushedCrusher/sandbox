/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'; // eslint-disable-line strict

	var Reduxish = __webpack_require__(1);
	var counter = __webpack_require__(3);
	var Render = __webpack_require__(6);
	var Log = __webpack_require__(7);

	var WindowListeners = __webpack_require__(8);
	var KeyDown = __webpack_require__(9);

	var Redux = new Reduxish();
	var store = Redux.createStore(counter);

	var render = new Render(store);
	store.subscribe(render.execute.bind(render));

	var log = new Log(store);
	store.subscribe(log.execute.bind(log));

	var keyDown = new KeyDown(store);

	render.execute();

	var listeners = new WindowListeners();
	listeners.add('keydown', keyDown.execute.bind(keyDown));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Reduxish
	 * 
	 * @requires {Store}
	 * @returns {Reduxish}
	 */

	var Store = __webpack_require__(2);

	function Reduxish () {
	  'use strict';
	  this.store = undefined;
	}
	Reduxish.prototype.createStore = function(reducer) {
	  'use strict';
	  this.store = new Store(reducer);
	  this.store.dispatch({});
	  return this.store;
	};

	module.exports = Reduxish;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Store for Reduxish
	 * 
	 * @returns {Store}
	 */

	function Store(reducer) {
	  this.previousState
	  this.state;
	  this.lastAction;
	  this.reducer = reducer;
	  this.listeners = [];
	}
	Store.prototype.getState = function() {
	  'use strict';
	  return this.state;
	};
	Store.prototype.getPreviousState = function() {
	  'use strict';
	  return this.previousState;
	};
	Store.prototype.getLastAction = function() {
	  'use strict';
	  return this.lastAction;
	};
	Store.prototype.dispatch = function( action ) {
	  'use strict';
	  this.previousState = this.state;
	  this.lastAction = Object.assign({}, action);
	  this.state = this.reducer( this.state, action );
	  this.listeners.forEach(function( callback ) {
	    callback();
	  });
	};
	Store.prototype.subscribe = function( callback ) {
	  var self = this;
	  this.listeners.push( callback );
	  return function() {
	    self.listeners = self.listeners.filter(function( l ) {
	      l !== listener;
	    })
	  };
	};

	module.exports = Store;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	var shiftLeft = __webpack_require__(4);
	var shiftRight = __webpack_require__(5);

	function Counter( state, action ) {
	  'use strict';
	  
	  var state = (typeof state !== 'undefined') ? state : 0;
	  switch(action.type) {
	    case 'SHIFT_LEFT':
	      return shiftLeft(state);
	    case 'INCREMENT':
	      return state + 1;
	    case 'DECREMENT':
	      return state - 1;
	    case 'SHIFT_RIGHT':
	      return shiftRight(state);
	    default:
	      return state;
	  }
	};

	module.exports = Counter;

/***/ },
/* 4 */
/***/ function(module, exports) {

	function ShiftLeft(num) {
	  'use strict';
	  var str = num.toString();
	  var pre = "";
	  if(str.length > 1 && str[0] === "-") {
	    pre = "-";
	    str = str.substr(1);
	  }
	  return parseInt(pre + str.substr(1) + str[0]);
	}

	module.exports = ShiftLeft;

/***/ },
/* 5 */
/***/ function(module, exports) {

	function ShiftRight(num) {
	  'use strict';
	  var str = num.toString();
	  var pre = "";
	  if(str.length > 1 && str[0] === "-") {
	    pre = "-";
	    str = str.substr(1);
	  }
	  return parseInt(pre + str[str.length-1] + str.substr(0,str.length - 1));
	}

	module.exports = ShiftRight;

/***/ },
/* 6 */
/***/ function(module, exports) {

	function Render(store) {
	  'use strict';
	  this.store = store;
	}
	Render.prototype.execute = function() {
	  'use strict';
	  document.body.innerText = this.store.getState();
	};

	module.exports = Render;

/***/ },
/* 7 */
/***/ function(module, exports) {

	function Log(store) {
	  'use strict';
	  this.store = store;
	}
	Log.prototype.execute = function() {
	  'use strict';
	  console.debug(
	    "|- Previous State -|-------- Action --------|- Current State -| \n" + 
	    "| " + JSON.stringify(this.store.getPreviousState()) + ",                " + 
	    JSON.stringify(this.store.getLastAction()) + ",     " + 
	    JSON.stringify(this.store.getState())
	  );
	};

	module.exports = Log;

/***/ },
/* 8 */
/***/ function(module, exports) {

	function WindowListeners() {
	  'use strict';
	}
	WindowListeners.prototype.add = function(key, action) {
	  'use strict';
	  document.addEventListener(key, action, false);
	  return this;
	};

	module.exports = WindowListeners;

/***/ },
/* 9 */
/***/ function(module, exports) {

	function KeyDown(store) {
	  'use strict';
	  this.store = store;
	}
	KeyDown.prototype.execute = function(event) {
	  'use strict';
	  switch(event.which) {
	    case 37:
	      this.store.dispatch({
	        type: 'SHIFT_LEFT'
	      });
	      break;
	    case 38:
	      this.store.dispatch({
	        type: 'INCREMENT'
	      });
	      break;
	    case 39:
	      this.store.dispatch({
	        type: 'SHIFT_RIGHT'
	      });
	      break;
	    case 40:
	      this.store.dispatch({
	        type: 'DECREMENT'
	      });
	      break;
	    default:
	      break;
	  }
	};

	module.exports = KeyDown;

/***/ }
/******/ ]);