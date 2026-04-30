/**
 * @module Azr
 * @category app/telemetry
 * @label iflow-telemetry
 * @position 262 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Azr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Azr = T((vBe) => {
  "use strict";
  Object.defineProperty(vBe, "__esModule", { value: !0 });
  vBe.OTLPTraceExporter = void 0;
  var C7o = (yx(), bt(Ax)),
    S7o = kx(),
    w7o = HWr(),
    bzr = (wR(), bt(PB)),
    b4t = class extends C7o.OTLPExporterBase {
      constructor(e = {}) {
        super(
          (0, bzr.createOtlpHttpExportDelegate)(
            (0, bzr.convertLegacyHttpOptions)(e, "TRACES", "v1/traces", {
              "User-Agent": `OTel-OTLP-Exporter-JavaScript/${w7o.VERSION}`,
              "Content-Type": "application/x-protobuf",
            }),
            S7o.ProtobufTraceSerializer,
          ),
        );
      }
    };
  vBe.OTLPTraceExporter = b4t;
});