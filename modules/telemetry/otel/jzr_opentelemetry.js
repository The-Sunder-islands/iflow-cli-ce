/**
 * @module jzr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 290 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jzr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jzr = T((Nx) => {
  "use strict";
  Object.defineProperty(Nx, "__esModule", { value: !0 });
  Nx.API_BACKWARDS_COMPATIBILITY_VERSION = Nx.makeGetter = Nx._global = Nx.GLOBAL_LOGS_API_KEY = void 0;
  var fRo = $zr();
  Nx.GLOBAL_LOGS_API_KEY = Symbol.for("io.opentelemetry.js.api.logs");
  Nx._global = fRo._globalThis;
  function pRo(t, e, r) {
    return (n) => (n === t ? e : r);
  }
  Nx.makeGetter = pRo;
  Nx.API_BACKWARDS_COMPATIBILITY_VERSION = 1;
});