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

/***/ "./views/fetch/postpatchput.js":
/*!*************************************!*\
  !*** ./views/fetch/postpatchput.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst url = \"http://localhost:3000\";\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  event.preventDefault();\n  document.getElementById('enter').addEventListener('click', function (event) {\n    event.preventDefault();\n    const arrOfIds = [\"email\", \"name\", \"city\", \"age\", \"zipcode\"];\n    const body = createFormObject(arrOfIds);\n    const method = document.getElementById('select').value;\n    const id = document.getElementById('id').value;\n    console.log(id);\n    if (method === 'post') {\n      Post(body);\n    } else if (method === 'put') {\n      Put(id, body);\n    } else {\n      Patch(id, body);\n    }\n  });\n});\nfunction createFormObject(arrOfIds) {\n  let formData = new Object();\n  let name, value;\n  for (let id of arrOfIds) {\n    name = document.getElementById(id).name;\n    value = document.getElementById(id).value;\n    if (value.toString() !== \"\") {\n      if (isNaN(value)) {\n        formData[name] = value;\n      } else {\n        value = parseInt(value);\n        formData[name] = value;\n      }\n      continue;\n    }\n    formData[name] = undefined;\n  }\n  return formData;\n}\nasync function Post(body) {\n  const res = await fetch(`${url}/worko/user`, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: JSON.stringify(body)\n  });\n  const response = await res.text();\n  console.log(JSON.parse(response));\n}\nasync function Patch(id, toUpdate) {\n  const res = await fetch(`${url}/worko/user/${id}`, {\n    method: 'PATCH',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: JSON.stringify(toUpdate)\n  });\n  const response = await res.text();\n  console.log(JSON.parse(response));\n}\nasync function Put(id, toUpdate) {\n  const res = await fetch(`${url}/worko/user/${id}`, {\n    method: 'PUT',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: JSON.stringify(toUpdate)\n  });\n  const response = await res.text();\n  console.log(JSON.parse(response));\n}\n\n//# sourceURL=webpack://mvc_backend/./views/fetch/postpatchput.js?");

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
/******/ 	__webpack_modules__["./views/fetch/postpatchput.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;