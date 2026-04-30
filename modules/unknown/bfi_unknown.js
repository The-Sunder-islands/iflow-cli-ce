/**
 * @module bfi
 * @category unknown
 * @label unknown
 * @position 1638 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bfi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var bfi = T((sQc, dpr) => {
  "use strict";
  var pfi = e5(),
    { checkPath: hfi } = ffi(),
    gfi = (t) => {
      let e = { mode: 511 };
      return typeof t == "number" ? t : { ...e, ...t }.mode;
    };
  dpr.exports.makeDir = async (t, e) => (hfi(t), pfi.mkdir(t, { mode: gfi(e), recursive: !0 }));
  dpr.exports.makeDirSync = (t, e) => (hfi(t), pfi.mkdirSync(t, { mode: gfi(e), recursive: !0 }));
});