/**
 * @module upi
 * @category utils/fs
 * @label fs
 * @position 1651 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (upi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var upi = T((_Qc, api) => {
  "use strict";
  var spi = e5(),
    Twa = d3().fromPromise;
  async function Dwa(t, e) {
    if (e) return e;
    let r;
    try {
      r = await spi.lstat(t);
    } catch {
      return "file";
    }
    return r && r.isDirectory() ? "dir" : "file";
  }
  function Iwa(t, e) {
    if (e) return e;
    let r;
    try {
      r = spi.lstatSync(t);
    } catch {
      return "file";
    }
    return r && r.isDirectory() ? "dir" : "file";
  }
  api.exports = { symlinkType: Twa(Dwa), symlinkTypeSync: Iwa };
});