/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/flow-adaptive/dist/index.module.js":
/*!*********************************************************!*\
  !*** ./node_modules/flow-adaptive/dist/index.module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&\"object\"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:t}),2&e&&\"string\"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,\"a\",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=\"\",n(n.s=0)}([function(t,e,n){\"use strict\";function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.r(e);var a=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError(\"Cannot call a class as a function\")}(this,t),this.defaultSettings={maximum:9999,minimum:859,maxFont:9999,minFont:1,minWidth:0,maxWidth:9999,fontRatio:35,breakPoints:[]},this.settings=i(i({},this.defaultSettings),e),\"undefined\"!=typeof window&&(window.addEventListener(\"resize\",(function(){return n.handleResize()})),this.handleResize())}var e,n,r;return e=t,(n=[{key:\"handleResize\",value:function(){var t=this.settings,e=this.defaultSettings,n=this.settings.breakPoints,r=document.body.clientWidth,i=n.find((function(t){return r>=(t.minWidth||e.minWidth)&&r<=(t.maxWidth||e.maxWidth)}))||t,o=i.fontRatio,u=i.maxFont,a=i.minFont,c=i.minWidth,f=i.maxWidth||e.maxWidth,l=c||e.minWidth,s=r>f?f:r<l?l:r,d=u||e.maxFont,p=a||e.minFont,b=o||e.fontRatio,m=s/(\"function\"==typeof b?b():b),y=m>d?d:m<p?p:m;document.documentElement.style.fontSize=\"\".concat(y,\"px\")}}])&&u(e.prototype,n),r&&u(e,r),t}();e.default=a}]);\n\n//# sourceURL=webpack:///./node_modules/flow-adaptive/dist/index.module.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var flow_adaptive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flow-adaptive */ \"./node_modules/flow-adaptive/dist/index.module.js\");\n/* harmony import */ var flow_adaptive__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flow_adaptive__WEBPACK_IMPORTED_MODULE_1__);\n\n\nnew flow_adaptive__WEBPACK_IMPORTED_MODULE_1___default.a({\n  fontRatio: 1440 / 10,\n  // the best practice is to set fontRatio to base layout width / 10\n  maxWidth: 1440,\n  minWidth: 650,\n  breakPoints: [{\n    minWidth: 650,\n    maxWidth: 900,\n    fontRatio: 768 / 10\n  }, {\n    maxWidth: 649,\n    fontRatio: 375 / 10\n  }]\n});\nvar button_menu = document.getElementById('button_menu');\nvar mobile_blackout = document.getElementById('mobile_blackout');\nvar mobile_menu = document.getElementById('mobile_menu');\nvar times = document.getElementById('times');\nbutton_menu.addEventListener('click', function () {\n  mobile_blackout.style.display = \"block\";\n  mobile_menu.style.display = \"block\";\n  setTimeout(function () {\n    mobile_menu.style.transform = \"translateX(0)\";\n  }, 0);\n});\ntimes.addEventListener('click', function () {\n  mobile_menu.style.transform = \"translateX(-100%)\";\n  setTimeout(function () {\n    mobile_blackout.style.display = \"none\";\n    mobile_menu.style.display = \"none\";\n  }, 300);\n});\nmobile_blackout.addEventListener('click', function () {\n  mobile_menu.style.transform = \"translateX(-100%)\";\n  setTimeout(function () {\n    mobile_blackout.style.display = \"none\";\n    mobile_menu.style.display = \"none\";\n  }, 300);\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ })

/******/ });