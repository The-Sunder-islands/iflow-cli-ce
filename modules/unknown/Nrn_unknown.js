/**
 * @module Nrn
 * @category unknown
 * @label unknown
 * @position 544 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Nrn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Nrn = T((N$e) => {
  "use strict";
  Object.defineProperty(N$e, "__esModule", { value: !0 });
  N$e.OTLPTraceExporter = void 0;
  var QHo = (yx(), bt(Ax)),
    GHo = krn(),
    qHo = kx(),
    Orn = (wR(), bt(PB)),
    XIt = class extends QHo.OTLPExporterBase {
      constructor(e = {}) {
        super(
          (0, Orn.createOtlpHttpExportDelegate)(
            (0, Orn.convertLegacyHttpOptions)(e, "TRACES", "v1/traces", {
              "User-Agent": `OTel-OTLP-Exporter-JavaScript/${GHo.VERSION}`,
              "Content-Type": "application/json",
            }),
            qHo.JsonTraceSerializer,
          ),
        );
      }
    };
  N$e.OTLPTraceExporter = XIt;
});