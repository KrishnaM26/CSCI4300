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

/***/ "(app-pages-browser)/./src/app/components/AddFood.jsx":
/*!****************************************!*\
  !*** ./src/app/components/AddFood.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./src/app/components/button.js\");\n/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/form.css */ \"(app-pages-browser)/./src/app/styles/form.css\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddFood = (param)=>{\n    let { OnAddFood } = param;\n    _s();\n    const [newItem, setNewItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        img: \"\",\n        name: \"\",\n        portion: \"\",\n        calories: \"\",\n        carbs: \"\",\n        protein: \"\"\n    });\n    const handleChange = (event)=>{\n        const { name, value } = event.target;\n        setNewItem((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        if (newItem.title.trim() !== \"\" || newItem.img.trim() !== \"\") {\n            return;\n        }\n        console.log(\"New meal plan:\", newItem);\n        OnAddFood(newItem);\n        setNewItem({\n            img: \"\",\n            name: \"\",\n            portion: \"\",\n            calories: \"\",\n            carbs: \"\",\n            protein: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Title:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"title\",\n                    name: \"title\",\n                    value: newItem.title,\n                    onChange: handleChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Image Link:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"image\",\n                    name: \"image\",\n                    value: newItem.img,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Food Name:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"name\",\n                    name: \"name\",\n                    value: newItem.name,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Portion(1 cup, 100g, 1):\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 78,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"portion\",\n                    name: \"portion\",\n                    value: newItem.portion,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 79,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 87,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Calories:\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"calories\",\n                    name: \"calories\",\n                    value: newItem.calories,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Carbs(g):\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 100,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"carbs\",\n                    name: \"carbs\",\n                    value: newItem.carbs,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 109,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: \"Protein(g):\"\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 110,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    id: \"protein\",\n                    name: \"protein\",\n                    value: newItem.protein,\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 111,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 119,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-button\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"submit\",\n                        children: \"Add Food\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 16\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n                    lineNumber: 120,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/AddFood.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AddFood, \"0sB6dBBHkaO1j2Aw+Nbqa54wgi8=\");\n_c = AddFood;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddFood);\nvar _c;\n$RefreshReg$(_c, \"AddFood\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRGb29kLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN3QztBQUNWO0FBQ0Y7QUFHNUIsTUFBTUcsVUFBVTtRQUFDLEVBQUNDLFNBQVMsRUFBQzs7SUFFcEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3JDTSxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxTQUFTO0lBQ1g7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ2xCLE1BQU0sRUFBRU4sSUFBSSxFQUFFTyxLQUFLLEVBQUUsR0FBR0QsTUFBTUUsTUFBTTtRQUNwQ1gsV0FBV1ksQ0FBQUEsWUFBYztnQkFDdkIsR0FBR0EsU0FBUztnQkFDWixDQUFDVCxLQUFLLEVBQUVPO1lBQ1Y7SUFDRjtJQUdGLE1BQU1HLGVBQWUsQ0FBQ0o7UUFDcEJBLE1BQU1LLGNBQWM7UUFFcEIsSUFBSWYsUUFBUUUsS0FBSyxDQUFDYyxJQUFJLE9BQU8sTUFBTWhCLFFBQVFHLEdBQUcsQ0FBQ2EsSUFBSSxPQUFPLElBQUk7WUFDNUQ7UUFDRjtRQUNBQyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCbEI7UUFFOUJELFVBQVVDO1FBRVZDLFdBQVc7WUFBR0UsS0FBSztZQUFJQyxNQUFNO1lBQUlDLFNBQVM7WUFBSUMsVUFBVTtZQUFJQyxPQUFPO1lBQUlDLFNBQVM7UUFBRztJQUNyRjtJQUVKLHFCQUNJLDhEQUFDVztrQkFDRyw0RUFBQ0M7WUFBS0MsVUFBVVA7OzhCQUVoQiw4REFBQ1E7OEJBQU87Ozs7Ozs4QkFDUiw4REFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hyQixNQUFLO29CQUNMTyxPQUFPWCxRQUFRRSxLQUFLO29CQUNwQndCLFVBQVVqQjtvQkFDVmtCLFFBQVE7Ozs7Ozs4QkFHWiw4REFBQ0M7Ozs7OzhCQUVELDhEQUFDTjs4QkFBTzs7Ozs7OzhCQUNSLDhEQUFDQztvQkFDR0MsTUFBSztvQkFDTEMsSUFBRztvQkFDSHJCLE1BQUs7b0JBQ0xPLE9BQU9YLFFBQVFHLEdBQUc7b0JBQ2xCdUIsVUFBVWpCOzs7Ozs7OEJBR2QsOERBQUNtQjs7Ozs7OEJBQ0QsOERBQUNOOzhCQUFNOzs7Ozs7OEJBQ1AsOERBQUNDO29CQUNHQyxNQUFLO29CQUNMQyxJQUFHO29CQUNIckIsTUFBSztvQkFDTE8sT0FBT1gsUUFBUUksSUFBSTtvQkFDbkJzQixVQUFVakI7Ozs7Ozs4QkFHZCw4REFBQ21COzs7Ozs4QkFFRCw4REFBQ047OEJBQU87Ozs7Ozs4QkFDUiw4REFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hyQixNQUFLO29CQUNMTyxPQUFPWCxRQUFRSyxPQUFPO29CQUN0QnFCLFVBQVVqQjs7Ozs7OzhCQUdkLDhEQUFDbUI7Ozs7OzhCQUVELDhEQUFDTjs4QkFBTzs7Ozs7OzhCQUNSLDhEQUFDQztvQkFDR0MsTUFBSztvQkFDTEMsSUFBRztvQkFDSHJCLE1BQUs7b0JBQ0xPLE9BQU9YLFFBQVFNLFFBQVE7b0JBQ3ZCb0IsVUFBVWpCOzs7Ozs7OEJBR2QsOERBQUNtQjs7Ozs7OEJBRUQsOERBQUNOOzhCQUFNOzs7Ozs7OEJBQ1AsOERBQUNDO29CQUNHQyxNQUFLO29CQUNMQyxJQUFHO29CQUNIckIsTUFBSztvQkFDTE8sT0FBT1gsUUFBUU8sS0FBSztvQkFDcEJtQixVQUFVakI7Ozs7Ozs4QkFHZCw4REFBQ21COzs7Ozs4QkFDRCw4REFBQ047OEJBQU87Ozs7Ozs4QkFDUiw4REFBQ0M7b0JBQ0dDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hyQixNQUFLO29CQUNMTyxPQUFPWCxRQUFRUSxPQUFPO29CQUN0QmtCLFVBQVVqQjs7Ozs7OzhCQUdkLDhEQUFDbUI7Ozs7OzhCQUNELDhEQUFDVDtvQkFBSVUsV0FBVTs4QkFDWiw0RUFBQ2hDLCtDQUFNQTt3QkFBQzJCLE1BQUs7a0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakM7R0ExSEUxQjtLQUFBQTtBQTZITiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWRkRm9vZC5qc3g/MDdhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0ICcuLi9zdHlsZXMvZm9ybS5jc3MnO1xuXG5cbmNvbnN0IEFkZEZvb2QgPSAoe09uQWRkRm9vZH0pID0+IHtcblxuICAgICAgICBjb25zdCBbbmV3SXRlbSwgc2V0TmV3SXRlbV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgIGltZzogJycsXG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgcG9ydGlvbjogJycsXG4gICAgICAgICAgY2Fsb3JpZXM6ICcnLFxuICAgICAgICAgIGNhcmJzOiAnJyxcbiAgICAgICAgICBwcm90ZWluOiAnJ1xuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIHNldE5ld0l0ZW0ocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH07XG4gICAgXG4gICAgICBcbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobmV3SXRlbS50aXRsZS50cmltKCkgIT09ICcnIHx8IG5ld0l0ZW0uaW1nLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2coJ05ldyBtZWFsIHBsYW46JywgbmV3SXRlbSk7XG5cbiAgICAgICAgICBPbkFkZEZvb2QobmV3SXRlbSk7XG4gICAgICBcbiAgICAgICAgICBzZXROZXdJdGVtKHsgIGltZzogJycsIG5hbWU6ICcnLCBwb3J0aW9uOiAnJywgY2Fsb3JpZXM6ICcnLCBjYXJiczogJycsIHByb3RlaW46ICcnIH0pO1xuICAgICAgICB9O1xuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG5cbiAgICAgICAgICAgIDxsYWJlbCA+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgPkltYWdlIExpbms6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBpZD1cImltYWdlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLmltZ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8bGFiZWw+Rm9vZCBOYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgPlBvcnRpb24oMSBjdXAsIDEwMGcsIDEpOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwb3J0aW9uXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicG9ydGlvblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0ucG9ydGlvbn1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICBcbiAgICAgICAgICAgIDxsYWJlbCA+Q2Fsb3JpZXM6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwiY2Fsb3JpZXNcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjYWxvcmllc1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0uY2Fsb3JpZXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8bGFiZWw+Q2FyYnMoZyk6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwiY2FyYnNcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjYXJic1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld0l0ZW0uY2FyYnN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8bGFiZWwgPlByb3RlaW4oZyk6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwicHJvdGVpblwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInByb3RlaW5cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdJdGVtLnByb3RlaW59XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC1idXR0b24nPlxuICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWRkIEZvb2Q8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH07XG5cblxuZXhwb3J0IGRlZmF1bHQgQWRkRm9vZDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkFkZEZvb2QiLCJPbkFkZEZvb2QiLCJuZXdJdGVtIiwic2V0TmV3SXRlbSIsInRpdGxlIiwiaW1nIiwibmFtZSIsInBvcnRpb24iLCJjYWxvcmllcyIsImNhcmJzIiwicHJvdGVpbiIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJiciIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddFood.jsx\n"));

/***/ })

});