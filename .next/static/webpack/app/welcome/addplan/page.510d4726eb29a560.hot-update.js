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

/***/ "(app-pages-browser)/./src/app/components/foodlist.js":
/*!****************************************!*\
  !*** ./src/app/components/foodlist.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food */ \"(app-pages-browser)/./src/app/components/food.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ \"(app-pages-browser)/./src/app/components/card.jsx\");\n/* harmony import */ var _styles_itemslist_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/itemslist.css */ \"(app-pages-browser)/./src/app/styles/itemslist.css\");\n\n\n\n\n\nconst FoodList = (param)=>{\n    let { items } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            items.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_food__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: item.title,\n                    name: item.name,\n                    portion: item.portion,\n                    calories: item.calories,\n                    carbs: item.carbs,\n                    protein: item.protein\n                }, index, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/foodlist.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/foodlist.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/foodlist.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_c = FoodList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemList);\nvar _c;\n$RefreshReg$(_c, \"FoodList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9mb29kbGlzdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNBO0FBQ0E7QUFDTztBQUlqQyxNQUFNRyxXQUFXO1FBQUMsRUFBQ0MsS0FBSyxFQUFDO0lBQ3JCLHFCQUNJLDhEQUFDQzs7WUFFSUQsTUFBTUUsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNkLDhEQUFDUCw2Q0FBSUE7b0JBRURRLE9BQVNGLEtBQUtFLEtBQUs7b0JBQ25CQyxNQUFNSCxLQUFLRyxJQUFJO29CQUNmQyxTQUFXSixLQUFLSSxPQUFPO29CQUN2QkMsVUFBVUwsS0FBS0ssUUFBUTtvQkFDdkJDLE9BQU9OLEtBQUtNLEtBQUs7b0JBQ2pCQyxTQUFTUCxLQUFLTyxPQUFPO21CQU5oQk47Ozs7OzBCQVViLDhEQUFDTzs7Ozs7Ozs7Ozs7QUFHYjtLQW5CTVo7QUFxQk4sK0RBQWVhLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2Zvb2RsaXN0LmpzPzcyMmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvb2QgZnJvbSBcIi4vZm9vZFwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0ICcuLi9zdHlsZXMvaXRlbXNsaXN0LmNzcyc7XG5cblxuXG5jb25zdCBGb29kTGlzdCA9ICh7aXRlbXN9KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxGb29kXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0ge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX0gXG4gICAgICAgICAgICAgICAgICAgIHBvcnRpb24gPSB7aXRlbS5wb3J0aW9ufVxuICAgICAgICAgICAgICAgICAgICBjYWxvcmllcz17aXRlbS5jYWxvcmllc31cbiAgICAgICAgICAgICAgICAgICAgY2FyYnM9e2l0ZW0uY2FyYnN9XG4gICAgICAgICAgICAgICAgICAgIHByb3RlaW49e2l0ZW0ucHJvdGVpbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgXG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtTGlzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb29kIiwiQ2FyZCIsIkZvb2RMaXN0IiwiaXRlbXMiLCJkaXYiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsIm5hbWUiLCJwb3J0aW9uIiwiY2Fsb3JpZXMiLCJjYXJicyIsInByb3RlaW4iLCJociIsIkl0ZW1MaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/foodlist.js\n"));

/***/ })

});