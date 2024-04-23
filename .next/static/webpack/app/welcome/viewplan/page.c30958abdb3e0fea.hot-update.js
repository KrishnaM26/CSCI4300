"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/welcome/viewplan/page",{

/***/ "(app-pages-browser)/./src/app/components/AddFood.jsx":
/*!****************************************!*\
  !*** ./src/app/components/AddFood.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./src/app/components/button.js\");\n/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/form.css */ \"(app-pages-browser)/./src/app/styles/form.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddFood = (param)=>{\n    let { OnAddFood } = param;\n    _s();\n    const [newItem, setNewItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        portion: \"\",\n        calories: \"\",\n        carbs: \"\",\n        protein: \"\"\n    });\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setNewItem((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (newItem.name.trim() === \"\" || newItem.portion.trim() === \"\") {\n            return;\n        }\n        console.log(\"New meal plan:\", newItem);\n        OnAddFood(newItem);\n        setNewItem({\n            name: \"\",\n            portion: \"\",\n            calories: \"\",\n            carbs: \"\",\n            protein: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Food Name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\",\n                        value: newItem.name,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Portion(1 cup, 100g, 1):\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"portion\",\n                        name: \"portion\",\n                        value: newItem.portion,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Calories:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"calories\",\n                        name: \"calories\",\n                        value: newItem.calories,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Carbs(g):\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"carbs\",\n                        name: \"carbs\",\n                        value: newItem.carbs,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: \"Protein(g):\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"protein\",\n                        name: \"protein\",\n                        value: newItem.protein,\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-button\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            type: \"submit\",\n                            children: \"Add Food\"\n                        }, void 0, false, {\n                            fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 16\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                type: \"submit\",\n                children: \"Done\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AddFood, \"jy6DBs7O3oOfpmCOjM8+NTttIOc=\");\n_c = AddFood;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFood);\nvar _c;\n$RefreshReg$(_c, \"AddFood\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRGb29kLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNWO0FBQ0Y7QUFHNUIsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLFNBQVMsRUFBQzs7SUFFcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3JDTSxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDbEIsTUFBTSxFQUFFTixJQUFJLEVBQUVPLEtBQUssRUFBRSxHQUFHRCxNQUFNRSxNQUFNO1FBQ3BDVCxXQUFXVSxDQUFBQSxZQUFjO2dCQUN2QixHQUFHQSxTQUFTO2dCQUNaLENBQUNULEtBQUssRUFBRU87WUFDVjtJQUNGO0lBR0YsTUFBTUcsZUFBZSxDQUFDSjtRQUNwQkEsTUFBTUssY0FBYztRQUVwQixJQUFJYixRQUFRRSxJQUFJLENBQUNZLElBQUksT0FBTyxNQUFNZCxRQUFRRyxPQUFPLENBQUNXLElBQUksT0FBTyxJQUFJO1lBQy9EO1FBQ0Y7UUFDQUMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQmhCO1FBRTlCRCxVQUFVQztRQUVWQyxXQUFXO1lBQUVDLE1BQU07WUFBSUMsU0FBUztZQUFJQyxVQUFVO1lBQUlDLE9BQU87WUFBSUMsU0FBUztRQUFHO0lBQzNFO0lBRUoscUJBQ0ksOERBQUNXOzswQkFDRyw4REFBQ0M7Z0JBQUtDLFVBQVVQOztrQ0FDaEIsOERBQUNRO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNHQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIckIsTUFBSzt3QkFDTE8sT0FBT1QsUUFBUUUsSUFBSTt3QkFDbkJzQixVQUFVakI7d0JBQ1ZrQixRQUFROzs7Ozs7a0NBRVosOERBQUNDOzs7OztrQ0FFRCw4REFBQ047a0NBQU87Ozs7OztrQ0FDUiw4REFBQ0M7d0JBQ0dDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hyQixNQUFLO3dCQUNMTyxPQUFPVCxRQUFRRyxPQUFPO3dCQUN0QnFCLFVBQVVqQjt3QkFDVmtCLFFBQVE7Ozs7OztrQ0FFWiw4REFBQ0M7Ozs7O2tDQUVELDhEQUFDTjtrQ0FBTzs7Ozs7O2tDQUNSLDhEQUFDQzt3QkFDR0MsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSHJCLE1BQUs7d0JBQ0xPLE9BQU9ULFFBQVFJLFFBQVE7d0JBQ3ZCb0IsVUFBVWpCO3dCQUNWa0IsUUFBUTs7Ozs7O2tDQUVaLDhEQUFDQzs7Ozs7a0NBRUQsOERBQUNOO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNHQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIckIsTUFBSzt3QkFDTE8sT0FBT1QsUUFBUUssS0FBSzt3QkFDcEJtQixVQUFVakI7d0JBQ1ZrQixRQUFROzs7Ozs7a0NBRVosOERBQUNDOzs7OztrQ0FDRCw4REFBQ047a0NBQU87Ozs7OztrQ0FDUiw4REFBQ0M7d0JBQ0dDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hyQixNQUFLO3dCQUNMTyxPQUFPVCxRQUFRTSxPQUFPO3dCQUN0QmtCLFVBQVVqQjt3QkFDVmtCLFFBQVE7Ozs7OztrQ0FFWiw4REFBQ0M7Ozs7O2tDQUNELDhEQUFDVDt3QkFBSVUsV0FBVTtrQ0FDWiw0RUFBQzlCLCtDQUFNQTs0QkFBQ3lCLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUt6Qiw4REFBQ3pCLCtDQUFNQTtnQkFBQ3lCLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUc5QjtHQWpHRXhCO0tBQUFBO0FBb0dOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRGb29kLmpzeD8wN2FkIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2J1dHRvbic7XG5pbXBvcnQgJy4uL3N0eWxlcy9mb3JtLmNzcyc7XG5cblxuY29uc3QgQWRkRm9vZCA9ICh7T25BZGRGb29kfSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IFtuZXdJdGVtLCBzZXROZXdJdGVtXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICBwb3J0aW9uOiAnJyxcbiAgICAgICAgICBjYWxvcmllczogJycsXG4gICAgICAgICAgY2FyYnM6ICcnLFxuICAgICAgICAgIHByb3RlaW46ICcnXG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgc2V0TmV3SXRlbShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfTtcbiAgICBcbiAgICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChuZXdJdGVtLm5hbWUudHJpbSgpID09PSAnJyB8fCBuZXdJdGVtLnBvcnRpb24udHJpbSgpID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZygnTmV3IG1lYWwgcGxhbjonLCBuZXdJdGVtKTtcblxuICAgICAgICAgIE9uQWRkRm9vZChuZXdJdGVtKTtcbiAgICAgIFxuICAgICAgICAgIHNldE5ld0l0ZW0oeyBuYW1lOiAnJywgcG9ydGlvbjogJycsIGNhbG9yaWVzOiAnJywgY2FyYnM6ICcnLCBwcm90ZWluOiAnJyB9KTtcbiAgICAgICAgfTtcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsPkZvb2QgTmFtZTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgPlBvcnRpb24oMSBjdXAsIDEwMGcsIDEpOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwb3J0aW9uXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicG9ydGlvblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0ucG9ydGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICBcbiAgICAgICAgICAgIDxsYWJlbCA+Q2Fsb3JpZXM6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwiY2Fsb3JpZXNcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjYWxvcmllc1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0uY2Fsb3JpZXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8bGFiZWw+Q2FyYnMoZyk6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwiY2FyYnNcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjYXJic1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0uY2FyYnN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGxhYmVsID5Qcm90ZWluKGcpOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBpZD1cInByb3RlaW5cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwcm90ZWluXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS5wcm90ZWlufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWJ1dHRvbic+XG4gICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgRm9vZDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RG9uZTwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFkZEZvb2Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJBZGRGb29kIiwiT25BZGRGb29kIiwibmV3SXRlbSIsInNldE5ld0l0ZW0iLCJuYW1lIiwicG9ydGlvbiIsImNhbG9yaWVzIiwiY2FyYnMiLCJwcm90ZWluIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZTdGF0ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsImJyIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddFood.jsx\n"));

/***/ })

});