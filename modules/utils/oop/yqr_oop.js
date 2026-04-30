/**
 * @module yqr
 * @category utils/oop
 * @label oop
 * @position 147 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yqr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yqr = T((wte) => {
  "use strict";
  Object.defineProperty(wte, "__esModule", { value: !0 });
  wte.callWithTimeout = wte.TimeoutError = void 0;
  var INe = class t extends Error {
    constructor(e) {
      (super(e), Object.setPrototypeOf(this, t.prototype));
    }
  };
  wte.TimeoutError = INe;
  function Gwo(t, e) {
    let r,
      n = new Promise(function (s, a) {
        r = setTimeout(function () {
          a(new INe("Operation timed out."));
        }, e);
      });
    return Promise.race([t, n]).then(
      (o) => (clearTimeout(r), o),
      (o) => {
        throw (clearTimeout(r), o);
      },
    );
  }
  wte.callWithTimeout = Gwo;
});