/**
 * @module dCe
 * @category unknown
 * @label unknown
 * @position 1520 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dCe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dCe = T((uCc, gZn) => {
  "use strict";
  var { addAbortListener: J0a } = ks(),
    { RequestAbortedError: X0a } = da(),
    Ale = Symbol("kListener"),
    TD = Symbol("kSignal");
  function pZn(t) {
    (t.abort ? t.abort(t[TD]?.reason) : (t.reason = t[TD]?.reason ?? new X0a()), hZn(t));
  }
  function Z0a(t, e) {
    if (((t.reason = null), (t[TD] = null), (t[Ale] = null), !!e)) {
      if (e.aborted) {
        pZn(t);
        return;
      }
      ((t[TD] = e),
        (t[Ale] = () => {
          pZn(t);
        }),
        J0a(t[TD], t[Ale]));
    }
  }
  function hZn(t) {
    t[TD] &&
      ("removeEventListener" in t[TD]
        ? t[TD].removeEventListener("abort", t[Ale])
        : t[TD].removeListener("abort", t[Ale]),
      (t[TD] = null),
      (t[Ale] = null));
  }
  gZn.exports = { addSignal: Z0a, removeSignal: hZn };
});