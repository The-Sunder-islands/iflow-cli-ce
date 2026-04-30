/**
 * @module jpi
 * @category unknown
 * @label unknown
 * @position 1661 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jpi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jpi = T((RQc, $pi) => {
  "use strict";
  var oxa = e5(),
    Mpi = Ae("path"),
    { copy: sxa } = flt(),
    { remove: Upi } = RSe(),
    { mkdirp: axa } = FS(),
    { pathExists: uxa } = l$(),
    Fpi = rK();
  async function cxa(t, e, r = {}) {
    let n = r.overwrite || r.clobber || !1,
      { srcStat: o, isChangingCase: s = !1 } = await Fpi.checkPaths(t, e, "move", r);
    await Fpi.checkParentPaths(t, o, e, "move");
    let a = Mpi.dirname(e);
    return (Mpi.parse(a).root !== a && (await axa(a)), lxa(t, e, n, s));
  }
  async function lxa(t, e, r, n) {
    if (!n) {
      if (r) await Upi(e);
      else if (await uxa(e)) throw new Error("dest already exists.");
    }
    try {
      await oxa.rename(t, e);
    } catch (o) {
      if (o.code !== "EXDEV") throw o;
      await mxa(t, e, r);
    }
  }
  async function mxa(t, e, r) {
    return (await sxa(t, e, { overwrite: r, errorOnExist: !0, preserveTimestamps: !0 }), Upi(t));
  }
  $pi.exports = cxa;
});