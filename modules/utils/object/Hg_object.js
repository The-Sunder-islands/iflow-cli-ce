/**
 * @module Hg
 * @category utils/object
 * @label object
 * @position 1707 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hg) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hg = T((Zpr) => {
  "use strict";
  var agi = yN(),
    gTa = (t) => t[agi.SMITHY_CONTEXT_KEY] || (t[agi.SMITHY_CONTEXT_KEY] = {}),
    bTa = (t) => {
      if (typeof t == "function") return t;
      let e = Promise.resolve(t);
      return () => e;
    };
  Zpr.getSmithyContext = gTa;
  Zpr.normalizeProvider = bTa;
});
var ugi,
  cgi = j(() => {
    ugi = (t, e) => {
      if (!e || e.length === 0) return t;
      let r = [];
      for (let n of e) for (let o of t) o.schemeId.split("#")[1] === n && r.push(o);
      for (let n of t) r.find(({ schemeId: o }) => o === n.schemeId) || r.push(n);
      return r;
    };
  });
function ATa(t) {
  let e = new Map();
  for (let r of t) e.set(r.schemeId, r);
  return e;
}
var lgi,
  USe,
  Ilt = j(() => {
    lgi = Se(Hg());
    cgi();
    USe = (t, e) => (r, n) => async (o) => {
      let s = t.httpAuthSchemeProvider(await e.httpAuthSchemeParametersProvider(t, n, o.input)),
        a = t.authSchemePreference ? await t.authSchemePreference() : [],
        u = ugi(s, a),
        c = ATa(t.httpAuthSchemes),
        m = (0, lgi.getSmithyContext)(n),
        d = [];
      for (let f of u) {
        let p = c.get(f.schemeId);
        if (!p) {
          d.push(`HttpAuthScheme \`${f.schemeId}\` was not enabled for this service.`);
          continue;
        }
        let h = p.identityProvider(await e.identityProviderConfigProvider(t));
        if (!h) {
          d.push(`HttpAuthScheme \`${f.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        let { identityProperties: g = {}, signingProperties: b = {} } = f.propertiesExtractor?.(t, n) || {};
        ((f.identityProperties = Object.assign(f.identityProperties || {}, g)),
          (f.signingProperties = Object.assign(f.signingProperties || {}, b)),
          (m.selectedHttpAuthScheme = {
            httpAuthOption: f,
            identity: await h(f.identityProperties),
            signer: p.signer,
          }));
        break;
      }
      if (!m.selectedHttpAuthScheme)
        throw new Error(
          d.join(`
`),
        );
      return r(o);
    };
  });
var mgi,
  oK,
  dgi = j(() => {
    Ilt();
    ((mgi = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: !0,
      relation: "before",
      toMiddleware: "endpointV2Middleware",
    }),
      (oK = (t, { httpAuthSchemeParametersProvider: e, identityProviderConfigProvider: r }) => ({
        applyToStack: (n) => {
          n.addRelativeTo(USe(t, { httpAuthSchemeParametersProvider: e, identityProviderConfigProvider: r }), mgi);
        },
      })));
  });