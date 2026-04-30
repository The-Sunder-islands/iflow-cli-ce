/**
 * @module opi
 * @category utils/fs
 * @label fs
 * @position 1650 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (opi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var opi = T((yQc, ipi) => {
  "use strict";
  var d$ = Ae("path"),
    kSe = e5(),
    { pathExists: Cwa } = l$(),
    Swa = d3().fromPromise;
  async function wwa(t, e) {
    if (d$.isAbsolute(t)) {
      try {
        await kSe.lstat(t);
      } catch (s) {
        throw ((s.message = s.message.replace("lstat", "ensureSymlink")), s);
      }
      return { toCwd: t, toDst: t };
    }
    let r = d$.dirname(e),
      n = d$.join(r, t);
    if (await Cwa(n)) return { toCwd: n, toDst: t };
    try {
      await kSe.lstat(t);
    } catch (s) {
      throw ((s.message = s.message.replace("lstat", "ensureSymlink")), s);
    }
    return { toCwd: t, toDst: d$.relative(r, t) };
  }
  function xwa(t, e) {
    if (d$.isAbsolute(t)) {
      if (!kSe.existsSync(t)) throw new Error("absolute srcpath does not exist");
      return { toCwd: t, toDst: t };
    }
    let r = d$.dirname(e),
      n = d$.join(r, t);
    if (kSe.existsSync(n)) return { toCwd: n, toDst: t };
    if (!kSe.existsSync(t)) throw new Error("relative srcpath does not exist");
    return { toCwd: t, toDst: d$.relative(r, t) };
  }
  ipi.exports = { symlinkPaths: Swa(wwa), symlinkPathsSync: xwa };
});