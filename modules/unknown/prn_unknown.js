/**
 * @module prn
 * @category unknown
 * @label unknown
 * @position 530 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (prn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var prn = T((b$e) => {
  "use strict";
  Object.defineProperty(b$e, "__esModule", { value: !0 });
  b$e.createOtlpGrpcExportDelegate = void 0;
  var fHo = (yx(), bt(Ax)),
    pHo = Wbe();
  function hHo(t, e, r, n) {
    return (0, fHo.createOtlpNetworkExportDelegate)(
      t,
      e,
      (0, pHo.createOtlpGrpcExporterTransport)({
        address: t.url,
        compression: t.compression,
        credentials: t.credentials,
        metadata: t.metadata,
        grpcName: r,
        grpcPath: n,
      }),
    );
  }
  b$e.createOtlpGrpcExportDelegate = hHo;
});
var A$e = T((sne) => {
  "use strict";
  Object.defineProperty(sne, "__esModule", { value: !0 });
  sne.createOtlpGrpcExportDelegate = sne.convertLegacyOtlpGrpcOptions = void 0;
  var gHo = frn();
  Object.defineProperty(sne, "convertLegacyOtlpGrpcOptions", {
    enumerable: !0,
    get: function () {
      return gHo.convertLegacyOtlpGrpcOptions;
    },
  });
  var bHo = prn();
  Object.defineProperty(sne, "createOtlpGrpcExportDelegate", {
    enumerable: !0,
    get: function () {
      return bHo.createOtlpGrpcExportDelegate;
    },
  });
});