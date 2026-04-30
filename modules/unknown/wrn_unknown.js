/**
 * @module wrn
 * @category unknown
 * @label unknown
 * @position 538 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wrn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wrn = T((x$e) => {
  "use strict";
  Object.defineProperty(x$e, "__esModule", { value: !0 });
  x$e.OTLPMetricExporter = void 0;
  var THo = kBe(),
    Srn = A$e(),
    DHo = kx(),
    HIt = class extends THo.OTLPMetricExporterBase {
      constructor(e) {
        super(
          (0, Srn.createOtlpGrpcExportDelegate)(
            (0, Srn.convertLegacyOtlpGrpcOptions)(e ?? {}, "METRICS"),
            DHo.ProtobufMetricsSerializer,
            "MetricsExportService",
            "/opentelemetry.proto.collector.metrics.v1.MetricsService/Export",
          ),
          e,
        );
      }
    };
  x$e.OTLPMetricExporter = HIt;
});