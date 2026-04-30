/**
 * @module Wwn
 * @category unknown
 * @label unknown
 * @position 1083 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Wwn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Wwn = T((OWt) => {
  OWt.uriToZipEntryName = dSs;
  OWt.replaceFragment = fSs;
  function dSs(t, e) {
    return e.charAt(0) === "/" ? e.substr(1) : t + "/" + e;
  }
  function fSs(t, e) {
    var r = t.indexOf("#");
    return (r !== -1 && (t = t.substring(0, r)), t + "#" + e);
  }
});