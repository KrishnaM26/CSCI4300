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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_regform_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/regform.css */ \"(app-pages-browser)/./src/app/styles/regform.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;\nconst PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{4,24}$/;\nconst Register = ()=>{\n    _s();\n    const userRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const errRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validName, setValidName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userFocus, setUserFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwd, setPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validPwd, setValidPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pwdFocus, setPwdFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchPwd, setMatchPwd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [validMatch, setValidMatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [matchFocus, setMatchFocus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [errMsg, setErrMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        userRef.current.focus();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = USER_REGEX.test(user);\n        console.log(result);\n        console.log(user);\n        setValidName(result);\n    }, [\n        user\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const result = PWD_REGEX.test(pwd);\n        console.log(result);\n        console.log(pwd);\n        setValidPwd(result);\n        const match = pwd === matchPwd;\n        setValidMatch(match);\n    }, [\n        pwd,\n        matchPwd\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setErrMsg(\"\");\n    }, [\n        user,\n        pwd,\n        matchPwd\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // if button enabled with JS hack\n        const v1 = USER_REGEX.test(user);\n        const v2 = PWD_REGEX.test(pwd);\n        if (!v1 || !v2) {\n            setErrMsg(\"Invalid Entry\");\n            return;\n        }\n        const usrs = {\n            users: {\n                username: user,\n                password: pwd\n            }\n        };\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:8085/api/kwye\", usrs).then((res)=>{\n            setUser(\"\");\n            setPwd(\"\");\n            setMatchPwd(\"\");\n            console.log(\"Registration successful:\", res.data);\n            const isConfirmed = window.confirm(\"Account created! Do you want to proceed to the home page?\");\n            window.location.href = \"/\";\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                ref: errRef,\n                className: errMsg ? \"errmsg\" : \"offscreen\",\n                \"aria-live\": \"assertive\",\n                children: errMsg\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: [\n                            \"Username:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 88,\n                                columnNumber: 20\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validName || !user ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        ref: userRef,\n                        autoComplete: \"off\",\n                        onChange: (e)=>setUser(e.target.value),\n                        value: user,\n                        required: true,\n                        \"aria-invalid\": validName ? \"false\" : \"true\",\n                        \"aria-describedby\": \"uidnote\",\n                        onFocus: ()=>setUserFocus(true),\n                        onBlur: ()=>setUserFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"uidnote\",\n                        className: userFocus && user && !validName ? \"instructions\" : \"offscreen\",\n                        children: [\n                            \"4 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 105,\n                                columnNumber: 40\n                            }, undefined),\n                            \"Must begin with a letter.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 106,\n                                columnNumber: 46\n                            }, undefined),\n                            \"Letters, numbers, underscores, hyphens allowed.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: [\n                            \"Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validPwd ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 113,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validPwd || !pwd ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 114,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"password\",\n                        onChange: (e)=>setPwd(e.target.value),\n                        value: pwd,\n                        required: true,\n                        \"aria-invalid\": validPwd ? \"false\" : \"true\",\n                        \"aria-describedby\": \"pwdnote\",\n                        onFocus: ()=>setPwdFocus(true),\n                        onBlur: ()=>setPwdFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 116,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"pwdnote\",\n                        className: pwdFocus && !validPwd ? \"instructions\" : \"offscreen\",\n                        children: [\n                            \"8 to 24 characters.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 129,\n                                columnNumber: 48\n                            }, undefined),\n                            \"Must include uppercase and lowercase letters, a number and a special character.\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 130,\n                                columnNumber: 108\n                            }, undefined),\n                            \"Allowed special characters: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"exclamation mark\",\n                                children: \"!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 131,\n                                columnNumber: 57\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"at symbol\",\n                                children: \"@\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 131,\n                                columnNumber: 102\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"hashtag\",\n                                children: \"#\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 131,\n                                columnNumber: 140\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"dollar sign\",\n                                children: \"$\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 131,\n                                columnNumber: 176\n                            }, undefined),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"aria-label\": \"percent\",\n                                children: \"%\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 131,\n                                columnNumber: 216\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 127,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"confirm_pwd\",\n                        children: [\n                            \"Confirm Password:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validMatch && matchPwd ? \"valid\" : \"hide\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 137,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: validMatch || !matchPwd ? \"hide\" : \"invalid\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                                lineNumber: 138,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 135,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"confirm_pwd\",\n                        onChange: (e)=>setMatchPwd(e.target.value),\n                        value: matchPwd,\n                        required: true,\n                        \"aria-invalid\": validMatch ? \"false\" : \"true\",\n                        \"aria-describedby\": \"confirmnote\",\n                        onFocus: ()=>setMatchFocus(true),\n                        onBlur: ()=>setMatchFocus(false)\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 140,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"confirmnote\",\n                        className: matchFocus && !validMatch ? \"instructions\" : \"offscreen\",\n                        children: \"Must match the first password input field.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 151,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        disabled: !validName || !validPwd || !validMatch ? true : false,\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                        lineNumber: 156,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/regform.js\",\n        lineNumber: 82,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Register, \"K2L7L9cVkNc42S3paB9KBpe33pw=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdmb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWtEO0FBQ25CO0FBQ0w7QUFFMUIsTUFBTUksYUFBYTtBQUNuQixNQUFNQyxZQUFZO0FBRWxCLE1BQU1DLFdBQVc7O0lBQ2IsTUFBTUMsVUFBVVAsNkNBQU1BO0lBQ3RCLE1BQU1RLFNBQVNSLDZDQUFNQTtJQUV0QixNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1ksV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNLENBQUNjLEtBQUtDLE9BQU8sR0FBR2YsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDZ0IsVUFBVUMsWUFBWSxHQUFHakIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDa0IsVUFBVUMsWUFBWSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFekMsTUFBTSxDQUFDb0IsVUFBVUMsWUFBWSxHQUFHckIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDc0IsWUFBWUMsY0FBYyxHQUFHdkIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDd0IsWUFBWUMsY0FBYyxHQUFHekIsK0NBQVFBLENBQUM7SUFFN0MsTUFBTSxDQUFDMEIsUUFBUUMsVUFBVSxHQUFHM0IsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDNEIsU0FBU0MsV0FBVyxHQUFHN0IsK0NBQVFBLENBQUM7SUFFdkNDLGdEQUFTQSxDQUFDO1FBQ1RLLFFBQVF3QixPQUFPLENBQUNDLEtBQUs7SUFDdEIsR0FBRyxFQUFFO0lBRUw5QixnREFBU0EsQ0FBQztRQUNULE1BQU0rQixTQUFTN0IsV0FBVzhCLElBQUksQ0FBQ3pCO1FBQy9CMEIsUUFBUUMsR0FBRyxDQUFDSDtRQUNaRSxRQUFRQyxHQUFHLENBQUMz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Oi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdmb3JtLmpzP2M2YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBcIi4uL3N0eWxlcy9yZWdmb3JtLmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgVVNFUl9SRUdFWCA9IC9eW2EtekEtWl1bYS16QS1aMC05LV9dezMsMjN9JC87XG5jb25zdCBQV0RfUkVHRVggPSAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS4qWyFAIyQlXSkuezQsMjR9JC87XG5cbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJSZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBlcnJSZWYgPSB1c2VSZWYoKTtcblxuICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoJycpO1xuICAgY29uc3QgW3ZhbGlkTmFtZSwgc2V0VmFsaWROYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFt1c2VyRm9jdXMsIHNldFVzZXJGb2N1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgIGNvbnN0IFtwd2QsIHNldFB3ZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICBjb25zdCBbdmFsaWRQd2QsIHNldFZhbGlkUHdkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFtwd2RGb2N1cywgc2V0UHdkRm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICBjb25zdCBbbWF0Y2hQd2QsIHNldE1hdGNoUHdkXSA9IHVzZVN0YXRlKCcnKTtcbiAgIGNvbnN0IFt2YWxpZE1hdGNoLCBzZXRWYWxpZE1hdGNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgIGNvbnN0IFttYXRjaEZvY3VzLCBzZXRNYXRjaEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgY29uc3QgW2Vyck1zZywgc2V0RXJyTXNnXSA9IHVzZVN0YXRlKCcnKTtcbiAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1c2VyUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgIH0sIFtdKTtcblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBVU0VSX1JFR0VYLnRlc3QodXNlcik7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICBzZXRWYWxpZE5hbWUocmVzdWx0KTtcbiAgIH0sW3VzZXJdKTsgXG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gUFdEX1JFR0VYLnRlc3QocHdkKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIGNvbnNvbGUubG9nKHB3ZCk7XG4gICAgc2V0VmFsaWRQd2QocmVzdWx0KTtcbiAgICBjb25zdCBtYXRjaCA9IHB3ZCA9PT0gbWF0Y2hQd2Q7XG4gICAgc2V0VmFsaWRNYXRjaChtYXRjaCk7XG4gICB9LFtwd2QsIG1hdGNoUHdkXSk7XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RXJyTXNnKCcnKTtcblxuICAgfSxbdXNlciwgcHdkLCBtYXRjaFB3ZF0pO1xuXG5cbiAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGlmIGJ1dHRvbiBlbmFibGVkIHdpdGggSlMgaGFja1xuICAgIGNvbnN0IHYxID0gVVNFUl9SRUdFWC50ZXN0KHVzZXIpO1xuICAgIGNvbnN0IHYyID0gUFdEX1JFR0VYLnRlc3QocHdkKTtcbiAgICBpZiAoIXYxIHx8ICF2Mikge1xuICAgICAgICBzZXRFcnJNc2coXCJJbnZhbGlkIEVudHJ5XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXNycyA9IHt1c2Vyczoge3VzZXJuYW1lOiB1c2VyLCBwYXNzd29yZDogcHdkfX07XG4gICAgYXhpb3NcbiAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDg1L2FwaS9rd3llJywgdXNycylcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldFVzZXIoJycpO1xuICAgICAgICBzZXRQd2QoJycpO1xuICAgICAgICBzZXRNYXRjaFB3ZCgnJyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bDpcIiwgcmVzLmRhdGEpO1xuICAgICAgICBjb25zdCBpc0NvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKFxuICAgICAgICAgIFwiQWNjb3VudCBjcmVhdGVkISBEbyB5b3Ugd2FudCB0byBwcm9jZWVkIHRvIHRoZSBob21lIHBhZ2U/XCJcbiAgICAgICAgKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiO1xuICAgIH0pO1xuXG59O1xuICAgXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHAgcmVmID0ge2VyclJlZn0gY2xhc3NOYW1lPXtlcnJNc2cgPyBcImVycm1zZ1wiIDogXCJvZmZzY3JlZW5cIn0gYXJpYS1saXZlPSdhc3NlcnRpdmUnPntlcnJNc2d9PC9wPlxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VybmFtZSc+XG4gICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lOlxuICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dmFsaWROYW1lID8gXCJ2YWxpZFwiIDogXCJoaWRlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dmFsaWROYW1lIHx8ICF1c2VyID8gXCJoaWRlXCIgOiBcImludmFsaWRcIn0gLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICByZWY9e3VzZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcihlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyfVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e3ZhbGlkTmFtZSA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidWlkbm90ZVwiXG4gICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldFVzZXJGb2N1cyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRVc2VyRm9jdXMoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJ1aWRub3RlXCIgY2xhc3NOYW1lPXt1c2VyRm9jdXMgJiYgdXNlciAmJiAhdmFsaWROYW1lID8gXCJpbnN0cnVjdGlvbnNcIiA6IFwib2Zmc2NyZWVuXCJ9PlxuICAgICAgICAgICAgICAgICAgICA0IHRvIDI0IGNoYXJhY3RlcnMuPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIE11c3QgYmVnaW4gd2l0aCBhIGxldHRlci48YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgTGV0dGVycywgbnVtYmVycywgdW5kZXJzY29yZXMsIGh5cGhlbnMgYWxsb3dlZC5cbiAgICAgICAgICAgICAgICA8L3A+XG5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ZhbGlkUHdkID8gXCJ2YWxpZFwiIDogXCJoaWRlXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt2YWxpZFB3ZCB8fCAhcHdkID8gXCJoaWRlXCIgOiBcImludmFsaWRcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHdkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHdkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXt2YWxpZFB3ZCA/IFwiZmFsc2VcIiA6IFwidHJ1ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwd2Rub3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRQd2RGb2N1cyh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+IHNldFB3ZEZvY3VzKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cInB3ZG5vdGVcIiBjbGFzc05hbWU9e3B3ZEZvY3VzICYmICF2YWxpZFB3ZCA/IFwiaW5zdHJ1Y3Rpb25zXCIgOiBcIm9mZnNjcmVlblwifT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA4IHRvIDI0IGNoYXJhY3RlcnMuPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVzdCBpbmNsdWRlIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMsIGEgbnVtYmVyIGFuZCBhIHNwZWNpYWwgY2hhcmFjdGVyLjxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbG93ZWQgc3BlY2lhbCBjaGFyYWN0ZXJzOiA8c3BhbiBhcmlhLWxhYmVsPVwiZXhjbGFtYXRpb24gbWFya1wiPiE8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJhdCBzeW1ib2xcIj5APC9zcGFuPiA8c3BhbiBhcmlhLWxhYmVsPVwiaGFzaHRhZ1wiPiM8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJkb2xsYXIgc2lnblwiPiQ8L3NwYW4+IDxzcGFuIGFyaWEtbGFiZWw9XCJwZXJjZW50XCI+JTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1fcHdkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29uZmlybSBQYXNzd29yZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3ZhbGlkTWF0Y2ggJiYgbWF0Y2hQd2QgPyBcInZhbGlkXCIgOiBcImhpZGVcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAgY2xhc3NOYW1lPXt2YWxpZE1hdGNoIHx8ICFtYXRjaFB3ZCA/IFwiaGlkZVwiIDogXCJpbnZhbGlkXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1fcHdkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1hdGNoUHdkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWF0Y2hQd2R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWludmFsaWQ9e3ZhbGlkTWF0Y2ggPyBcImZhbHNlXCIgOiBcInRydWVcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29uZmlybW5vdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldE1hdGNoRm9jdXModHJ1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRNYXRjaEZvY3VzKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImNvbmZpcm1ub3RlXCIgY2xhc3NOYW1lPXttYXRjaEZvY3VzICYmICF2YWxpZE1hdGNoID8gXCJpbnN0cnVjdGlvbnNcIiA6IFwib2Zmc2NyZWVuXCJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11c3QgbWF0Y2ggdGhlIGZpcnN0IHBhc3N3b3JkIGlucHV0IGZpZWxkLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17IXZhbGlkTmFtZSB8fCAhdmFsaWRQd2QgfHwgIXZhbGlkTWF0Y2ggPyB0cnVlIDogZmFsc2V9PlNpZ24gVXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7ICJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiVVNFUl9SRUdFWCIsIlBXRF9SRUdFWCIsIlJlZ2lzdGVyIiwidXNlclJlZiIsImVyclJlZiIsInVzZXIiLCJzZXRVc2VyIiwidmFsaWROYW1lIiwic2V0VmFsaWROYW1lIiwidXNlckZvY3VzIiwic2V0VXNlckZvY3VzIiwicHdkIiwic2V0UHdkIiwidmFsaWRQd2QiLCJzZXRWYWxpZFB3ZCIsInB3ZEZvY3VzIiwic2V0UHdkRm9jdXMiLCJtYXRjaFB3ZCIsInNldE1hdGNoUHdkIiwidmFsaWRNYXRjaCIsInNldFZhbGlkTWF0Y2giLCJtYXRjaEZvY3VzIiwic2V0TWF0Y2hGb2N1cyIsImVyck1zZyIsInNldEVyck1zZyIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiY3VycmVudCIsImZvY3VzIiwicmVzdWx0IiwidGVzdCIsImNvbnNvbGUiLCJsb2ciLCJtYXRjaCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInYxIiwidjIiLCJ1c3JzIiwidXNlcnMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiaXNDb25maXJtZWQiLCJ3aW5kb3ciLCJjb25maXJtIiwibG9jYXRpb24iLCJocmVmIiwic2VjdGlvbiIsInAiLCJyZWYiLCJjbGFzc05hbWUiLCJhcmlhLWxpdmUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJpZCIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsImFyaWEtaW52YWxpZCIsImFyaWEtZGVzY3JpYmVkYnkiLCJvbkZvY3VzIiwib25CbHVyIiwiYnIiLCJhcmlhLWxhYmVsIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/regform.js\n"));

/***/ })

});