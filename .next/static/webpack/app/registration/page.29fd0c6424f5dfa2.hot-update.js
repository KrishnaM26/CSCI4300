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

/***/ "(app-pages-browser)/./src/app/components/registrationForm.jsx":
/*!*************************************************!*\
  !*** ./src/app/components/registrationForm.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/form.css */ \"(app-pages-browser)/./src/app/styles/form.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// RegistrationForm.js\n\nvar _s = $RefreshSig$();\n\n\n\nconst url = \"http://localhost:8085/api/kwye\";\nconst RegistrationForm = ()=>{\n    _s();\n    /*\n  const [username, setUserName] = useState(\"\");\n  const [password, setPassword] = useState(\"\");\n\n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    try {\n      const response = await axios.post(\"http://localhost:8085/api/kwye\", {\n        username: username,\n        password: password,\n      });\n      console.log(\"Registration successful:\", response.data);\n      const isConfirmed = window.confirm(\n        \"Account created! Do you want to proceed to the home page?\"\n      );\n      if (isConfirmed) {\n        window.location.href = \"/\";\n      } else {\n        setUserName(\"\");\n        setPassword(\"\");\n      }\n    } catch (error) {\n      console.error(\"Registration failed:\", error);\n    }\n  };\n  */ const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        username: \"\",\n        password: \"\"\n    });\n    const handleInput = (event)=>{\n        setPost({\n            ...post,\n            [event.target.name]: event.target.event\n        });\n    };\n    function handleSubmit(event) {\n        event.preventDefault();\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(url, {\n            post\n        }).then(response);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Register for a new account\"\n            }, void 0, false, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"name\",\n                                children: \"Username:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"name\",\n                                value: username,\n                                //onChange={(e) => setUserName(e.target.value)}\n                                onChange: handleInput,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                children: \"Password:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                value: password,\n                                //onChange={(e) => setPassword(e.target.value)}\n                                onChange: handleInput,\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/krishnamehta/Documents/GitHub/CSCI4300/src/app/components/registrationForm.jsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RegistrationForm, \"vF4e5lEzwJLykFnd6ewJoVn/F1I=\");\n_c = RegistrationForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RegistrationForm);\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb25Gb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQkFBc0I7OztBQUNrQjtBQUNaO0FBQ0Y7QUFDMUIsTUFBTUcsTUFBTTtBQUVaLE1BQU1DLG1CQUFtQjs7SUFJdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF5QkEsR0FDQSxNQUFNLENBQUNDLE1BQU1DLFFBQVMsR0FBR0wsK0NBQVFBLENBQUM7UUFDaENNLFVBQVU7UUFDVkMsVUFBVTtJQUNWO0lBRUYsTUFBTUMsY0FBYyxDQUFDQztRQUNqQkosUUFBUTtZQUFDLEdBQUdELElBQUk7WUFBRSxDQUFDSyxNQUFNQyxNQUFNLENBQUNDLElBQUksQ0FBQyxFQUFFRixNQUFNQyxNQUFNLENBQUNELEtBQUs7UUFBQTtJQUM3RDtJQUVBLFNBQVNHLGFBQWFILEtBQUs7UUFDekJBLE1BQU1JLGNBQWM7UUFFcEJaLDZDQUFLQSxDQUFDRyxJQUFJLENBQUNGLEtBQUk7WUFBQ0U7UUFBSSxHQUNqQlUsSUFBSSxDQUFDQztJQUNWO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVQOztrQ0FDZCw4REFBQ0k7OzBDQUNDLDhEQUFDSTtnQ0FBTUMsU0FBUTswQ0FBTzs7Ozs7OzBDQUN0Qiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE9BQU9uQjtnQ0FDUCwrQ0FBK0M7Z0NBQy9Db0IsVUFBVWxCO2dDQUNWbUIsUUFBUTs7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDWDs7MENBQ0MsOERBQUNJO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSEMsT0FBT2xCO2dDQUNQLCtDQUErQztnQ0FDL0NtQixVQUFVbEI7Z0NBQ1ZtQixRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNDO3dCQUFPTCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0E1RU1wQjtLQUFBQTtBQThFTiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb25Gb3JtLmpzeD85ZGIzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFJlZ2lzdHJhdGlvbkZvcm0uanNcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2Zvcm0uY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5jb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo4MDg1L2FwaS9rd3llJztcblxuY29uc3QgUmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcblxuICBcbiAgXG4gIC8qXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4NS9hcGkva3d5ZVwiLCB7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsOlwiLCByZXNwb25zZS5kYXRhKTtcbiAgICAgIGNvbnN0IGlzQ29uZmlybWVkID0gd2luZG93LmNvbmZpcm0oXG4gICAgICAgIFwiQWNjb3VudCBjcmVhdGVkISBEbyB5b3Ugd2FudCB0byBwcm9jZWVkIHRvIHRoZSBob21lIHBhZ2U/XCJcbiAgICAgICk7XG4gICAgICBpZiAoaXNDb25maXJtZWQpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFVzZXJOYW1lKFwiXCIpO1xuICAgICAgICBzZXRQYXNzd29yZChcIlwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlZ2lzdHJhdGlvbiBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gICovXG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0IF0gPSB1c2VTdGF0ZSh7XG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIHBhc3N3b3JkOiAnJ1xuICAgIH0pXG5cbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZXZlbnQpID0+IHtcbiAgICAgIHNldFBvc3Qoey4uLnBvc3QsIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC5ldmVudH0pXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpe1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBheGlvcy5wb3N0KHVybCx7cG9zdH0pXG4gICAgICAudGhlbihyZXNwb25zZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5SZWdpc3RlciBmb3IgYSBuZXcgYWNjb3VudDwvaDI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5Vc2VybmFtZTo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cbiAgICAgICAgICAgIC8vb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXR9XG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgLy9vbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1cmwiLCJSZWdpc3RyYXRpb25Gb3JtIiwicG9zdCIsInNldFBvc3QiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGFuZGxlSW5wdXQiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJyZXNwb25zZSIsImRpdiIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/registrationForm.jsx\n"));

/***/ })

});