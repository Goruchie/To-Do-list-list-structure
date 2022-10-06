"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/variables.js */ \"./src/modules/variables.js\");\n\r\n\r\n_modules_variables_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addList();\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ }),

/***/ "./src/modules/variables.js":
/*!**********************************!*\
  !*** ./src/modules/variables.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayLists)\n/* harmony export */ });\nconst ulList = document.getElementById('toDo');\r\nconst lists = [\r\n  {\r\n    description: 'Go to the supermarket',\r\n    completed: true,\r\n    index: 0,\r\n  },\r\n  {\r\n    description: 'Practice Sport',\r\n    completed: false,\r\n    index: 1,\r\n  },\r\n  {\r\n    description: 'Go to the park with my dog',\r\n    completed: false,\r\n    index: 2,\r\n  },\r\n  {\r\n    description: 'Have a lunch',\r\n    completed: true,\r\n    index: 3,\r\n  },\r\n];\r\nclass displayLists {\r\n  static addList() {\r\n    for (let i = 0; i < lists.length; i += 1) {\r\n      const list = document.createElement('li');\r\n      list.innerHTML = `<input type=\"checkbox\" name=\"completed\" id=\"completed\"> ${lists[i].description} <i class=\"fa-solid fa-ellipsis-vertical\"></i>`;\r\n      ulList.appendChild(list);\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://webpack-demo/./src/modules/variables.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);