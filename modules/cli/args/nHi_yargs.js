/**
 * @module nHi
 * @category cli/args
 * @label yargs
 * @position 1897 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nHi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nHi = T((Hfl, rHi) => {
  "use strict";
  rHi.exports = (t, e = process.argv) => {
    let r = t.startsWith("-") ? "" : t.length === 1 ? "-" : "--",
      n = e.indexOf(r + t),
      o = e.indexOf("--");
    return n !== -1 && (o === -1 || n < o);
  };
});