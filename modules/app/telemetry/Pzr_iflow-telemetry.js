/**
 * @module Pzr
 * @category app/telemetry
 * @label iflow-telemetry
 * @position 279 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Pzr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends
 * Features: esbuild module exports: Pzr, telemetry/OTLP
 * === End semantic info ===
 */


var Pzr = T((FBe) => {
  "use strict";
  Object.defineProperty(FBe, "__esModule", { value: !0 });
  FBe.OTLPLogExporter = void 0;
  var eRo = (yx(), bt(Ax)),
    tRo = kx(),
    rRo = Ozr(),
    Nzr = (wR(), bt(PB)),
    w4t = class extends eRo.OTLPExporterBase {
      constructor(e = {}) {
        super(
          (0, Nzr.createOtlpHttpExportDelegate)(
            (0, Nzr.convertLegacyHttpOptions)(e, "LOGS", "v1/logs", {
              "User-Agent": `OTel-OTLP-Exporter-JavaScript/${rRo.VERSION}`,
              "Content-Type": "application/json",
            }),
            tRo.JsonLogsSerializer,
          ),
        );
      }
    };
  FBe.OTLPLogExporter = w4t;
});