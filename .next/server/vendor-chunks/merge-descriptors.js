"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/merge-descriptors";
exports.ids = ["vendor-chunks/merge-descriptors"];
exports.modules = {

/***/ "(ssr)/./node_modules/merge-descriptors/index.js":
/*!*************************************************!*\
  !*** ./node_modules/merge-descriptors/index.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/*!\n * merge-descriptors\n * Copyright(c) 2014 Jonathan Ong\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = merge\n\n/**\n * Module variables.\n * @private\n */\n\nvar hasOwnProperty = Object.prototype.hasOwnProperty\n\n/**\n * Merge the property descriptors of `src` into `dest`\n *\n * @param {object} dest Object to add descriptors to\n * @param {object} src Object to clone descriptors from\n * @param {boolean} [redefine=true] Redefine `dest` properties with `src` properties\n * @returns {object} Reference to dest\n * @public\n */\n\nfunction merge(dest, src, redefine) {\n  if (!dest) {\n    throw new TypeError('argument dest is required')\n  }\n\n  if (!src) {\n    throw new TypeError('argument src is required')\n  }\n\n  if (redefine === undefined) {\n    // Default to true\n    redefine = true\n  }\n\n  Object.getOwnPropertyNames(src).forEach(function forEachOwnPropertyName(name) {\n    if (!redefine && hasOwnProperty.call(dest, name)) {\n      // Skip desriptor\n      return\n    }\n\n    // Copy descriptor\n    var descriptor = Object.getOwnPropertyDescriptor(src, name)\n    Object.defineProperty(dest, name, descriptor)\n  })\n\n  return dest\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWVyZ2UtZGVzY3JpcHRvcnMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tub3ctd2hhdC15b3UtZWF0Ly4vbm9kZV9tb2R1bGVzL21lcmdlLWRlc2NyaXB0b3JzL2luZGV4LmpzP2I4ODkiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBtZXJnZS1kZXNjcmlwdG9yc1xuICogQ29weXJpZ2h0KGMpIDIwMTQgSm9uYXRoYW4gT25nXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcblxuLyoqXG4gKiBNZXJnZSB0aGUgcHJvcGVydHkgZGVzY3JpcHRvcnMgb2YgYHNyY2AgaW50byBgZGVzdGBcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZGVzdCBPYmplY3QgdG8gYWRkIGRlc2NyaXB0b3JzIHRvXG4gKiBAcGFyYW0ge29iamVjdH0gc3JjIE9iamVjdCB0byBjbG9uZSBkZXNjcmlwdG9ycyBmcm9tXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtyZWRlZmluZT10cnVlXSBSZWRlZmluZSBgZGVzdGAgcHJvcGVydGllcyB3aXRoIGBzcmNgIHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHtvYmplY3R9IFJlZmVyZW5jZSB0byBkZXN0XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbWVyZ2UoZGVzdCwgc3JjLCByZWRlZmluZSkge1xuICBpZiAoIWRlc3QpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBkZXN0IGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmICghc3JjKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3JjIGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmIChyZWRlZmluZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gRGVmYXVsdCB0byB0cnVlXG4gICAgcmVkZWZpbmUgPSB0cnVlXG4gIH1cblxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzcmMpLmZvckVhY2goZnVuY3Rpb24gZm9yRWFjaE93blByb3BlcnR5TmFtZShuYW1lKSB7XG4gICAgaWYgKCFyZWRlZmluZSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRlc3QsIG5hbWUpKSB7XG4gICAgICAvLyBTa2lwIGRlc3JpcHRvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gQ29weSBkZXNjcmlwdG9yXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNyYywgbmFtZSlcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgbmFtZSwgZGVzY3JpcHRvcilcbiAgfSlcblxuICByZXR1cm4gZGVzdFxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/merge-descriptors/index.js\n");

/***/ })

};
;