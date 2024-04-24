"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/methods";
exports.ids = ["vendor-chunks/methods"];
exports.modules = {

/***/ "(ssr)/./node_modules/methods/index.js":
/*!***************************************!*\
  !*** ./node_modules/methods/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * methods\n * Copyright(c) 2013-2014 TJ Holowaychuk\n * Copyright(c) 2015-2016 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar http = __webpack_require__(/*! http */ \"http\");\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = getCurrentNodeMethods() || getBasicNodeMethods();\n\n/**\n * Get the current Node.js methods.\n * @private\n */\n\nfunction getCurrentNodeMethods() {\n  return http.METHODS && http.METHODS.map(function lowerCaseMethod(method) {\n    return method.toLowerCase();\n  });\n}\n\n/**\n * Get the \"basic\" Node.js methods, a snapshot from Node.js 0.10.\n * @private\n */\n\nfunction getBasicNodeMethods() {\n  return [\n    'get',\n    'post',\n    'put',\n    'head',\n    'delete',\n    'options',\n    'trace',\n    'copy',\n    'lock',\n    'mkcol',\n    'move',\n    'purge',\n    'propfind',\n    'proppatch',\n    'unlock',\n    'report',\n    'mkactivity',\n    'checkout',\n    'merge',\n    'm-search',\n    'notify',\n    'subscribe',\n    'unsubscribe',\n    'patch',\n    'search',\n    'connect'\n  ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWV0aG9kcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxtQkFBTyxDQUFDLGtCQUFNOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25vdy13aGF0LXlvdS1lYXQvLi9ub2RlX21vZHVsZXMvbWV0aG9kcy9pbmRleC5qcz8wY2M4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogbWV0aG9kc1xuICogQ29weXJpZ2h0KGMpIDIwMTMtMjAxNCBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTUtMjAxNiBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0Q3VycmVudE5vZGVNZXRob2RzKCkgfHwgZ2V0QmFzaWNOb2RlTWV0aG9kcygpO1xuXG4vKipcbiAqIEdldCB0aGUgY3VycmVudCBOb2RlLmpzIG1ldGhvZHMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdldEN1cnJlbnROb2RlTWV0aG9kcygpIHtcbiAgcmV0dXJuIGh0dHAuTUVUSE9EUyAmJiBodHRwLk1FVEhPRFMubWFwKGZ1bmN0aW9uIGxvd2VyQ2FzZU1ldGhvZChtZXRob2QpIHtcbiAgICByZXR1cm4gbWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgXCJiYXNpY1wiIE5vZGUuanMgbWV0aG9kcywgYSBzbmFwc2hvdCBmcm9tIE5vZGUuanMgMC4xMC5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0QmFzaWNOb2RlTWV0aG9kcygpIHtcbiAgcmV0dXJuIFtcbiAgICAnZ2V0JyxcbiAgICAncG9zdCcsXG4gICAgJ3B1dCcsXG4gICAgJ2hlYWQnLFxuICAgICdkZWxldGUnLFxuICAgICdvcHRpb25zJyxcbiAgICAndHJhY2UnLFxuICAgICdjb3B5JyxcbiAgICAnbG9jaycsXG4gICAgJ21rY29sJyxcbiAgICAnbW92ZScsXG4gICAgJ3B1cmdlJyxcbiAgICAncHJvcGZpbmQnLFxuICAgICdwcm9wcGF0Y2gnLFxuICAgICd1bmxvY2snLFxuICAgICdyZXBvcnQnLFxuICAgICdta2FjdGl2aXR5JyxcbiAgICAnY2hlY2tvdXQnLFxuICAgICdtZXJnZScsXG4gICAgJ20tc2VhcmNoJyxcbiAgICAnbm90aWZ5JyxcbiAgICAnc3Vic2NyaWJlJyxcbiAgICAndW5zdWJzY3JpYmUnLFxuICAgICdwYXRjaCcsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ2Nvbm5lY3QnXG4gIF07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/methods/index.js\n");

/***/ })

};
;