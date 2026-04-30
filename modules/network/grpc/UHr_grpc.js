/**
 * @module UHr
 * @category network/grpc
 * @label grpc
 * @position 174 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UHr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UHr = T((zNe) => {
  "use strict";
  Object.defineProperty(zNe, "__esModule", { value: !0 });
  zNe.ProtobufLogsSerializer = void 0;
  var FHr = GNe(),
    Dxo = Wvt(),
    Ixo = FHr.opentelemetry.proto.collector.logs.v1.ExportLogsServiceResponse,
    Rxo = FHr.opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest;
  zNe.ProtobufLogsSerializer = {
    serializeRequest: (t) => {
      let e = (0, Dxo.createExportLogsServiceRequest)(t);
      return Rxo.encode(e).finish();
    },
    deserializeResponse: (t) => Ixo.decode(t),
  };
});
var $Hr = T((YNe) => {
  "use strict";
  Object.defineProperty(YNe, "__esModule", { value: !0 });
  YNe.ProtobufLogsSerializer = void 0;
  var kxo = UHr();
  Object.defineProperty(YNe, "ProtobufLogsSerializer", {
    enumerable: !0,
    get: function () {
      return kxo.ProtobufLogsSerializer;
    },
  });
});