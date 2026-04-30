/**
 * @module thr
 * @category model/google
 * @label google-auth
 * @position 1708 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (thr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var thr = T((vme) => {
  "use strict";
  var yTa = Tc(),
    fgi = (t, e) => (r, n) => async (o) => {
      let { response: s } = await r(o);
      try {
        let a = await e(s, t);
        return { response: s, output: a };
      } catch (a) {
        if (
          (Object.defineProperty(a, "$response", { value: s, enumerable: !1, writable: !1, configurable: !1 }),
          !("$metadata" in a))
        ) {
          let u =
            "Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.";
          try {
            a.message +=
              `
  ` + u;
          } catch {
            !n.logger || n.logger?.constructor?.name === "NoOpLogger" ? console.warn(u) : n.logger?.warn?.(u);
          }
          typeof a.$responseBodyText < "u" && a.$response && (a.$response.body = a.$responseBodyText);
          try {
            if (yTa.HttpResponse.isInstance(s)) {
              let { headers: c = {} } = s,
                m = Object.entries(c);
              a.$metadata = {
                httpStatusCode: s.statusCode,
                requestId: ehr(/^x-[\w-]+-request-?id$/, m),
                extendedRequestId: ehr(/^x-[\w-]+-id-2$/, m),
                cfId: ehr(/^x-[\w-]+-cf-id$/, m),
              };
            }
          } catch {}
        }
        throw a;
      }
    },
    ehr = (t, e) => (e.find(([r]) => r.match(t)) || [void 0, void 0])[1],
    pgi = (t, e) => (r, n) => async (o) => {
      let s = t,
        a = n.endpointV2?.url && s.urlParser ? async () => s.urlParser(n.endpointV2.url) : s.endpoint;
      if (!a) throw new Error("No valid endpoint provider available.");
      let u = await e(o.input, { ...t, endpoint: a });
      return r({ ...o, request: u });
    },
    hgi = { name: "deserializerMiddleware", step: "deserialize", tags: ["DESERIALIZER"], override: !0 },
    ggi = { name: "serializerMiddleware", step: "serialize", tags: ["SERIALIZER"], override: !0 };
  function _Ta(t, e, r) {
    return {
      applyToStack: (n) => {
        (n.add(fgi(t, r), hgi), n.add(pgi(t, e), ggi));
      },
    };
  }
  vme.deserializerMiddleware = fgi;
  vme.deserializerMiddlewareOption = hgi;
  vme.getSerdePlugin = _Ta;
  vme.serializerMiddleware = pgi;
  vme.serializerMiddlewareOption = ggi;
});
var bgi,
  Agi,
  ETa,
  ygi = j(() => {
    bgi = Se(thr());
    Ilt();
    ((Agi = {
      step: "serialize",
      tags: ["HTTP_AUTH_SCHEME"],
      name: "httpAuthSchemeMiddleware",
      override: !0,
      relation: "before",
      toMiddleware: bgi.serializerMiddlewareOption.name,
    }),
      (ETa = (t, { httpAuthSchemeParametersProvider: e, identityProviderConfigProvider: r }) => ({
        applyToStack: (n) => {
          n.addRelativeTo(USe(t, { httpAuthSchemeParametersProvider: e, identityProviderConfigProvider: r }), Agi);
        },
      })));
  });
var _gi = j(() => {
  Ilt();
  dgi();
  ygi();
});
var Egi,
  vgi,
  vTa,
  CTa,
  rhr,
  nhr = j(() => {
    ((Egi = Se(Tc())),
      (vgi = Se(Hg())),
      (vTa = (t) => (e) => {
        throw e;
      }),
      (CTa = (t, e) => {}),
      (rhr = (t) => (e, r) => async (n) => {
        if (!Egi.HttpRequest.isInstance(n.request)) return e(n);
        let s = (0, vgi.getSmithyContext)(r).selectedHttpAuthScheme;
        if (!s) throw new Error("No HttpAuthScheme was selected: unable to sign request");
        let {
            httpAuthOption: { signingProperties: a = {} },
            identity: u,
            signer: c,
          } = s,
          m = await e({ ...n, request: await c.sign(n.request, u, a) }).catch((c.errorHandler || vTa)(a));
        return ((c.successHandler || CTa)(m.response, a), m);
      }));
  });
var Cgi,
  sK,
  Sgi = j(() => {
    nhr();
    ((Cgi = {
      step: "finalizeRequest",
      tags: ["HTTP_SIGNING"],
      name: "httpSigningMiddleware",
      aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
      override: !0,
      relation: "after",
      toMiddleware: "retryMiddleware",
    }),
      (sK = (t) => ({
        applyToStack: (e) => {
          e.addRelativeTo(rhr(t), Cgi);
        },
      })));
  });
var wgi = j(() => {
  nhr();
  Sgi();
});
var y$,
  xgi = j(() => {
    y$ = (t) => {
      if (typeof t == "function") return t;
      let e = Promise.resolve(t);
      return () => e;
    };
  });
function Tgi(t, e, r, n, o) {
  return async function* (a, u, ...c) {
    let m = u,
      d = a.startingToken ?? m[r],
      f = !0,
      p;
    for (; f; ) {
      if (((m[r] = d), o && (m[o] = m[o] ?? a.pageSize), a.client instanceof t))
        p = await STa(e, a.client, u, a.withCommand, ...c);
      else throw new Error(`Invalid client, expected instance of ${t.name}`);
      yield p;
      let h = d;
      ((d = wTa(p, n)), (f = !!(d && (!a.stopOnSameToken || d !== h))));
    }
    return void 0;
  };
}
var STa,
  wTa,
  Dgi = j(() => {
    STa = async (t, e, r, n = (s) => s, ...o) => {
      let s = new t(r);
      return ((s = n(s) ?? s), await e.send(s, ...o));
    };
    wTa = (t, e) => {
      let r = t,
        n = e.split(".");
      for (let o of n) {
        if (!r || typeof r != "object") return;
        r = r[o];
      }
      return r;
    };
  });