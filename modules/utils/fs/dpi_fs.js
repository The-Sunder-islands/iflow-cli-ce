/**
 * @module dpi
 * @category utils/fs
 * @label fs
 * @position 1652 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dpi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dpi = T((EQc, mpi) => {
  "use strict";
  var Rwa = d3().fromPromise,
    cpi = Ae("path"),
    JD = e5(),
    { mkdirs: kwa, mkdirsSync: Owa } = FS(),
    { symlinkPaths: Nwa, symlinkPathsSync: Pwa } = opi(),
    { symlinkType: Bwa, symlinkTypeSync: Lwa } = upi(),
    { pathExists: Mwa } = l$(),
    { areIdentical: lpi } = rK();
  async function Fwa(t, e, r) {
    let n;
    try {
      n = await JD.lstat(e);
    } catch {}
    if (n && n.isSymbolicLink()) {
      let [u, c] = await Promise.all([JD.stat(t), JD.stat(e)]);
      if (lpi(u, c)) return;
    }
    let o = await Nwa(t, e);
    t = o.toDst;
    let s = await Bwa(o.toCwd, r),
      a = cpi.dirname(e);
    return ((await Mwa(a)) || (await kwa(a)), JD.symlink(t, e, s));
  }
  function Uwa(t, e, r) {
    let n;
    try {
      n = JD.lstatSync(e);
    } catch {}
    if (n && n.isSymbolicLink()) {
      let u = JD.statSync(t),
        c = JD.statSync(e);
      if (lpi(u, c)) return;
    }
    let o = Pwa(t, e);
    ((t = o.toDst), (r = Lwa(o.toCwd, r)));
    let s = cpi.dirname(e);
    return (JD.existsSync(s) || Owa(s), JD.symlinkSync(t, e, r));
  }
  mpi.exports = { createSymlink: Rwa(Fwa), createSymlinkSync: Uwa };
});