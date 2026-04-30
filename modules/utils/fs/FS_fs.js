/**
 * @module FS
 * @category utils/fs
 * @label fs
 * @position 1639 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (FS) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var FS = T((aQc, Afi) => {
  "use strict";
  var ISa = d3().fromPromise,
    { makeDir: RSa, makeDirSync: fpr } = bfi(),
    ppr = ISa(RSa);
  Afi.exports = { mkdirs: ppr, mkdirsSync: fpr, mkdirp: ppr, mkdirpSync: fpr, ensureDir: ppr, ensureDirSync: fpr };
});
var l$ = T((uQc, _fi) => {
  "use strict";
  var kSa = d3().fromPromise,
    yfi = e5();
  function OSa(t) {
    return yfi
      .access(t)
      .then(() => !0)
      .catch(() => !1);
  }
  _fi.exports = { pathExists: kSa(OSa), pathExistsSync: yfi.existsSync };
});