/**
 * @module lAn
 * @category unknown
 * @label unknown
 * @position 859 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lAn = T((Crc, cAn) => {
  var vrc = Ae("fs"),
    $Ye;
  process.platform === "win32" || global.TESTING_WINDOWS ? ($Ye = nAn()) : ($Ye = uAn());
  cAn.exports = $$t;
  $$t.sync = rbs;
  function $$t(t, e, r) {
    if ((typeof e == "function" && ((r = e), (e = {})), !r)) {
      if (typeof Promise != "function") throw new TypeError("callback not provided");
      return new Promise(function (n, o) {
        $$t(t, e || {}, function (s, a) {
          s ? o(s) : n(a);
        });
      });
    }
    $Ye(t, e || {}, function (n, o) {
      (n && (n.code === "EACCES" || (e && e.ignoreErrors)) && ((n = null), (o = !1)), r(n, o));
    });
  }
  function rbs(t, e) {
    try {
      return $Ye.sync(t, e || {});
    } catch (r) {
      if ((e && e.ignoreErrors) || r.code === "EACCES") return !1;
      throw r;
    }
  }
});