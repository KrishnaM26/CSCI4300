"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/welcome/demo/page",{

/***/ "(app-pages-browser)/./src/app/welcome/demo/page.js":
/*!**************************************!*\
  !*** ./src/app/welcome/demo/page.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navbarAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbarAuth */ \"(app-pages-browser)/./src/app/components/navbarAuth.jsx\");\n/* harmony import */ var _app_components_AddFood__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/AddFood */ \"(app-pages-browser)/./src/app/components/AddFood.jsx\");\n/* harmony import */ var _app_components_food__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/food */ \"(app-pages-browser)/./src/app/components/food.js\");\n/* harmony import */ var _app_components_foodlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/components/foodlist */ \"(app-pages-browser)/./src/app/components/foodlist.js\");\n/* harmony import */ var _app_components_todays_plan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/components/todays-plan */ \"(app-pages-browser)/./src/app/components/todays-plan.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Demo = ()=>{\n    _s();\n    const [foods, setFoods] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addUserHandler = (foodInfo)=>{\n        setFoods((prev)=>[\n                ...prev,\n                foodInfo\n            ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbarAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/demo/page.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_todays_plan__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/demo/page.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_AddFood__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                OnAddFood: addUserHandler\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/demo/page.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_foodlist__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                items: foods\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/demo/page.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_food__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: \"Meal Plan 1\",\n                name: \"apple\",\n                portion: \"1\",\n                calories: \"95\",\n                carbs: \"2\",\n                protein: \"2\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/demo/page.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_food__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                name: \"milk\",\n                portion: \"1 cup\",\n                calories: \"95\",\n                carbs: \"2\",\n                protein: \"2\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/demo/page.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/welcome/demo/page.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Demo, \"A0FpdaM17REA0/HwhpzJgeR+Ckg=\");\n_c = Demo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo);\nvar _c;\n$RefreshReg$(_c, \"Demo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd2VsY29tZS9kZW1vL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDc0M7QUFDZTtBQUNOO0FBQ047QUFDUTtBQUNLO0FBSXRELE1BQU1PLE9BQU87O0lBR2IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkMsTUFBTVMsaUJBQWlCLENBQUNDO1FBQ3RCRixTQUFTLENBQUNHLE9BQVM7bUJBQUlBO2dCQUFNRDthQUFTO0lBRXhDO0lBQ0UscUJBQ0ksOERBQUNFOzswQkFFRyw4REFBQ1gsOERBQVVBOzs7OzswQkFDWCw4REFBQ0ksbUVBQVVBOzs7OzswQkFHWCw4REFBQ0gsK0RBQU9BO2dCQUFFVyxXQUFXSjs7Ozs7OzBCQUtyQiw4REFBQ0wsZ0VBQVFBO2dCQUFDVSxPQUFTUDs7Ozs7OzBCQUVuQiw4REFBQ0osNERBQUlBO2dCQUNMWSxPQUFRO2dCQUNSQyxNQUFPO2dCQUNQQyxTQUFVO2dCQUNWQyxVQUFXO2dCQUNYQyxPQUFRO2dCQUNSQyxTQUFVOzs7Ozs7MEJBR1YsOERBQUNqQiw0REFBSUE7Z0JBQ0xhLE1BQU87Z0JBQ1BDLFNBQVU7Z0JBQ1ZDLFVBQVc7Z0JBQ1hDLE9BQVE7Z0JBQ1JDLFNBQVU7Ozs7Ozs7Ozs7OztBQU10QjtHQTNDTWQ7S0FBQUE7QUE2Q04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC93ZWxjb21lL2RlbW8vcGFnZS5qcz9hZjRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdkJhckF1dGggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2YmFyQXV0aFwiO1xuaW1wb3J0IEFkZEZvb2QgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvQWRkRm9vZFwiO1xuaW1wb3J0IEZvb2QgZnJvbSBcIkAvYXBwL2NvbXBvbmVudHMvZm9vZFwiO1xuaW1wb3J0IEZvb2RMaXN0IGZyb20gXCJAL2FwcC9jb21wb25lbnRzL2Zvb2RsaXN0XCI7XG5pbXBvcnQgVG9kYXlzUGxhbiBmcm9tIFwiQC9hcHAvY29tcG9uZW50cy90b2RheXMtcGxhblwiO1xuXG5cblxuY29uc3QgRGVtbyA9ICgpID0+e1xuXG5cbmNvbnN0IFtmb29kcywgc2V0Rm9vZHNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGFkZFVzZXJIYW5kbGVyID0gKGZvb2RJbmZvKSA9PiB7XG4gICAgc2V0Rm9vZHMoKHByZXYpID0+IFsuLi5wcmV2LCBmb29kSW5mb10pO1xuXG4gIH07XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8TmF2QmFyQXV0aC8+XG4gICAgICAgICAgICA8VG9kYXlzUGxhbi8+XG5cblxuICAgICAgICAgICAgPEFkZEZvb2QgIE9uQWRkRm9vZD17YWRkVXNlckhhbmRsZXJ9Lz5cblxuICAgICAgICAgICBcbiAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxGb29kTGlzdCBpdGVtcyA9IHtmb29kc30vPlxuXG4gICAgICAgICAgICA8Rm9vZCBcbiAgICAgICAgICAgIHRpdGxlID0gXCJNZWFsIFBsYW4gMVwiXG4gICAgICAgICAgICBuYW1lID0gXCJhcHBsZVwiXG4gICAgICAgICAgICBwb3J0aW9uID0gXCIxXCJcbiAgICAgICAgICAgIGNhbG9yaWVzID0gXCI5NVwiXG4gICAgICAgICAgICBjYXJicyA9IFwiMlwiXG4gICAgICAgICAgICBwcm90ZWluID0gXCIyXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxGb29kIFxuICAgICAgICAgICAgbmFtZSA9IFwibWlsa1wiXG4gICAgICAgICAgICBwb3J0aW9uID0gXCIxIGN1cFwiXG4gICAgICAgICAgICBjYWxvcmllcyA9IFwiOTVcIlxuICAgICAgICAgICAgY2FyYnMgPSBcIjJcIlxuICAgICAgICAgICAgcHJvdGVpbiA9IFwiMlwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlbW87Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZCYXJBdXRoIiwiQWRkRm9vZCIsIkZvb2QiLCJGb29kTGlzdCIsIlRvZGF5c1BsYW4iLCJEZW1vIiwiZm9vZHMiLCJzZXRGb29kcyIsImFkZFVzZXJIYW5kbGVyIiwiZm9vZEluZm8iLCJwcmV2IiwiZGl2IiwiT25BZGRGb29kIiwiaXRlbXMiLCJ0aXRsZSIsIm5hbWUiLCJwb3J0aW9uIiwiY2Fsb3JpZXMiLCJjYXJicyIsInByb3RlaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/welcome/demo/page.js\n"));

/***/ })

});