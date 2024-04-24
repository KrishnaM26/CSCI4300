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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_regform_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/regform.css */ \"(app-pages-browser)/./src/app/components/regform.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;\nconst PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;\nconst Register = ()=>{\n    _s();\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const errRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validName, setValidName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userFocus, setUserFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwd, setPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validPwd, setValidPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwdFocus, setPwdFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchPwd, setMatchPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validMatch, setValidMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchFocus, setMatchFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        userRef.current.focus();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = USER_REGEX.test(user);\n        console.log(result);\n        console.log(user);\n        setValidName(result);\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = PWD_REGEX.test(pwd);\n        console.log(result);\n        console.log(pwd);\n        setValidPwd(result);\n        const match = pwd === matchPwd;\n        setValidMatch(match);\n    }, [\n        pwd,\n        matchPwd\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setErrMsg(\"\");\n    }, [\n        user,\n        pwd,\n        matchPwd\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // if button enabled with JS hack\n        const v1 = USER_REGEX.test(user);\n        const v2 = PWD_REGEX.test(pwd);\n        if (!v1 || !v2) {\n            setErrMsg(\"Invalid Entry\");\n            return;\n        }\n        const usrs = {\n            users: {\n                username: user,\n                password\n            }\n        };\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8085/api/kwye\", {\n            username: user,\n            password: pwd\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                ref: errRef,\n                className: errMsg ? \"errmsg\" : \"offscreen\",\n                \"aria-live\": \"assertive\",\n                children: errMsg\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: [\n                            \"Username:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 81,\n                                columnNumber: 20\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName || !user ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 82,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        ref: userRef,\n                        autoComplete: \"off\",\n                        onChange: (e)=>setUser(e.target.value),\n                        value: user,\n                        required: true,\n                        \"aria-invalid\": validName ? \"false\" : \"true\",\n                        \"aria-describedby\": \"uidnote\",\n                        onFocus: ()=>setUserFocus(true),\n                        onBlur: ()=>setUserFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"uidnote\",\n                        className: userFocus && user && !validName ? \"instructions\" : \"offscreen\",\n                        children: [\n                            \"4 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 98,\n                                columnNumber: 40\n                            }, undefined),\n                            \"Must begin with a letter.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 99,\n                                columnNumber: 46\n                            }, undefined),\n                            \"Letters, numbers, underscores, hyphens allowed.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: [\n                            \"Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validPwd ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 106,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validPwd || !pwd ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 107,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"password\",\n                        onChange: (e)=>setPwd(e.target.value),\n                        value: pwd,\n                        required: true,\n                        \"aria-invalid\": validPwd ? \"false\" : \"true\",\n                        \"aria-describedby\": \"pwdnote\",\n                        onFocus: ()=>setPwdFocus(true),\n                        onBlur: ()=>setPwdFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 109,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"pwdnote\",\n                        className: pwdFocus && !validPwd ? \"instructions\" : \"offscreen\",\n                        children: [\n                            \"8 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 122,\n                                columnNumber: 48\n                            }, undefined),\n                            \"Must include uppercase and lowercase letters, a number and a special character.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 123,\n                                columnNumber: 108\n                            }, undefined),\n                            \"Allowed special characters: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"exclamation mark\",\n                                children: \"!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 124,\n                                columnNumber: 57\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"at symbol\",\n                                children: \"@\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 124,\n                                columnNumber: 102\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"hashtag\",\n                                children: \"#\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 124,\n                                columnNumber: 140\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"dollar sign\",\n                                children: \"$\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 124,\n                                columnNumber: 176\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"percent\",\n                                children: \"%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 124,\n                                columnNumber: 216\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 120,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"confirm_pwd\",\n                        children: [\n                            \"Confirm Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validMatch && matchPwd ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 130,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validMatch || !matchPwd ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 131,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 128,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"confirm_pwd\",\n                        onChange: (e)=>setMatchPwd(e.target.value),\n                        value: matchPwd,\n                        required: true,\n                        \"aria-invalid\": validMatch ? \"false\" : \"true\",\n                        \"aria-describedby\": \"confirmnote\",\n                        onFocus: ()=>setMatchFocus(true),\n                        onBlur: ()=>setMatchFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 133,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"confirmnote\",\n                        className: matchFocus && !validMatch ? \"instructions\" : \"offscreen\",\n                        children: \"Must match the first password input field.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 144,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: !validName || !validPwd || !validMatch ? true : false,\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 149,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n        lineNumber: 75,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Register, \"K2L7L9cVkNc42S3paB9KBpe33pw=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdmb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtEO0FBQ2Y7QUFDVDtBQUsxQixNQUFNSSxhQUFhO0FBQ25CLE1BQU1DLFlBQVk7QUFFbEIsTUFBTUMsV0FBVzs7SUFDYixNQUFNQyxVQUFVUCw2Q0FBTUE7SUFDdEIsTUFBTVEsU0FBU1IsNkNBQU1BO0lBRXRCLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU0sQ0FBQ2MsS0FBS0MsT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNrQixVQUFVQyxZQUFZLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNLENBQUNvQixVQUFVQyxZQUFZLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNzQixZQUFZQyxjQUFjLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUN3QixZQUFZQyxjQUFjLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNLENBQUMwQixRQUFRQyxVQUFVLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUM0QixTQUFTQyxXQUFXLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDVEssUUFBUXdCLE9BQU8sQ0FBQ0MsS0FBSztJQUN0QixHQUFHLEVBQUU7SUFFTDlCLGdEQUFTQSxDQUFDO1FBQ1QsTUFBTStCLFNBQVM3QixXQUFXOEIsSUFBSSxDQUFDekI7UUFDL0IwQixRQUFRQyxHQUFHLENBQUNIO1FBQ1pFLFFBQVFDLEdBQUcsQ0FBQzNC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OERBQUNkO2dDQUFLYyxjQUFXOzBDQUFZOzs7Ozs7NEJBQVE7MENBQUMsOERBQUNkO2dDQUFLYyxjQUFXOzBDQUFVOzs7Ozs7NEJBQVE7MENBQUMsOERBQUNkO2dDQUFLYyxjQUFXOzBDQUFjOzs7Ozs7NEJBQVE7MENBQUMsOERBQUNkO2dDQUFLYyxjQUFXOzBDQUFVOzs7Ozs7Ozs7Ozs7a0NBSTFOLDhEQUFDaEI7d0JBQU1DLFNBQVE7OzRCQUFjOzBDQUV6Qiw4REFBQ0M7Z0NBQUtQLFdBQVc1QixjQUFjRixXQUFXLFVBQVU7Ozs7OzswQ0FDcEQsOERBQUNxQztnQ0FBTVAsV0FBVzVCLGNBQWMsQ0FBQ0YsV0FBVyxTQUFTOzs7Ozs7Ozs7Ozs7a0NBRXpELDhEQUFDc0M7d0JBQ0dDLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hFLFVBQVUsQ0FBQ3hCLElBQU1qQixZQUFZaUIsRUFBRXlCLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDM0NBLE9BQU81Qzt3QkFDUDZDLFFBQVE7d0JBQ1JDLGdCQUFjNUMsYUFBYSxVQUFVO3dCQUNyQzZDLG9CQUFpQjt3QkFDakJDLFNBQVMsSUFBTTNDLGNBQWM7d0JBQzdCNEMsUUFBUSxJQUFNNUMsY0FBYzs7Ozs7O2tDQUVoQyw4REFBQ3VCO3dCQUFFWSxJQUFHO3dCQUFjVixXQUFXMUIsY0FBYyxDQUFDRixhQUFhLGlCQUFpQjtrQ0FBYTs7Ozs7O2tDQUt6Riw4REFBQ2tEO3dCQUFPQyxVQUFVLENBQUMvRCxhQUFhLENBQUNNLFlBQVksQ0FBQ00sYUFBYSxPQUFPO2tDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakc7R0FoSk1qQjtLQUFBQTtBQWlKTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvcmVnZm9ybS5qcz9jNmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlUmVmLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3JlZ2Zvcm0uY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cblxuXG5jb25zdCBVU0VSX1JFR0VYID0gL15bYS16QS1aXVthLXpBLVowLTktX117MywyM30kLztcbmNvbnN0IFBXRF9SRUdFWCA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89LipbIUAjJCVdKS57OCwyNH0kLztcblxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlclJlZiA9IHVzZVJlZigpO1xuICAgIGNvbnN0IGVyclJlZiA9IHVzZVJlZigpO1xuXG4gICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gICBjb25zdCBbdmFsaWROYW1lLCBzZXRWYWxpZE5hbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW3VzZXJGb2N1cywgc2V0VXNlckZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgY29uc3QgW3B3ZCwgc2V0UHdkXSA9IHVzZVN0YXRlKCcnKTtcbiAgIGNvbnN0IFt2YWxpZFB3ZCwgc2V0VmFsaWRQd2RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW3B3ZEZvY3VzLCBzZXRQd2RGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGNvbnN0IFttYXRjaFB3ZCwgc2V0TWF0Y2hQd2RdID0gdXNlU3RhdGUoJycpO1xuICAgY29uc3QgW3ZhbGlkTWF0Y2gsIHNldFZhbGlkTWF0Y2hdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgY29uc3QgW21hdGNoRm9jdXMsIHNldE1hdGNoRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBjb25zdCBbZXJyTXNnLCBzZXRFcnJNc2ddID0gdXNlU3RhdGUoJycpO1xuICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVzZXJSZWYuY3VycmVudC5mb2N1cygpO1xuICAgfSwgW10pO1xuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFVTRVJfUkVHRVgudGVzdCh1c2VyKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIHNldFZhbGlkTmFtZShyZXN1bHQpO1xuICAgfSxbdXNlcl0pOyBcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBQV0RfUkVHRVgudGVzdChwd2QpO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgY29uc29sZS5sb2cocHdkKTtcbiAgICBzZXRWYWxpZFB3ZChyZXN1bHQpO1xuICAgIGNvbnN0IG1hdGNoID0gcHdkID09PSBtYXRjaFB3ZDtcbiAgICBzZXRWYWxpZE1hdGNoKG1hdGNoKTtcbiAgIH0sW3B3ZCwgbWF0Y2hQd2RdKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRFcnJNc2coJycpO1xuXG4gICB9LFt1c2VyLCBwd2QsIG1hdGNoUHdkXSk7XG5cblxuICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gaWYgYnV0dG9uIGVuYWJsZWQgd2l0aCBKUyBoYWNrXG4gICAgY29uc3QgdjEgPSBVU0VSX1JFR0VYLnRlc3QodXNlcik7XG4gICAgY29uc3QgdjIgPSBQV0RfUkVHRVgudGVzdChwd2QpO1xuICAgIGlmICghdjEgfHwgIXYyKSB7XG4gICAgICAgIHNldEVyck1zZyhcIkludmFsaWQgRW50cnlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB1c3JzID0ge3VzZXJzOiB7dXNlcm5hbWU6IHVzZXIsIHBhc3N3b3JkLH19XG4gICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDg1L2FwaS9rd3llJywge1xuICAgICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgICAgcGFzc3dvcmQ6IHB3ZFxuICAgIH0pO1xufVxuICAgXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHAgcmVmID0ge2VyclJlZn0gY2xhc3NOYW1lPXtlcnJNc2cgPyBcImVycm1zZ1wiIDogXCJvZmZzY3JlZW5cIn0gYXJpYS1saXZlPSdhc3NlcnRpdmUnPntlcnJNc2d9PC9wPlxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+XG4gICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lOlxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dmFsaWROYW1lID8gXCJ2YWxpZFwiIDogXCJoaWRlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dmFsaWROYW1lIHx8ICF1c2VyID8gXCJoaWRlXCIgOiBcImludmFsaWRcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICByZWY9e3VzZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e3ZhbGlkTmFtZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidWlkbm90ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldFVzZXJGb2N1cyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRVc2VyRm9jdXMoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJ1aWRub3RlXCIgY2xhc3NOYW1lPXt1c2VyRm9jdXMgJiYgdXNlciAmJiAhdmFsaWROYW1lID8gXCJpbnN0cnVjdGlvbnNcIiA6IFwib2Zmc2NyZWVuXCJ9PlxuICAgICAgICAgICAgICAgICAgICA0IHRvIDI0IGNoYXJhY3RlcnMuPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIE11c3QgYmVnaW4gd2l0aCBhIGxldHRlci48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgTGV0dGVycywgbnVtYmVycywgdW5kZXJzY29yZXMsIGh5cGhlbnMgYWxsb3dlZC5cbiAgICAgICAgICAgICAgICA8L3A+XG5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ZhbGlkUHdkID8gXCJ2YWxpZFwiIDogXCJoaWRlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt2YWxpZFB3ZCB8fCAhcHdkID8gXCJoaWRlXCIgOiBcImludmFsaWRcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHdkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHdkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXt2YWxpZFB3ZCA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwd2Rub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRQd2RGb2N1cyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHNldFB3ZEZvY3VzKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInB3ZG5vdGVcIiBjbGFzc05hbWU9e3B3ZEZvY3VzICYmICF2YWxpZFB3ZCA/IFwiaW5zdHJ1Y3Rpb25zXCIgOiBcIm9mZnNjcmVlblwifT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA4IHRvIDI0IGNoYXJhY3RlcnMuPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVzdCBpbmNsdWRlIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMsIGEgbnVtYmVyIGFuZCBhIHNwZWNpYWwgY2hhcmFjdGVyLjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbG93ZWQgc3BlY2lhbCBjaGFyYWN0ZXJzOiA8c3BhbiBhcmlhLWxhYmVsPVwiZXhjbGFtYXRpb24gbWFya1wiPiE8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJhdCBzeW1ib2xcIj5APC9zcGFuPiA8c3BhbiBhcmlhLWxhYmVsPVwiaGFzaHRhZ1wiPiM8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJkb2xsYXIgc2lnblwiPiQ8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJwZXJjZW50XCI+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1fcHdkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybSBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ZhbGlkTWF0Y2ggJiYgbWF0Y2hQd2QgPyBcInZhbGlkXCIgOiBcImhpZGVcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgY2xhc3NOYW1lPXt2YWxpZE1hdGNoIHx8ICFtYXRjaFB3ZCA/IFwiaGlkZVwiIDogXCJpbnZhbGlkXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1fcHdkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1hdGNoUHdkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWF0Y2hQd2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e3ZhbGlkTWF0Y2ggPyBcImZhbHNlXCIgOiBcInRydWVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29uZmlybW5vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldE1hdGNoRm9jdXModHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRNYXRjaEZvY3VzKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImNvbmZpcm1ub3RlXCIgY2xhc3NOYW1lPXttYXRjaEZvY3VzICYmICF2YWxpZE1hdGNoID8gXCJpbnN0cnVjdGlvbnNcIiA6IFwib2Zmc2NyZWVuXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11c3QgbWF0Y2ggdGhlIGZpcnN0IHBhc3N3b3JkIGlucHV0IGZpZWxkLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IXZhbGlkTmFtZSB8fCAhdmFsaWRQd2QgfHwgIXZhbGlkTWF0Y2ggPyB0cnVlIDogZmFsc2V9PlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7ICJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiVVNFUl9SRUdFWCIsIlBXRF9SRUdFWCIsIlJlZ2lzdGVyIiwidXNlclJlZiIsImVyclJlZiIsInVzZXIiLCJzZXRVc2VyIiwidmFsaWROYW1lIiwic2V0VmFsaWROYW1lIiwidXNlckZvY3VzIiwic2V0VXNlckZvY3VzIiwicHdkIiwic2V0UHdkIiwidmFsaWRQd2QiLCJzZXRWYWxpZFB3ZCIsInB3ZEZvY3VzIiwic2V0UHdkRm9jdXMiLCJtYXRjaFB3ZCIsInNldE1hdGNoUHdkIiwidmFsaWRNYXRjaCIsInNldFZhbGlkTWF0Y2giLCJtYXRjaEZvY3VzIiwic2V0TWF0Y2hGb2N1cyIsImVyck1zZyIsInNldEVyck1zZyIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiY3VycmVudCIsImZvY3VzIiwicmVzdWx0IiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInYxIiwidjIiLCJ1c3JzIiwidXNlcnMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicG9zdCIsInNlY3Rpb24iLCJwIiwicmVmIiwiY2xhc3NOYW1lIiwiYXJpYS1saXZlIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJhdXRvQ29tcGxldGUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwicmVxdWlyZWQiLCJhcmlhLWludmFsaWQiLCJhcmlhLWRlc2NyaWJlZGJ5Iiwib25Gb2N1cyIsIm9uQmx1ciIsImJyIiwiYXJpYS1sYWJlbCIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/regform.js\n"));

/***/ })

});