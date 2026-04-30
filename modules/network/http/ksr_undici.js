/**
 * @module ksr
 * @category network/http
 * @label undici
 * @position 1494 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ksr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ksr = T((Pvc, MKn) => {
  "use strict";
  var Rsr = Symbol.for("undici.globalOrigin.1");
  function Fsa() {
    return globalThis[Rsr];
  }
  function Usa(t) {
    if (t === void 0) {
      Object.defineProperty(globalThis, Rsr, { value: void 0, writable: !0, enumerable: !1, configurable: !1 });
      return;
    }
    let e = new URL(t);
    if (e.protocol !== "http:" && e.protocol !== "https:")
      throw new TypeError(`Only http & https urls are allowed, received ${e.protocol}`);
    Object.defineProperty(globalThis, Rsr, { value: e, writable: !0, enumerable: !1, configurable: !1 });
  }
  MKn.exports = { getGlobalOrigin: Fsa, setGlobalOrigin: Usa };
});