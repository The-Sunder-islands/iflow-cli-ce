/**
 * @module pmt
 * @category unknown
 * @label unknown
 * @position 1763 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pmt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pmt = T((Yme) => {
  "use strict";
  var Cka = (t, e, r) => {
      if (e in t) {
        if (t[e] === "true") return !0;
        if (t[e] === "false") return !1;
        throw new Error(`Cannot load ${r} "${e}". Expected "true" or "false", got ${t[e]}.`);
      }
    },
    Ska = (t, e, r) => {
      if (!(e in t)) return;
      let n = parseInt(t[e], 10);
      if (Number.isNaN(n)) throw new TypeError(`Cannot load ${r} '${e}'. Expected number, got '${t[e]}'.`);
      return n;
    };
  Yme.SelectorType = void 0;
  (function (t) {
    ((t.ENV = "env"), (t.CONFIG = "shared config entry"));
  })(Yme.SelectorType || (Yme.SelectorType = {}));
  Yme.booleanSelector = Cka;
  Yme.numberSelector = Ska;
});