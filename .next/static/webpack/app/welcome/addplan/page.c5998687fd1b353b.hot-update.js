"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/welcome/addplan/page",{

/***/ "(app-pages-browser)/./src/app/components/items.js":
/*!*************************************!*\
  !*** ./src/app/components/items.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_items_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/items.css */ \"(app-pages-browser)/./src/app/styles/items.css\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\n\n\n\nconst Meals = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"meal-item\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: props.title\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/items.js\",\n                    lineNumber: 11,\n                    columnNumber: 14\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: props.img,\n                    className: \"meal-img\",\n                    alt: \"meal image\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/items.js\",\n                    lineNumber: 12,\n                    columnNumber: 14\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/demo\",\n                    className: \"demo\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        children: \"view\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/items.js\",\n                        lineNumber: 14,\n                        columnNumber: 51\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/items.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, props.id, true, {\n            fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/items.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/items.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Meals;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meals);\nvar _c;\n$RefreshReg$(_c, \"Meals\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9pdGVtcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ0c7QUFDQTtBQUU3QixNQUFNRSxRQUFPLENBQUNDO0lBQ1YscUJBRUEsOERBQUNDO1FBQUlDLFdBQVU7a0JBRVgsNEVBQUNDOzs4QkFDSSw4REFBQ0M7OEJBQUlKLE1BQU1LLEtBQUs7Ozs7Ozs4QkFDaEIsOERBQUNDO29CQUFJQyxLQUFLUCxNQUFNTSxHQUFHO29CQUFFSixXQUFVO29CQUFXTSxLQUFLOzs7Ozs7OEJBRWhELDhEQUFDVixpREFBSUE7b0JBQUNXLE1BQU87b0JBQVFQLFdBQVU7OEJBQU8sNEVBQUNRO2tDQUFPOzs7Ozs7Ozs7Ozs7V0FKekNWLE1BQU1XLEVBQUU7Ozs7Ozs7Ozs7QUFVekI7S0FmTVo7QUFpQk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2l0ZW1zLmpzP2I2NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3R5bGVzL2l0ZW1zLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBNZWFscyA9KHByb3BzKSA9PiB7XG4gICAgcmV0dXJuICggICAgXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWVhbC1pdGVtJz5cbiAgIFxuICAgICAgICA8bGkga2V5PXtwcm9wcy5pZH0+XG4gICAgICAgICAgICAgPGgyPntwcm9wcy50aXRsZX08L2gyPlxuICAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWd9IGNsYXNzTmFtZT1cIm1lYWwtaW1nXCIgYWx0PSBcIm1lYWwgaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICA8TGluayBocmVmID0gXCIvZGVtb1wiIGNsYXNzTmFtZT0nZGVtbyc+PGJ1dHRvbj52aWV3PC9idXR0b24+PC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgIDwvZGl2PlxuXG5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVhbHM7Il0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIk1lYWxzIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJsaSIsImgyIiwidGl0bGUiLCJpbWciLCJzcmMiLCJhbHQiLCJocmVmIiwiYnV0dG9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/items.js\n"));

/***/ })

});