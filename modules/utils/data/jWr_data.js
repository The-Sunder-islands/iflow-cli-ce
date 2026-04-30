/**
 * @module jWr
 * @category utils/data
 * @label data
 * @position 256 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jWr = T((hBe) => {
  "use strict";
  Object.defineProperty(hBe, "__esModule", { value: !0 });
  hBe.JsonMetricsSerializer = void 0;
  var XIo = m4t();
  hBe.JsonMetricsSerializer = {
    serializeRequest: (t) => {
      let e = (0, XIo.createExportMetricsServiceRequest)([t], { useLongBits: !1 });
      return new TextEncoder().encode(JSON.stringify(e));
    },
    deserializeResponse: (t) => {
      if (t.length === 0) return {};
      let e = new TextDecoder();
      return JSON.parse(e.decode(t));
    },
  };
});