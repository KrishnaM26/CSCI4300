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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_regform_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/regform.css */ \"(app-pages-browser)/./src/app/components/regform.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;\nconst PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;\nconst Register = ()=>{\n    _s();\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const errRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validName, setValidName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userFocus, setUserFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwd, setPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validPwd, setValidPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwdFocus, setPwdFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchPwd, setMatchPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validMatch, setValidMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchFocus, setMatchFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        userRef.current.focus();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = USER_REGEX.test(user);\n        console.log(result);\n        console.log(user);\n        setValidName(result);\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = PWD_REGEX.test(pwd);\n        console.log(result);\n        console.log(pwd);\n        setValidPwd(result);\n        const match = pwd === matchPwd;\n        setValidMatch(match);\n    }, [\n        pwd,\n        matchPwd\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setErrMsg(\"\");\n    }, [\n        user,\n        pwd,\n        matchPwd\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // if button enabled with JS hack\n        const v1 = USER_REGEX.test(user);\n        const v2 = PWD_REGEX.test(pwd);\n        if (!v1 || !v2) {\n            setErrMsg(\"Invalid Entry\");\n            return;\n        }\n        const usrs = {\n            users: {\n                username: user,\n                password: pwd\n            }\n        };\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8085/api/kwye\", usrs);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                ref: errRef,\n                className: errMsg ? \"errmsg\" : \"offscreen\",\n                \"aria-live\": \"assertive\",\n                children: errMsg\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: [\n                            \"Username:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 79,\n                                columnNumber: 20\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName || !user ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        ref: userRef,\n                        autoComplete: \"off\",\n                        onChange: (e)=>setUser(e.target.value),\n                        value: user,\n                        required: true,\n                        \"aria-invalid\": validName ? \"false\" : \"true\",\n                        \"aria-describedby\": \"uidnote\",\n                        onFocus: ()=>setUserFocus(true),\n                        onBlur: ()=>setUserFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"uidnote\",\n                        className: userFocus && user && !validName ? \"instructions\" : \"offscreen\",\n                        children: [\n                            \"4 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 96,\n                                columnNumber: 40\n                            }, undefined),\n                            \"Must begin with a letter.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 97,\n                                columnNumber: 46\n                            }, undefined),\n                            \"Letters, numbers, underscores, hyphens allowed.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: [\n                            \"Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validPwd ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 104,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validPwd || !pwd ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 105,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"password\",\n                        onChange: (e)=>setPwd(e.target.value),\n                        value: pwd,\n                        required: true,\n                        \"aria-invalid\": validPwd ? \"false\" : \"true\",\n                        \"aria-describedby\": \"pwdnote\",\n                        onFocus: ()=>setPwdFocus(true),\n                        onBlur: ()=>setPwdFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 107,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"pwdnote\",\n                        className: pwdFocus && !validPwd ? \"instructions\" : \"offscreen\",\n                        children: [\n                            \"8 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 120,\n                                columnNumber: 48\n                            }, undefined),\n                            \"Must include uppercase and lowercase letters, a number and a special character.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 121,\n                                columnNumber: 108\n                            }, undefined),\n                            \"Allowed special characters: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"exclamation mark\",\n                                children: \"!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 122,\n                                columnNumber: 57\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"at symbol\",\n                                children: \"@\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 122,\n                                columnNumber: 102\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"hashtag\",\n                                children: \"#\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 122,\n                                columnNumber: 140\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"dollar sign\",\n                                children: \"$\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 122,\n                                columnNumber: 176\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"percent\",\n                                children: \"%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 122,\n                                columnNumber: 216\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 118,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"confirm_pwd\",\n                        children: [\n                            \"Confirm Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validMatch && matchPwd ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 128,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validMatch || !matchPwd ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 129,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 126,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"confirm_pwd\",\n                        onChange: (e)=>setMatchPwd(e.target.value),\n                        value: matchPwd,\n                        required: true,\n                        \"aria-invalid\": validMatch ? \"false\" : \"true\",\n                        \"aria-describedby\": \"confirmnote\",\n                        onFocus: ()=>setMatchFocus(true),\n                        onBlur: ()=>setMatchFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 131,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"confirmnote\",\n                        className: matchFocus && !validMatch ? \"instructions\" : \"offscreen\",\n                        children: \"Must match the first password input field.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 142,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: !validName || !validPwd || !validMatch ? true : false,\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 147,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n        lineNumber: 73,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Register, \"K2L7L9cVkNc42S3paB9KBpe33pw=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdmb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtEO0FBQ2Y7QUFDVDtBQUsxQixNQUFNSSxhQUFhO0FBQ25CLE1BQU1DLFlBQVk7QUFFbEIsTUFBTUMsV0FBVzs7SUFDYixNQUFNQyxVQUFVUCw2Q0FBTUE7SUFDdEIsTUFBTVEsU0FBU1IsNkNBQU1BO0lBRXRCLE1BQU0sQ0FBQ1MsTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDWSxXQUFXQyxhQUFhLEdBQUdiLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU0sQ0FBQ2MsS0FBS0MsT0FBTyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUMvQixNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNrQixVQUFVQyxZQUFZLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNLENBQUNvQixVQUFVQyxZQUFZLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNzQixZQUFZQyxjQUFjLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUN3QixZQUFZQyxjQUFjLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNLENBQUMwQixRQUFRQyxVQUFVLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUM0QixTQUFTQyxXQUFXLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDVEssUUFBUXdCLE9BQU8sQ0FBQ0MsS0FBSztJQUN0QixHQUFHLEVBQUU7SUFFTDlCLGdEQUFTQSxDQUFDO1FBQ1QsTUFBTStCLFNBQVM3QixXQUFXOEIsSUFBSSxDQUFDekI7UUFDL0IwQixRQUFRQyxHQUFHLENBQUNIO1FBQ1pFLFFBQVFDLEdBQUcsQ0FBQzNC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Ozs7OzRCQUFROzBDQUFDLDhEQUFDZDtnQ0FBS2MsY0FBVzswQ0FBVTs7Ozs7OzRCQUFROzBDQUFDLDhEQUFDZDtnQ0FBS2MsY0FBVzswQ0FBYzs7Ozs7OzRCQUFROzBDQUFDLDhEQUFDZDtnQ0FBS2MsY0FBVzswQ0FBVTs7Ozs7Ozs7Ozs7O2tDQUkxTiw4REFBQ2hCO3dCQUFNQyxTQUFROzs0QkFBYzswQ0FFekIsOERBQUNDO2dDQUFLUCxXQUFXNUIsY0FBY0YsV0FBVyxVQUFVOzs7Ozs7MENBQ3BELDhEQUFDcUM7Z0NBQU1QLFdBQVc1QixjQUFjLENBQUNGLFdBQVcsU0FBUzs7Ozs7Ozs7Ozs7O2tDQUV6RCw4REFBQ3NDO3dCQUNHQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIRSxVQUFVLENBQUN4QixJQUFNakIsWUFBWWlCLEVBQUV5QixNQUFNLENBQUNDLEtBQUs7d0JBQzNDQSxPQUFPNUM7d0JBQ1A2QyxRQUFRO3dCQUNSQyxnQkFBYzVDLGFBQWEsVUFBVTt3QkFDckM2QyxvQkFBaUI7d0JBQ2pCQyxTQUFTLElBQU0zQyxjQUFjO3dCQUM3QjRDLFFBQVEsSUFBTTVDLGNBQWM7Ozs7OztrQ0FFaEMsOERBQUN1Qjt3QkFBRVksSUFBRzt3QkFBY1YsV0FBVzFCLGNBQWMsQ0FBQ0YsYUFBYSxpQkFBaUI7a0NBQWE7Ozs7OztrQ0FLekYsOERBQUNrRDt3QkFBT0MsVUFBVSxDQUFDL0QsYUFBYSxDQUFDTSxZQUFZLENBQUNNLGFBQWEsT0FBTztrQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpHO0dBOUlNakI7S0FBQUE7QUErSU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL3JlZ2Zvcm0uanM/YzZiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9yZWdmb3JtLmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5cblxuY29uc3QgVVNFUl9SRUdFWCA9IC9eW2EtekEtWl1bYS16QS1aMC05LV9dezMsMjN9JC87XG5jb25zdCBQV0RfUkVHRVggPSAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS4qWyFAIyQlXSkuezgsMjR9JC87XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBlcnJSZWYgPSB1c2VSZWYoKTtcblxuICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoJycpO1xuICAgY29uc3QgW3ZhbGlkTmFtZSwgc2V0VmFsaWROYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFt1c2VyRm9jdXMsIHNldFVzZXJGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGNvbnN0IFtwd2QsIHNldFB3ZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICBjb25zdCBbdmFsaWRQd2QsIHNldFZhbGlkUHdkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFtwd2RGb2N1cywgc2V0UHdkRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBjb25zdCBbbWF0Y2hQd2QsIHNldE1hdGNoUHdkXSA9IHVzZVN0YXRlKCcnKTtcbiAgIGNvbnN0IFt2YWxpZE1hdGNoLCBzZXRWYWxpZE1hdGNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFttYXRjaEZvY3VzLCBzZXRNYXRjaEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgY29uc3QgW2Vyck1zZywgc2V0RXJyTXNnXSA9IHVzZVN0YXRlKCcnKTtcbiAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1c2VyUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgIH0sIFtdKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBVU0VSX1JFR0VYLnRlc3QodXNlcik7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICBzZXRWYWxpZE5hbWUocmVzdWx0KTtcbiAgIH0sW3VzZXJdKTsgXG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gUFdEX1JFR0VYLnRlc3QocHdkKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIGNvbnNvbGUubG9nKHB3ZCk7XG4gICAgc2V0VmFsaWRQd2QocmVzdWx0KTtcbiAgICBjb25zdCBtYXRjaCA9IHB3ZCA9PT0gbWF0Y2hQd2Q7XG4gICAgc2V0VmFsaWRNYXRjaChtYXRjaCk7XG4gICB9LFtwd2QsIG1hdGNoUHdkXSk7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RXJyTXNnKCcnKTtcblxuICAgfSxbdXNlciwgcHdkLCBtYXRjaFB3ZF0pO1xuXG5cbiAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGlmIGJ1dHRvbiBlbmFibGVkIHdpdGggSlMgaGFja1xuICAgIGNvbnN0IHYxID0gVVNFUl9SRUdFWC50ZXN0KHVzZXIpO1xuICAgIGNvbnN0IHYyID0gUFdEX1JFR0VYLnRlc3QocHdkKTtcbiAgICBpZiAoIXYxIHx8ICF2Mikge1xuICAgICAgICBzZXRFcnJNc2coXCJJbnZhbGlkIEVudHJ5XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXNycyA9IHt1c2Vyczoge3VzZXJuYW1lOiB1c2VyLCBwYXNzd29yZDogcHdkfX07XG4gICAgYXhpb3NcbiAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDg1L2FwaS9rd3llJywgdXNycyk7XG59XG4gICBcblxuICAgIHJldHVybihcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8cCByZWYgPSB7ZXJyUmVmfSBjbGFzc05hbWU9e2Vyck1zZyA/IFwiZXJybXNnXCIgOiBcIm9mZnNjcmVlblwifSBhcmlhLWxpdmU9J2Fzc2VydGl2ZSc+e2Vyck1zZ308L3A+XG4gICAgICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3VzZXJuYW1lJz5cbiAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWU6XG4gICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt2YWxpZE5hbWUgPyBcInZhbGlkXCIgOiBcImhpZGVcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt2YWxpZE5hbWUgfHwgIXVzZXIgPyBcImhpZGVcIiA6IFwiaW52YWxpZFwifSAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dXNlclJlZn1cbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJ9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17dmFsaWROYW1lID8gXCJmYWxzZVwiIDogXCJ0cnVlXCJ9XG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ1aWRub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0VXNlckZvY3VzKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHNldFVzZXJGb2N1cyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cCBpZD1cInVpZG5vdGVcIiBjbGFzc05hbWU9e3VzZXJGb2N1cyAmJiB1c2VyICYmICF2YWxpZE5hbWUgPyBcImluc3RydWN0aW9uc1wiIDogXCJvZmZzY3JlZW5cIn0+XG4gICAgICAgICAgICAgICAgICAgIDQgdG8gMjQgY2hhcmFjdGVycy48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgTXVzdCBiZWdpbiB3aXRoIGEgbGV0dGVyLjxiciAvPlxuICAgICAgICAgICAgICAgICAgICBMZXR0ZXJzLCBudW1iZXJzLCB1bmRlcnNjb3JlcywgaHlwaGVucyBhbGxvd2VkLlxuICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dmFsaWRQd2QgPyBcInZhbGlkXCIgOiBcImhpZGVcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ZhbGlkUHdkIHx8ICFwd2QgPyBcImhpZGVcIiA6IFwiaW52YWxpZFwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQd2QoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwd2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e3ZhbGlkUHdkID8gXCJmYWxzZVwiIDogXCJ0cnVlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInB3ZG5vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldFB3ZEZvY3VzKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQmx1cj17KCkgPT4gc2V0UHdkRm9jdXMoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwicHdkbm90ZVwiIGNsYXNzTmFtZT17cHdkRm9jdXMgJiYgIXZhbGlkUHdkID8gXCJpbnN0cnVjdGlvbnNcIiA6IFwib2Zmc2NyZWVuXCJ9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDggdG8gMjQgY2hhcmFjdGVycy48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdXN0IGluY2x1ZGUgdXBwZXJjYXNlIGFuZCBsb3dlcmNhc2UgbGV0dGVycywgYSBudW1iZXIgYW5kIGEgc3BlY2lhbCBjaGFyYWN0ZXIuPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWxsb3dlZCBzcGVjaWFsIGNoYXJhY3RlcnM6IDxzcGFuIGFyaWEtbGFiZWw9XCJleGNsYW1hdGlvbiBtYXJrXCI+ITwvc3Bhbj4gPHNwYW4gYXJpYS1sYWJlbD1cImF0IHN5bWJvbFwiPkA8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJoYXNodGFnXCI+Izwvc3Bhbj4gPHNwYW4gYXJpYS1sYWJlbD1cImRvbGxhciBzaWduXCI+JDwvc3Bhbj4gPHNwYW4gYXJpYS1sYWJlbD1cInBlcmNlbnRcIj4lPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybV9wd2RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb25maXJtIFBhc3N3b3JkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dmFsaWRNYXRjaCAmJiBtYXRjaFB3ZCA/IFwidmFsaWRcIiA6IFwiaGlkZVwifSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICBjbGFzc05hbWU9e3ZhbGlkTWF0Y2ggfHwgIW1hdGNoUHdkID8gXCJoaWRlXCIgOiBcImludmFsaWRcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybV9wd2RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWF0Y2hQd2QoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXttYXRjaFB3ZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17dmFsaWRNYXRjaCA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb25maXJtbm90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0TWF0Y2hGb2N1cyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHNldE1hdGNoRm9jdXMoZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiY29uZmlybW5vdGVcIiBjbGFzc05hbWU9e21hdGNoRm9jdXMgJiYgIXZhbGlkTWF0Y2ggPyBcImluc3RydWN0aW9uc1wiIDogXCJvZmZzY3JlZW5cIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVzdCBtYXRjaCB0aGUgZmlyc3QgcGFzc3dvcmQgaW5wdXQgZmllbGQuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXshdmFsaWROYW1lIHx8ICF2YWxpZFB3ZCB8fCAhdmFsaWRNYXRjaCA/IHRydWUgOiBmYWxzZX0+U2lnbiBVcDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsgIl0sIm5hbWVzIjpbInVzZVJlZiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJVU0VSX1JFR0VYIiwiUFdEX1JFR0VYIiwiUmVnaXN0ZXIiLCJ1c2VyUmVmIiwiZXJyUmVmIiwidXNlciIsInNldFVzZXIiLCJ2YWxpZE5hbWUiLCJzZXRWYWxpZE5hbWUiLCJ1c2VyRm9jdXMiLCJzZXRVc2VyRm9jdXMiLCJwd2QiLCJzZXRQd2QiLCJ2YWxpZFB3ZCIsInNldFZhbGlkUHdkIiwicHdkRm9jdXMiLCJzZXRQd2RGb2N1cyIsIm1hdGNoUHdkIiwic2V0TWF0Y2hQd2QiLCJ2YWxpZE1hdGNoIiwic2V0VmFsaWRNYXRjaCIsIm1hdGNoRm9jdXMiLCJzZXRNYXRjaEZvY3VzIiwiZXJyTXNnIiwic2V0RXJyTXNnIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJjdXJyZW50IiwiZm9jdXMiLCJyZXN1bHQiLCJ0ZXN0IiwiY29uc29sZSIsImxvZyIsIm1hdGNoIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidjEiLCJ2MiIsInVzcnMiLCJ1c2VycyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJwb3N0Iiwic2VjdGlvbiIsInAiLCJyZWYiLCJjbGFzc05hbWUiLCJhcmlhLWxpdmUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJpZCIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsImFyaWEtaW52YWxpZCIsImFyaWEtZGVzY3JpYmVkYnkiLCJvbkZvY3VzIiwib25CbHVyIiwiYnIiLCJhcmlhLWxhYmVsIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/regform.js\n"));

/***/ })

});