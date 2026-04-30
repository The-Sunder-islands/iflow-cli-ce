/**
 * @module ffi
 * @category unknown
 * @label unknown
 * @position 1637 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ffi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ffi = T((oQc, dfi) => {
  "use strict";
  var DSa = Ae("path");
  dfi.exports.checkPath = function (e) {
    if (process.platform === "win32" && /[<>:"|?*]/.test(e.replace(DSa.parse(e).root, ""))) {
      let n = new Error(`Path contains invalid characters: ${e}`);
      throw ((n.code = "EINVAL"), n);
    }
  };
});