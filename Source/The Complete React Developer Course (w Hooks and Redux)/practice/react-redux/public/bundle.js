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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/playground/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/playground/app.js":
/*!*******************************!*\
  !*** ./src/playground/app.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _console;\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar book = {\n  title: \"Ego is the Enemy\",\n  author: \"Ryan Holiday\",\n  publisher: {\n    name: \"Penguin\"\n  }\n};\n\nvar _book$publisher$name = book.publisher.name,\n    publisherName = _book$publisher$name === undefined ? \"Self-Published\" : _book$publisher$name;\n\n\n(_console = console).log.apply(_console, _toConsumableArray(publisherName)); // Penguin, Self-Published\n\nuser = {\n  name: \"asas\",\n  age: 21\n};\nconsole.log(_extends({}, user));\n// sẽ gây ra lỗi vì spead chỉ chạy trên main stream => tool//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGxheWdyb3VuZC9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3BsYXlncm91bmQvYXBwLmpzP2FhNmIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9vayA9IHtcbiAgdGl0bGU6IFwiRWdvIGlzIHRoZSBFbmVteVwiLFxuICBhdXRob3I6IFwiUnlhbiBIb2xpZGF5XCIsXG4gIHB1Ymxpc2hlcjoge1xuICAgIG5hbWU6IFwiUGVuZ3VpblwiLFxuICB9LFxufTtcblxuY29uc3QgeyBuYW1lOiBwdWJsaXNoZXJOYW1lID0gXCJTZWxmLVB1Ymxpc2hlZFwiIH0gPSBib29rLnB1Ymxpc2hlcjtcblxuY29uc29sZS5sb2coLi4ucHVibGlzaGVyTmFtZSk7IC8vIFBlbmd1aW4sIFNlbGYtUHVibGlzaGVkXG5cbnVzZXIgPSB7XG4gIG5hbWU6IFwiYXNhc1wiLFxuICBhZ2U6IDIxLFxufTtcbmNvbnNvbGUubG9nKHtcbiAgLi4udXNlcixcbn0pO1xuLy8gc+G6vSBnw6J5IHJhIGzhu5dpIHbDrCBzcGVhZCBjaOG7iSBjaOG6oXkgdHLDqm4gbWFpbiBzdHJlYW0gPT4gdG9vbFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/playground/app.js\n");

/***/ })

/******/ });