/**
 * @module Amt
 * @category network/express
 * @label express
 * @position 1764 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Amt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Amt = T((fl) => {
  "use strict";
  var cwe = Tc(),
    H8i = Ga(),
    Q8i = aK(),
    wka = Zgr(),
    xka = S0t(),
    hmt = pmt(),
    Tka = (Wp(), bt(iI)),
    V8i = (EA(), bt(hK));
  yN();
  var Dka = Hg(),
    Ika = "content-length",
    Rka = "x-amz-decoded-content-length";
  function W8i() {
    return (t, e) => async (r) => {
      let { request: n } = r;
      if (cwe.HttpRequest.isInstance(n) && !(Ika in n.headers) && !(Rka in n.headers)) {
        let o =
          "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage.";
        typeof e?.logger?.warn == "function" && !(e.logger instanceof H8i.NoOpLogger)
          ? e.logger.warn(o)
          : console.warn(o);
      }
      return t({ ...r });
    };
  }
  var z8i = {
      step: "finalizeRequest",
      tags: ["CHECK_CONTENT_LENGTH_HEADER"],
      name: "getCheckContentLengthHeaderPlugin",
      override: !0,
    },
    kka = (t) => ({
      applyToStack: (e) => {
        e.add(W8i(), z8i);
      },
    }),
    Y8i = (t) => (e, r) => async (n) => {
      let o = await t.region(),
        s = t.region,
        a = () => {};
      r.__s3RegionRedirect &&
        (Object.defineProperty(t, "region", { writable: !1, value: async () => r.__s3RegionRedirect }),
        (a = () => Object.defineProperty(t, "region", { writable: !0, value: s })));
      try {
        let u = await e(n);
        if (r.__s3RegionRedirect) {
          a();
          let c = await t.region();
          if (o !== c) throw new Error("Region was not restored following S3 region redirect.");
        }
        return u;
      } catch (u) {
        throw (a(), u);
      }
    },
    K8i = {
      tags: ["REGION_REDIRECT", "S3"],
      name: "regionRedirectEndpointMiddleware",
      override: !0,
      relation: "before",
      toMiddleware: "endpointV2Middleware",
    };
  function J8i(t) {
    return (e, r) => async (n) => {
      try {
        return await e(n);
      } catch (o) {
        if (t.followRegionRedirects) {
          let s = o?.$metadata?.httpStatusCode,
            a = r.commandName === "HeadBucketCommand",
            u = o?.$response?.headers?.["x-amz-bucket-region"];
          if (u && (s === 301 || (s === 400 && (o?.name === "IllegalLocationConstraintException" || a)))) {
            try {
              let c = u;
              (r.logger?.debug(`Redirecting from ${await t.region()} to ${c}`), (r.__s3RegionRedirect = c));
            } catch (c) {
              throw new Error("Region redirect failed: " + c);
            }
            return e(n);
          }
        }
        throw o;
      }
    };
  }
  var X8i = { step: "initialize", tags: ["REGION_REDIRECT", "S3"], name: "regionRedirectMiddleware", override: !0 },
    Oka = (t) => ({
      applyToStack: (e) => {
        (e.add(J8i(t), X8i), e.addRelativeTo(Y8i(t), K8i));
      },
    }),
    Z8i = (t) => (e, r) => async (n) => {
      let o = await e(n),
        { response: s } = o;
      if (cwe.HttpResponse.isInstance(s) && s.headers.expires) {
        s.headers.expiresstring = s.headers.expires;
        try {
          H8i.parseRfc7231DateTime(s.headers.expires);
        } catch (a) {
          (r.logger?.warn(
            `AWS SDK Warning for ${r.clientName}::${r.commandName} response parsing (${s.headers.expires}): ${a}`,
          ),
            delete s.headers.expires);
        }
      }
      return o;
    },
    e9i = {
      tags: ["S3"],
      name: "s3ExpiresMiddleware",
      override: !0,
      relation: "after",
      toMiddleware: "deserializerMiddleware",
    },
    Nka = (t) => ({
      applyToStack: (e) => {
        e.addRelativeTo(Z8i(), e9i);
      },
    }),
    gmt = class t {
      data;
      lastPurgeTime = Date.now();
      static EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS = 3e4;
      constructor(e = {}) {
        this.data = e;
      }
      get(e) {
        let r = this.data[e];
        if (r) return r;
      }
      set(e, r) {
        return ((this.data[e] = r), r);
      }
      delete(e) {
        delete this.data[e];
      }
      async purgeExpired() {
        let e = Date.now();
        if (!(this.lastPurgeTime + t.EXPIRED_CREDENTIAL_PURGE_INTERVAL_MS > e))
          for (let r in this.data) {
            let n = this.data[r];
            if (!n.isRefreshing) {
              let o = await n.identity;
              o.expiration && o.expiration.getTime() < e && delete this.data[r];
            }
          }
      }
    },
    Kme = class {
      _identity;
      isRefreshing;
      accessed;
      constructor(e, r = !1, n = Date.now()) {
        ((this._identity = e), (this.isRefreshing = r), (this.accessed = n));
      }
      get identity() {
        return ((this.accessed = Date.now()), this._identity);
      }
    },
    bmt = class t {
      createSessionFn;
      cache;
      static REFRESH_WINDOW_MS = 6e4;
      constructor(e, r = new gmt()) {
        ((this.createSessionFn = e), (this.cache = r));
      }
      async getS3ExpressIdentity(e, r) {
        let n = r.Bucket,
          { cache: o } = this,
          s = o.get(n);
        return s
          ? s.identity.then((a) =>
              (a.expiration?.getTime() ?? 0) < Date.now()
                ? o.set(n, new Kme(this.getIdentity(n))).identity
                : ((a.expiration?.getTime() ?? 0) < Date.now() + t.REFRESH_WINDOW_MS &&
                    !s.isRefreshing &&
                    ((s.isRefreshing = !0),
                    this.getIdentity(n).then((m) => {
                      o.set(n, new Kme(Promise.resolve(m)));
                    })),
                  a),
            )
          : o.set(n, new Kme(this.getIdentity(n))).identity;
      }
      async getIdentity(e) {
        await this.cache.purgeExpired().catch((o) => {
          console.warn(
            `Error while clearing expired entries in S3ExpressIdentityCache: 
` + o,
          );
        });
        let r = await this.createSessionFn(e);
        if (!r.Credentials?.AccessKeyId || !r.Credentials?.SecretAccessKey)
          throw new Error("s3#createSession response credential missing AccessKeyId or SecretAccessKey.");
        return {
          accessKeyId: r.Credentials.AccessKeyId,
          secretAccessKey: r.Credentials.SecretAccessKey,
          sessionToken: r.Credentials.SessionToken,
          expiration: r.Credentials.Expiration ? new Date(r.Credentials.Expiration) : void 0,
        };
      }
    },
    Pka = "Directory",
    Bka = "S3Express",
    Lka = "sigv4-s3express",
    ebr = "X-Amz-S3session-Token",
    tbr = ebr.toLowerCase(),
    Mka = "AWS_S3_DISABLE_EXPRESS_SESSION_AUTH",
    Fka = "s3_disable_express_session_auth",
    Uka = {
      environmentVariableSelector: (t) => hmt.booleanSelector(t, Mka, hmt.SelectorType.ENV),
      configFileSelector: (t) => hmt.booleanSelector(t, Fka, hmt.SelectorType.CONFIG),
      default: !1,
    },
    rbr = class extends xka.SignatureV4 {
      async signWithCredentials(e, r, n) {
        let o = G8i(r);
        e.headers[tbr] = r.sessionToken;
        let s = this;
        return (q8i(s, o), s.signRequest(e, n ?? {}));
      }
      async presignWithCredentials(e, r, n) {
        let o = G8i(r);
        return (
          delete e.headers[tbr],
          (e.headers[ebr] = r.sessionToken),
          (e.query = e.query ?? {}),
          (e.query[ebr] = r.sessionToken),
          q8i(this, o),
          this.presign(e, n)
        );
      }
    };
  function G8i(t) {
    return { accessKeyId: t.accessKeyId, secretAccessKey: t.secretAccessKey, expiration: t.expiration };
  }
  function q8i(t, e) {
    let r = setTimeout(() => {
        throw new Error("SignatureV4S3Express credential override was created but not called.");
      }, 10),
      n = t.credentialProvider,
      o = () => (clearTimeout(r), (t.credentialProvider = n), Promise.resolve(e));
    t.credentialProvider = o;
  }
  var t9i = (t) => (e, r) => async (n) => {
      if (r.endpointV2) {
        let o = r.endpointV2,
          s = o.properties?.authSchemes?.[0]?.name === Lka;
        if (
          ((o.properties?.backend === Bka || o.properties?.bucketType === Pka) &&
            (Tka.setFeature(r, "S3_EXPRESS_BUCKET", "J"), (r.isS3ExpressBucket = !0)),
          s)
        ) {
          let u = n.input.Bucket;
          if (u) {
            let c = await t.s3ExpressIdentityProvider.getS3ExpressIdentity(await t.credentials(), { Bucket: u });
            ((r.s3ExpressIdentity = c),
              cwe.HttpRequest.isInstance(n.request) && c.sessionToken && (n.request.headers[tbr] = c.sessionToken));
          }
        }
      }
      return e(n);
    },
    r9i = { name: "s3ExpressMiddleware", step: "build", tags: ["S3", "S3_EXPRESS"], override: !0 },
    $ka = (t) => ({
      applyToStack: (e) => {
        e.add(t9i(t), r9i);
      },
    }),
    jka = async (t, e, r, n) => {
      let o = await n.signWithCredentials(r, t, {});
      if (o.headers["X-Amz-Security-Token"] || o.headers["x-amz-security-token"])
        throw new Error("X-Amz-Security-Token must not be set for s3-express requests.");
      return o;
    },
    Qka = (t) => (e) => {
      throw e;
    },
    Gka = (t, e) => {},
    qka = V8i.httpSigningMiddlewareOptions,
    n9i = (t) => (e, r) => async (n) => {
      if (!cwe.HttpRequest.isInstance(n.request)) return e(n);
      let s = Dka.getSmithyContext(r).selectedHttpAuthScheme;
      if (!s) throw new Error("No HttpAuthScheme was selected: unable to sign request");
      let {
          httpAuthOption: { signingProperties: a = {} },
          identity: u,
          signer: c,
        } = s,
        m;
      r.s3ExpressIdentity
        ? (m = await jka(r.s3ExpressIdentity, a, n.request, await t.signer()))
        : (m = await c.sign(n.request, u, a));
      let d = await e({ ...n, request: m }).catch((c.errorHandler || Qka)(a));
      return ((c.successHandler || Gka)(d.response, a), d);
    },
    Hka = (t) => ({
      applyToStack: (e) => {
        e.addRelativeTo(n9i(t), V8i.httpSigningMiddlewareOptions);
      },
    }),
    Vka = (t, { session: e }) => {
      let [r, n] = e,
        {
          forcePathStyle: o,
          useAccelerateEndpoint: s,
          disableMultiregionAccessPoints: a,
          followRegionRedirects: u,
          s3ExpressIdentityProvider: c,
          bucketEndpoint: m,
          expectContinueHeader: d,
        } = t;
      return Object.assign(t, {
        forcePathStyle: o ?? !1,
        useAccelerateEndpoint: s ?? !1,
        disableMultiregionAccessPoints: a ?? !1,
        followRegionRedirects: u ?? !1,
        s3ExpressIdentityProvider: c ?? new bmt(async (f) => r().send(new n({ Bucket: f }))),
        bucketEndpoint: m ?? !1,
        expectContinueHeader: d ?? 2097152,
      });
    },
    Wka = { CopyObjectCommand: !0, UploadPartCopyCommand: !0, CompleteMultipartUploadCommand: !0 },
    zka = 3e3,
    i9i = (t) => (e, r) => async (n) => {
      let o = await e(n),
        { response: s } = o;
      if (!cwe.HttpResponse.isInstance(s)) return o;
      let { statusCode: a, body: u } = s;
      if (
        a < 200 ||
        a >= 300 ||
        !(typeof u?.stream == "function" || typeof u?.pipe == "function" || typeof u?.tee == "function")
      )
        return o;
      let m = u,
        d = u;
      (u && typeof u == "object" && !(u instanceof Uint8Array) && ([m, d] = await Q8i.splitStream(u)), (s.body = d));
      let f = await Yka(m, { streamCollector: async (h) => Q8i.headStream(h, zka) });
      typeof m?.destroy == "function" && m.destroy();
      let p = t.utf8Encoder(f.subarray(f.length - 16));
      if (f.length === 0 && Wka[r.commandName]) {
        let h = new Error("S3 aborted request");
        throw ((h.name = "InternalError"), h);
      }
      return (p && p.endsWith("</Error>") && (s.statusCode = 400), o);
    },
    Yka = (t = new Uint8Array(), e) =>
      t instanceof Uint8Array ? Promise.resolve(t) : e.streamCollector(t) || Promise.resolve(new Uint8Array()),
    o9i = {
      relation: "after",
      toMiddleware: "deserializerMiddleware",
      tags: ["THROW_200_EXCEPTIONS", "S3"],
      name: "throw200ExceptionsMiddleware",
      override: !0,
    },
    Kka = (t) => ({
      applyToStack: (e) => {
        e.addRelativeTo(i9i(t), o9i);
      },
    });
  function Jka(t) {
    return (e, r) => async (n) => {
      if (t.bucketEndpoint) {
        let o = r.endpointV2;
        if (o) {
          let s = n.input.Bucket;
          if (typeof s == "string")
            try {
              let a = new URL(s);
              r.endpointV2 = { ...o, url: a };
            } catch (a) {
              let u = `@aws-sdk/middleware-sdk-s3: bucketEndpoint=true was set but Bucket=${s} could not be parsed as URL.`;
              throw (r.logger?.constructor?.name === "NoOpLogger" ? console.warn(u) : r.logger?.warn?.(u), a);
            }
        }
      }
      return e(n);
    };
  }
  var Xka = { name: "bucketEndpointMiddleware", override: !0, relation: "after", toMiddleware: "endpointV2Middleware" };
  function s9i({ bucketEndpoint: t }) {
    return (e) => async (r) => {
      let {
        input: { Bucket: n },
      } = r;
      if (!t && typeof n == "string" && !wka.validate(n) && n.indexOf("/") >= 0) {
        let o = new Error(`Bucket name shouldn't contain '/', received '${n}'`);
        throw ((o.name = "InvalidBucketName"), o);
      }
      return e({ ...r });
    };
  }
  var a9i = { step: "initialize", tags: ["VALIDATE_BUCKET_NAME"], name: "validateBucketNameMiddleware", override: !0 },
    Zka = (t) => ({
      applyToStack: (e) => {
        (e.add(s9i(t), a9i), e.addRelativeTo(Jka(t), Xka));
      },
    });
  fl.NODE_DISABLE_S3_EXPRESS_SESSION_AUTH_OPTIONS = Uka;
  fl.S3ExpressIdentityCache = gmt;
  fl.S3ExpressIdentityCacheEntry = Kme;
  fl.S3ExpressIdentityProviderImpl = bmt;
  fl.SignatureV4S3Express = rbr;
  fl.checkContentLengthHeader = W8i;
  fl.checkContentLengthHeaderMiddlewareOptions = z8i;
  fl.getCheckContentLengthHeaderPlugin = kka;
  fl.getRegionRedirectMiddlewarePlugin = Oka;
  fl.getS3ExpiresMiddlewarePlugin = Nka;
  fl.getS3ExpressHttpSigningPlugin = Hka;
  fl.getS3ExpressPlugin = $ka;
  fl.getThrow200ExceptionsPlugin = Kka;
  fl.getValidateBucketNamePlugin = Zka;
  fl.regionRedirectEndpointMiddleware = Y8i;
  fl.regionRedirectEndpointMiddlewareOptions = K8i;
  fl.regionRedirectMiddleware = J8i;
  fl.regionRedirectMiddlewareOptions = X8i;
  fl.resolveS3Config = Vka;
  fl.s3ExpiresMiddleware = Z8i;
  fl.s3ExpiresMiddlewareOptions = e9i;
  fl.s3ExpressHttpSigningMiddleware = n9i;
  fl.s3ExpressHttpSigningMiddlewareOptions = qka;
  fl.s3ExpressMiddleware = t9i;
  fl.s3ExpressMiddlewareOptions = r9i;
  fl.throw200ExceptionsMiddleware = i9i;
  fl.throw200ExceptionsMiddlewareOptions = o9i;
  fl.validateBucketNameMiddleware = s9i;
  fl.validateBucketNameMiddlewareOptions = a9i;
});
var F$ = T((_K) => {
  "use strict";
  var ibr = yN(),
    obr = class {
      capacity;
      data = new Map();
      parameters = [];
      constructor({ size: e, params: r }) {
        ((this.capacity = e ?? 50), r && (this.parameters = r));
      }
      get(e, r) {
        let n = this.hash(e);
        if (n === !1) return r();
        if (!this.data.has(n)) {
          if (this.data.size > this.capacity + 10) {
            let o = this.data.keys(),
              s = 0;
            for (;;) {
              let { value: a, done: u } = o.next();
              if ((this.data.delete(a), u || ++s > 10)) break;
            }
          }
          this.data.set(n, r());
        }
        return this.data.get(n);
      }
      size() {
        return this.data.size;
      }
      hash(e) {
        let r = "",
          { parameters: n } = this;
        if (n.length === 0) return !1;
        for (let o of n) {
          let s = String(e[o] ?? "");
          if (s.includes("|;")) return !1;
          r += s + "|;";
        }
        return r;
      }
    },
    eOa = new RegExp(
      "^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$",
    ),
    u9i = (t) => eOa.test(t) || (t.startsWith("[") && t.endsWith("]")),
    tOa = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"),
    abr = (t, e = !1) => {
      if (!e) return tOa.test(t);
      let r = t.split(".");
      for (let n of r) if (!abr(n)) return !1;
      return !0;
    },
    sbr = {},
    lwe = "endpoints";
  function M$(t) {
    return typeof t != "object" || t == null
      ? t
      : "ref" in t
        ? `$${M$(t.ref)}`
        : "fn" in t
          ? `${t.fn}(${(t.argv || []).map(M$).join(", ")})`
          : JSON.stringify(t, null, 2);
  }
  var SA = class extends Error {
      constructor(e) {
        (super(e), (this.name = "EndpointError"));
      }
    },
    rOa = (t, e) => t === e,
    nOa = (t) => {
      let e = t.split("."),
        r = [];
      for (let n of e) {
        let o = n.indexOf("[");
        if (o !== -1) {
          if (n.indexOf("]") !== n.length - 1) throw new SA(`Path: '${t}' does not end with ']'`);
          let s = n.slice(o + 1, -1);
          if (Number.isNaN(parseInt(s))) throw new SA(`Invalid array index: '${s}' in path: '${t}'`);
          (o !== 0 && r.push(n.slice(0, o)), r.push(s));
        } else r.push(n);
      }
      return r;
    },
    c9i = (t, e) =>
      nOa(e).reduce((r, n) => {
        if (typeof r != "object") throw new SA(`Index '${n}' in '${e}' not found in '${JSON.stringify(t)}'`);
        return Array.isArray(r) ? r[parseInt(n)] : r[n];
      }, t),
    iOa = (t) => t != null,
    oOa = (t) => !t,
    nbr = { [ibr.EndpointURLScheme.HTTP]: 80, [ibr.EndpointURLScheme.HTTPS]: 443 },
    sOa = (t) => {
      let e = (() => {
        try {
          if (t instanceof URL) return t;
          if (typeof t == "object" && "hostname" in t) {
            let { hostname: p, port: h, protocol: g = "", path: b = "", query: A = {} } = t,
              y = new URL(`${g}//${p}${h ? `:${h}` : ""}${b}`);
            return (
              (y.search = Object.entries(A)
                .map(([E, v]) => `${E}=${v}`)
                .join("&")),
              y
            );
          }
          return new URL(t);
        } catch {
          return null;
        }
      })();
      if (!e) return (console.error(`Unable to parse ${JSON.stringify(t)} as a whatwg URL.`), null);
      let r = e.href,
        { host: n, hostname: o, pathname: s, protocol: a, search: u } = e;
      if (u) return null;
      let c = a.slice(0, -1);
      if (!Object.values(ibr.EndpointURLScheme).includes(c)) return null;
      let m = u9i(o),
        d = r.includes(`${n}:${nbr[c]}`) || (typeof t == "string" && t.includes(`${n}:${nbr[c]}`)),
        f = `${n}${d ? `:${nbr[c]}` : ""}`;
      return { scheme: c, authority: f, path: s, normalizedPath: s.endsWith("/") ? s : `${s}/`, isIp: m };
    },
    aOa = (t, e) => t === e,
    uOa = (t, e, r, n) =>
      e >= r || t.length < r ? null : n ? t.substring(t.length - r, t.length - e) : t.substring(e, r),
    cOa = (t) => encodeURIComponent(t).replace(/[!*'()]/g, (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`),
    lOa = {
      booleanEquals: rOa,
      getAttr: c9i,
      isSet: iOa,
      isValidHostLabel: abr,
      not: oOa,
      parseURL: sOa,
      stringEquals: aOa,
      substring: uOa,
      uriEncode: cOa,
    },
    l9i = (t, e) => {
      let r = [],
        n = { ...e.endpointParams, ...e.referenceRecord },
        o = 0;
      for (; o < t.length; ) {
        let s = t.indexOf("{", o);
        if (s === -1) {
          r.push(t.slice(o));
          break;
        }
        r.push(t.slice(o, s));
        let a = t.indexOf("}", s);
        if (a === -1) {
          r.push(t.slice(s));
          break;
        }
        t[s + 1] === "{" && t[a + 1] === "}" && (r.push(t.slice(s + 1, a)), (o = a + 2));
        let u = t.substring(s + 1, a);
        if (u.includes("#")) {
          let [c, m] = u.split("#");
          r.push(c9i(n[c], m));
        } else r.push(n[u]);
        o = a + 1;
      }
      return r.join("");
    },
    mOa = ({ ref: t }, e) => ({ ...e.endpointParams, ...e.referenceRecord })[t],
    ymt = (t, e, r) => {
      if (typeof t == "string") return l9i(t, r);
      if (t.fn) return d9i.callFunction(t, r);
      if (t.ref) return mOa(t, r);
      throw new SA(`'${e}': ${String(t)} is not a string, function or reference.`);
    },
    m9i = ({ fn: t, argv: e }, r) => {
      let n = e.map((s) => (["boolean", "number"].includes(typeof s) ? s : d9i.evaluateExpression(s, "arg", r))),
        o = t.split(".");
      return o[0] in sbr && o[1] != null ? sbr[o[0]][o[1]](...n) : lOa[t](...n);
    },
    d9i = { evaluateExpression: ymt, callFunction: m9i },
    dOa = ({ assign: t, ...e }, r) => {
      if (t && t in r.referenceRecord) throw new SA(`'${t}' is already defined in Reference Record.`);
      let n = m9i(e, r);
      return (
        r.logger?.debug?.(`${lwe} evaluateCondition: ${M$(e)} = ${M$(n)}`),
        { result: n === "" ? !0 : !!n, ...(t != null && { toAssign: { name: t, value: n } }) }
      );
    },
    ubr = (t = [], e) => {
      let r = {};
      for (let n of t) {
        let { result: o, toAssign: s } = dOa(n, { ...e, referenceRecord: { ...e.referenceRecord, ...r } });
        if (!o) return { result: o };
        s && ((r[s.name] = s.value), e.logger?.debug?.(`${lwe} assign: ${s.name} := ${M$(s.value)}`));
      }
      return { result: !0, referenceRecord: r };
    },
    fOa = (t, e) =>
      Object.entries(t).reduce(
        (r, [n, o]) => ({
          ...r,
          [n]: o.map((s) => {
            let a = ymt(s, "Header value entry", e);
            if (typeof a != "string") throw new SA(`Header '${n}' value '${a}' is not a string`);
            return a;
          }),
        }),
        {},
      ),
    f9i = (t, e) => Object.entries(t).reduce((r, [n, o]) => ({ ...r, [n]: h9i.getEndpointProperty(o, e) }), {}),
    p9i = (t, e) => {
      if (Array.isArray(t)) return t.map((r) => p9i(r, e));
      switch (typeof t) {
        case "string":
          return l9i(t, e);
        case "object":
          if (t === null) throw new SA(`Unexpected endpoint property: ${t}`);
          return h9i.getEndpointProperties(t, e);
        case "boolean":
          return t;
        default:
          throw new SA(`Unexpected endpoint property type: ${typeof t}`);
      }
    },
    h9i = { getEndpointProperty: p9i, getEndpointProperties: f9i },
    pOa = (t, e) => {
      let r = ymt(t, "Endpoint URL", e);
      if (typeof r == "string")
        try {
          return new URL(r);
        } catch (n) {
          throw (console.error(`Failed to construct URL with ${r}`, n), n);
        }
      throw new SA(`Endpoint URL must be a string, got ${typeof r}`);
    },
    hOa = (t, e) => {
      let { conditions: r, endpoint: n } = t,
        { result: o, referenceRecord: s } = ubr(r, e);
      if (!o) return;
      let a = { ...e, referenceRecord: { ...e.referenceRecord, ...s } },
        { url: u, properties: c, headers: m } = n;
      return (
        e.logger?.debug?.(`${lwe} Resolving endpoint from template: ${M$(n)}`),
        { ...(m != null && { headers: fOa(m, a) }), ...(c != null && { properties: f9i(c, a) }), url: pOa(u, a) }
      );
    },
    gOa = (t, e) => {
      let { conditions: r, error: n } = t,
        { result: o, referenceRecord: s } = ubr(r, e);
      if (o) throw new SA(ymt(n, "Error", { ...e, referenceRecord: { ...e.referenceRecord, ...s } }));
    },
    g9i = (t, e) => {
      for (let r of t)
        if (r.type === "endpoint") {
          let n = hOa(r, e);
          if (n) return n;
        } else if (r.type === "error") gOa(r, e);
        else if (r.type === "tree") {
          let n = b9i.evaluateTreeRule(r, e);
          if (n) return n;
        } else throw new SA(`Unknown endpoint rule: ${r}`);
      throw new SA("Rules evaluation failed");
    },
    bOa = (t, e) => {
      let { conditions: r, rules: n } = t,
        { result: o, referenceRecord: s } = ubr(r, e);
      if (o) return b9i.evaluateRules(n, { ...e, referenceRecord: { ...e.referenceRecord, ...s } });
    },
    b9i = { evaluateRules: g9i, evaluateTreeRule: bOa },
    AOa = (t, e) => {
      let { endpointParams: r, logger: n } = e,
        { parameters: o, rules: s } = t;
      e.logger?.debug?.(`${lwe} Initial EndpointParams: ${M$(r)}`);
      let a = Object.entries(o)
        .filter(([, m]) => m.default != null)
        .map(([m, d]) => [m, d.default]);
      if (a.length > 0) for (let [m, d] of a) r[m] = r[m] ?? d;
      let u = Object.entries(o)
        .filter(([, m]) => m.required)
        .map(([m]) => m);
      for (let m of u) if (r[m] == null) throw new SA(`Missing required parameter: '${m}'`);
      let c = g9i(s, { endpointParams: r, logger: n, referenceRecord: {} });
      return (e.logger?.debug?.(`${lwe} Resolved endpoint: ${M$(c)}`), c);
    };
  _K.EndpointCache = obr;
  _K.EndpointError = SA;
  _K.customEndpointFunctions = sbr;
  _K.isIpAddress = u9i;
  _K.isValidHostLabel = abr;
  _K.resolveEndpoint = AOa;
});