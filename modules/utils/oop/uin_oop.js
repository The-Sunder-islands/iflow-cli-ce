/**
 * @module uin
 * @category utils/oop
 * @label oop
 * @position 593 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uin = T((pne) => {
  "use strict";
  Object.defineProperty(pne, "__esModule", { value: !0 });
  pne.callWithTimeout = pne.TimeoutError = void 0;
  var yje = class t extends Error {
    constructor(e) {
      (super(e), Object.setPrototypeOf(this, t.prototype));
    }
  };
  pne.TimeoutError = yje;
  function Tzo(t, e) {
    let r,
      n = new Promise(function (s, a) {
        r = setTimeout(function () {
          a(new yje("Operation timed out."));
        }, e);
      });
    return Promise.race([t, n]).then(
      (o) => (clearTimeout(r), o),
      (o) => {
        throw (clearTimeout(r), o);
      },
    );
  }
  pne.callWithTimeout = Tzo;
});