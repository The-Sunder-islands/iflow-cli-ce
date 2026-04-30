/**
 * @module Izr
 * @category network/grpc
 * @label grpc
 * @position 274 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Izr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Izr = T((NBe) => {
  "use strict";
  Object.defineProperty(NBe, "__esModule", { value: !0 });
  NBe.OTLPMetricExporter = void 0;
  var z7o = kBe(),
    Y7o = kx(),
    K7o = Tzr(),
    Dzr = (wR(), bt(PB)),
    C4t = class extends z7o.OTLPMetricExporterBase {
      constructor(e) {
        super(
          (0, Dzr.createOtlpHttpExportDelegate)(
            (0, Dzr.convertLegacyHttpOptions)(e ?? {}, "METRICS", "v1/metrics", {
              "User-Agent": `OTel-OTLP-Exporter-JavaScript/${K7o.VERSION}`,
              "Content-Type": "application/x-protobuf",
            }),
            Y7o.ProtobufMetricsSerializer,
          ),
          e,
        );
      }
    };
  NBe.OTLPMetricExporter = C4t;
});