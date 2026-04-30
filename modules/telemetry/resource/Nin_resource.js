/**
 * @module Nin
 * @category telemetry/resource
 * @label resource
 * @position 611 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nin = T((Mje) => {
  "use strict";
  Object.defineProperty(Mje, "__esModule", { value: !0 });
  Mje.getMachineId = void 0;
  var bYo = (Zt(), bt(cr));
  async function AYo() {
    bYo.diag.debug("could not read machine-id: unsupported platform");
  }
  Mje.getMachineId = AYo;
});