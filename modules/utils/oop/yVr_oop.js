/**
 * @module yVr
 * @category utils/oop
 * @label oop
 * @position 202 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yVr = T((jte) => {
  "use strict";
  Object.defineProperty(jte, "__esModule", { value: !0 });
  jte.identity = jte.isPromiseLike = void 0;
  var ITo = (t) => t !== null && typeof t == "object" && typeof t.then == "function";
  jte.isPromiseLike = ITo;
  function RTo(t) {
    return t;
  }
  jte.identity = RTo;
});