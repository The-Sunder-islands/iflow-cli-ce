/**
 * @module Yon
 * @category utils/oop
 * @label oop
 * @position 659 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yon = T((vne) => {
  "use strict";
  Object.defineProperty(vne, "__esModule", { value: !0 });
  vne.callWithTimeout = vne.TimeoutError = void 0;
  var EQe = class t extends Error {
    constructor(e) {
      (super(e), Object.setPrototypeOf(this, t.prototype));
    }
  };
  vne.TimeoutError = EQe;
  function bJo(t, e) {
    let r,
      n = new Promise(function (s, a) {
        r = setTimeout(function () {
          a(new EQe("Operation timed out."));
        }, e);
      });
    return Promise.race([t, n]).then(
      (o) => (clearTimeout(r), o),
      (o) => {
        throw (clearTimeout(r), o);
      },
    );
  }
  vne.callWithTimeout = bJo;
});