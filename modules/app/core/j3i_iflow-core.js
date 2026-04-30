/**
 * @module j3i
 * @category app/core
 * @label iflow-core
 * @position 1706 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (j3i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var j3i = T((xlt) => {
  "use strict";
  var fTa = Tc();
  function U3i(t) {
    return (e) => async (r) => {
      let { request: n } = r;
      if (
        t.expectContinueHeader !== !1 &&
        fTa.HttpRequest.isInstance(n) &&
        n.body &&
        t.runtime === "node" &&
        t.requestHandler?.constructor?.name !== "FetchHttpHandler"
      ) {
        let o = !0;
        if (typeof t.expectContinueHeader == "number")
          try {
            o =
              (Number(n.headers?.["content-length"]) ?? t.bodyLengthChecker?.(n.body) ?? 1 / 0) >=
              t.expectContinueHeader;
          } catch {}
        else o = !!t.expectContinueHeader;
        o && (n.headers.Expect = "100-continue");
      }
      return e({ ...r, request: n });
    };
  }
  var $3i = {
      step: "build",
      tags: ["SET_EXPECT_HEADER", "EXPECT_HEADER"],
      name: "addExpectContinueMiddleware",
      override: !0,
    },
    pTa = (t) => ({
      applyToStack: (e) => {
        e.add(U3i(t), $3i);
      },
    });
  xlt.addExpectContinueMiddleware = U3i;
  xlt.addExpectContinueMiddlewareOptions = $3i;
  xlt.getAddExpectContinuePlugin = pTa;
});
var Tlt,
  g$,
  Q3i = j(() => {
    ((Tlt = { warningEmitted: !1 }),
      (g$ = (t) => {
        t &&
          !Tlt.warningEmitted &&
          parseInt(t.substring(1, t.indexOf("."))) < 20 &&
          ((Tlt.warningEmitted = !0),
          process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js ${t} in January 2026.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/c895JFp`));
      }));
  });
function b$(t, e, r) {
  return (t.$source || (t.$source = {}), (t.$source[e] = r), t);
}
var G3i = j(() => {});
function q3i(t, e, r) {
  (t.__aws_sdk_context
    ? t.__aws_sdk_context.features || (t.__aws_sdk_context.features = {})
    : (t.__aws_sdk_context = { features: {} }),
    (t.__aws_sdk_context.features[e] = r));
}
var H3i = j(() => {});
function V3i(t, e, r) {
  return (t.$source || (t.$source = {}), (t.$source[e] = r), t);
}
var W3i = j(() => {});
var _N = {};
Wi(_N, {
  emitWarningIfUnsupportedVersion: () => g$,
  setCredentialFeature: () => b$,
  setFeature: () => q3i,
  setTokenFeature: () => V3i,
  state: () => Tlt,
});
var _v = j(() => {
  Q3i();
  G3i();
  H3i();
  W3i();
});
var z3i,
  qpr,
  Y3i = j(() => {
    ((z3i = Se(Tc())), (qpr = (t) => (z3i.HttpResponse.isInstance(t) ? (t.headers?.date ?? t.headers?.Date) : void 0)));
  });
var _me,
  Hpr = j(() => {
    _me = (t) => new Date(Date.now() + t);
  });
var K3i,
  J3i = j(() => {
    Hpr();
    K3i = (t, e) => Math.abs(_me(e).getTime() - t) >= 3e5;
  });
var Vpr,
  X3i = j(() => {
    J3i();
    Vpr = (t, e) => {
      let r = Date.parse(t);
      return K3i(r, e) ? r - Date.now() : e;
    };
  });
var Wpr = j(() => {
  Y3i();
  Hpr();
  X3i();
});
var Z3i,
  MSe,
  Eme,
  yA,
  zpr,
  Ypr = j(() => {
    Z3i = Se(Tc());
    Wpr();
    ((MSe = (t, e) => {
      if (!e) throw new Error(`Property \`${t}\` is not resolved for AWS SDK SigV4Auth`);
      return e;
    }),
      (Eme = async (t) => {
        let e = MSe("context", t.context),
          r = MSe("config", t.config),
          n = e.endpointV2?.properties?.authSchemes?.[0],
          s = await MSe("signer", r.signer)(n),
          a = t?.signingRegion,
          u = t?.signingRegionSet,
          c = t?.signingName;
        return { config: r, signer: s, signingRegion: a, signingRegionSet: u, signingName: c };
      }),
      (yA = class {
        async sign(e, r, n) {
          if (!Z3i.HttpRequest.isInstance(e))
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
          let o = await Eme(n),
            { config: s, signer: a } = o,
            { signingRegion: u, signingName: c } = o,
            m = n.context;
          if (m?.authSchemes?.length ?? !1) {
            let [f, p] = m.authSchemes;
            f?.name === "sigv4a" && p?.name === "sigv4" && ((u = p?.signingRegion ?? u), (c = p?.signingName ?? c));
          }
          return await a.sign(e, { signingDate: _me(s.systemClockOffset), signingRegion: u, signingService: c });
        }
        errorHandler(e) {
          return (r) => {
            let n = r.ServerTime ?? qpr(r.$response);
            if (n) {
              let o = MSe("config", e.config),
                s = o.systemClockOffset;
              ((o.systemClockOffset = Vpr(n, o.systemClockOffset)),
                o.systemClockOffset !== s && r.$metadata && (r.$metadata.clockSkewCorrected = !0));
            }
            throw r;
          };
        }
        successHandler(e, r) {
          let n = qpr(e);
          if (n) {
            let o = MSe("config", r.config);
            o.systemClockOffset = Vpr(n, o.systemClockOffset);
          }
        }
      }),
      (zpr = yA));
  });
var egi,
  FSe,
  tgi = j(() => {
    egi = Se(Tc());
    Wpr();
    Ypr();
    FSe = class extends yA {
      async sign(e, r, n) {
        if (!egi.HttpRequest.isInstance(e))
          throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        let { config: o, signer: s, signingRegion: a, signingRegionSet: u, signingName: c } = await Eme(n),
          d = ((await o.sigv4aSigningRegionSet?.()) ?? u ?? [a]).join(",");
        return await s.sign(e, { signingDate: _me(o.systemClockOffset), signingRegion: d, signingService: c });
      }
    };
  });
var Kpr,
  rgi = j(() => {
    Kpr = (t) => (typeof t == "string" && t.length > 0 ? t.split(",").map((e) => e.trim()) : []);
  });
var Dlt,
  Jpr = j(() => {
    Dlt = (t) => `AWS_BEARER_TOKEN_${t.replace(/[\s-]/g, "_").toUpperCase()}`;
  });
var ngi,
  igi,
  A$,
  ogi = j(() => {
    rgi();
    Jpr();
    ((ngi = "AWS_AUTH_SCHEME_PREFERENCE"),
      (igi = "auth_scheme_preference"),
      (A$ = {
        environmentVariableSelector: (t, e) => {
          if (e?.signingName && Dlt(e.signingName) in t) return ["httpBearerAuth"];
          if (ngi in t) return Kpr(t[ngi]);
        },
        configFileSelector: (t) => {
          if (igi in t) return Kpr(t[igi]);
        },
        default: [],
      }));
  });
var Xpr,
  hTa,
  sgi = j(() => {
    ((Xpr = Se(yN())), (hTa = (t) => t[Xpr.SMITHY_CONTEXT_KEY] || (t[Xpr.SMITHY_CONTEXT_KEY] = {})));
  });