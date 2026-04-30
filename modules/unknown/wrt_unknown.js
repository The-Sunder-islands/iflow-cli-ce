/**
 * @module wrt
 * @category unknown
 * @label unknown
 * @position 1368 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wrt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wrt = T((J8c, bUn) => {
  var HWs = Ctr(),
    Z_e = Object.create(null),
    VWs = rce();
  bUn.exports = HWs(WWs);
  function WWs(t, e) {
    return Z_e[t] ? (Z_e[t].push(e), null) : ((Z_e[t] = [e]), zWs(t));
  }
  function zWs(t) {
    return VWs(function e() {
      var r = Z_e[t],
        n = r.length,
        o = YWs(arguments);
      try {
        for (var s = 0; s < n; s++) r[s].apply(null, o);
      } finally {
        r.length > n
          ? (r.splice(0, n),
            process.nextTick(function () {
              e.apply(null, o);
            }))
          : delete Z_e[t];
      }
    });
  }
  function YWs(t) {
    for (var e = t.length, r = [], n = 0; n < e; n++) r[n] = t[n];
    return r;
  }
});