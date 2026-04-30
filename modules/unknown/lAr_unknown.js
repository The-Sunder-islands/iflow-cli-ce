/**
 * @module lAr
 * @category unknown
 * @label unknown
 * @position 1788 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lAr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lAr = T((q$) => {
  "use strict";
  Object.defineProperty(q$, "__esModule", { value: !0 });
  q$.resolveHttpAuthSchemeConfig =
    q$.defaultS3HttpAuthSchemeProvider =
    q$.defaultS3HttpAuthSchemeParametersProvider =
      void 0;
  var f_i = (Wp(), bt(iI)),
    qPa = Ibr(),
    HPa = QS(),
    qmt = Hg(),
    VPa = cAr(),
    WPa = (t) => async (e, r, n) => {
      if (!n) throw new Error("Could not find `input` for `defaultEndpointRuleSetHttpAuthSchemeParametersProvider`");
      let o = await t(e, r, n),
        s = (0, qmt.getSmithyContext)(r)?.commandInstance?.constructor?.getEndpointParameterInstructions;
      if (!s) throw new Error(`getEndpointParameterInstructions() is not defined on '${r.commandName}'`);
      let a = await (0, HPa.resolveParams)(n, { getEndpointParameterInstructions: s }, e);
      return Object.assign(o, a);
    },
    zPa = async (t, e, r) => ({
      operation: (0, qmt.getSmithyContext)(e).operation,
      region:
        (await (0, qmt.normalizeProvider)(t.region)()) ||
        (() => {
          throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
        })(),
    });
  q$.defaultS3HttpAuthSchemeParametersProvider = WPa(zPa);
  function p_i(t) {
    return {
      schemeId: "aws.auth#sigv4",
      signingProperties: { name: "s3", region: t.region },
      propertiesExtractor: (e, r) => ({ signingProperties: { config: e, context: r } }),
    };
  }
  function h_i(t) {
    return {
      schemeId: "aws.auth#sigv4a",
      signingProperties: { name: "s3", region: t.region },
      propertiesExtractor: (e, r) => ({ signingProperties: { config: e, context: r } }),
    };
  }
  var YPa = (t, e, r) => (o) => {
      let a = t(o).properties?.authSchemes;
      if (!a) return e(o);
      let u = [];
      for (let c of a) {
        let { name: m, properties: d = {}, ...f } = c,
          p = m.toLowerCase();
        m !== p && console.warn(`HttpAuthScheme has been normalized with lowercasing: '${m}' to '${p}'`);
        let h;
        if (p === "sigv4a") {
          h = "aws.auth#sigv4a";
          let A = a.find((y) => {
            let E = y.name.toLowerCase();
            return E !== "sigv4a" && E.startsWith("sigv4");
          });
          if (qPa.SignatureV4MultiRegion.sigv4aDependency() === "none" && A) continue;
        } else if (p.startsWith("sigv4")) h = "aws.auth#sigv4";
        else throw new Error(`Unknown HttpAuthScheme found in '@smithy.rules#endpointRuleSet': '${p}'`);
        let g = r[h];
        if (!g) throw new Error(`Could not find HttpAuthOption create function for '${h}'`);
        let b = g(o);
        ((b.schemeId = h), (b.signingProperties = { ...(b.signingProperties || {}), ...f, ...d }), u.push(b));
      }
      return u;
    },
    KPa = (t) => {
      let e = [];
      switch (t.operation) {
        default:
          (e.push(p_i(t)), e.push(h_i(t)));
      }
      return e;
    };
  q$.defaultS3HttpAuthSchemeProvider = YPa(VPa.defaultEndpointResolver, KPa, {
    "aws.auth#sigv4": p_i,
    "aws.auth#sigv4a": h_i,
  });
  var JPa = (t) => {
    let e = (0, f_i.resolveAwsSdkSigV4Config)(t),
      r = (0, f_i.resolveAwsSdkSigV4AConfig)(e);
    return Object.assign(r, { authSchemePreference: (0, qmt.normalizeProvider)(t.authSchemePreference ?? []) });
  };
  q$.resolveHttpAuthSchemeConfig = JPa;
});