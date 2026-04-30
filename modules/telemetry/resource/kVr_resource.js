/**
 * @module kVr
 * @category telemetry/resource
 * @label resource
 * @position 212 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kVr = T((kPe) => {
  "use strict";
  Object.defineProperty(kPe, "__esModule", { value: !0 });
  kPe.getMachineId = void 0;
  var eDo = (Zt(), bt(cr));
  async function tDo() {
    eDo.diag.debug("could not read machine-id: unsupported platform");
  }
  kPe.getMachineId = tDo;
});