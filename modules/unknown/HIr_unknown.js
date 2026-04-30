/**
 * @module HIr
 * @category unknown
 * @label unknown
 * @position 43 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (HIr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var HIr = T((_Cu, qIr) => {
  "use strict";
  var rx = (t) => t !== null && typeof t == "object" && typeof t.pipe == "function";
  rx.writable = (t) =>
    rx(t) && t.writable !== !1 && typeof t._write == "function" && typeof t._writableState == "object";
  rx.readable = (t) =>
    rx(t) && t.readable !== !1 && typeof t._read == "function" && typeof t._readableState == "object";
  rx.duplex = (t) => rx.writable(t) && rx.readable(t);
  rx.transform = (t) => rx.duplex(t) && typeof t._transform == "function";
  qIr.exports = rx;
});