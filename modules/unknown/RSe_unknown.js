/**
 * @module RSe
 * @category unknown
 * @label unknown
 * @position 1646 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RSe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RSe = T((hQc, $fi) => {
  "use strict";
  var Ufi = rf(),
    dwa = d3().fromCallback;
  function fwa(t, e) {
    Ufi.rm(t, { recursive: !0, force: !0 }, e);
  }
  function pwa(t) {
    Ufi.rmSync(t, { recursive: !0, force: !0 });
  }
  $fi.exports = { remove: dwa(fwa), removeSync: pwa };
});