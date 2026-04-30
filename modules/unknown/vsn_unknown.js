/**
 * @module vsn
 * @category unknown
 * @label unknown
 * @position 679 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vsn = T(($Qe) => {
  "use strict";
  Object.defineProperty($Qe, "__esModule", { value: !0 });
  $Qe.getMachineId = void 0;
  var cXo = (Zt(), bt(cr));
  async function lXo() {
    cXo.diag.debug("could not read machine-id: unsupported platform");
  }
  $Qe.getMachineId = lXo;
});