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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App__ = __webpack_require__(1);


var app = new __WEBPACK_IMPORTED_MODULE_0__App__["a" /* default */]({
  target: document.querySelector('#app')
});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Template_Template__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IFELSE_IFELSE__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__List_List__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TwoWay_TwoWay__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Events_Events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Watch_Watch__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Computed_Computed__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Props_Props__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__REFs_REFs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Emit_Emit__ = __webpack_require__(3);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };












var template = function () {
	return {
		components: {
			Tpl: __WEBPACK_IMPORTED_MODULE_0__Template_Template__["a" /* default */],
			IFELSE: __WEBPACK_IMPORTED_MODULE_1__IFELSE_IFELSE__["a" /* default */],
			List: __WEBPACK_IMPORTED_MODULE_2__List_List__["a" /* default */],
			TwoWay: __WEBPACK_IMPORTED_MODULE_3__TwoWay_TwoWay__["a" /* default */],
			Events: __WEBPACK_IMPORTED_MODULE_4__Events_Events__["a" /* default */],
			Watch: __WEBPACK_IMPORTED_MODULE_5__Watch_Watch__["a" /* default */],
			Compute: __WEBPACK_IMPORTED_MODULE_6__Computed_Computed__["a" /* default */],
			Props: __WEBPACK_IMPORTED_MODULE_7__Props_Props__["a" /* default */],
			REFs: __WEBPACK_IMPORTED_MODULE_8__REFs_REFs__["a" /* default */],
			Emit: __WEBPACK_IMPORTED_MODULE_9__Emit_Emit__["a" /* default */]
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\n  h1[svelte-2477356046], [svelte-2477356046] h1 {\n    text-align: center;\n    line-height: 50px;\n  }\n\n  h3[svelte-2477356046], [svelte-2477356046] h3 {\n    line-height: 25px;\n    margin: 10px 0;\n  }\n\n  p[svelte-2477356046], [svelte-2477356046] p {\n    line-height: 25px;\n  }\n\n  section[svelte-2477356046], [svelte-2477356046] section {\n    padding: 15px;\n    margin-bottom: 20px;\n    border: 1px solid #CCC;\n    background-color: #eee;\n    border-radius: 4px;\n  }\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var text = createText("\n\n");

	var h1 = createElement('h1');
	setAttribute(h1, 'svelte-2477356046', '');

	appendNode(createText("SVELTE"), h1);
	var text2 = createText("\n\n");

	var p = createElement('p');
	setAttribute(p, 'svelte-2477356046', '');

	appendNode(createText("SVELTE 是一个非常酷的编译型框架，它不像 Vue、React 需要依赖一个 Runtime ，用它来开发 SDK 最为适合，但是如果你要开发的是一个中大型应用，它的性能会低于 Vue 、 React 。"), p);
	var text4 = createText("\n\n");

	var section = createElement('section');
	setAttribute(section, 'svelte-2477356046', '');

	var h3 = createElement('h3');
	setAttribute(h3, 'svelte-2477356046', '');

	appendNode(h3, section);
	appendNode(createText("模板渲染"), h3);
	appendNode(createText("\n  "), section);

	var tpl = new template.components.Tpl({
		target: section,
		_root: component._root || component
	});

	var text7 = createText("\n\n");

	var section1 = createElement('section');
	setAttribute(section1, 'svelte-2477356046', '');

	var h31 = createElement('h3');
	setAttribute(h31, 'svelte-2477356046', '');

	appendNode(h31, section1);
	appendNode(createText("IF...ELSE"), h31);
	appendNode(createText("\n  "), section1);

	var iFELSE = new template.components.IFELSE({
		target: section1,
		_root: component._root || component
	});

	var text10 = createText("\n\n");

	var section2 = createElement('section');
	setAttribute(section2, 'svelte-2477356046', '');

	var h32 = createElement('h3');
	setAttribute(h32, 'svelte-2477356046', '');

	appendNode(h32, section2);
	appendNode(createText("列表渲染"), h32);
	appendNode(createText("\n  "), section2);

	var list = new template.components.List({
		target: section2,
		_root: component._root || component
	});

	var text13 = createText("\n\n");

	var section3 = createElement('section');
	setAttribute(section3, 'svelte-2477356046', '');

	var h33 = createElement('h3');
	setAttribute(h33, 'svelte-2477356046', '');

	appendNode(h33, section3);
	appendNode(createText("双向绑定"), h33);
	appendNode(createText("\n  "), section3);

	var twoWay = new template.components.TwoWay({
		target: section3,
		_root: component._root || component
	});

	var text16 = createText("\n\n");

	var section4 = createElement('section');
	setAttribute(section4, 'svelte-2477356046', '');

	var h34 = createElement('h3');
	setAttribute(h34, 'svelte-2477356046', '');

	appendNode(h34, section4);
	appendNode(createText("事件绑定"), h34);
	appendNode(createText("\n  "), section4);

	var events = new template.components.Events({
		target: section4,
		_root: component._root || component
	});

	var text19 = createText("\n\n");

	var section5 = createElement('section');
	setAttribute(section5, 'svelte-2477356046', '');

	var h35 = createElement('h3');
	setAttribute(h35, 'svelte-2477356046', '');

	appendNode(h35, section5);
	appendNode(createText("监听数据变化"), h35);
	appendNode(createText("\n  "), section5);

	var watch = new template.components.Watch({
		target: section5,
		_root: component._root || component
	});

	var text22 = createText("\n\n");

	var section6 = createElement('section');
	setAttribute(section6, 'svelte-2477356046', '');

	var h36 = createElement('h3');
	setAttribute(h36, 'svelte-2477356046', '');

	appendNode(h36, section6);
	appendNode(createText("计算属性"), h36);
	appendNode(createText("\n  "), section6);

	var compute = new template.components.Compute({
		target: section6,
		_root: component._root || component
	});

	var text25 = createText("\n\n");

	var section7 = createElement('section');
	setAttribute(section7, 'svelte-2477356046', '');

	var h37 = createElement('h3');
	setAttribute(h37, 'svelte-2477356046', '');

	appendNode(h37, section7);
	appendNode(createText("Props 传值到子组件"), h37);
	appendNode(createText("\n  "), section7);

	var props = new template.components.Props({
		target: section7,
		_root: component._root || component
	});

	var text28 = createText("\n\n");

	var section8 = createElement('section');
	setAttribute(section8, 'svelte-2477356046', '');

	var h38 = createElement('h3');
	setAttribute(h38, 'svelte-2477356046', '');

	appendNode(h38, section8);
	appendNode(createText("REFs"), h38);
	appendNode(createText("\n  "), section8);

	var rEFs = new template.components.REFs({
		target: section8,
		_root: component._root || component
	});

	var text31 = createText("\n\n");

	var section9 = createElement('section');
	setAttribute(section9, 'svelte-2477356046', '');

	var h39 = createElement('h3');
	setAttribute(h39, 'svelte-2477356046', '');

	appendNode(h39, section9);
	appendNode(createText("Emit"), h39);
	appendNode(createText("\n  "), section9);

	var emit = new template.components.Emit({
		target: section9,
		_root: component._root || component
	});

	var text34 = createText("\n\n");

	var p1 = createElement('p');
	setAttribute(p1, 'svelte-2477356046', '');

	appendNode(createText("查看更多文档请访问 "), p1);

	var a = createElement('a');
	setAttribute(a, 'svelte-2477356046', '');
	a.target = "_blank";
	a.href = "https://svelte.technology/";

	appendNode(a, p1);
	appendNode(createText("SVELTE"), a);

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(h1, target, anchor);
			insertNode(text2, target, anchor);
			insertNode(p, target, anchor);
			insertNode(text4, target, anchor);
			insertNode(section, target, anchor);
			insertNode(text7, target, anchor);
			insertNode(section1, target, anchor);
			insertNode(text10, target, anchor);
			insertNode(section2, target, anchor);
			insertNode(text13, target, anchor);
			insertNode(section3, target, anchor);
			insertNode(text16, target, anchor);
			insertNode(section4, target, anchor);
			insertNode(text19, target, anchor);
			insertNode(section5, target, anchor);
			insertNode(text22, target, anchor);
			insertNode(section6, target, anchor);
			insertNode(text25, target, anchor);
			insertNode(section7, target, anchor);
			insertNode(text28, target, anchor);
			insertNode(section8, target, anchor);
			insertNode(text31, target, anchor);
			insertNode(section9, target, anchor);
			insertNode(text34, target, anchor);
			insertNode(p1, target, anchor);
		},

		update: noop,

		teardown: function teardown(detach) {
			tpl.teardown(false);
			iFELSE.teardown(false);
			list.teardown(false);
			twoWay.teardown(false);
			events.teardown(false);
			watch.teardown(false);
			compute.teardown(false);
			props.teardown(false);
			rEFs.teardown(false);
			emit.teardown(false);

			if (detach) {
				detachNode(text);
				detachNode(h1);
				detachNode(text2);
				detachNode(p);
				detachNode(text4);
				detachNode(section);
				detachNode(text7);
				detachNode(section1);
				detachNode(text10);
				detachNode(section2);
				detachNode(text13);
				detachNode(section3);
				detachNode(text16);
				detachNode(section4);
				detachNode(text19);
				detachNode(section5);
				detachNode(text22);
				detachNode(section6);
				detachNode(text25);
				detachNode(section7);
				detachNode(text28);
				detachNode(section8);
				detachNode(text31);
				detachNode(section9);
				detachNode(text34);
				detachNode(p1);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();
	this._renderHooks = [];

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);

	while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);

	while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function noop() {}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function applyComputations(state, newState, oldState) {
	if ('date' in newState && _typeof(state.date) === 'object' || state.date !== oldState.date) {
		state.hour = newState.hour = template.computed.hour(state.date);
	}

	if ('date' in newState && _typeof(state.date) === 'object' || state.date !== oldState.date) {
		state.minutes = newState.minutes = template.computed.minutes(state.date);
	}

	if ('date' in newState && _typeof(state.date) === 'object' || state.date !== oldState.date) {
		state.seconds = newState.seconds = template.computed.seconds(state.date);
	}
}

var template = function () {
	return {
		data: function data() {
			return {
				date: new Date()
			};
		},

		computed: {
			hour: function hour(date) {
				return date.getHours();
			},
			minutes: function minutes(date) {
				return date.getMinutes();
			},
			seconds: function seconds(date) {
				return date.getSeconds();
			}
		}
	};
}();

function renderMainFragment(root, component) {
	var text = createText("\n\n");

	var p = createElement('p');

	appendNode(createText("现在时分, 北京时间 "), p);
	var text2 = createText(root.hour);
	appendNode(text2, p);
	appendNode(createText(" 点  "), p);
	var text4 = createText(root.minutes);
	appendNode(text4, p);
	appendNode(createText(" 分 "), p);
	var text6 = createText(root.seconds);
	appendNode(text6, p);
	appendNode(createText(" 秒"), p);

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(p, target, anchor);
		},

		update: function update(changed, root) {
			text2.data = root.hour;

			text4.data = root.minutes;

			text6.data = root.seconds;
		},

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(text);
				detachNode(p);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);
	applyComputations(this._state, this._state, {});

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);
	applyComputations(this._state, newState, oldState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createElement(name) {
	return document.createElement(name);
}

function appendNode(node, target) {
	target.appendChild(node);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Inner__ = __webpack_require__(4);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var template = function () {
	return {
		data: function data() {
			return {
				thing: 'Nothing'
			};
		},

		methods: {
			action: function action(thing) {
				this.set({
					thing: thing
				});
			}
		},
		components: {
			Inner: __WEBPACK_IMPORTED_MODULE_0__Inner__["a" /* default */]
		}
	};
}();

function renderMainFragment(root, component) {
	var text = createText("\n\n");

	var div = createElement('div');

	var text1 = createText(root.thing);
	appendNode(text1, div);
	var text2 = createText("\n\n");

	var inner = new template.components.Inner({
		target: null,
		_root: component._root || component
	});

	inner.on('Bomb', function (event) {
		component.action(event.thing);
	});

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(div, target, anchor);
			insertNode(text2, target, anchor);
			inner._fragment.mount(target, anchor);
		},

		update: function update(changed, root) {
			text1.data = root.thing;
		},

		teardown: function teardown(detach) {
			inner.teardown(detach);

			if (detach) {
				detachNode(text);
				detachNode(div);
				detachNode(text2);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._renderHooks = [];

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);

	while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
}

SvelteComponent.prototype = template.methods;

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);

	while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createElement(name) {
	return document.createElement(name);
}

function appendNode(node, target) {
	target.appendChild(node);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var template = function () {
	return {
		onrender: function onrender() {
			var _this = this;

			var num = 0;

			setInterval(function () {
				_this.fire('Bomb', {
					thing: num += 1
				});
			}, 1000);
		}
	};
}();

function renderMainFragment(root, component) {

	return {
		mount: noop,

		update: noop,

		teardown: noop
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = options.data || {};

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);

	if (options._root) {
		options._root._renderHooks.push({ fn: template.onrender, context: this });
	} else {
		template.onrender.call(this);
	}
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function noop() {}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var template = function () {
	return {
		data: function data() {
			return {
				data: 'DiDi'
			};
		},

		methods: {
			add: function add() {
				var _data = this.get('data');
				this.set({
					data: _data + 'Di'
				});
			}
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\n\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var text = createText("\n\n");

	var p = createElement('p');
	setAttribute(p, 'svelte-1329984243', '');

	var text1 = createText(root.data);
	appendNode(text1, p);
	var text2 = createText("\n");

	var button = createElement('button');
	setAttribute(button, 'svelte-1329984243', '');

	function clickHandler(event) {
		component.add();
	}

	addEventListener(button, 'click', clickHandler);

	appendNode(createText("click me"), button);

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(p, target, anchor);
			insertNode(text2, target, anchor);
			insertNode(button, target, anchor);
		},

		update: function update(changed, root) {
			text1.data = root.data;
		},

		teardown: function teardown(detach) {
			removeEventListener(button, 'click', clickHandler);

			if (detach) {
				detachNode(text);
				detachNode(p);
				detachNode(text2);
				detachNode(button);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

SvelteComponent.prototype = template.methods;

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function addEventListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeEventListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var template = function () {
	return {
		data: function data() {
			return {
				type: true
			};
		},

		methods: {
			switchFirst: function switchFirst(type) {
				type = !type;

				this.set({
					type: type
				});
			}
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\n  div[svelte-3726405262], [svelte-3726405262] div {\n    font-size: 14px;\n  }\n\n  button[svelte-3726405262], [svelte-3726405262] button {\n    margin-top: 10px;\n  }\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var text = createText("\n\n");
	var ifBlock_anchor = createComment("#if type");

	function getBlock(root) {
		if (root.type) return renderIfBlock_0;
		return renderIfBlock_1;
	}

	var currentBlock = getBlock(root);
	var ifBlock = currentBlock && currentBlock(root, component);

	var text1 = createText("\n\n");

	var button = createElement('button');
	setAttribute(button, 'svelte-3726405262', '');

	function clickHandler(event) {
		var root = this.__svelte.root;

		component.switchFirst(root.type);
	}

	addEventListener(button, 'click', clickHandler);

	button.__svelte = {
		root: root
	};

	appendNode(createText("switch"), button);

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(ifBlock_anchor, target, anchor);
			if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
			insertNode(text1, target, anchor);
			insertNode(button, target, anchor);
		},

		update: function update(changed, root) {
			var _currentBlock = currentBlock;
			currentBlock = getBlock(root);
			if (_currentBlock === currentBlock && ifBlock) {
				ifBlock.update(changed, root);
			} else {
				if (ifBlock) ifBlock.teardown(true);
				ifBlock = currentBlock && currentBlock(root, component);
				if (ifBlock) ifBlock.mount(ifBlock_anchor.parentNode, ifBlock_anchor);
			}

			button.__svelte.root = root;
		},

		teardown: function teardown(detach) {
			if (ifBlock) ifBlock.teardown(detach);
			removeEventListener(button, 'click', clickHandler);

			if (detach) {
				detachNode(text);
				detachNode(ifBlock_anchor);
				detachNode(text1);
				detachNode(button);
			}
		}
	};
}

function renderIfBlock_1(root, component) {
	var div = createElement('div');
	setAttribute(div, 'svelte-3726405262', '');

	appendNode(createText("BLOCK FALSE"), div);

	return {
		mount: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		update: noop,

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(div);
			}
		}
	};
}

function renderIfBlock_0(root, component) {
	var div = createElement('div');
	setAttribute(div, 'svelte-3726405262', '');

	appendNode(createText("BLOCK TRUE"), div);

	return {
		mount: function mount(target, anchor) {
			insertNode(div, target, anchor);
		},

		update: noop,

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(div);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

SvelteComponent.prototype = template.methods;

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === "undefined" ? "undefined" : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function noop() {}

function createComment(data) {
	return document.createComment(data);
}

function addEventListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeEventListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var template = function () {
	return {
		data: function data() {
			return {
				cats: [{
					name: '白猫'
				}, {
					name: '黑猫'
				}, {
					name: '蓝猫'
				}, {
					name: '黄猫'
				}]
			};
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\n  ul  li[svelte-2326342005], ul  [svelte-2326342005] li, ul[svelte-2326342005]  li, [svelte-2326342005] ul  li {\n    line-height: 25px;\n  }\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var text = createText("\n\n");

	var div = createElement('div');
	setAttribute(div, 'svelte-2326342005', '');

	var ul = createElement('ul');
	setAttribute(ul, 'svelte-2326342005', '');

	appendNode(ul, div);
	var eachBlock_anchor = createComment("#each cats");
	appendNode(eachBlock_anchor, ul);
	var eachBlock_value = root.cats;
	var eachBlock_iterations = [];

	for (var i = 0; i < eachBlock_value.length; i += 1) {
		eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
		eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
	}

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(div, target, anchor);
		},

		update: function update(changed, root) {
			var eachBlock_value = root.cats;

			for (var i = 0; i < eachBlock_value.length; i += 1) {
				if (!eachBlock_iterations[i]) {
					eachBlock_iterations[i] = renderEachBlock(root, eachBlock_value, eachBlock_value[i], i, component);
					eachBlock_iterations[i].mount(eachBlock_anchor.parentNode, eachBlock_anchor);
				} else {
					eachBlock_iterations[i].update(changed, root, eachBlock_value, eachBlock_value[i], i);
				}
			}

			teardownEach(eachBlock_iterations, true, eachBlock_value.length);

			eachBlock_iterations.length = eachBlock_value.length;
		},

		teardown: function teardown(detach) {
			teardownEach(eachBlock_iterations, false);

			if (detach) {
				detachNode(text);
				detachNode(div);
			}
		}
	};
}

function renderEachBlock(root, eachBlock_value, cat, cat__index, component) {
	var li = createElement('li');
	setAttribute(li, 'svelte-2326342005', '');

	var text = createText(cat.name);
	appendNode(text, li);

	return {
		mount: function mount(target, anchor) {
			insertNode(li, target, anchor);
		},

		update: function update(changed, root, eachBlock_value, cat, cat__index) {
			text.data = cat.name;
		},

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(li);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function createComment(data) {
	return document.createComment(data);
}

function teardownEach(iterations, detach, start) {
	for (var i = start || 0; i < iterations.length; i += 1) {
		iterations[i].teardown(detach);
	}
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var template = function () {
	return {
		data: function data() {
			return {
				name: 'unKnown',
				count: 0
			};
		}
	};
}();

function renderMainFragment(root, component) {
	var p = createElement('p');

	appendNode(createText("Hello "), p);
	var text1 = createText(root.name);
	appendNode(text1, p);
	appendNode(createText(", this is inner component"), p);
	var text3 = createText("\n");

	var p1 = createElement('p');

	appendNode(createText("The Number is "), p1);
	var text5 = createText(root.count);
	appendNode(text5, p1);

	return {
		mount: function mount(target, anchor) {
			insertNode(p, target, anchor);
			insertNode(text3, target, anchor);
			insertNode(p1, target, anchor);
		},

		update: function update(changed, root) {
			text1.data = root.name;

			text5.data = root.count;
		},

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(p);
				detachNode(text3);
				detachNode(p1);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function createElement(name) {
	return document.createElement(name);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Inner__ = __webpack_require__(8);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var template = function () {
	return {
		data: function data() {
			return {
				count: 0
			};
		},

		methods: {
			plus: function plus(count) {
				this.set({
					count: count + 1
				});
			}
		},
		components: {
			Inner: __WEBPACK_IMPORTED_MODULE_0__Inner__["a" /* default */]
		}
	};
}();

function renderMainFragment(root, component) {
	var inner_initialData = {
		name: "Neurotoxin"
	};

	if ('count' in root) inner_initialData.count = root.count;
	var inner = new template.components.Inner({
		target: null,
		_root: component._root || component,
		data: inner_initialData
	});

	var inner_updating = false;

	component._bindings.push(function () {
		inner.observe('count', function (value) {
			inner_updating = true;
			component.set({ count: value });
			inner_updating = false;
		});
	});

	var text = createText("\n\n");

	var button = createElement('button');

	function clickHandler(event) {
		var root = this.__svelte.root;

		component.plus(root.count);
	}

	addEventListener(button, 'click', clickHandler);

	button.__svelte = {
		root: root
	};

	appendNode(createText("click me"), button);

	return {
		mount: function mount(target, anchor) {
			inner._fragment.mount(target, anchor);
			insertNode(text, target, anchor);
			insertNode(button, target, anchor);
		},

		update: function update(changed, root) {
			if (!inner_updating && 'count' in changed) {
				inner.set({ count: root.count });
			}

			button.__svelte.root = root;
		},

		teardown: function teardown(detach) {
			inner.teardown(detach);
			removeEventListener(button, 'click', clickHandler);

			if (detach) {
				detachNode(text);
				detachNode(button);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._renderHooks = [];

	this._bindings = [];
	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
	while (this._bindings.length) {
		this._bindings.pop()();
	}while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
}

SvelteComponent.prototype = template.methods;

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);

	while (this._bindings.length) {
		this._bindings.pop()();
	}while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function addEventListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeEventListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function createElement(name) {
	return document.createElement(name);
}

function appendNode(node, target) {
	target.appendChild(node);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var template = function () {
	return {
		data: function data() {
			return {
				data: 'REFs Inner'
			};
		},

		methods: {
			change: function change() {
				this.set({
					data: Math.random()
				});
			}
		}
	};
}();

function renderMainFragment(root, component) {
	var text = createText("\n\n");

	var p = createElement('p');

	var text1 = createText(root.data);
	appendNode(text1, p);

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(p, target, anchor);
		},

		update: function update(changed, root) {
			text1.data = root.data;
		},

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(text);
				detachNode(p);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

SvelteComponent.prototype = template.methods;

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createElement(name) {
	return document.createElement(name);
}

function appendNode(node, target) {
	target.appendChild(node);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Inner__ = __webpack_require__(10);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var template = function () {
	return {
		data: function data() {
			return {
				data: 'REFs Inner'
			};
		},

		methods: {
			triggerInner: function triggerInner() {
				var inner = this.refs.inner;
				inner.change();
			}
		},
		components: {
			Inner: __WEBPACK_IMPORTED_MODULE_0__Inner__["a" /* default */]
		}
	};
}();

function renderMainFragment(root, component) {
	var text = createText("\n\n");

	var div = createElement('div');
	div.id = "refs";

	var inner = new template.components.Inner({
		target: div,
		_root: component._root || component
	});

	component.refs.inner = inner;

	appendNode(createText("\n  "), div);

	var button = createElement('button');

	function clickHandler(event) {
		component.triggerInner();
	}

	addEventListener(button, 'click', clickHandler);

	appendNode(button, div);
	appendNode(createText("click me"), button);

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(div, target, anchor);
		},

		update: noop,

		teardown: function teardown(detach) {
			if (component.refs.inner === inner) component.refs.inner = null;
			inner.teardown(false);
			removeEventListener(button, 'click', clickHandler);

			if (detach) {
				detachNode(text);
				detachNode(div);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this.refs = {};
	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._renderHooks = [];

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);

	while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
}

SvelteComponent.prototype = template.methods;

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);

	while (this._renderHooks.length) {
		var hook = this._renderHooks.pop();
		hook.fn.call(hook.context);
	}
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createElement(name) {
	return document.createElement(name);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function addEventListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeEventListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function noop() {}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var template = function () {
	return {
		data: function data() {
			return {
				title: 'Sevlte',
				type: '编译型框架',
				describe: '开箱即用'
			};
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\n\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var text = createText("\n\n");

	var p = createElement('p');
	setAttribute(p, 'svelte-4127501670', '');

	appendNode(createText("欢迎使用 "), p);
	var text2 = createText(root.title);
	appendNode(text2, p);
	appendNode(createText(" ， "), p);
	var text4 = createText(root.title);
	appendNode(text4, p);
	appendNode(createText(" 是一个 "), p);
	var text6 = createText(root.type);
	appendNode(text6, p);
	appendNode(createText(" ，推崇组件 "), p);
	var text8 = createText(root.describe);
	appendNode(text8, p);
	appendNode(createText(" 的方式。"), p);

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(p, target, anchor);
		},

		update: function update(changed, root) {
			text2.data = root.title;

			text4.data = root.title;

			text6.data = root.type;

			text8.data = root.describe;
		},

		teardown: function teardown(detach) {
			if (detach) {
				detachNode(text);
				detachNode(p);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function appendNode(node, target) {
	target.appendChild(node);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var template = function () {
	return {
		data: function data() {
			return {
				name: ''
			};
		}
	};
}();

function renderMainFragment(root, component) {
	var text = createText("\n\n");

	var input = createElement('input');
	input.type = "text";

	var input_updating = false;

	function inputChangeHandler() {
		input_updating = true;
		component.set({ name: input.value });
		input_updating = false;
	}

	addEventListener(input, 'input', inputChangeHandler);
	input.value = root.name;

	input.placeholder = "ente your name";

	var text1 = createText("\n");

	var p = createElement('p');

	appendNode(createText("Hello "), p);
	var text3 = createText(root.name || 'stranger');
	appendNode(text3, p);
	appendNode(createText("!"), p);

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(input, target, anchor);
			insertNode(text1, target, anchor);
			insertNode(p, target, anchor);
		},

		update: function update(changed, root) {
			if (!input_updating) input.value = root.name;

			text3.data = root.name || 'stranger';
		},

		teardown: function teardown(detach) {
			removeEventListener(input, 'input', inputChangeHandler);

			if (detach) {
				detachNode(text);
				detachNode(input);
				detachNode(text1);
				detachNode(p);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);
}

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function addEventListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeEventListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

function createElement(name) {
	return document.createElement(name);
}

function appendNode(node, target) {
	target.appendChild(node);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var template = function () {
	return {
		data: function data() {
			return {
				data: 'DiDi'
			};
		},

		methods: {
			add: function add() {
				var _data = this.get('data');
				this.set({
					data: _data + 'Di'
				});
			}
		},
		onrender: function onrender() {
			// 此处注意，监听时会触发一次回调函数，使用时请进行第一次判断

			var observer = this.observe('data', function (data) {
				console.log('新的数据是' + data);
			});

			// observer.cancel();
		}
	};
}();

var addedCss = false;
function addCss() {
	var style = createElement('style');
	style.textContent = "\n\n";
	appendNode(style, document.head);

	addedCss = true;
}

function renderMainFragment(root, component) {
	var text = createText("\n\n");

	var p = createElement('p');
	setAttribute(p, 'svelte-2643614375', '');

	appendNode(createText("打开控制台查看"), p);
	var text2 = createText("\n");

	var p1 = createElement('p');
	setAttribute(p1, 'svelte-2643614375', '');

	var text3 = createText(root.data);
	appendNode(text3, p1);
	var text4 = createText("\n");

	var button = createElement('button');
	setAttribute(button, 'svelte-2643614375', '');

	function clickHandler(event) {
		component.add();
	}

	addEventListener(button, 'click', clickHandler);

	appendNode(createText("click me"), button);

	return {
		mount: function mount(target, anchor) {
			insertNode(text, target, anchor);
			insertNode(p, target, anchor);
			insertNode(text2, target, anchor);
			insertNode(p1, target, anchor);
			insertNode(text4, target, anchor);
			insertNode(button, target, anchor);
		},

		update: function update(changed, root) {
			text3.data = root.data;
		},

		teardown: function teardown(detach) {
			removeEventListener(button, 'click', clickHandler);

			if (detach) {
				detachNode(text);
				detachNode(p);
				detachNode(text2);
				detachNode(p1);
				detachNode(text4);
				detachNode(button);
			}
		}
	};
}

function SvelteComponent(options) {
	options = options || {};

	this._state = Object.assign(template.data(), options.data);

	this._observers = {
		pre: Object.create(null),
		post: Object.create(null)
	};

	this._handlers = Object.create(null);

	this._root = options._root;
	this._yield = options._yield;

	if (!addedCss) addCss();

	this._fragment = renderMainFragment(this._state, this);
	if (options.target) this._fragment.mount(options.target, null);

	if (options._root) {
		options._root._renderHooks.push({ fn: template.onrender, context: this });
	} else {
		template.onrender.call(this);
	}
}

SvelteComponent.prototype = template.methods;

SvelteComponent.prototype.get = function get(key) {
	return key ? this._state[key] : this._state;
};

SvelteComponent.prototype.fire = function fire(eventName, data) {
	var handlers = eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		handlers[i].call(this, data);
	}
};

SvelteComponent.prototype.observe = function observe(key, callback, options) {
	var group = options && options.defer ? this._observers.pre : this._observers.post;

	(group[key] || (group[key] = [])).push(callback);

	if (!options || options.init !== false) {
		callback.__calling = true;
		callback.call(this, this._state[key]);
		callback.__calling = false;
	}

	return {
		cancel: function cancel() {
			var index = group[key].indexOf(callback);
			if (~index) group[key].splice(index, 1);
		}
	};
};

SvelteComponent.prototype.on = function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function cancel() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
};

SvelteComponent.prototype.set = function set(newState) {
	var oldState = this._state;
	this._state = Object.assign({}, oldState, newState);

	dispatchObservers(this, this._observers.pre, newState, oldState);
	if (this._fragment) this._fragment.update(newState, this._state);
	dispatchObservers(this, this._observers.post, newState, oldState);
};

SvelteComponent.prototype.teardown = function teardown(detach) {
	this.fire('teardown');

	this._fragment.teardown(detach !== false);
	this._fragment = null;

	this._state = {};
};

function dispatchObservers(component, group, newState, oldState) {
	for (var key in group) {
		if (!(key in newState)) continue;

		var newValue = newState[key];
		var oldValue = oldState[key];

		if (newValue === oldValue && (typeof newValue === 'undefined' ? 'undefined' : _typeof(newValue)) !== 'object') continue;

		var callbacks = group[key];
		if (!callbacks) continue;

		for (var i = 0; i < callbacks.length; i += 1) {
			var callback = callbacks[i];
			if (callback.__calling) continue;

			callback.__calling = true;
			callback.call(component, newValue, oldValue);
			callback.__calling = false;
		}
	}
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createText(data) {
	return document.createTextNode(data);
}

function createElement(name) {
	return document.createElement(name);
}

function setAttribute(node, attribute, value) {
	node.setAttribute(attribute, value);
}

function appendNode(node, target) {
	target.appendChild(node);
}

function addEventListener(node, event, handler) {
	node.addEventListener(event, handler, false);
}

function removeEventListener(node, event, handler) {
	node.removeEventListener(event, handler, false);
}

/* harmony default export */ exports["a"] = SvelteComponent;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }
/******/ ]);