/**
 * @module hpr
 * @category unknown
 * @label unknown
 * @position 1640 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hpr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hpr = T((cQc, Efi) => {
  "use strict";
  var dme = e5(),
    NSa = d3().fromPromise;
  async function PSa(t, e, r) {
    let n = await dme.open(t, "r+"),
      o = null;
    try {
      await dme.futimes(n, e, r);
    } finally {
      try {
        await dme.close(n);
      } catch (s) {
        o = s;
      }
    }
    if (o) throw o;
  }
  function BSa(t, e, r) {
    let n = dme.openSync(t, "r+");
    return (dme.futimesSync(n, e, r), dme.closeSync(n));
  }
  Efi.exports = { utimesMillis: NSa(PSa), utimesMillisSync: BSa };
});