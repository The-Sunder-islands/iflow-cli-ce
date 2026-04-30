/**
 * @module QS
 * @category network/http
 * @label ky
 * @position 1780 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (QS) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var QS = T((BN) => {
  "use strict";
  var p6i = d6i(),
    f6i = PN(),
    QNa = (EA(), bt(hK)),
    Imt = Hg(),
    GNa = thr(),
    qNa = async (t) => {
      let e = t?.Bucket || "";
      if (
        (typeof t.Bucket == "string" &&
          (t.Bucket = e.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"))),
        YNa(e))
      ) {
        if (t.ForcePathStyle === !0) throw new Error("Path-style addressing cannot be used with ARN buckets");
      } else
        (!zNa(e) ||
          (e.indexOf(".") !== -1 && !String(t.Endpoint).startsWith("http:")) ||
          e.toLowerCase() !== e ||
          e.length < 3) &&
          (t.ForcePathStyle = !0);
      return (t.DisableMultiRegionAccessPoints && ((t.disableMultiRegionAccessPoints = !0), (t.DisableMRAP = !0)), t);
    },
    HNa = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
    VNa = /(\d+\.){3}\d+/,
    WNa = /\.\./,
    zNa = (t) => HNa.test(t) && !VNa.test(t) && !WNa.test(t),
    YNa = (t) => {
      let [e, r, n, , , o] = t.split(":"),
        s = e === "arn" && t.split(":").length >= 6,
        a = !!(s && r && n && o);
      if (s && !a) throw new Error(`Invalid ARN: ${t} was an invalid ARN.`);
      return a;
    },
    KNa = (t, e, r, n = !1) => {
      let o = async () => {
        let s;
        return (
          n ? (s = r.clientContextParams?.[t] ?? r[t] ?? r[e]) : (s = r[t] ?? r[e]),
          typeof s == "function" ? s() : s
        );
      };
      return t === "credentialScope" || e === "CredentialScope"
        ? async () => {
            let s = typeof r.credentials == "function" ? await r.credentials() : r.credentials;
            return s?.credentialScope ?? s?.CredentialScope;
          }
        : t === "accountId" || e === "AccountId"
          ? async () => {
              let s = typeof r.credentials == "function" ? await r.credentials() : r.credentials;
              return s?.accountId ?? s?.AccountId;
            }
          : t === "endpoint" || e === "endpoint"
            ? async () => {
                if (r.isCustomEndpoint === !1) return;
                let s = await o();
                if (s && typeof s == "object") {
                  if ("url" in s) return s.url.href;
                  if ("hostname" in s) {
                    let { protocol: a, hostname: u, port: c, path: m } = s;
                    return `${a}//${u}${c ? ":" + c : ""}${m}`;
                  }
                }
                return s;
              }
            : o;
    },
    gbr = (t) => (typeof t == "object" ? ("url" in t ? f6i.parseUrl(t.url) : t) : f6i.parseUrl(t)),
    h6i = async (t, e, r, n) => {
      if (!r.isCustomEndpoint) {
        let a;
        (r.serviceConfiguredEndpoint
          ? (a = await r.serviceConfiguredEndpoint())
          : (a = await p6i.getEndpointFromConfig(r.serviceId)),
          a && ((r.endpoint = () => Promise.resolve(gbr(a))), (r.isCustomEndpoint = !0)));
      }
      let o = await g6i(t, e, r);
      if (typeof r.endpointProvider != "function") throw new Error("config.endpointProvider is not set.");
      return r.endpointProvider(o, n);
    },
    g6i = async (t, e, r) => {
      let n = {},
        o = e?.getEndpointParameterInstructions?.() || {};
      for (let [s, a] of Object.entries(o))
        switch (a.type) {
          case "staticContextParams":
            n[s] = a.value;
            break;
          case "contextParams":
            n[s] = t[a.name];
            break;
          case "clientContextParams":
          case "builtInParams":
            n[s] = await KNa(a.name, s, r, a.type !== "builtInParams")();
            break;
          case "operationContextParams":
            n[s] = a.get(t);
            break;
          default:
            throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(a));
        }
      return (
        Object.keys(o).length === 0 && Object.assign(n, r),
        String(r.serviceId).toLowerCase() === "s3" && (await qNa(n)),
        n
      );
    },
    b6i =
      ({ config: t, instructions: e }) =>
      (r, n) =>
      async (o) => {
        t.isCustomEndpoint && QNa.setFeature(n, "ENDPOINT_OVERRIDE", "N");
        let s = await h6i(
          o.input,
          {
            getEndpointParameterInstructions() {
              return e;
            },
          },
          { ...t },
          n,
        );
        ((n.endpointV2 = s), (n.authSchemes = s.properties?.authSchemes));
        let a = n.authSchemes?.[0];
        if (a) {
          ((n.signing_region = a.signingRegion), (n.signing_service = a.signingName));
          let c = Imt.getSmithyContext(n)?.selectedHttpAuthScheme?.httpAuthOption;
          c &&
            (c.signingProperties = Object.assign(
              c.signingProperties || {},
              {
                signing_region: a.signingRegion,
                signingRegion: a.signingRegion,
                signing_service: a.signingName,
                signingName: a.signingName,
                signingRegionSet: a.signingRegionSet,
              },
              a.properties,
            ));
        }
        return r({ ...o });
      },
    A6i = {
      step: "serialize",
      tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
      name: "endpointV2Middleware",
      override: !0,
      relation: "before",
      toMiddleware: GNa.serializerMiddlewareOption.name,
    },
    JNa = (t, e) => ({
      applyToStack: (r) => {
        r.addRelativeTo(b6i({ config: t, instructions: e }), A6i);
      },
    }),
    XNa = (t) => {
      let e = t.tls ?? !0,
        { endpoint: r, useDualstackEndpoint: n, useFipsEndpoint: o } = t,
        s = r != null ? async () => gbr(await Imt.normalizeProvider(r)()) : void 0,
        u = Object.assign(t, {
          endpoint: s,
          tls: e,
          isCustomEndpoint: !!r,
          useDualstackEndpoint: Imt.normalizeProvider(n ?? !1),
          useFipsEndpoint: Imt.normalizeProvider(o ?? !1),
        }),
        c;
      return (
        (u.serviceConfiguredEndpoint = async () => (
          t.serviceId && !c && (c = p6i.getEndpointFromConfig(t.serviceId)),
          c
        )),
        u
      );
    },
    ZNa = (t) => {
      let { endpoint: e } = t;
      return (
        e === void 0 &&
          (t.endpoint = async () => {
            throw new Error(
              "@smithy/middleware-endpoint: (default endpointRuleSet) endpoint is not set - you must configure an endpoint.",
            );
          }),
        t
      );
    };
  BN.endpointMiddleware = b6i;
  BN.endpointMiddlewareOptions = A6i;
  BN.getEndpointFromInstructions = h6i;
  BN.getEndpointPlugin = JNa;
  BN.resolveEndpointConfig = XNa;
  BN.resolveEndpointRequiredConfig = ZNa;
  BN.resolveParams = g6i;
  BN.toEndpointV1 = gbr;
});