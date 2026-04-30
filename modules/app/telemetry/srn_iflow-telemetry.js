/**
 * @module srn
 * @category app/telemetry
 * @label iflow-telemetry
 * @position 527 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (srn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var srn = T((tL) => {
  "use strict";
  Object.defineProperty(tL, "__esModule", { value: !0 });
  tL.getOtlpGrpcDefaultConfiguration = tL.mergeOtlpGrpcConfigurationWithDefaults = tL.validateAndNormalizeUrl = void 0;
  var irn = (yx(), bt(Ax)),
    zbe = Wbe(),
    zqo = trn(),
    Yqo = Ae("url"),
    rrn = (Zt(), bt(cr));
  function orn(t) {
    ((t = t.trim()), t.match(/^([\w]{1,8}):\/\//) || (t = `https://${t}`));
    let r = new Yqo.URL(t);
    return r.protocol === "unix:"
      ? t
      : (r.pathname &&
          r.pathname !== "/" &&
          rrn.diag.warn("URL path should not be set when using grpc, the path part of the URL will be ignored."),
        r.protocol !== "" &&
          !r.protocol?.match(/^(http)s?:$/) &&
          rrn.diag.warn("URL protocol should be http(s)://. Using http://."),
        r.host);
  }
  tL.validateAndNormalizeUrl = orn;
  function nrn(t, e) {
    for (let [r, n] of Object.entries(e.getMap())) t.get(r).length < 1 && t.set(r, n);
  }
  function Kqo(t, e, r) {
    let n = t.url ?? e.url ?? r.url;
    return {
      ...(0, irn.mergeOtlpSharedConfigurationWithDefaults)(t, e, r),
      metadata: () => {
        let o = r.metadata();
        return (
          nrn(o, t.metadata?.().clone() ?? (0, zbe.createEmptyMetadata)()),
          nrn(o, e.metadata?.() ?? (0, zbe.createEmptyMetadata)()),
          o
        );
      },
      url: orn(n),
      credentials: t.credentials ?? e.credentials?.(n) ?? r.credentials(n),
    };
  }
  tL.mergeOtlpGrpcConfigurationWithDefaults = Kqo;
  function Jqo() {
    return {
      ...(0, irn.getSharedConfigurationDefaults)(),
      metadata: () => {
        let t = (0, zbe.createEmptyMetadata)();
        return (t.set("User-Agent", `OTel-OTLP-Exporter-JavaScript/${zqo.VERSION}`), t);
      },
      url: "http://localhost:4317",
      credentials: (t) =>
        t.startsWith("http://") ? () => (0, zbe.createInsecureCredentials)() : () => (0, zbe.createSslCredentials)(),
    };
  }
  tL.getOtlpGrpcDefaultConfiguration = Jqo;
});