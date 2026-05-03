/**
 * @module Xxn
 * @category app/output
 * @label iflow-output
 * @position 1103 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Xxn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Functions: zws
 * Features: esbuild module exports: Xxn
 * === End semantic info ===
 */


var Xxn = T((Jxn) => {
  var Vws = qxn(),
    Wws = Kxn();
  Jxn.writer = zws;
  function zws(t) {
    return ((t = t || {}), t.outputFormat === "markdown" ? Wws.writer() : Vws.writer(t));
  }
});