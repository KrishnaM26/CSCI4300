"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/setprototypeof";
exports.ids = ["vendor-chunks/setprototypeof"];
exports.modules = {

/***/ "(ssr)/./node_modules/setprototypeof/index.js":
/*!**********************************************!*\
  !*** ./node_modules/setprototypeof/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n/* eslint no-proto: 0 */\nmodule.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties)\n\nfunction setProtoOf (obj, proto) {\n  obj.__proto__ = proto\n  return obj\n}\n\nfunction mixinProperties (obj, proto) {\n  for (var prop in proto) {\n    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {\n      obj[prop] = proto[prop]\n    }\n  }\n  return obj\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2V0cHJvdG90eXBlb2YvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQVk7QUFDWjtBQUNBLDZDQUE2QyxnQkFBZ0I7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbm93LXdoYXQteW91LWVhdC8uL25vZGVfbW9kdWxlcy9zZXRwcm90b3R5cGVvZi9pbmRleC5qcz8yOTMwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuLyogZXNsaW50IG5vLXByb3RvOiAwICovXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSA/IHNldFByb3RvT2YgOiBtaXhpblByb3BlcnRpZXMpXG5cbmZ1bmN0aW9uIHNldFByb3RvT2YgKG9iaiwgcHJvdG8pIHtcbiAgb2JqLl9fcHJvdG9fXyA9IHByb3RvXG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gbWl4aW5Qcm9wZXJ0aWVzIChvYmosIHByb3RvKSB7XG4gIGZvciAodmFyIHByb3AgaW4gcHJvdG8pIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSB7XG4gICAgICBvYmpbcHJvcF0gPSBwcm90b1twcm9wXVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/setprototypeof/index.js\n");

/***/ })

};
;