/**
 * @module nAn
 * @category unknown
 * @label unknown
 * @position 857 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nAn = T((_rc, rAn) => {
  rAn.exports = tAn;
  tAn.sync = Zgs;
  var Zbn = Ae("fs");
  function Xgs(t, e) {
    var r = e.pathExt !== void 0 ? e.pathExt : process.env.PATHEXT;
    if (!r || ((r = r.split(";")), r.indexOf("") !== -1)) return !0;
    for (var n = 0; n < r.length; n++) {
      var o = r[n].toLowerCase();
      if (o && t.substr(-o.length).toLowerCase() === o) return !0;
    }
    return !1;
  }
  function eAn(t, e, r) {
    return !t.isSymbolicLink() && !t.isFile() ? !1 : Xgs(e, r);
  }
  function tAn(t, e, r) {
    Zbn.stat(t, function (n, o) {
      r(n, n ? !1 : eAn(o, t, e));
    });
  }
  function Zgs(t, e) {
    return eAn(Zbn.statSync(t), t, e);
  }
});