/**
 * @module d6i
 * @category utils/oop
 * @label oop
 * @position 1779 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (d6i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var d6i = T((Dmt) => {
  "use strict";
  Object.defineProperty(Dmt, "__esModule", { value: !0 });
  Dmt.getEndpointFromConfig = void 0;
  var UNa = uI(),
    $Na = m6i(),
    jNa = async (t) => (0, UNa.loadConfig)((0, $Na.getEndpointUrlConfig)(t ?? ""))();
  Dmt.getEndpointFromConfig = jNa;
});