/**
 * @module Szr
 * @category telemetry/otel
 * @label opentelemetry
 * @position 269 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Szr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Szr = T((TBe) => {
  "use strict";
  Object.defineProperty(TBe, "__esModule", { value: !0 });
  TBe.OTLPMetricExporter = void 0;
  var $7o = E4t(),
    j7o = kx(),
    Q7o = vzr(),
    Czr = (wR(), bt(PB)),
    G7o = { "User-Agent": `OTel-OTLP-Exporter-JavaScript/${Q7o.VERSION}` },
    v4t = class extends $7o.OTLPMetricExporterBase {
      constructor(e) {
        super(
          (0, Czr.createOtlpHttpExportDelegate)(
            (0, Czr.convertLegacyHttpOptions)(e ?? {}, "METRICS", "v1/metrics", {
              ...G7o,
              "Content-Type": "application/json",
            }),
            j7o.JsonMetricsSerializer,
          ),
          e,
        );
      }
    };
  TBe.OTLPMetricExporter = v4t;
});