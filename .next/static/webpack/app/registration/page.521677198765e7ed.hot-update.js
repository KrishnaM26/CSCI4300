"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/registration/page",{

/***/ "(app-pages-browser)/./src/app/components/regform.js":
/*!***************************************!*\
  !*** ./src/app/components/regform.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_regform_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/regform.css */ \"(app-pages-browser)/./src/app/components/regform.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;\nconst PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;\nconst Register = ()=>{\n    _s();\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const errRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validName, setValidName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userFocus, setUserFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwd, setPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validPwd, setValidPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwdFocus, setPwdFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchPwd, setMatchPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validMatch, setValidMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchFocus, setMatchFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        userRef.current.focus();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = USER_REGEX.test(user);\n        console.log(result);\n        console.log(user);\n        setValidName(result);\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = PWD_REGEX.test(pwd);\n        console.log(result);\n        console.log(pwd);\n        setValidPwd(result);\n        const match = pwd === matchPwd;\n        setValidMatch(match);\n    }, [\n        pwd,\n        matchPwd\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setErrMsg(\"\");\n    }, [\n        user,\n        pwd,\n        matchPwd\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                ref: errRef,\n                className: errMsg ? \"errmsg\" : \"offscreen\",\n                \"aria-live\": \"assertive\",\n                children: errMsg\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: [\n                            \"Username:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 60,\n                                columnNumber: 20\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName || !user ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        ref: userRef,\n                        autoComplete: \"off\",\n                        onChange: (e)=>setUser(e.target.value),\n                        value: user,\n                        required: true,\n                        \"aria-invalid\": validName ? \"false\" : \"true\",\n                        \"aria-describedby\": \"uidnote\",\n                        onFocus: ()=>setUserFocus(true),\n                        onBlur: ()=>setUserFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"uidnote\",\n                        className: userFocus && user && !validName ? \"instructions\" : \"offscreen\",\n                        children: [\n                            \"4 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 77,\n                                columnNumber: 40\n                            }, undefined),\n                            \"Must begin with a letter.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 78,\n                                columnNumber: 46\n                            }, undefined),\n                            \"Letters, numbers, underscores, hyphens allowed.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Register, \"K2L7L9cVkNc42S3paB9KBpe33pw=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdmb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDZjtBQUduQyxNQUFNRyxhQUFhO0FBQ25CLE1BQU1DLFlBQVk7QUFFbEIsTUFBTUMsV0FBVzs7SUFDYixNQUFNQyxVQUFVTiw2Q0FBTUE7SUFDdEIsTUFBTU8sU0FBU1AsNkNBQU1BO0lBRXRCLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU0sQ0FBQ2EsS0FBS0MsT0FBTyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2lCLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3FCLFlBQVlDLGNBQWMsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ3VCLFlBQVlDLGNBQWMsR0FBR3hCLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU0sQ0FBQ3lCLFFBQVFDLFVBQVUsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQzJCLFNBQVNDLFdBQVcsR0FBRzVCLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNUSSxRQUFRd0IsT0FBTyxDQUFDQyxLQUFLO0lBQ3RCLEdBQUcsRUFBRTtJQUVMN0IsZ0RBQVNBLENBQUM7UUFDVCxNQUFNOEIsU0FBUzdCLFdBQVc4QixJQUFJLENBQUN6QjtRQUMvQjBCLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWkUsUUFBUUMsR0FBRyxDQUFDM0I7UUFDWkcsYUFBYXFCO0lBQ2QsR0FBRTtRQUFDeEI7S0FBSztJQUVSTixnREFBU0EsQ0FBQztRQUNULE1BQU04QixTQUFTNUIsVUFBVTZCLElBQUksQ0FBQ25CO1FBQzlCb0IsUUFBUUMsR0FBRyxDQUFDSDtRQUNaRSxRQUFRQyxHQUFHLENBQUNyQjtRQUNaRyxZQUFZZTtRQUNaLE1BQU1JLFFBQVF0QixRQUFRTTtRQUN0QkcsY0FBY2E7SUFDZixHQUFFO1FBQUN0QjtRQUFLTTtLQUFTO0lBRWpCbEIsZ0RBQVNBLENBQUM7UUFDVHlCLFVBQVU7SUFFWCxHQUFFO1FBQUNuQjtRQUFNTTtRQUFLTTtLQUFTO0lBR3RCLHFCQUNJLDhEQUFDaUI7OzBCQUNHLDhEQUFDQztnQkFBRUMsS0FBT2hDO2dCQUFRaUMsV0FBV2QsU0FBUyxXQUFXO2dCQUFhZSxhQUFVOzBCQUFhZjs7Ozs7OzBCQUNyRiw4REFBQ2dCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztrQ0FDRyw4REFBQ0M7d0JBQU1DLFNBQVE7OzRCQUFXOzBDQUV2Qiw4REFBQ0M7Z0NBQUtOLFdBQVc5QixZQUFZLFVBQVU7Ozs7OzswQ0FDdEMsOERBQUNvQztnQ0FBS04sV0FBVzlCLGFBQWEsQ0FBQ0YsT0FBTyxTQUFTOzs7Ozs7Ozs7Ozs7a0NBRW5ELDhEQUFDdUM7d0JBQ0dDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hWLEtBQUtqQzt3QkFDTDRDLGNBQWE7d0JBQ2JDLFVBQVUsQ0FBQ0MsSUFBTTNDLFFBQVEyQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQ3ZDQSxPQUFPOUM7d0JBQ1ArQyxRQUFRO3dCQUNSQyxnQkFBYzlDLFlBQVksVUFBVTt3QkFDcEMrQyxvQkFBaUI7d0JBQ2pCQyxTQUFTLElBQU03QyxhQUFhO3dCQUM1QjhDLFFBQVEsSUFBTTlDLGFBQWE7Ozs7OztrQ0FFL0IsOERBQUN5Qjt3QkFBRVcsSUFBRzt3QkFBVVQsV0FBVzVCLGFBQWFKLFFBQVEsQ0FBQ0UsWUFBWSxpQkFBaUI7OzRCQUFhOzBDQUNwRSw4REFBQ2tEOzs7Ozs0QkFBSzswQ0FDQSw4REFBQ0E7Ozs7OzRCQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25EO0dBL0VNdkQ7S0FBQUE7QUFnRk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3JlZ2Zvcm0uanM/YzZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9jb21wb25lbnRzL3JlZ2Zvcm0uY3NzJztcblxuXG5jb25zdCBVU0VSX1JFR0VYID0gL15bYS16QS1aXVthLXpBLVowLTktX117MywyM30kLztcbmNvbnN0IFBXRF9SRUdFWCA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89LipbIUAjJCVdKS57OCwyNH0kLztcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlclJlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGVyclJlZiA9IHVzZVJlZigpO1xuXG4gICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICBjb25zdCBbdmFsaWROYW1lLCBzZXRWYWxpZE5hbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW3VzZXJGb2N1cywgc2V0VXNlckZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgY29uc3QgW3B3ZCwgc2V0UHdkXSA9IHVzZVN0YXRlKCcnKTtcbiAgIGNvbnN0IFt2YWxpZFB3ZCwgc2V0VmFsaWRQd2RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW3B3ZEZvY3VzLCBzZXRQd2RGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGNvbnN0IFttYXRjaFB3ZCwgc2V0TWF0Y2hQd2RdID0gdXNlU3RhdGUoJycpO1xuICAgY29uc3QgW3ZhbGlkTWF0Y2gsIHNldFZhbGlkTWF0Y2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW21hdGNoRm9jdXMsIHNldE1hdGNoRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBjb25zdCBbZXJyTXNnLCBzZXRFcnJNc2ddID0gdXNlU3RhdGUoJycpO1xuICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVzZXJSZWYuY3VycmVudC5mb2N1cygpO1xuICAgfSwgW10pO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFVTRVJfUkVHRVgudGVzdCh1c2VyKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIHNldFZhbGlkTmFtZShyZXN1bHQpO1xuICAgfSxbdXNlcl0pOyBcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBQV0RfUkVHRVgudGVzdChwd2QpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgY29uc29sZS5sb2cocHdkKTtcbiAgICBzZXRWYWxpZFB3ZChyZXN1bHQpO1xuICAgIGNvbnN0IG1hdGNoID0gcHdkID09PSBtYXRjaFB3ZDtcbiAgICBzZXRWYWxpZE1hdGNoKG1hdGNoKTtcbiAgIH0sW3B3ZCwgbWF0Y2hQd2RdKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFcnJNc2coJycpO1xuXG4gICB9LFt1c2VyLCBwd2QsIG1hdGNoUHdkXSk7XG4gICBcblxuICAgIHJldHVybihcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8cCByZWYgPSB7ZXJyUmVmfSBjbGFzc05hbWU9e2Vyck1zZyA/IFwiZXJybXNnXCIgOiBcIm9mZnNjcmVlblwifSBhcmlhLWxpdmU9J2Fzc2VydGl2ZSc+e2Vyck1zZ308L3A+XG4gICAgICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5cbiAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWU6XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt2YWxpZE5hbWUgPyBcInZhbGlkXCIgOiBcImhpZGVcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt2YWxpZE5hbWUgfHwgIXVzZXIgPyBcImhpZGVcIiA6IFwiaW52YWxpZFwifSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dXNlclJlZn1cbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17dmFsaWROYW1lID8gXCJmYWxzZVwiIDogXCJ0cnVlXCJ9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ1aWRub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0VXNlckZvY3VzKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHNldFVzZXJGb2N1cyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBpZD1cInVpZG5vdGVcIiBjbGFzc05hbWU9e3VzZXJGb2N1cyAmJiB1c2VyICYmICF2YWxpZE5hbWUgPyBcImluc3RydWN0aW9uc1wiIDogXCJvZmZzY3JlZW5cIn0+XG4gICAgICAgICAgICAgICAgICAgIDQgdG8gMjQgY2hhcmFjdGVycy48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgTXVzdCBiZWdpbiB3aXRoIGEgbGV0dGVyLjxiciAvPlxuICAgICAgICAgICAgICAgICAgICBMZXR0ZXJzLCBudW1iZXJzLCB1bmRlcnNjb3JlcywgaHlwaGVucyBhbGxvd2VkLlxuICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsgIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVVNFUl9SRUdFWCIsIlBXRF9SRUdFWCIsIlJlZ2lzdGVyIiwidXNlclJlZiIsImVyclJlZiIsInVzZXIiLCJzZXRVc2VyIiwidmFsaWROYW1lIiwic2V0VmFsaWROYW1lIiwidXNlckZvY3VzIiwic2V0VXNlckZvY3VzIiwicHdkIiwic2V0UHdkIiwidmFsaWRQd2QiLCJzZXRWYWxpZFB3ZCIsInB3ZEZvY3VzIiwic2V0UHdkRm9jdXMiLCJtYXRjaFB3ZCIsInNldE1hdGNoUHdkIiwidmFsaWRNYXRjaCIsInNldFZhbGlkTWF0Y2giLCJtYXRjaEZvY3VzIiwic2V0TWF0Y2hGb2N1cyIsImVyck1zZyIsInNldEVyck1zZyIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiY3VycmVudCIsImZvY3VzIiwicmVzdWx0IiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCIsInNlY3Rpb24iLCJwIiwicmVmIiwiY2xhc3NOYW1lIiwiYXJpYS1saXZlIiwiaDEiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwic3BhbiIsImlucHV0IiwidHlwZSIsImlkIiwiYXV0b0NvbXBsZXRlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsImFyaWEtaW52YWxpZCIsImFyaWEtZGVzY3JpYmVkYnkiLCJvbkZvY3VzIiwib25CbHVyIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/regform.js\n"));

/***/ })

});