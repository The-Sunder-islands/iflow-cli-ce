/**
 * @module vA
 * @category utils/cache
 * @label cache
 * @position 1736 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vA) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vA = T((gK) => {
  "use strict";
  var Ome = class t extends Error {
      name = "ProviderError";
      tryNextLink;
      constructor(e, r = !0) {
        let n,
          o = !0;
        (typeof r == "boolean"
          ? ((n = void 0), (o = r))
          : r != null && typeof r == "object" && ((n = r.logger), (o = r.tryNextLink ?? !0)),
          super(e),
          (this.tryNextLink = o),
          Object.setPrototypeOf(this, t.prototype),
          n?.debug?.(`@smithy/property-provider ${o ? "->" : "(!)"} ${e}`));
      }
      static from(e, r = !0) {
        return Object.assign(new this(e.message, r), e);
      }
    },
    E3r = class t extends Ome {
      name = "CredentialsProviderError";
      constructor(e, r = !0) {
        (super(e, r), Object.setPrototypeOf(this, t.prototype));
      }
    },
    v3r = class t extends Ome {
      name = "TokenProviderError";
      constructor(e, r = !0) {
        (super(e, r), Object.setPrototypeOf(this, t.prototype));
      }
    },
    $Ia =
      (...t) =>
      async () => {
        if (t.length === 0) throw new Ome("No providers in chain");
        let e;
        for (let r of t)
          try {
            return await r();
          } catch (n) {
            if (((e = n), n?.tryNextLink)) continue;
            throw n;
          }
        throw e;
      },
    jIa = (t) => () => Promise.resolve(t),
    QIa = (t, e, r) => {
      let n,
        o,
        s,
        a = !1,
        u = async () => {
          o || (o = t());
          try {
            ((n = await o), (s = !0), (a = !1));
          } finally {
            o = void 0;
          }
          return n;
        };
      return e === void 0
        ? async (c) => ((!s || c?.forceRefresh) && (n = await u()), n)
        : async (c) => (
            (!s || c?.forceRefresh) && (n = await u()),
            a ? n : r && !r(n) ? ((a = !0), n) : (e(n) && (await u()), n)
          );
    };
  gK.CredentialsProviderError = E3r;
  gK.ProviderError = Ome;
  gK.TokenProviderError = v3r;
  gK.chain = $Ia;
  gK.fromStatic = jIa;
  gK.memoize = QIa;
});
var C3r,
  d2i,
  f2i,
  p2i = j(() => {
    EA();
    ((C3r = Se(vA())),
      (d2i = (t) => ((t.sigv4aSigningRegionSet = y$(t.sigv4aSigningRegionSet)), t)),
      (f2i = {
        environmentVariableSelector(t) {
          if (t.AWS_SIGV4A_SIGNING_REGION_SET) return t.AWS_SIGV4A_SIGNING_REGION_SET.split(",").map((e) => e.trim());
          throw new C3r.ProviderError("AWS_SIGV4A_SIGNING_REGION_SET not set in env.", { tryNextLink: !0 });
        },
        configFileSelector(t) {
          if (t.sigv4a_signing_region_set) return (t.sigv4a_signing_region_set ?? "").split(",").map((e) => e.trim());
          throw new C3r.ProviderError("sigv4a_signing_region_set not set in profile.", { tryNextLink: !0 });
        },
        default: void 0,
      }));
  });