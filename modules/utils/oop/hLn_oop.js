/**
 * @module hLn
 * @category utils/oop
 * @label oop
 * @position 1328 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hLn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hLn = T((s8c, pLn) => {
  "use strict";
  pLn.exports = Njs;
  var Ojs =
    Object.getPrototypeOf ||
    function (t) {
      return t.__proto__;
    };
  function Njs(t) {
    if (t === null || typeof t != "object") return t;
    if (t instanceof Object) var e = { __proto__: Ojs(t) };
    else var e = Object.create(null);
    return (
      Object.getOwnPropertyNames(t).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      }),
      e
    );
  }
});