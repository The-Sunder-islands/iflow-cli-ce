/**
 * @module Frn
 * @category unknown
 * @label unknown
 * @position 548 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Frn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Frn = T((M$e) => {
  "use strict";
  Object.defineProperty(M$e, "__esModule", { value: !0 });
  M$e.OTLPTraceExporter = void 0;
  var Mrn = A$e(),
    zHo = kx(),
    YHo = (yx(), bt(Ax)),
    ZIt = class extends YHo.OTLPExporterBase {
      constructor(e = {}) {
        super(
          (0, Mrn.createOtlpGrpcExportDelegate)(
            (0, Mrn.convertLegacyOtlpGrpcOptions)(e, "TRACES"),
            zHo.ProtobufTraceSerializer,
            "TraceExportService",
            "/opentelemetry.proto.collector.trace.v1.TraceService/Export",
          ),
        );
      }
    };
  M$e.OTLPTraceExporter = ZIt;
});