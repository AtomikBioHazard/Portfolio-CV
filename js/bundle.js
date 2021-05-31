/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n\n // toggleMenu();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form)\n/* harmony export */ });\nvar form = function (d) {\n  var $form = d.querySelector(\".contact-form\"),\n      $loader = d.querySelector(\".contact-form-loader\"),\n      $response = d.querySelector(\".contact-form-response\");\n  $form.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    $loader.classList.remove(\"none\");\n    fetch(\"https://formsubmit.co/ajax/dietrich.fdez@gmail.com\", {\n      method: \"POST\",\n      body: new FormData(e.target)\n    }).then(function (res) {\n      return res.ok ? res.json() : Promise.reject(res);\n    }).then(function (json) {\n      console.log(json);\n      location.hash = \"#thx\";\n      $form.reset();\n    })[\"catch\"](function (err) {\n      console.log(err);\n      var message = err.statusText || \"Oops, something happened. Please try again\";\n      $response.querySelector(\"h3\").innerHTML = \"Error \".concat(err.status, \": \").concat(message);\n    })[\"finally\"](function () {\n      $loader.classList.add(\"none\");\n      setTimeout(function () {\n        location.hash = \"#close\";\n      }, 3000);\n    });\n  });\n}(document);\n\n\n\n//# sourceURL=webpack:///./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleMenu\": () => (/* binding */ toggleMenu)\n/* harmony export */ });\nvar toggleMenu = function (d) {\n  var $btnMenu = d.querySelector(\".menu-btn\"),\n      $menu = d.querySelector(\".menu\");\n  $btnMenu.addEventListener(\"click\", function () {\n    $btnMenu.firstElementChild.classList.toggle(\"none\");\n    $btnMenu.lastElementChild.classList.toggle(\"none\");\n    $menu.classList.toggle(\"is-active\");\n  });\n  d.addEventListener(\"click\", function (e) {\n    if (!e.target.matches(\".menu a\")) return false;\n    $btnMenu.firstElementChild.classList.remove(\"none\");\n    $btnMenu.lastElementChild.classList.add(\"none\");\n    $menu.classList.remove(\"is-active\");\n  });\n}(document);\n\n\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;