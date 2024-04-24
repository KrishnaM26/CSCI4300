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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_regform_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/regform.css */ \"(app-pages-browser)/./src/app/components/regform.css\");\n\nvar _s = $RefreshSig$();\n\n\nconst USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;\nconst PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;\nconst Register = ()=>{\n    _s();\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const errRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validName, setValidName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userFocus, setUserFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwd, setPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validPwd, setValidPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwdFocus, setPwdFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchPwd, setMatchPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validMatch, setValidMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchFocus, setMatchFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        userRef.current.focus();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = USER_REGEX.test(user);\n        console.log(result);\n        console.log(user);\n        setValidName(result);\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = PWD_REGEX.test(pwd);\n        console.log(result);\n        console.log(pwd);\n        setValidPwd(result);\n        const match = pwd === matchPwd;\n        setValidMatch(match);\n    }, [\n        pwd,\n        matchPwd\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setErrMsg(\"\");\n    }, [\n        user,\n        pwd,\n        matchPwd\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                ref: errRef,\n                className: errMsg ? \"errmsg\" : \"offscreen\",\n                \"aria-live\": \"assertive\",\n                children: errMsg\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: [\n                            \"Username:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 60,\n                                columnNumber: 20\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName || !user ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        ref: userRef,\n                        autoComplete: \"off\",\n                        onChange: (e)=>setUser(e.target.value),\n                        value: user,\n                        required: true,\n                        \"aria-invalid\": validName ? \"false\" : \"true\",\n                        \"aria-describedby\": \"uidnote\",\n                        onFocus: ()=>setUserFocus(true),\n                        onBlur: ()=>setUserFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"uidnote\",\n                        className: userFocus && user && !validName ? \"instructions\" : \"offscreen\",\n                        children: [\n                            \"4 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 77,\n                                columnNumber: 40\n                            }, undefined),\n                            \"Must begin with a letter.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 78,\n                                columnNumber: 46\n                            }, undefined),\n                            \"Letters, numbers, underscores, hyphens allowed.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: [\n                            \"Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validPwd ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validPwd || !pwd ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 86,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"password\",\n                        onChange: (e)=>setPwd(e.target.value),\n                        value: pwd,\n                        required: true,\n                        \"aria-invalid\": validPwd ? \"false\" : \"true\",\n                        \"aria-describedby\": \"pwdnote\",\n                        onFocus: ()=>setPwdFocus(true),\n                        onBlur: ()=>setPwdFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 88,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"pwdnote\",\n                        className: pwdFocus && !validPwd ? \"instructions\" : \"offscreen\",\n                        children: [\n                            \"8 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 101,\n                                columnNumber: 48\n                            }, undefined),\n                            \"Must include uppercase and lowercase letters, a number and a special character.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 102,\n                                columnNumber: 108\n                            }, undefined),\n                            \"Allowed special characters: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"exclamation mark\",\n                                children: \"!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 103,\n                                columnNumber: 57\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"at symbol\",\n                                children: \"@\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 103,\n                                columnNumber: 102\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"hashtag\",\n                                children: \"#\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 103,\n                                columnNumber: 140\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"dollar sign\",\n                                children: \"$\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 103,\n                                columnNumber: 176\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"percent\",\n                                children: \"%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 103,\n                                columnNumber: 216\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 99,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"confirm_pwd\",\n                        children: [\n                            \"Confirm Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validMatch && matchPwd ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 109,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                icon: faTimes,\n                                className: validMatch || !matchPwd ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 110,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 107,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"confirm_pwd\",\n                        onChange: (e)=>setMatchPwd(e.target.value),\n                        value: matchPwd,\n                        required: true,\n                        \"aria-invalid\": validMatch ? \"false\" : \"true\",\n                        \"aria-describedby\": \"confirmnote\",\n                        onFocus: ()=>setMatchFocus(true),\n                        onBlur: ()=>setMatchFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 112,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"confirmnote\",\n                        className: matchFocus && !validMatch ? \"instructions\" : \"offscreen\",\n                        children: \"Must match the first password input field.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 123,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Register, \"K2L7L9cVkNc42S3paB9KBpe33pw=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdmb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Q7QUFDZjtBQUduQyxNQUFNRyxhQUFhO0FBQ25CLE1BQU1DLFlBQVk7QUFFbEIsTUFBTUMsV0FBVzs7SUFDYixNQUFNQyxVQUFVTiw2Q0FBTUE7SUFDdEIsTUFBTU8sU0FBU1AsNkNBQU1BO0lBRXRCLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdaLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU0sQ0FBQ2EsS0FBS0MsT0FBTyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNlLFVBQVVDLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2lCLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3FCLFlBQVlDLGNBQWMsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ3VCLFlBQVlDLGNBQWMsR0FBR3hCLCtDQUFRQSxDQUFDO0lBRTdDLE1BQU0sQ0FBQ3lCLFFBQVFDLFVBQVUsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQzJCLFNBQVNDLFdBQVcsR0FBRzVCLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNUSSxRQUFRd0IsT0FBTyxDQUFDQyxLQUFLO0lBQ3RCLEdBQUcsRUFBRTtJQUVMN0IsZ0RBQVNBLENBQUM7UUFDVCxNQUFNOEIsU0FBUzdCLFdBQVc4QixJQUFJLENBQUN6QjtRQUMvQjBCLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWkUsUUFBUUMsR0FBRyxDQUFDM0I7UUFDWkcsYUFBYXFCO0lBQ2QsR0FBRTtRQUFDeEI7S0FBSztJQUVSTixnREFBU0EsQ0FBQztRQUNULE1BQU04QixTQUFTNUIsVUFBVTZCLElBQUksQ0FBQ25CO1FBQzlCb0IsUUFBUUMsR0FBRyxDQUFDSDtRQUNaRSxRQUFRQyxHQUFHLENBQUNyQjtRQUNaRyxZQUFZZTtRQUNaLE1BQU1JLFFBQVF0QixRQUFRTTtRQUN0QkcsY0FBY2E7SUFDZixHQUFFO1FBQUN0QjtRQUFLTTtLQUFTO0lBRWpCbEIsZ0RBQVNBLENBQUM7UUFDVHlCLFVBQVU7SUFFWCxHQUFFO1FBQUNuQjtRQUFNTTtRQUFLTTtLQUFTO0lBR3RCLHFCQUNJLDhEQUFDaUI7OzBCQUNHLDhEQUFDQztnQkFBRUMsS0FBT2hDO2dCQUFRaUMsV0FBV2QsU0FBUyxXQUFXO2dCQUFhZSxhQUFVOzBCQUFhZjs7Ozs7OzBCQUNyRiw4REFBQ2dCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztrQ0FDRyw4REFBQ0M7d0JBQU1DLFNBQVE7OzRCQUFXOzBDQUV2Qiw4REFBQ0M7Z0NBQUtOLFdBQVc5QixZQUFZLFVBQVU7Ozs7OzswQ0FDdEMsOERBQUNvQztnQ0FBS04sV0FBVzlCLGFBQWEsQ0FBQ0YsT0FBTyxTQUFTOzs7Ozs7Ozs7Ozs7a0NBRW5ELDhEQUFDdUM7d0JBQ0dDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hWLEtBQUtqQzt3QkFDTDRDLGNBQWE7d0JBQ2JDLFVBQVUsQ0FBQ0MsSUFBTTNDLFFBQVEyQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQ3ZDQSxPQUFPOUM7d0JBQ1ArQyxRQUFRO3dCQUNSQyxnQkFBYzlDLFlBQVksVUFBVTt3QkFDcEMrQyxvQkFBaUI7d0JBQ2pCQyxTQUFTLElBQU03QyxhQUFhO3dCQUM1QjhDLFFBQVEsSUFBTTlDLGFBQWE7Ozs7OztrQ0FFL0IsOERBQUN5Qjt3QkFBRVcsSUFBRzt3QkFBVVQsV0FBVzVCLGFBQWFKLFFBQVEsQ0FBQ0UsWUFBWSxpQkFBaUI7OzRCQUFhOzBDQUNwRSw4REFBQ2tEOzs7Ozs0QkFBSzswQ0FDQSw4REFBQ0E7Ozs7OzRCQUFLOzs7Ozs7O2tDQUtuQyw4REFBQ2hCO3dCQUFNQyxTQUFROzs0QkFBVzswQ0FFZCw4REFBQ0M7Z0NBQUtOLFdBQVd4QixXQUFXLFVBQVU7Ozs7OzswQ0FDdEMsOERBQUM4QjtnQ0FBS04sV0FBV3hCLFlBQVksQ0FBQ0YsTUFBTSxTQUFTOzs7Ozs7Ozs7Ozs7a0NBRWpELDhEQUFDaUM7d0JBQ0dDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hFLFVBQVUsQ0FBQ0MsSUFBTXJDLE9BQU9xQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7d0JBQ3RDQSxPQUFPeEM7d0JBQ1B5QyxRQUFRO3dCQUNSQyxnQkFBY3hDLFdBQVcsVUFBVTt3QkFDbkN5QyxvQkFBaUI7d0JBQ2pCQyxTQUFTLElBQU12QyxZQUFZO3dCQUMzQndDLFFBQVEsSUFBTXhDLFlBQVk7Ozs7OztrQ0FFOUIsOERBQUNtQjt3QkFBRVcsSUFBRzt3QkFBVVQsV0FBV3RCLFlBQVksQ0FBQ0YsV0FBVyxpQkFBaUI7OzRCQUFhOzBDQUUxRCw4REFBQzRDOzs7Ozs0QkFBSzswQ0FDc0QsOERBQUNBOzs7Ozs0QkFBSzswQ0FDekQsOERBQUNkO2dDQUFLZSxjQUFXOzBDQUFtQjs7Ozs7OzRCQUFROzBDQUFDLDhEQUFDZjtnQ0FBS2UsY0FBVzswQ0FBWTs7Ozs7OzRCQUFROzBDQUFDLDhEQUFDZjtnQ0FBS2UsY0FBVzswQ0FBVTs7Ozs7OzRCQUFROzBDQUFDLDhEQUFDZjtnQ0FBS2UsY0FBVzswQ0FBYzs7Ozs7OzRCQUFROzBDQUFDLDhEQUFDZjtnQ0FBS2UsY0FBVzswQ0FBVTs7Ozs7Ozs7Ozs7O2tDQUkxTiw4REFBQ2pCO3dCQUFNQyxTQUFROzs0QkFBYzswQ0FFekIsOERBQUNDO2dDQUFLTixXQUFXbEIsY0FBY0YsV0FBVyxVQUFVOzs7Ozs7MENBQ3BELDhEQUFDMEI7Z0NBQUtnQixNQUFNQztnQ0FBU3ZCLFdBQVdsQixjQUFjLENBQUNGLFdBQVcsU0FBUzs7Ozs7Ozs7Ozs7O2tDQUV2RSw4REFBQzJCO3dCQUNHQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIRSxVQUFVLENBQUNDLElBQU0vQixZQUFZK0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO3dCQUMzQ0EsT0FBT2xDO3dCQUNQbUMsUUFBUTt3QkFDUkMsZ0JBQWNsQyxhQUFhLFVBQVU7d0JBQ3JDbUMsb0JBQWlCO3dCQUNqQkMsU0FBUyxJQUFNakMsY0FBYzt3QkFDN0JrQyxRQUFRLElBQU1sQyxjQUFjOzs7Ozs7a0NBRWhDLDhEQUFDYTt3QkFBRVcsSUFBRzt3QkFBY1QsV0FBV2hCLGNBQWMsQ0FBQ0YsYUFBYSxpQkFBaUI7a0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqSDtHQTNITWpCO0tBQUFBO0FBNEhOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdmb3JtLmpzP2M2YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vY29tcG9uZW50cy9yZWdmb3JtLmNzcyc7XG5cblxuY29uc3QgVVNFUl9SRUdFWCA9IC9eW2EtekEtWl1bYS16QS1aMC05LV9dezMsMjN9JC87XG5jb25zdCBQV0RfUkVHRVggPSAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS4qWyFAIyQlXSkuezgsMjR9JC87XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBlcnJSZWYgPSB1c2VSZWYoKTtcblxuICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoJycpO1xuICAgY29uc3QgW3ZhbGlkTmFtZSwgc2V0VmFsaWROYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFt1c2VyRm9jdXMsIHNldFVzZXJGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGNvbnN0IFtwd2QsIHNldFB3ZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICBjb25zdCBbdmFsaWRQd2QsIHNldFZhbGlkUHdkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFtwd2RGb2N1cywgc2V0UHdkRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBjb25zdCBbbWF0Y2hQd2QsIHNldE1hdGNoUHdkXSA9IHVzZVN0YXRlKCcnKTtcbiAgIGNvbnN0IFt2YWxpZE1hdGNoLCBzZXRWYWxpZE1hdGNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFttYXRjaEZvY3VzLCBzZXRNYXRjaEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgY29uc3QgW2Vyck1zZywgc2V0RXJyTXNnXSA9IHVzZVN0YXRlKCcnKTtcbiAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1c2VyUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgIH0sIFtdKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBVU0VSX1JFR0VYLnRlc3QodXNlcik7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICBzZXRWYWxpZE5hbWUocmVzdWx0KTtcbiAgIH0sW3VzZXJdKTsgXG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gUFdEX1JFR0VYLnRlc3QocHdkKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIGNvbnNvbGUubG9nKHB3ZCk7XG4gICAgc2V0VmFsaWRQd2QocmVzdWx0KTtcbiAgICBjb25zdCBtYXRjaCA9IHB3ZCA9PT0gbWF0Y2hQd2Q7XG4gICAgc2V0VmFsaWRNYXRjaChtYXRjaCk7XG4gICB9LFtwd2QsIG1hdGNoUHdkXSk7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RXJyTXNnKCcnKTtcblxuICAgfSxbdXNlciwgcHdkLCBtYXRjaFB3ZF0pO1xuICAgXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHAgcmVmID0ge2VyclJlZn0gY2xhc3NOYW1lPXtlcnJNc2cgPyBcImVycm1zZ1wiIDogXCJvZmZzY3JlZW5cIn0gYXJpYS1saXZlPSdhc3NlcnRpdmUnPntlcnJNc2d9PC9wPlxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+XG4gICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lOlxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dmFsaWROYW1lID8gXCJ2YWxpZFwiIDogXCJoaWRlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dmFsaWROYW1lIHx8ICF1c2VyID8gXCJoaWRlXCIgOiBcImludmFsaWRcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICByZWY9e3VzZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e3ZhbGlkTmFtZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidWlkbm90ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldFVzZXJGb2N1cyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRVc2VyRm9jdXMoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJ1aWRub3RlXCIgY2xhc3NOYW1lPXt1c2VyRm9jdXMgJiYgdXNlciAmJiAhdmFsaWROYW1lID8gXCJpbnN0cnVjdGlvbnNcIiA6IFwib2Zmc2NyZWVuXCJ9PlxuICAgICAgICAgICAgICAgICAgICA0IHRvIDI0IGNoYXJhY3RlcnMuPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIE11c3QgYmVnaW4gd2l0aCBhIGxldHRlci48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgTGV0dGVycywgbnVtYmVycywgdW5kZXJzY29yZXMsIGh5cGhlbnMgYWxsb3dlZC5cbiAgICAgICAgICAgICAgICA8L3A+XG5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ZhbGlkUHdkID8gXCJ2YWxpZFwiIDogXCJoaWRlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt2YWxpZFB3ZCB8fCAhcHdkID8gXCJoaWRlXCIgOiBcImludmFsaWRcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHdkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHdkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXt2YWxpZFB3ZCA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwd2Rub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRQd2RGb2N1cyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHNldFB3ZEZvY3VzKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInB3ZG5vdGVcIiBjbGFzc05hbWU9e3B3ZEZvY3VzICYmICF2YWxpZFB3ZCA/IFwiaW5zdHJ1Y3Rpb25zXCIgOiBcIm9mZnNjcmVlblwifT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA4IHRvIDI0IGNoYXJhY3RlcnMuPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVzdCBpbmNsdWRlIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMsIGEgbnVtYmVyIGFuZCBhIHNwZWNpYWwgY2hhcmFjdGVyLjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbG93ZWQgc3BlY2lhbCBjaGFyYWN0ZXJzOiA8c3BhbiBhcmlhLWxhYmVsPVwiZXhjbGFtYXRpb24gbWFya1wiPiE8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJhdCBzeW1ib2xcIj5APC9zcGFuPiA8c3BhbiBhcmlhLWxhYmVsPVwiaGFzaHRhZ1wiPiM8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJkb2xsYXIgc2lnblwiPiQ8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJwZXJjZW50XCI+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1fcHdkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybSBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ZhbGlkTWF0Y2ggJiYgbWF0Y2hQd2QgPyBcInZhbGlkXCIgOiBcImhpZGVcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpY29uPXtmYVRpbWVzfSBjbGFzc05hbWU9e3ZhbGlkTWF0Y2ggfHwgIW1hdGNoUHdkID8gXCJoaWRlXCIgOiBcImludmFsaWRcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybV9wd2RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWF0Y2hQd2QoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttYXRjaFB3ZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17dmFsaWRNYXRjaCA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb25maXJtbm90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0TWF0Y2hGb2N1cyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHNldE1hdGNoRm9jdXMoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiY29uZmlybW5vdGVcIiBjbGFzc05hbWU9e21hdGNoRm9jdXMgJiYgIXZhbGlkTWF0Y2ggPyBcImluc3RydWN0aW9uc1wiIDogXCJvZmZzY3JlZW5cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVzdCBtYXRjaCB0aGUgZmlyc3QgcGFzc3dvcmQgaW5wdXQgZmllbGQuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7ICJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlVTRVJfUkVHRVgiLCJQV0RfUkVHRVgiLCJSZWdpc3RlciIsInVzZXJSZWYiLCJlcnJSZWYiLCJ1c2VyIiwic2V0VXNlciIsInZhbGlkTmFtZSIsInNldFZhbGlkTmFtZSIsInVzZXJGb2N1cyIsInNldFVzZXJGb2N1cyIsInB3ZCIsInNldFB3ZCIsInZhbGlkUHdkIiwic2V0VmFsaWRQd2QiLCJwd2RGb2N1cyIsInNldFB3ZEZvY3VzIiwibWF0Y2hQd2QiLCJzZXRNYXRjaFB3ZCIsInZhbGlkTWF0Y2giLCJzZXRWYWxpZE1hdGNoIiwibWF0Y2hGb2N1cyIsInNldE1hdGNoRm9jdXMiLCJlcnJNc2ciLCJzZXRFcnJNc2ciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsImN1cnJlbnQiLCJmb2N1cyIsInJlc3VsdCIsInRlc3QiLCJjb25zb2xlIiwibG9nIiwibWF0Y2giLCJzZWN0aW9uIiwicCIsInJlZiIsImNsYXNzTmFtZSIsImFyaWEtbGl2ZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJpZCIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiLCJhcmlhLWludmFsaWQiLCJhcmlhLWRlc2NyaWJlZGJ5Iiwib25Gb2N1cyIsIm9uQmx1ciIsImJyIiwiYXJpYS1sYWJlbCIsImljb24iLCJmYVRpbWVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/regform.js\n"));

/***/ })

});