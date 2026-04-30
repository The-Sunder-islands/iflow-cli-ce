/**
 * @module grn
 * @category unknown
 * @label unknown
 * @position 531 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (grn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var grn = T((y$e) => {
  "use strict";
  Object.defineProperty(y$e, "__esModule", { value: !0 });
  y$e.OTLPLogExporter = void 0;
  var hrn = A$e(),
    AHo = kx(),
    yHo = (yx(), bt(Ax)),
    GIt = class extends yHo.OTLPExporterBase {
      constructor(e = {}) {
        super(
          (0, hrn.createOtlpGrpcExportDelegate)(
            (0, hrn.convertLegacyOtlpGrpcOptions)(e, "LOGS"),
            AHo.ProtobufLogsSerializer,
            "LogsExportService",
            "/opentelemetry.proto.collector.logs.v1.LogsService/Export",
          ),
        );
      }
    };
  y$e.OTLPLogExporter = GIt;
});