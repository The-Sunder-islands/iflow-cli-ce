/**
 * @module _rn
 * @category unknown
 * @label unknown
 * @position 534 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_rn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _rn = T((v$e) => {
  "use strict";
  Object.defineProperty(v$e, "__esModule", { value: !0 });
  v$e.OTLPLogExporter = void 0;
  var EHo = (yx(), bt(Ax)),
    vHo = kx(),
    yrn = (wR(), bt(PB)),
    CHo = Arn(),
    qIt = class extends EHo.OTLPExporterBase {
      constructor(e = {}) {
        super(
          (0, yrn.createOtlpHttpExportDelegate)(
            (0, yrn.convertLegacyHttpOptions)(e, "LOGS", "v1/logs", {
              "User-Agent": `OTel-OTLP-Exporter-JavaScript/${CHo.VERSION}`,
              "Content-Type": "application/x-protobuf",
            }),
            vHo.ProtobufLogsSerializer,
          ),
        );
      }
    };
  v$e.OTLPLogExporter = qIt;
});