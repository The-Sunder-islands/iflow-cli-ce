/**
 * @module mrn
 * @category unknown
 * @label unknown
 * @position 528 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mrn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mrn = T((h$e) => {
  "use strict";
  Object.defineProperty(h$e, "__esModule", { value: !0 });
  h$e.getOtlpGrpcConfigurationFromEnv = void 0;
  var arn = Ii(),
    Ybe = Wbe(),
    Xqo = (wR(), bt(PB)),
    Zqo = Ae("fs"),
    eHo = Ae("path"),
    crn = (Zt(), bt(cr));
  function jIt(t, e) {
    if (t != null && t !== "") return t;
    if (e != null && e !== "") return e;
  }
  function tHo(t) {
    let e = process.env[`OTEL_EXPORTER_OTLP_${t}_HEADERS`]?.trim(),
      r = process.env.OTEL_EXPORTER_OTLP_HEADERS?.trim(),
      n = (0, arn.parseKeyPairsIntoRecord)(e),
      o = (0, arn.parseKeyPairsIntoRecord)(r);
    if (Object.keys(n).length === 0 && Object.keys(o).length === 0) return;
    let s = Object.assign({}, o, n),
      a = (0, Ybe.createEmptyMetadata)();
    for (let [u, c] of Object.entries(s)) a.set(u, c);
    return a;
  }
  function rHo(t) {
    let e = tHo(t);
    if (e != null) return () => e;
  }
  function nHo(t) {
    let e = process.env[`OTEL_EXPORTER_OTLP_${t}_ENDPOINT`]?.trim(),
      r = process.env.OTEL_EXPORTER_OTLP_ENDPOINT?.trim();
    return jIt(e, r);
  }
  function iHo(t) {
    let e = process.env[`OTEL_EXPORTER_OTLP_${t}_INSECURE`]?.toLowerCase().trim(),
      r = process.env.OTEL_EXPORTER_OTLP_INSECURE?.toLowerCase().trim();
    return jIt(e, r) === "true";
  }
  function QIt(t, e, r) {
    let n = process.env[t]?.trim(),
      o = process.env[e]?.trim(),
      s = jIt(n, o);
    if (s != null)
      try {
        return Zqo.readFileSync(eHo.resolve(process.cwd(), s));
      } catch {
        crn.diag.warn(r);
        return;
      }
    else return;
  }
  function oHo(t) {
    return QIt(
      `OTEL_EXPORTER_OTLP_${t}_CLIENT_CERTIFICATE`,
      "OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE",
      "Failed to read client certificate chain file",
    );
  }
  function sHo(t) {
    return QIt(
      `OTEL_EXPORTER_OTLP_${t}_CLIENT_KEY`,
      "OTEL_EXPORTER_OTLP_CLIENT_KEY",
      "Failed to read client certificate private key file",
    );
  }
  function urn(t) {
    return QIt(
      `OTEL_EXPORTER_OTLP_${t}_CERTIFICATE`,
      "OTEL_EXPORTER_OTLP_CERTIFICATE",
      "Failed to read root certificate file",
    );
  }
  function lrn(t) {
    let e = sHo(t),
      r = oHo(t),
      n = urn(t),
      o = e != null && r != null;
    return n != null && !o
      ? (crn.diag.warn(
          "Client key and certificate must both be provided, but one was missing - attempting to create credentials from just the root certificate",
        ),
        (0, Ybe.createSslCredentials)(urn(t)))
      : (0, Ybe.createSslCredentials)(n, e, r);
  }
  function aHo(t) {
    return iHo(t) ? (0, Ybe.createInsecureCredentials)() : lrn(t);
  }
  function uHo(t) {
    return {
      ...(0, Xqo.getSharedConfigurationFromEnvironment)(t),
      metadata: rHo(t),
      url: nHo(t),
      credentials: (e) =>
        e.startsWith("http://")
          ? () => (0, Ybe.createInsecureCredentials)()
          : e.startsWith("https://")
            ? () => lrn(t)
            : () => aHo(t),
    };
  }
  h$e.getOtlpGrpcConfigurationFromEnv = uHo;
});