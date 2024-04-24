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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_regform_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/regform.css */ \"(app-pages-browser)/./src/app/components/regform.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;\nconst PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;\nconst Register = ()=>{\n    _s();\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const errRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validName, setValidName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userFocus, setUserFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwd, setPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validPwd, setValidPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwdFocus, setPwdFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchPwd, setMatchPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validMatch, setValidMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchFocus, setMatchFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        userRef.current.focus();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = USER_REGEX.test(user);\n        console.log(result);\n        console.log(user);\n        setValidName(result);\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = PWD_REGEX.test(pwd);\n        console.log(result);\n        console.log(pwd);\n        setValidPwd(result);\n        const match = pwd === matchPwd;\n        setValidMatch(match);\n    }, [\n        pwd,\n        matchPwd\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setErrMsg(\"\");\n    }, [\n        user,\n        pwd,\n        matchPwd\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                ref: errRef,\n                className: errMsg ? \"errmsg\" : \"offscreen\",\n                \"aria-live\": \"assertive\",\n                children: errMsg\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: [\n                            \"Username:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 60,\n                                columnNumber: 20\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName || !user ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        ref: userRef,\n                        autoComplete: \"off\",\n                        onChange: (e)=>setUser(e.target.value),\n                        value: user,\n                        required: true,\n                        \"aria-invalid\": validName ? \"false\" : \"true\",\n                        \"aria-describedby\": \"uidnote\",\n                        onFocus: ()=>setUserFocus(true),\n                        onBlur: ()=>setUserFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"uidnote\",\n                        className: userFocus && user && !validName ? \"instructions\" : \"offscreen\",\n                        children: [\n                            \"4 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 77,\n                                columnNumber: 40\n                            }, undefined),\n                            \"Must begin with a letter.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 78,\n                                columnNumber: 46\n                            }, undefined),\n                            \"Letters, numbers, underscores, hyphens allowed.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: [\n                            \"Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FontAwesomeIcon, {\n                                icon: faCheck,\n                                className: validPwd ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FontAwesomeIcon, {\n                                icon: faTimes,\n                                className: validPwd || !pwd ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 86,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"password\",\n                        onChange: (e)=>setPwd(e.target.value),\n                        value: pwd,\n                        required: true,\n                        \"aria-invalid\": validPwd ? \"false\" : \"true\",\n                        \"aria-describedby\": \"pwdnote\",\n                        onFocus: ()=>setPwdFocus(true),\n                        onBlur: ()=>setPwdFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 88,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"pwdnote\",\n                        className: pwdFocus && !validPwd ? \"instructions\" : \"offscreen\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FontAwesomeIcon, {\n                                icon: faInfoCircle\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 100,\n                                columnNumber: 29\n                            }, undefined),\n                            \"8 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 101,\n                                columnNumber: 48\n                            }, undefined),\n                            \"Must include uppercase and lowercase letters, a number and a special character.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 102,\n                                columnNumber: 108\n                            }, undefined),\n                            \"Allowed special characters: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"exclamation mark\",\n                                children: \"!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 103,\n                                columnNumber: 57\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"at symbol\",\n                                children: \"@\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 103,\n                                columnNumber: 102\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"hashtag\",\n                                children: \"#\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 103,\n                                columnNumber: 140\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"dollar sign\",\n                                children: \"$\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 103,\n                                columnNumber: 176\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"percent\",\n                                children: \"%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 103,\n                                columnNumber: 216\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 99,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Register, \"K2L7L9cVkNc42S3paB9KBpe33pw=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdmb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDZjtBQUduQyxNQUFNRyxhQUFhO0FBQ25CLE1BQU1DLFlBQVk7QUFFbEIsTUFBTUMsV0FBVzs7SUFDYixNQUFNQyxVQUFVTiw2Q0FBTUE7SUFDdEIsTUFBTU8sU0FBU1AsNkNBQU1BO0lBRXRCLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU0sQ0FBQ2EsS0FBS0MsT0FBTyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2lCLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3FCLFlBQVlDLGNBQWMsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ3VCLFlBQVlDLGNBQWMsR0FBR3hCLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU0sQ0FBQ3lCLFFBQVFDLFVBQVUsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQzJCLFNBQVNDLFdBQVcsR0FBRzVCLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNUSSxRQUFRd0IsT0FBTyxDQUFDQyxLQUFLO0lBQ3RCLEdBQUcsRUFBRTtJQUVMN0IsZ0RBQVNBLENBQUM7UUFDVCxNQUFNOEIsU0FBUzdCLFdBQVc4QixJQUFJLENBQUN6QjtRQUMvQjBCLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWkUsUUFBUUMsR0FBRyxDQUFDM0I7UUFDWkcs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cz9jNmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvcmVnZm9ybS5jc3MnO1xuXG5cbmNvbnN0IFVTRVJfUkVHRVggPSAvXlthLXpBLVpdW2EtekEtWjAtOS1fXXszLDIzfSQvO1xuY29uc3QgUFdEX1JFR0VYID0gL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbMC05XSkoPz0uKlshQCMkJV0pLns4LDI0fSQvO1xuXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyUmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgZXJyUmVmID0gdXNlUmVmKCk7XG5cbiAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcbiAgIGNvbnN0IFt2YWxpZE5hbWUsIHNldFZhbGlkTmFtZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbdXNlckZvY3VzLCBzZXRVc2VyRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBjb25zdCBbcHdkLCBzZXRQd2RdID0gdXNlU3RhdGUoJycpO1xuICAgY29uc3QgW3ZhbGlkUHdkLCBzZXRWYWxpZFB3ZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbcHdkRm9jdXMsIHNldFB3ZEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgY29uc3QgW21hdGNoUHdkLCBzZXRNYXRjaFB3ZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICBjb25zdCBbdmFsaWRNYXRjaCwgc2V0VmFsaWRNYXRjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICBjb25zdCBbbWF0Y2hGb2N1cywgc2V0TWF0Y2hGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGNvbnN0IFtlcnJNc2csIHNldEVyck1zZ10gPSB1c2VTdGF0ZSgnJyk7XG4gICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXNlclJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICB9LCBbXSk7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gVVNFUl9SRUdFWC50ZXN0KHVzZXIpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgY29uc29sZS5sb2codXNlcik7XG4gICAgc2V0VmFsaWROYW1lKHJlc3VsdCk7XG4gICB9LFt1c2VyXSk7IFxuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFBXRF9SRUdFWC50ZXN0KHB3ZCk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBjb25zb2xlLmxvZyhwd2QpO1xuICAgIHNldFZhbGlkUHdkKHJlc3VsdCk7XG4gICAgY29uc3QgbWF0Y2ggPSBwd2QgPT09IG1hdGNoUHdkO1xuICAgIHNldFZhbGlkTWF0Y2gobWF0Y2gpO1xuICAgfSxbcHdkLCBtYXRjaFB3ZF0pO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEVyck1zZygnJyk7XG5cbiAgIH0sW3VzZXIsIHB3ZCwgbWF0Y2hQd2RdKTtcbiAgIFxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxwIHJlZiA9IHtlcnJSZWZ9IGNsYXNzTmFtZT17ZXJyTXNnID8gXCJlcnJtc2dcIiA6IFwib2Zmc2NyZWVuXCJ9IGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJz57ZXJyTXNnfTwvcD5cbiAgICAgICAgICAgIDxoMT5SZWdpc3RlcjwvaDE+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlcm5hbWUnPlxuICAgICAgICAgICAgICAgICAgICBVc2VybmFtZTpcbiAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ZhbGlkTmFtZSA/IFwidmFsaWRcIiA6IFwiaGlkZVwifSAvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ZhbGlkTmFtZSB8fCAhdXNlciA/IFwiaGlkZVwiIDogXCJpbnZhbGlkXCJ9IC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt1c2VyUmVmfVxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXIoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcn1cbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXt2YWxpZE5hbWUgPyBcImZhbHNlXCIgOiBcInRydWVcIn1cbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVpZG5vdGVcIlxuICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRVc2VyRm9jdXModHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gc2V0VXNlckZvY3VzKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGlkPVwidWlkbm90ZVwiIGNsYXNzTmFtZT17dXNlckZvY3VzICYmIHVzZXIgJiYgIXZhbGlkTmFtZSA/IFwiaW5zdHJ1Y3Rpb25zXCIgOiBcIm9mZnNjcmVlblwifT5cbiAgICAgICAgICAgICAgICAgICAgNCB0byAyNCBjaGFyYWN0ZXJzLjxiciAvPlxuICAgICAgICAgICAgICAgICAgICBNdXN0IGJlZ2luIHdpdGggYSBsZXR0ZXIuPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIExldHRlcnMsIG51bWJlcnMsIHVuZGVyc2NvcmVzLCBoeXBoZW5zIGFsbG93ZWQuXG4gICAgICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNoZWNrfSBjbGFzc05hbWU9e3ZhbGlkUHdkID8gXCJ2YWxpZFwiIDogXCJoaWRlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e3ZhbGlkUHdkIHx8ICFwd2QgPyBcImhpZGVcIiA6IFwiaW52YWxpZFwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQd2QoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwd2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e3ZhbGlkUHdkID8gXCJmYWxzZVwiIDogXCJ0cnVlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInB3ZG5vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldFB3ZEZvY3VzKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gc2V0UHdkRm9jdXMoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwicHdkbm90ZVwiIGNsYXNzTmFtZT17cHdkRm9jdXMgJiYgIXZhbGlkUHdkID8gXCJpbnN0cnVjdGlvbnNcIiA6IFwib2Zmc2NyZWVuXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFJbmZvQ2lyY2xlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDggdG8gMjQgY2hhcmFjdGVycy48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdXN0IGluY2x1ZGUgdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVycywgYSBudW1iZXIgYW5kIGEgc3BlY2lhbCBjaGFyYWN0ZXIuPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsb3dlZCBzcGVjaWFsIGNoYXJhY3RlcnM6IDxzcGFuIGFyaWEtbGFiZWw9XCJleGNsYW1hdGlvbiBtYXJrXCI+ITwvc3Bhbj4gPHNwYW4gYXJpYS1sYWJlbD1cImF0IHN5bWJvbFwiPkA8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJoYXNodGFnXCI+Izwvc3Bhbj4gPHNwYW4gYXJpYS1sYWJlbD1cImRvbGxhciBzaWduXCI+JDwvc3Bhbj4gPHNwYW4gYXJpYS1sYWJlbD1cInBlcmNlbnRcIj4lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7ICJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVTRVJfUkVHRVgiLCJQV0RfUkVHRVgiLCJSZWdpc3RlciIsInVzZXJSZWYiLCJlcnJSZWYiLCJ1c2VyIiwic2V0VXNlciIsInZhbGlkTmFtZSIsInNldFZhbGlkTmFtZSIsInVzZXJGb2N1cyIsInNldFVzZXJGb2N1cyIsInB3ZCIsInNldFB3ZCIsInZhbGlkUHdkIiwic2V0VmFsaWRQd2QiLCJwd2RGb2N1cyIsInNldFB3ZEZvY3VzIiwibWF0Y2hQd2QiLCJzZXRNYXRjaFB3ZCIsInZhbGlkTWF0Y2giLCJzZXRWYWxpZE1hdGNoIiwibWF0Y2hGb2N1cyIsInNldE1hdGNoRm9jdXMiLCJlcnJNc2ciLCJzZXRFcnJNc2ciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImN1cnJlbnQiLCJmb2N1cyIsInJlc3VsdCIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwibWF0Y2giLCJzZWN0aW9uIiwicCIsInJlZiIsImNsYXNzTmFtZSIsImFyaWEtbGl2ZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJpZCIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiLCJhcmlhLWludmFsaWQiLCJhcmlhLWRlc2NyaWJlZGJ5Iiwib25Gb2N1cyIsIm9uQmx1ciIsImJyIiwiRm9udEF3ZXNvbWVJY29uIiwiaWNvbiIsImZhQ2hlY2siLCJmYVRpbWVzIiwiZmFJbmZvQ2lyY2xlIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/regform.js\n"));

/***/ })

});