/**
 * @module wZi
 * @category utils/oop
 * @label oop
 * @position 1918 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wZi = T((txl, SZi) => {
  "use strict";
  SZi.exports = Xfu;
  var Jfu =
    Object.getPrototypeOf ||
    function (t) {
      return t.__proto__;
    };
  function Xfu(t) {
    if (t === null || typeof t != "object") return t;
    if (t instanceof Object) var e = { __proto__: Jfu(t) };
    else var e = Object.create(null);
    return (
      Object.getOwnPropertyNames(t).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      }),
      e
    );
  }
});