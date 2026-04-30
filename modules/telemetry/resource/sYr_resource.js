/**
 * @module sYr
 * @category telemetry/resource
 * @label resource
 * @position 306 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sYr = T((lLe) => {
  "use strict";
  Object.defineProperty(lLe, "__esModule", { value: !0 });
  lLe.getMachineId = void 0;
  var zRo = (Zt(), bt(cr));
  async function YRo() {
    zRo.diag.debug("could not read machine-id: unsupported platform");
  }
  lLe.getMachineId = YRo;
});