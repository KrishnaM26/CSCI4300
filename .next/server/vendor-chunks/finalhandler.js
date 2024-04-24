"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/finalhandler";
exports.ids = ["vendor-chunks/finalhandler"];
exports.modules = {

/***/ "(ssr)/./node_modules/finalhandler/index.js":
/*!********************************************!*\
  !*** ./node_modules/finalhandler/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*!\n * finalhandler\n * Copyright(c) 2014-2022 Douglas Christopher Wilson\n * MIT Licensed\n */\n\n\n\n/**\n * Module dependencies.\n * @private\n */\n\nvar debug = __webpack_require__(/*! debug */ \"(ssr)/./node_modules/debug/src/index.js\")('finalhandler')\nvar encodeUrl = __webpack_require__(/*! encodeurl */ \"(ssr)/./node_modules/encodeurl/index.js\")\nvar escapeHtml = __webpack_require__(/*! escape-html */ \"(ssr)/./node_modules/escape-html/index.js\")\nvar onFinished = __webpack_require__(/*! on-finished */ \"(ssr)/./node_modules/on-finished/index.js\")\nvar parseUrl = __webpack_require__(/*! parseurl */ \"(ssr)/./node_modules/parseurl/index.js\")\nvar statuses = __webpack_require__(/*! statuses */ \"(ssr)/./node_modules/statuses/index.js\")\nvar unpipe = __webpack_require__(/*! unpipe */ \"(ssr)/./node_modules/unpipe/index.js\")\n\n/**\n * Module variables.\n * @private\n */\n\nvar DOUBLE_SPACE_REGEXP = /\\x20{2}/g\nvar NEWLINE_REGEXP = /\\n/g\n\n/* istanbul ignore next */\nvar defer = typeof setImmediate === 'function'\n  ? setImmediate\n  : function (fn) { process.nextTick(fn.bind.apply(fn, arguments)) }\nvar isFinished = onFinished.isFinished\n\n/**\n * Create a minimal HTML document.\n *\n * @param {string} message\n * @private\n */\n\nfunction createHtmlDocument (message) {\n  var body = escapeHtml(message)\n    .replace(NEWLINE_REGEXP, '<br>')\n    .replace(DOUBLE_SPACE_REGEXP, ' &nbsp;')\n\n  return '<!DOCTYPE html>\\n' +\n    '<html lang=\"en\">\\n' +\n    '<head>\\n' +\n    '<meta charset=\"utf-8\">\\n' +\n    '<title>Error</title>\\n' +\n    '</head>\\n' +\n    '<body>\\n' +\n    '<pre>' + body + '</pre>\\n' +\n    '</body>\\n' +\n    '</html>\\n'\n}\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = finalhandler\n\n/**\n * Create a function to handle the final response.\n *\n * @param {Request} req\n * @param {Response} res\n * @param {Object} [options]\n * @return {Function}\n * @public\n */\n\nfunction finalhandler (req, res, options) {\n  var opts = options || {}\n\n  // get environment\n  var env = opts.env || \"development\" || 0\n\n  // get error callback\n  var onerror = opts.onerror\n\n  return function (err) {\n    var headers\n    var msg\n    var status\n\n    // ignore 404 on in-flight response\n    if (!err && headersSent(res)) {\n      debug('cannot 404 after headers sent')\n      return\n    }\n\n    // unhandled error\n    if (err) {\n      // respect status code from error\n      status = getErrorStatusCode(err)\n\n      if (status === undefined) {\n        // fallback to status code on response\n        status = getResponseStatusCode(res)\n      } else {\n        // respect headers from error\n        headers = getErrorHeaders(err)\n      }\n\n      // get error message\n      msg = getErrorMessage(err, status, env)\n    } else {\n      // not found\n      status = 404\n      msg = 'Cannot ' + req.method + ' ' + encodeUrl(getResourceName(req))\n    }\n\n    debug('default %s', status)\n\n    // schedule onerror callback\n    if (err && onerror) {\n      defer(onerror, err, req, res)\n    }\n\n    // cannot actually respond\n    if (headersSent(res)) {\n      debug('cannot %d after headers sent', status)\n      req.socket.destroy()\n      return\n    }\n\n    // send response\n    send(req, res, status, headers, msg)\n  }\n}\n\n/**\n * Get headers from Error object.\n *\n * @param {Error} err\n * @return {object}\n * @private\n */\n\nfunction getErrorHeaders (err) {\n  if (!err.headers || typeof err.headers !== 'object') {\n    return undefined\n  }\n\n  var headers = Object.create(null)\n  var keys = Object.keys(err.headers)\n\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i]\n    headers[key] = err.headers[key]\n  }\n\n  return headers\n}\n\n/**\n * Get message from Error object, fallback to status message.\n *\n * @param {Error} err\n * @param {number} status\n * @param {string} env\n * @return {string}\n * @private\n */\n\nfunction getErrorMessage (err, status, env) {\n  var msg\n\n  if (env !== 'production') {\n    // use err.stack, which typically includes err.message\n    msg = err.stack\n\n    // fallback to err.toString() when possible\n    if (!msg && typeof err.toString === 'function') {\n      msg = err.toString()\n    }\n  }\n\n  return msg || statuses.message[status]\n}\n\n/**\n * Get status code from Error object.\n *\n * @param {Error} err\n * @return {number}\n * @private\n */\n\nfunction getErrorStatusCode (err) {\n  // check err.status\n  if (typeof err.status === 'number' && err.status >= 400 && err.status < 600) {\n    return err.status\n  }\n\n  // check err.statusCode\n  if (typeof err.statusCode === 'number' && err.statusCode >= 400 && err.statusCode < 600) {\n    return err.statusCode\n  }\n\n  return undefined\n}\n\n/**\n * Get resource name for the request.\n *\n * This is typically just the original pathname of the request\n * but will fallback to \"resource\" is that cannot be determined.\n *\n * @param {IncomingMessage} req\n * @return {string}\n * @private\n */\n\nfunction getResourceName (req) {\n  try {\n    return parseUrl.original(req).pathname\n  } catch (e) {\n    return 'resource'\n  }\n}\n\n/**\n * Get status code from response.\n *\n * @param {OutgoingMessage} res\n * @return {number}\n * @private\n */\n\nfunction getResponseStatusCode (res) {\n  var status = res.statusCode\n\n  // default status code to 500 if outside valid range\n  if (typeof status !== 'number' || status < 400 || status > 599) {\n    status = 500\n  }\n\n  return status\n}\n\n/**\n * Determine if the response headers have been sent.\n *\n * @param {object} res\n * @returns {boolean}\n * @private\n */\n\nfunction headersSent (res) {\n  return typeof res.headersSent !== 'boolean'\n    ? Boolean(res._header)\n    : res.headersSent\n}\n\n/**\n * Send response.\n *\n * @param {IncomingMessage} req\n * @param {OutgoingMessage} res\n * @param {number} status\n * @param {object} headers\n * @param {string} message\n * @private\n */\n\nfunction send (req, res, status, headers, message) {\n  function write () {\n    // response body\n    var body = createHtmlDocument(message)\n\n    // response status\n    res.statusCode = status\n    res.statusMessage = statuses.message[status]\n\n    // remove any content headers\n    res.removeHeader('Content-Encoding')\n    res.removeHeader('Content-Language')\n    res.removeHeader('Content-Range')\n\n    // response headers\n    setHeaders(res, headers)\n\n    // security headers\n    res.setHeader('Content-Security-Policy', \"default-src 'none'\")\n    res.setHeader('X-Content-Type-Options', 'nosniff')\n\n    // standard headers\n    res.setHeader('Content-Type', 'text/html; charset=utf-8')\n    res.setHeader('Content-Length', Buffer.byteLength(body, 'utf8'))\n\n    if (req.method === 'HEAD') {\n      res.end()\n      return\n    }\n\n    res.end(body, 'utf8')\n  }\n\n  if (isFinished(req)) {\n    write()\n    return\n  }\n\n  // unpipe everything from the request\n  unpipe(req)\n\n  // flush the request\n  onFinished(req, write)\n  req.resume()\n}\n\n/**\n * Set response headers from an object.\n *\n * @param {OutgoingMessage} res\n * @param {object} headers\n * @private\n */\n\nfunction setHeaders (res, headers) {\n  if (!headers) {\n    return\n  }\n\n  var keys = Object.keys(headers)\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i]\n    res.setHeader(key, headers[key])\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZmluYWxoYW5kbGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxtQkFBTyxDQUFDLHNEQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLDBEQUFXO0FBQ25DLGlCQUFpQixtQkFBTyxDQUFDLDhEQUFhO0FBQ3RDLGlCQUFpQixtQkFBTyxDQUFDLDhEQUFhO0FBQ3RDLGVBQWUsbUJBQU8sQ0FBQyx3REFBVTtBQUNqQyxlQUFlLG1CQUFPLENBQUMsd0RBQVU7QUFDakMsYUFBYSxtQkFBTyxDQUFDLG9EQUFROztBQUU3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsRUFBRTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLFVBQVU7QUFDckIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsYUFBb0IsSUFBSSxDQUFhOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxpQkFBaUI7QUFDNUIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QixXQUFXLFFBQVE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbm93LXdoYXQteW91LWVhdC8uL25vZGVfbW9kdWxlcy9maW5hbGhhbmRsZXIvaW5kZXguanM/YTVjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIGZpbmFsaGFuZGxlclxuICogQ29weXJpZ2h0KGMpIDIwMTQtMjAyMiBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZmluYWxoYW5kbGVyJylcbnZhciBlbmNvZGVVcmwgPSByZXF1aXJlKCdlbmNvZGV1cmwnKVxudmFyIGVzY2FwZUh0bWwgPSByZXF1aXJlKCdlc2NhcGUtaHRtbCcpXG52YXIgb25GaW5pc2hlZCA9IHJlcXVpcmUoJ29uLWZpbmlzaGVkJylcbnZhciBwYXJzZVVybCA9IHJlcXVpcmUoJ3BhcnNldXJsJylcbnZhciBzdGF0dXNlcyA9IHJlcXVpcmUoJ3N0YXR1c2VzJylcbnZhciB1bnBpcGUgPSByZXF1aXJlKCd1bnBpcGUnKVxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBET1VCTEVfU1BBQ0VfUkVHRVhQID0gL1xceDIwezJ9L2dcbnZhciBORVdMSU5FX1JFR0VYUCA9IC9cXG4vZ1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudmFyIGRlZmVyID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IHNldEltbWVkaWF0ZVxuICA6IGZ1bmN0aW9uIChmbikgeyBwcm9jZXNzLm5leHRUaWNrKGZuLmJpbmQuYXBwbHkoZm4sIGFyZ3VtZW50cykpIH1cbnZhciBpc0ZpbmlzaGVkID0gb25GaW5pc2hlZC5pc0ZpbmlzaGVkXG5cbi8qKlxuICogQ3JlYXRlIGEgbWluaW1hbCBIVE1MIGRvY3VtZW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUh0bWxEb2N1bWVudCAobWVzc2FnZSkge1xuICB2YXIgYm9keSA9IGVzY2FwZUh0bWwobWVzc2FnZSlcbiAgICAucmVwbGFjZShORVdMSU5FX1JFR0VYUCwgJzxicj4nKVxuICAgIC5yZXBsYWNlKERPVUJMRV9TUEFDRV9SRUdFWFAsICcgJm5ic3A7JylcblxuICByZXR1cm4gJzwhRE9DVFlQRSBodG1sPlxcbicgK1xuICAgICc8aHRtbCBsYW5nPVwiZW5cIj5cXG4nICtcbiAgICAnPGhlYWQ+XFxuJyArXG4gICAgJzxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxcbicgK1xuICAgICc8dGl0bGU+RXJyb3I8L3RpdGxlPlxcbicgK1xuICAgICc8L2hlYWQ+XFxuJyArXG4gICAgJzxib2R5PlxcbicgK1xuICAgICc8cHJlPicgKyBib2R5ICsgJzwvcHJlPlxcbicgK1xuICAgICc8L2JvZHk+XFxuJyArXG4gICAgJzwvaHRtbD5cXG4nXG59XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5hbGhhbmRsZXJcblxuLyoqXG4gKiBDcmVhdGUgYSBmdW5jdGlvbiB0byBoYW5kbGUgdGhlIGZpbmFsIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZpbmFsaGFuZGxlciAocmVxLCByZXMsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9XG5cbiAgLy8gZ2V0IGVudmlyb25tZW50XG4gIHZhciBlbnYgPSBvcHRzLmVudiB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnXG5cbiAgLy8gZ2V0IGVycm9yIGNhbGxiYWNrXG4gIHZhciBvbmVycm9yID0gb3B0cy5vbmVycm9yXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICB2YXIgaGVhZGVyc1xuICAgIHZhciBtc2dcbiAgICB2YXIgc3RhdHVzXG5cbiAgICAvLyBpZ25vcmUgNDA0IG9uIGluLWZsaWdodCByZXNwb25zZVxuICAgIGlmICghZXJyICYmIGhlYWRlcnNTZW50KHJlcykpIHtcbiAgICAgIGRlYnVnKCdjYW5ub3QgNDA0IGFmdGVyIGhlYWRlcnMgc2VudCcpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyB1bmhhbmRsZWQgZXJyb3JcbiAgICBpZiAoZXJyKSB7XG4gICAgICAvLyByZXNwZWN0IHN0YXR1cyBjb2RlIGZyb20gZXJyb3JcbiAgICAgIHN0YXR1cyA9IGdldEVycm9yU3RhdHVzQ29kZShlcnIpXG5cbiAgICAgIGlmIChzdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBmYWxsYmFjayB0byBzdGF0dXMgY29kZSBvbiByZXNwb25zZVxuICAgICAgICBzdGF0dXMgPSBnZXRSZXNwb25zZVN0YXR1c0NvZGUocmVzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVzcGVjdCBoZWFkZXJzIGZyb20gZXJyb3JcbiAgICAgICAgaGVhZGVycyA9IGdldEVycm9ySGVhZGVycyhlcnIpXG4gICAgICB9XG5cbiAgICAgIC8vIGdldCBlcnJvciBtZXNzYWdlXG4gICAgICBtc2cgPSBnZXRFcnJvck1lc3NhZ2UoZXJyLCBzdGF0dXMsIGVudilcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm90IGZvdW5kXG4gICAgICBzdGF0dXMgPSA0MDRcbiAgICAgIG1zZyA9ICdDYW5ub3QgJyArIHJlcS5tZXRob2QgKyAnICcgKyBlbmNvZGVVcmwoZ2V0UmVzb3VyY2VOYW1lKHJlcSkpXG4gICAgfVxuXG4gICAgZGVidWcoJ2RlZmF1bHQgJXMnLCBzdGF0dXMpXG5cbiAgICAvLyBzY2hlZHVsZSBvbmVycm9yIGNhbGxiYWNrXG4gICAgaWYgKGVyciAmJiBvbmVycm9yKSB7XG4gICAgICBkZWZlcihvbmVycm9yLCBlcnIsIHJlcSwgcmVzKVxuICAgIH1cblxuICAgIC8vIGNhbm5vdCBhY3R1YWxseSByZXNwb25kXG4gICAgaWYgKGhlYWRlcnNTZW50KHJlcykpIHtcbiAgICAgIGRlYnVnKCdjYW5ub3QgJWQgYWZ0ZXIgaGVhZGVycyBzZW50Jywgc3RhdHVzKVxuICAgICAgcmVxLnNvY2tldC5kZXN0cm95KClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIHNlbmQgcmVzcG9uc2VcbiAgICBzZW5kKHJlcSwgcmVzLCBzdGF0dXMsIGhlYWRlcnMsIG1zZylcbiAgfVxufVxuXG4vKipcbiAqIEdldCBoZWFkZXJzIGZyb20gRXJyb3Igb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHJldHVybiB7b2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRFcnJvckhlYWRlcnMgKGVycikge1xuICBpZiAoIWVyci5oZWFkZXJzIHx8IHR5cGVvZiBlcnIuaGVhZGVycyAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICB2YXIgaGVhZGVycyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhlcnIuaGVhZGVycylcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXVxuICAgIGhlYWRlcnNba2V5XSA9IGVyci5oZWFkZXJzW2tleV1cbiAgfVxuXG4gIHJldHVybiBoZWFkZXJzXG59XG5cbi8qKlxuICogR2V0IG1lc3NhZ2UgZnJvbSBFcnJvciBvYmplY3QsIGZhbGxiYWNrIHRvIHN0YXR1cyBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVyclxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1c1xuICogQHBhcmFtIHtzdHJpbmd9IGVudlxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UgKGVyciwgc3RhdHVzLCBlbnYpIHtcbiAgdmFyIG1zZ1xuXG4gIGlmIChlbnYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIHVzZSBlcnIuc3RhY2ssIHdoaWNoIHR5cGljYWxseSBpbmNsdWRlcyBlcnIubWVzc2FnZVxuICAgIG1zZyA9IGVyci5zdGFja1xuXG4gICAgLy8gZmFsbGJhY2sgdG8gZXJyLnRvU3RyaW5nKCkgd2hlbiBwb3NzaWJsZVxuICAgIGlmICghbXNnICYmIHR5cGVvZiBlcnIudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG1zZyA9IGVyci50b1N0cmluZygpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1zZyB8fCBzdGF0dXNlcy5tZXNzYWdlW3N0YXR1c11cbn1cblxuLyoqXG4gKiBHZXQgc3RhdHVzIGNvZGUgZnJvbSBFcnJvciBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGdldEVycm9yU3RhdHVzQ29kZSAoZXJyKSB7XG4gIC8vIGNoZWNrIGVyci5zdGF0dXNcbiAgaWYgKHR5cGVvZiBlcnIuc3RhdHVzID09PSAnbnVtYmVyJyAmJiBlcnIuc3RhdHVzID49IDQwMCAmJiBlcnIuc3RhdHVzIDwgNjAwKSB7XG4gICAgcmV0dXJuIGVyci5zdGF0dXNcbiAgfVxuXG4gIC8vIGNoZWNrIGVyci5zdGF0dXNDb2RlXG4gIGlmICh0eXBlb2YgZXJyLnN0YXR1c0NvZGUgPT09ICdudW1iZXInICYmIGVyci5zdGF0dXNDb2RlID49IDQwMCAmJiBlcnIuc3RhdHVzQ29kZSA8IDYwMCkge1xuICAgIHJldHVybiBlcnIuc3RhdHVzQ29kZVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIEdldCByZXNvdXJjZSBuYW1lIGZvciB0aGUgcmVxdWVzdC5cbiAqXG4gKiBUaGlzIGlzIHR5cGljYWxseSBqdXN0IHRoZSBvcmlnaW5hbCBwYXRobmFtZSBvZiB0aGUgcmVxdWVzdFxuICogYnV0IHdpbGwgZmFsbGJhY2sgdG8gXCJyZXNvdXJjZVwiIGlzIHRoYXQgY2Fubm90IGJlIGRldGVybWluZWQuXG4gKlxuICogQHBhcmFtIHtJbmNvbWluZ01lc3NhZ2V9IHJlcVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRSZXNvdXJjZU5hbWUgKHJlcSkge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVVybC5vcmlnaW5hbChyZXEpLnBhdGhuYW1lXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gJ3Jlc291cmNlJ1xuICB9XG59XG5cbi8qKlxuICogR2V0IHN0YXR1cyBjb2RlIGZyb20gcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtPdXRnb2luZ01lc3NhZ2V9IHJlc1xuICogQHJldHVybiB7bnVtYmVyfVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRSZXNwb25zZVN0YXR1c0NvZGUgKHJlcykge1xuICB2YXIgc3RhdHVzID0gcmVzLnN0YXR1c0NvZGVcblxuICAvLyBkZWZhdWx0IHN0YXR1cyBjb2RlIHRvIDUwMCBpZiBvdXRzaWRlIHZhbGlkIHJhbmdlXG4gIGlmICh0eXBlb2Ygc3RhdHVzICE9PSAnbnVtYmVyJyB8fCBzdGF0dXMgPCA0MDAgfHwgc3RhdHVzID4gNTk5KSB7XG4gICAgc3RhdHVzID0gNTAwXG4gIH1cblxuICByZXR1cm4gc3RhdHVzXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHRoZSByZXNwb25zZSBoZWFkZXJzIGhhdmUgYmVlbiBzZW50LlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBoZWFkZXJzU2VudCAocmVzKSB7XG4gIHJldHVybiB0eXBlb2YgcmVzLmhlYWRlcnNTZW50ICE9PSAnYm9vbGVhbidcbiAgICA/IEJvb2xlYW4ocmVzLl9oZWFkZXIpXG4gICAgOiByZXMuaGVhZGVyc1NlbnRcbn1cblxuLyoqXG4gKiBTZW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7SW5jb21pbmdNZXNzYWdlfSByZXFcbiAqIEBwYXJhbSB7T3V0Z29pbmdNZXNzYWdlfSByZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGF0dXNcbiAqIEBwYXJhbSB7b2JqZWN0fSBoZWFkZXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZW5kIChyZXEsIHJlcywgc3RhdHVzLCBoZWFkZXJzLCBtZXNzYWdlKSB7XG4gIGZ1bmN0aW9uIHdyaXRlICgpIHtcbiAgICAvLyByZXNwb25zZSBib2R5XG4gICAgdmFyIGJvZHkgPSBjcmVhdGVIdG1sRG9jdW1lbnQobWVzc2FnZSlcblxuICAgIC8vIHJlc3BvbnNlIHN0YXR1c1xuICAgIHJlcy5zdGF0dXNDb2RlID0gc3RhdHVzXG4gICAgcmVzLnN0YXR1c01lc3NhZ2UgPSBzdGF0dXNlcy5tZXNzYWdlW3N0YXR1c11cblxuICAgIC8vIHJlbW92ZSBhbnkgY29udGVudCBoZWFkZXJzXG4gICAgcmVzLnJlbW92ZUhlYWRlcignQ29udGVudC1FbmNvZGluZycpXG4gICAgcmVzLnJlbW92ZUhlYWRlcignQ29udGVudC1MYW5ndWFnZScpXG4gICAgcmVzLnJlbW92ZUhlYWRlcignQ29udGVudC1SYW5nZScpXG5cbiAgICAvLyByZXNwb25zZSBoZWFkZXJzXG4gICAgc2V0SGVhZGVycyhyZXMsIGhlYWRlcnMpXG5cbiAgICAvLyBzZWN1cml0eSBoZWFkZXJzXG4gICAgcmVzLnNldEhlYWRlcignQ29udGVudC1TZWN1cml0eS1Qb2xpY3knLCBcImRlZmF1bHQtc3JjICdub25lJ1wiKVxuICAgIHJlcy5zZXRIZWFkZXIoJ1gtQ29udGVudC1UeXBlLU9wdGlvbnMnLCAnbm9zbmlmZicpXG5cbiAgICAvLyBzdGFuZGFyZCBoZWFkZXJzXG4gICAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbDsgY2hhcnNldD11dGYtOCcpXG4gICAgcmVzLnNldEhlYWRlcignQ29udGVudC1MZW5ndGgnLCBCdWZmZXIuYnl0ZUxlbmd0aChib2R5LCAndXRmOCcpKVxuXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdIRUFEJykge1xuICAgICAgcmVzLmVuZCgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXMuZW5kKGJvZHksICd1dGY4JylcbiAgfVxuXG4gIGlmIChpc0ZpbmlzaGVkKHJlcSkpIHtcbiAgICB3cml0ZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyB1bnBpcGUgZXZlcnl0aGluZyBmcm9tIHRoZSByZXF1ZXN0XG4gIHVucGlwZShyZXEpXG5cbiAgLy8gZmx1c2ggdGhlIHJlcXVlc3RcbiAgb25GaW5pc2hlZChyZXEsIHdyaXRlKVxuICByZXEucmVzdW1lKClcbn1cblxuLyoqXG4gKiBTZXQgcmVzcG9uc2UgaGVhZGVycyBmcm9tIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge091dGdvaW5nTWVzc2FnZX0gcmVzXG4gKiBAcGFyYW0ge29iamVjdH0gaGVhZGVyc1xuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZXRIZWFkZXJzIChyZXMsIGhlYWRlcnMpIHtcbiAgaWYgKCFoZWFkZXJzKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGhlYWRlcnMpXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldXG4gICAgcmVzLnNldEhlYWRlcihrZXksIGhlYWRlcnNba2V5XSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/finalhandler/index.js\n");

/***/ })

};
;