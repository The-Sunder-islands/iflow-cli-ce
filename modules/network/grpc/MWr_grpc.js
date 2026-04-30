/**
 * @module MWr
 * @category network/grpc
 * @label grpc
 * @position 253 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (MWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var MWr = T((mBe) => {
  "use strict";
  Object.defineProperty(mBe, "__esModule", { value: !0 });
  mBe.ProtobufTraceSerializer = void 0;
  var LWr = GNe(),
    VIo = d4t(),
    WIo = LWr.opentelemetry.proto.collector.trace.v1.ExportTraceServiceResponse,
    zIo = LWr.opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest;
  mBe.ProtobufTraceSerializer = {
    serializeRequest: (t) => {
      let e = (0, VIo.createExportTraceServiceRequest)(t);
      return zIo.encode(e).finish();
    },
    deserializeResponse: (t) => WIo.decode(t),
  };
});