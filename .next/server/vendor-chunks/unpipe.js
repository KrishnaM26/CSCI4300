"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unpipe";
exports.ids = ["vendor-chunks/unpipe"];
exports.modules = {

/***/ "(ssr)/./node_modules/unpipe/index.js":
/*!**************************************!*\
  !*** ./node_modules/unpipe/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("/*!\n * unpipe\n * Copyright(c) 2015 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = unpipe\n\n/**\n * Determine if there are Node.js pipe-like data listeners.\n * @private\n */\n\nfunction hasPipeDataListeners(stream) {\n  var listeners = stream.listeners('data')\n\n  for (var i = 0; i < listeners.length; i++) {\n    if (listeners[i].name === 'ondata') {\n      return true\n    }\n  }\n\n  return false\n}\n\n/**\n * Unpipe a stream from all destinations.\n *\n * @param {object} stream\n * @public\n */\n\nfunction unpipe(stream) {\n  if (!stream) {\n    throw new TypeError('argument stream is required')\n  }\n\n  if (typeof stream.unpipe === 'function') {\n    // new-style\n    stream.unpipe()\n    return\n  }\n\n  // Node.js 0.8 hack\n  if (!hasPipeDataListeners(stream)) {\n    return\n  }\n\n  var listener\n  var listeners = stream.listeners('close')\n\n  for (var i = 0; i < listeners.length; i++) {\n    listener = listeners[i]\n\n    if (listener.name !== 'cleanup' && listener.name !== 'onclose') {\n      continue\n    }\n\n    // invoke the listener\n    listener.call(stream)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5waXBlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isc0JBQXNCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va25vdy13aGF0LXlvdS1lYXQvLi9ub2RlX21vZHVsZXMvdW5waXBlL2luZGV4LmpzPzc5OWMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiB1bnBpcGVcbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVucGlwZVxuXG4vKipcbiAqIERldGVybWluZSBpZiB0aGVyZSBhcmUgTm9kZS5qcyBwaXBlLWxpa2UgZGF0YSBsaXN0ZW5lcnMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGhhc1BpcGVEYXRhTGlzdGVuZXJzKHN0cmVhbSkge1xuICB2YXIgbGlzdGVuZXJzID0gc3RyZWFtLmxpc3RlbmVycygnZGF0YScpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobGlzdGVuZXJzW2ldLm5hbWUgPT09ICdvbmRhdGEnKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIFVucGlwZSBhIHN0cmVhbSBmcm9tIGFsbCBkZXN0aW5hdGlvbnMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHN0cmVhbVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHVucGlwZShzdHJlYW0pIHtcbiAgaWYgKCFzdHJlYW0pIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzdHJlYW0gaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBzdHJlYW0udW5waXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gbmV3LXN0eWxlXG4gICAgc3RyZWFtLnVucGlwZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBOb2RlLmpzIDAuOCBoYWNrXG4gIGlmICghaGFzUGlwZURhdGFMaXN0ZW5lcnMoc3RyZWFtKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGxpc3RlbmVyXG4gIHZhciBsaXN0ZW5lcnMgPSBzdHJlYW0ubGlzdGVuZXJzKCdjbG9zZScpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXVxuXG4gICAgaWYgKGxpc3RlbmVyLm5hbWUgIT09ICdjbGVhbnVwJyAmJiBsaXN0ZW5lci5uYW1lICE9PSAnb25jbG9zZScpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgLy8gaW52b2tlIHRoZSBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmNhbGwoc3RyZWFtKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unpipe/index.js\n");

/***/ })

};
;