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

/***/ "./views/fetch/getdelete.js":
/*!**********************************!*\
  !*** ./views/fetch/getdelete.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst url = \"http://localhost:3000\";\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  event.preventDefault();\n  const searchBtn = document.getElementById('searchUser');\n  const deleteBtn = document.getElementById('deleteUser');\n  searchBtn.addEventListener('click', function () {\n    Query('find');\n  });\n  deleteBtn.addEventListener('click', function () {\n    Query('delete');\n  });\n});\nfunction Query(method) {\n  const query = document.getElementById('search').value;\n  if (!query) {\n    if (method === 'find') {\n      return FindUser(null);\n    } else {\n      return DeleteUser(null);\n    }\n  }\n  if (method === 'find') {\n    return FindUser(query);\n  } else {\n    return DeleteUser(query);\n  }\n}\nasync function FindUser(query) {\n  const id = query;\n  const resid = await fetch(`${url}/worko/user/${id}`, {\n    method: 'GET'\n  });\n  const response2 = await resid.text();\n  console.log(JSON.parse(response2));\n}\nasync function DeleteUser(query) {\n  const id = query;\n  const res = await fetch(`${url}/worko/user/${id}`, {\n    method: 'DELETE'\n  });\n  const response = await res.text();\n  console.log(JSON.parse(response));\n}\n\n//# sourceURL=webpack://mvc_backend/./views/fetch/getdelete.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./views/fetch/getdelete.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;