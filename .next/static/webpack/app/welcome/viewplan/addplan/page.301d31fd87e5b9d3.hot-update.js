"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/welcome/viewplan/addplan/page",{

/***/ "(app-pages-browser)/./src/app/components/AddFood.jsx":
/*!****************************************!*\
  !*** ./src/app/components/AddFood.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/form.css */ \"(app-pages-browser)/./src/app/styles/form.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst formtitle = (param)=>{\n    let { OnAddFood } = param;\n    _s();\n    const [newItem, setNewItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        portion: \"\",\n        calories: \"\",\n        carbs: \"\",\n        protein: \"\"\n    });\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setNewItem((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (newItem.name.trim() === \"\" || newItem.portion.trim() === \"\") {\n            return;\n        }\n        console.log(\"New meal plan:\", newItem);\n        on;\n        setNewItem({\n            name: \"\",\n            portion: \"\",\n            calories: \"\",\n            carbs: \"\",\n            protein: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Food Name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"string\",\n                        id: \"name\",\n                        name: \"name\",\n                        value: newItem.name,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"portion\",\n                        children: \"Portion(1 cup, 100g, 1):\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"string\",\n                        id: \"portion\",\n                        name: \"portion\",\n                        value: newItem.portion,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"calories\",\n                        children: \"Calories:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"calories\",\n                        name: \"calories\",\n                        value: newItem.calories,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"carbs\",\n                        children: \"Carbs(g):\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"carbs\",\n                        name: \"carbs\",\n                        value: newItem.carbs,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"protein\",\n                        children: \"Protein(g):\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"protein\",\n                        name: \"protein\",\n                        value: newItem.protein,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-button\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add to Meal Plan\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Done\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(formtitle, \"jy6DBs7O3oOfpmCOjM8+NTttIOc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (formtitle);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRGb29kLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRXdDO0FBQ1o7QUFFNUIsTUFBTUUsWUFBWTtRQUFDLEVBQUNDLFNBQVMsRUFBQzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO1FBQ3JDSyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDbEIsTUFBTSxFQUFFTixJQUFJLEVBQUVPLEtBQUssRUFBRSxHQUFHRCxNQUFNRSxNQUFNO1FBQ3BDVCxXQUFXVSxDQUFBQSxZQUFjO2dCQUN2QixHQUFHQSxTQUFTO2dCQUNaLENBQUNULEtBQUssRUFBRU87WUFDVjtJQUNGO0lBR0YsTUFBTUcsZUFBZSxDQUFDSjtRQUNwQkEsTUFBTUssY0FBYztRQUVwQixJQUFJYixRQUFRRSxJQUFJLENBQUNZLElBQUksT0FBTyxNQUFNZCxRQUFRRyxPQUFPLENBQUNXLElBQUksT0FBTyxJQUFJO1lBQy9EO1FBQ0Y7UUFDQUMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQmhCO1FBRTlCaUI7UUFFQWhCLFdBQVc7WUFBRUMsTUFBTTtZQUFJQyxTQUFTO1lBQUlDLFVBQVU7WUFBSUMsT0FBTztZQUFJQyxTQUFTO1FBQUc7SUFDM0U7SUFFSixxQkFDSSw4REFBQ1k7OzBCQUNHLDhEQUFDQztnQkFBS0MsVUFBVVI7O2tDQUNoQiw4REFBQ1M7d0JBQU1DLFNBQVE7a0NBQU87Ozs7OztrQ0FDdEIsOERBQUNDO3dCQUNHQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIdkIsTUFBSzt3QkFDTE8sT0FBT1QsUUFBUUUsSUFBSTt3QkFDbkJ3QixVQUFVbkI7d0JBQ1ZvQixRQUFROzs7Ozs7a0NBRVosOERBQUNDOzs7OztrQ0FFRCw4REFBQ1A7d0JBQU1DLFNBQVE7a0NBQVU7Ozs7OztrQ0FDekIsOERBQUNDO3dCQUNHQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIdkIsTUFBSzt3QkFDTE8sT0FBT1QsUUFBUUcsT0FBTzt3QkFDdEJ1QixVQUFVbkI7d0JBQ1ZvQixRQUFROzs7Ozs7a0NBRVosOERBQUNDOzs7OztrQ0FFRCw4REFBQ1A7d0JBQU1DLFNBQVE7a0NBQVc7Ozs7OztrQ0FDMUIsOERBQUNDO3dCQUNHQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIdkIsTUFBSzt3QkFDTE8sT0FBT1QsUUFBUUksUUFBUTt3QkFDdkJzQixVQUFVbkI7d0JBQ1ZvQixRQUFROzs7Ozs7a0NBRVosOERBQUNDOzs7OztrQ0FFRCw4REFBQ1A7d0JBQU1DLFNBQVE7a0NBQVE7Ozs7OztrQ0FDdkIsOERBQUNDO3dCQUNHQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIdkIsTUFBSzt3QkFDTE8sT0FBT1QsUUFBUUssS0FBSzt3QkFDcEJxQixVQUFVbkI7d0JBQ1ZvQixRQUFROzs7Ozs7a0NBRVosOERBQUNDOzs7OztrQ0FDRCw4REFBQ1A7d0JBQU1DLFNBQVE7a0NBQVU7Ozs7OztrQ0FDekIsOERBQUNDO3dCQUNHQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIdkIsTUFBSzt3QkFDTE8sT0FBT1QsUUFBUU0sT0FBTzt3QkFDdEJvQixVQUFVbkI7d0JBQ1ZvQixRQUFROzs7Ozs7a0NBRVosOERBQUNDOzs7Ozs7Ozs7OzswQkFJRCw4REFBQ1Y7Z0JBQUlXLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBT04sTUFBSztrQ0FBUzs7Ozs7O2tDQUN0Qiw4REFBQ007d0JBQU9OLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQztHQWhHRTFCO0FBbUdOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRGb29kLmpzeD8wN2FkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL3N0eWxlcy9mb3JtLmNzcyc7XG5cbmNvbnN0IGZvcm10aXRsZSA9ICh7T25BZGRGb29kfSkgPT4ge1xuICAgICAgICBjb25zdCBbbmV3SXRlbSwgc2V0TmV3SXRlbV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgcG9ydGlvbjogJycsXG4gICAgICAgICAgY2Fsb3JpZXM6ICcnLFxuICAgICAgICAgIGNhcmJzOiAnJyxcbiAgICAgICAgICBwcm90ZWluOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHNldE5ld0l0ZW0ocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH07XG4gICAgXG4gICAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobmV3SXRlbS5uYW1lLnRyaW0oKSA9PT0gJycgfHwgbmV3SXRlbS5wb3J0aW9uLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ05ldyBtZWFsIHBsYW46JywgbmV3SXRlbSk7XG5cbiAgICAgICAgICBvblxuICAgICAgXG4gICAgICAgICAgc2V0TmV3SXRlbSh7IG5hbWU6ICcnLCBwb3J0aW9uOiAnJywgY2Fsb3JpZXM6ICcnLCBjYXJiczogJycsIHByb3RlaW46ICcnIH0pO1xuICAgICAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Gb29kIE5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBvcnRpb25cIj5Qb3J0aW9uKDEgY3VwLCAxMDBnLCAxKTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgaWQ9XCJwb3J0aW9uXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicG9ydGlvblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0ucG9ydGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICBcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2Fsb3JpZXNcIj5DYWxvcmllczo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjYWxvcmllc1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhbG9yaWVzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS5jYWxvcmllc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2FyYnNcIj5DYXJicyhnKTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjYXJic1wiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNhcmJzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS5jYXJic31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByb3RlaW5cIj5Qcm90ZWluKGcpOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBpZD1cInByb3RlaW5cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcm90ZWluXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS5wcm90ZWlufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1idXR0b24nPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5BZGQgdG8gTWVhbCBQbGFuPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZvcm10aXRsZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImZvcm10aXRsZSIsIk9uQWRkRm9vZCIsIm5ld0l0ZW0iLCJzZXROZXdJdGVtIiwibmFtZSIsInBvcnRpb24iLCJjYWxvcmllcyIsImNhcmJzIiwicHJvdGVpbiIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwib24iLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJiciIsImNsYXNzTmFtZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddFood.jsx\n"));

/***/ })

});