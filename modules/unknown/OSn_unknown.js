/**
 * @module OSn
 * @category unknown
 * @label unknown
 * @position 1052 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OSn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OSn = T((_Wt) => {
  var Q4s = kSn(),
    G4s = HXe();
  function q4s(t) {
    var e = null,
      r = new Q4s.DOMParser({
        errorHandler: function (o, s) {
          e = { level: o, message: s };
        },
      }),
      n = r.parseFromString(t);
    if (e === null) return n;
    throw new Error(e.level + ": " + e.message);
  }
  _Wt.parseFromString = q4s;
  _Wt.Node = G4s.Node;
});