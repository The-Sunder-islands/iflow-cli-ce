/**
 * @module Vpi
 * @category utils/fs
 * @label fs
 * @position 1662 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Vpi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Vpi = T((kQc, Hpi) => {
  "use strict";
  var Gpi = rf(),
    _pr = Ae("path"),
    dxa = flt().copySync,
    qpi = RSe().removeSync,
    fxa = FS().mkdirpSync,
    Qpi = rK();
  function pxa(t, e, r) {
    r = r || {};
    let n = r.overwrite || r.clobber || !1,
      { srcStat: o, isChangingCase: s = !1 } = Qpi.checkPathsSync(t, e, "move", r);
    return (Qpi.checkParentPathsSync(t, o, e, "move"), hxa(e) || fxa(_pr.dirname(e)), gxa(t, e, n, s));
  }
  function hxa(t) {
    let e = _pr.dirname(t);
    return _pr.parse(e).root === e;
  }
  function gxa(t, e, r, n) {
    if (n) return ypr(t, e, r);
    if (r) return (qpi(e), ypr(t, e, r));
    if (Gpi.existsSync(e)) throw new Error("dest already exists.");
    return ypr(t, e, r);
  }
  function ypr(t, e, r) {
    try {
      Gpi.renameSync(t, e);
    } catch (n) {
      if (n.code !== "EXDEV") throw n;
      return bxa(t, e, r);
    }
  }
  function bxa(t, e, r) {
    return (dxa(t, e, { overwrite: r, errorOnExist: !0, preserveTimestamps: !0 }), qpi(t));
  }
  Hpi.exports = pxa;
});