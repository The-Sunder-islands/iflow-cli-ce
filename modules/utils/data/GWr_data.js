/**
 * @module GWr
 * @category utils/data
 * @label data
 * @position 258 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GWr = T((bBe) => {
  "use strict";
  Object.defineProperty(bBe, "__esModule", { value: !0 });
  bBe.JsonTraceSerializer = void 0;
  var e7o = d4t();
  bBe.JsonTraceSerializer = {
    serializeRequest: (t) => {
      let e = (0, e7o.createExportTraceServiceRequest)(t, { useHex: !0, useLongBits: !1 });
      return new TextEncoder().encode(JSON.stringify(e));
    },
    deserializeResponse: (t) => {
      if (t.length === 0) return {};
      let e = new TextDecoder();
      return JSON.parse(e.decode(t));
    },
  };
});