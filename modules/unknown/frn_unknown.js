/**
 * @module frn
 * @category unknown
 * @label unknown
 * @position 529 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (frn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var frn = T((g$e) => {
  "use strict";
  Object.defineProperty(g$e, "__esModule", { value: !0 });
  g$e.convertLegacyOtlpGrpcOptions = void 0;
  var cHo = (Zt(), bt(cr)),
    drn = srn(),
    lHo = Wbe(),
    mHo = mrn();
  function dHo(t, e) {
    t.headers && cHo.diag.warn("Headers cannot be set when using grpc");
    let r = t.credentials;
    return (0, drn.mergeOtlpGrpcConfigurationWithDefaults)(
      {
        url: t.url,
        metadata: () => t.metadata ?? (0, lHo.createEmptyMetadata)(),
        compression: t.compression,
        timeoutMillis: t.timeoutMillis,
        concurrencyLimit: t.concurrencyLimit,
        credentials: r != null ? () => r : void 0,
      },
      (0, mHo.getOtlpGrpcConfigurationFromEnv)(e),
      (0, drn.getOtlpGrpcDefaultConfiguration)(),
    );
  }
  g$e.convertLegacyOtlpGrpcOptions = dHo;
});