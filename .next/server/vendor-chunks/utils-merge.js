/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/utils-merge";
exports.ids = ["vendor-chunks/utils-merge"];
exports.modules = {

/***/ "(ssr)/./node_modules/utils-merge/index.js":
/*!*******************************************!*\
  !*** ./node_modules/utils-merge/index.js ***!
  \*******************************************/
/***/ ((module, exports) => {

eval("/**\n * Merge object b with object a.\n *\n *     var a = { foo: 'bar' }\n *       , b = { bar: 'baz' };\n *\n *     merge(a, b);\n *     // => { foo: 'bar', bar: 'baz' }\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object}\n * @api public\n */\n\nexports = module.exports = function(a, b){\n  if (a && b) {\n    for (var key in b) {\n      a[key] = b[key];\n    }\n  }\n  return a;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXRpbHMtbWVyZ2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25vdy13aGF0LXlvdS1lYXQvLi9ub2RlX21vZHVsZXMvdXRpbHMtbWVyZ2UvaW5kZXguanM/NGMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1lcmdlIG9iamVjdCBiIHdpdGggb2JqZWN0IGEuXG4gKlxuICogICAgIHZhciBhID0geyBmb286ICdiYXInIH1cbiAqICAgICAgICwgYiA9IHsgYmFyOiAnYmF6JyB9O1xuICpcbiAqICAgICBtZXJnZShhLCBiKTtcbiAqICAgICAvLyA9PiB7IGZvbzogJ2JhcicsIGJhcjogJ2JheicgfVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhXG4gKiBAcGFyYW0ge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhLCBiKXtcbiAgaWYgKGEgJiYgYikge1xuICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiBhO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/utils-merge/index.js\n");

/***/ })

};
;