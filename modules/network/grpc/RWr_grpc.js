/**
 * @module RWr
 * @category network/grpc
 * @label grpc
 * @position 250 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RWr = T((cBe) => {
  "use strict";
  Object.defineProperty(cBe, "__esModule", { value: !0 });
  cBe.ProtobufMetricsSerializer = void 0;
  var IWr = GNe(),
    LIo = m4t(),
    MIo = IWr.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse,
    FIo = IWr.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
  cBe.ProtobufMetricsSerializer = {
    serializeRequest: (t) => {
      let e = (0, LIo.createExportMetricsServiceRequest)([t]);
      return FIo.encode(e).finish();
    },
    deserializeResponse: (t) => MIo.decode(t),
  };
});