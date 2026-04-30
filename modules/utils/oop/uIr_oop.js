/**
 * @module uIr
 * @category utils/oop
 * @label oop
 * @position 35 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uIr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uIr = T((dCu, oB) => {
  "use strict";
  oB.exports.mixin = function (e, r) {
    let n = Object.getOwnPropertyNames(r);
    for (let o = 0; o < n.length; ++o) Object.defineProperty(e, n[o], Object.getOwnPropertyDescriptor(r, n[o]));
  };
  oB.exports.wrapperSymbol = Symbol("wrapper");
  oB.exports.implSymbol = Symbol("impl");
  oB.exports.wrapperForImpl = function (t) {
    return t[oB.exports.wrapperSymbol];
  };
  oB.exports.implForWrapper = function (t) {
    return t[oB.exports.implSymbol];
  };
});