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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./src/app/components/button.js\");\n/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/form.css */ \"(app-pages-browser)/./src/app/styles/form.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddFood = (param)=>{\n    let { OnAddFood } = param;\n    _s();\n    const [newItem, setNewItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        portion: \"\",\n        calories: \"\",\n        carbs: \"\",\n        protein: \"\"\n    });\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setNewItem((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (newItem.name.trim() === \"\" || newItem.portion.trim() === \"\") {\n            return;\n        }\n        console.log(\"New meal plan:\", newItem);\n        OnAddFood(newItem);\n        setNewItem({\n            name: \"\",\n            portion: \"\",\n            calories: \"\",\n            carbs: \"\",\n            protein: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Food Name:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"name\",\n                    name: \"name\",\n                    value: newItem.name,\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Portion(1 cup, 100g, 1):\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"portion\",\n                    name: \"portion\",\n                    value: newItem.portion,\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Calories:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"calories\",\n                    name: \"calories\",\n                    value: newItem.calories,\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Carbs(g):\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 75,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"carbs\",\n                    name: \"carbs\",\n                    value: newItem.carbs,\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Protein(g):\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"protein\",\n                    name: \"protein\",\n                    value: newItem.protein,\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 94,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-button\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            type: \"submit\",\n                            children: \"Add Food\"\n                        }, void 0, false, {\n                            fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 16\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            type: \"submit\",\n                            children: \"Done\"\n                        }, void 0, false, {\n                            fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 16\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AddFood, \"jy6DBs7O3oOfpmCOjM8+NTttIOc=\");\n_c = AddFood;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFood);\nvar _c;\n$RefreshReg$(_c, \"AddFood\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRGb29kLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNWO0FBQ0Y7QUFHNUIsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLFNBQVMsRUFBQzs7SUFFcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3JDTSxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsVUFBVTtRQUNWQyxPQUFPO1FBQ1BDLFNBQVM7SUFDWDtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDbEIsTUFBTSxFQUFFTixJQUFJLEVBQUVPLEtBQUssRUFBRSxHQUFHRCxNQUFNRSxNQUFNO1FBQ3BDVCxXQUFXVSxDQUFBQSxZQUFjO2dCQUN2QixHQUFHQSxTQUFTO2dCQUNaLENBQUNULEtBQUssRUFBRU87WUFDVjtJQUNGO0lBR0YsTUFBTUcsZUFBZSxDQUFDSjtRQUNwQkEsTUFBTUssY0FBYztRQUVwQixJQUFJYixRQUFRRSxJQUFJLENBQUNZLElBQUksT0FBTyxNQUFNZCxRQUFRRyxPQUFPLENBQUNXLElBQUksT0FBTyxJQUFJO1lBQy9EO1FBQ0Y7UUFDQUMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQmhCO1FBRTlCRCxVQUFVQztRQUVWQyxXQUFXO1lBQUVDLE1BQU07WUFBSUMsU0FBUztZQUFJQyxVQUFVO1lBQUlDLE9BQU87WUFBSUMsU0FBUztRQUFHO0lBQzNFO0lBRUoscUJBQ0ksOERBQUNXO2tCQUNHLDRFQUFDQztZQUFLQyxVQUFVUDs7OEJBQ2hCLDhEQUFDUTs4QkFBTTs7Ozs7OzhCQUNQLDhEQUFDQztvQkFDR0MsTUFBSztvQkFDTEMsSUFBRztvQkFDSHJCLE1BQUs7b0JBQ0xPLE9BQU9ULFFBQVFFLElBQUk7b0JBQ25Cc0IsVUFBVWpCO29CQUNWa0IsUUFBUTs7Ozs7OzhCQUVaLDhEQUFDQzs7Ozs7OEJBRUQsOERBQUNOOzhCQUFPOzs7Ozs7OEJBQ1IsOERBQUNDO29CQUNHQyxNQUFLO29CQUNMQyxJQUFHO29CQUNIckIsTUFBSztvQkFDTE8sT0FBT1QsUUFBUUcsT0FBTztvQkFDdEJxQixVQUFVakI7b0JBQ1ZrQixRQUFROzs7Ozs7OEJBRVosOERBQUNDOzs7Ozs4QkFFRCw4REFBQ047OEJBQU87Ozs7Ozs4QkFDUiw4REFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hyQixNQUFLO29CQUNMTyxPQUFPVCxRQUFRSSxRQUFRO29CQUN2Qm9CLFVBQVVqQjtvQkFDVmtCLFFBQVE7Ozs7Ozs4QkFFWiw4REFBQ0M7Ozs7OzhCQUVELDhEQUFDTjs4QkFBTTs7Ozs7OzhCQUNQLDhEQUFDQztvQkFDR0MsTUFBSztvQkFDTEMsSUFBRztvQkFDSHJCLE1BQUs7b0JBQ0xPLE9BQU9ULFFBQVFLLEtBQUs7b0JBQ3BCbUIsVUFBVWpCO29CQUNWa0IsUUFBUTs7Ozs7OzhCQUVaLDhEQUFDQzs7Ozs7OEJBQ0QsOERBQUNOOzhCQUFPOzs7Ozs7OEJBQ1IsOERBQUNDO29CQUNHQyxNQUFLO29CQUNMQyxJQUFHO29CQUNIckIsTUFBSztvQkFDTE8sT0FBT1QsUUFBUU0sT0FBTztvQkFDdEJrQixVQUFVakI7b0JBQ1ZrQixRQUFROzs7Ozs7OEJBRVosOERBQUNDOzs7Ozs4QkFDRCw4REFBQ1Q7b0JBQUlVLFdBQVU7O3NDQUNaLDhEQUFDOUIsK0NBQU1BOzRCQUFDeUIsTUFBSztzQ0FBUzs7Ozs7O3NDQUNyQiw4REFBQ0k7Ozs7O3NDQUVGLDhEQUFDN0IsK0NBQU1BOzRCQUFDeUIsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakM7R0FwR0V4QjtLQUFBQTtBQXVHTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWRkRm9vZC5qc3g/MDdhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0ICcuLi9zdHlsZXMvZm9ybS5jc3MnO1xuXG5cbmNvbnN0IEFkZEZvb2QgPSAoe09uQWRkRm9vZH0pID0+IHtcblxuICAgICAgICBjb25zdCBbbmV3SXRlbSwgc2V0TmV3SXRlbV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgcG9ydGlvbjogJycsXG4gICAgICAgICAgY2Fsb3JpZXM6ICcnLFxuICAgICAgICAgIGNhcmJzOiAnJyxcbiAgICAgICAgICBwcm90ZWluOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHNldE5ld0l0ZW0ocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH07XG4gICAgXG4gICAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobmV3SXRlbS5uYW1lLnRyaW0oKSA9PT0gJycgfHwgbmV3SXRlbS5wb3J0aW9uLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ05ldyBtZWFsIHBsYW46JywgbmV3SXRlbSk7XG5cbiAgICAgICAgICBPbkFkZEZvb2QobmV3SXRlbSk7XG4gICAgICBcbiAgICAgICAgICBzZXROZXdJdGVtKHsgbmFtZTogJycsIHBvcnRpb246ICcnLCBjYWxvcmllczogJycsIGNhcmJzOiAnJywgcHJvdGVpbjogJycgfSk7XG4gICAgICAgIH07XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbD5Gb29kIE5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3SXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGxhYmVsID5Qb3J0aW9uKDEgY3VwLCAxMDBnLCAxKTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwicG9ydGlvblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInBvcnRpb25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLnBvcnRpb259XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgXG4gICAgICAgICAgICA8bGFiZWwgPkNhbG9yaWVzOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBpZD1cImNhbG9yaWVzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2Fsb3JpZXNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLmNhbG9yaWVzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgPGxhYmVsPkNhcmJzKGcpOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBpZD1cImNhcmJzXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2FyYnNcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLmNhcmJzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxsYWJlbCA+UHJvdGVpbihnKTo8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwcm90ZWluXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicHJvdGVpblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0ucHJvdGVpbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1idXR0b24nPlxuICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIEZvb2Q8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+RG9uZTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfTtcblxuXG5leHBvcnQgZGVmYXVsdCBBZGRGb29kOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQWRkRm9vZCIsIk9uQWRkRm9vZCIsIm5ld0l0ZW0iLCJzZXROZXdJdGVtIiwibmFtZSIsInBvcnRpb24iLCJjYWxvcmllcyIsImNhcmJzIiwicHJvdGVpbiIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJiciIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddFood.jsx\n"));

/***/ })

});