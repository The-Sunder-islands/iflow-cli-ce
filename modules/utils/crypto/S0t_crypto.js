/**
 * @module S0t
 * @category utils/crypto
 * @label crypto
 * @position 1737 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (S0t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var S0t = T((Ca) => {
  "use strict";
  var C$ = Hlt(),
    bK = ep(),
    GIa = Rlt(),
    A2i = Tc(),
    h2i = Hg(),
    b0t = ghr(),
    y2i = "X-Amz-Algorithm",
    _2i = "X-Amz-Credential",
    I3r = "X-Amz-Date",
    E2i = "X-Amz-SignedHeaders",
    v2i = "X-Amz-Expires",
    R3r = "X-Amz-Signature",
    k3r = "X-Amz-Security-Token",
    qIa = "X-Amz-Region-Set",
    O3r = "authorization",
    N3r = I3r.toLowerCase(),
    C2i = "date",
    S2i = [O3r, N3r, C2i],
    w2i = R3r.toLowerCase(),
    v0t = "x-amz-content-sha256",
    x2i = k3r.toLowerCase(),
    HIa = "host",
    T2i = {
      authorization: !0,
      "cache-control": !0,
      connection: !0,
      expect: !0,
      from: !0,
      "keep-alive": !0,
      "max-forwards": !0,
      pragma: !0,
      referer: !0,
      te: !0,
      trailer: !0,
      "transfer-encoding": !0,
      upgrade: !0,
      "user-agent": !0,
      "x-amzn-trace-id": !0,
    },
    D2i = /^proxy-/,
    I2i = /^sec-/,
    VIa = [/^proxy-/i, /^sec-/i],
    A0t = "AWS4-HMAC-SHA256",
    WIa = "AWS4-ECDSA-P256-SHA256",
    R2i = "AWS4-HMAC-SHA256-PAYLOAD",
    k2i = "UNSIGNED-PAYLOAD",
    O2i = 50,
    P3r = "aws4_request",
    N2i = 3600 * 24 * 7,
    Nme = {},
    y0t = [],
    _0t = (t, e, r) => `${t}/${e}/${r}/${P3r}`,
    P2i = async (t, e, r, n, o) => {
      let s = await g2i(t, e.secretAccessKey, e.accessKeyId),
        a = `${r}:${n}:${o}:${C$.toHex(s)}:${e.sessionToken}`;
      if (a in Nme) return Nme[a];
      for (y0t.push(a); y0t.length > O2i; ) delete Nme[y0t.shift()];
      let u = `AWS4${e.secretAccessKey}`;
      for (let c of [r, n, o, P3r]) u = await g2i(t, u, c);
      return (Nme[a] = u);
    },
    zIa = () => {
      ((y0t.length = 0),
        Object.keys(Nme).forEach((t) => {
          delete Nme[t];
        }));
    },
    g2i = (t, e, r) => {
      let n = new t(e);
      return (n.update(bK.toUint8Array(r)), n.digest());
    },
    S3r = ({ headers: t }, e, r) => {
      let n = {};
      for (let o of Object.keys(t).sort()) {
        if (t[o] == null) continue;
        let s = o.toLowerCase();
        ((s in T2i || e?.has(s) || D2i.test(s) || I2i.test(s)) && (!r || (r && !r.has(s)))) ||
          (n[s] = t[o].trim().replace(/\s+/g, " "));
      }
      return n;
    },
    E0t = async ({ headers: t, body: e }, r) => {
      for (let n of Object.keys(t)) if (n.toLowerCase() === v0t) return t[n];
      if (e == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
      if (typeof e == "string" || ArrayBuffer.isView(e) || GIa.isArrayBuffer(e)) {
        let n = new r();
        return (n.update(bK.toUint8Array(e)), C$.toHex(await n.digest()));
      }
      return k2i;
    },
    w3r = class {
      format(e) {
        let r = [];
        for (let s of Object.keys(e)) {
          let a = bK.fromUtf8(s);
          r.push(Uint8Array.from([a.byteLength]), a, this.formatHeaderValue(e[s]));
        }
        let n = new Uint8Array(r.reduce((s, a) => s + a.byteLength, 0)),
          o = 0;
        for (let s of r) (n.set(s, o), (o += s.byteLength));
        return n;
      }
      formatHeaderValue(e) {
        switch (e.type) {
          case "boolean":
            return Uint8Array.from([e.value ? 0 : 1]);
          case "byte":
            return Uint8Array.from([2, e.value]);
          case "short":
            let r = new DataView(new ArrayBuffer(3));
            return (r.setUint8(0, 3), r.setInt16(1, e.value, !1), new Uint8Array(r.buffer));
          case "integer":
            let n = new DataView(new ArrayBuffer(5));
            return (n.setUint8(0, 4), n.setInt32(1, e.value, !1), new Uint8Array(n.buffer));
          case "long":
            let o = new Uint8Array(9);
            return ((o[0] = 5), o.set(e.value.bytes, 1), o);
          case "binary":
            let s = new DataView(new ArrayBuffer(3 + e.value.byteLength));
            (s.setUint8(0, 6), s.setUint16(1, e.value.byteLength, !1));
            let a = new Uint8Array(s.buffer);
            return (a.set(e.value, 3), a);
          case "string":
            let u = bK.fromUtf8(e.value),
              c = new DataView(new ArrayBuffer(3 + u.byteLength));
            (c.setUint8(0, 7), c.setUint16(1, u.byteLength, !1));
            let m = new Uint8Array(c.buffer);
            return (m.set(u, 3), m);
          case "timestamp":
            let d = new Uint8Array(9);
            return ((d[0] = 8), d.set(x3r.fromNumber(e.value.valueOf()).bytes, 1), d);
          case "uuid":
            if (!YIa.test(e.value)) throw new Error(`Invalid UUID received: ${e.value}`);
            let f = new Uint8Array(17);
            return ((f[0] = 9), f.set(C$.fromHex(e.value.replace(/\-/g, "")), 1), f);
        }
      }
    },
    YIa = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
    x3r = class t {
      bytes;
      constructor(e) {
        if (((this.bytes = e), e.byteLength !== 8)) throw new Error("Int64 buffers must be exactly 8 bytes");
      }
      static fromNumber(e) {
        if (e > 9223372036854776e3 || e < -9223372036854776e3)
          throw new Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
        let r = new Uint8Array(8);
        for (let n = 7, o = Math.abs(Math.round(e)); n > -1 && o > 0; n--, o /= 256) r[n] = o;
        return (e < 0 && b2i(r), new t(r));
      }
      valueOf() {
        let e = this.bytes.slice(0),
          r = e[0] & 128;
        return (r && b2i(e), parseInt(C$.toHex(e), 16) * (r ? -1 : 1));
      }
      toString() {
        return String(this.valueOf());
      }
    };
  function b2i(t) {
    for (let e = 0; e < 8; e++) t[e] ^= 255;
    for (let e = 7; e > -1 && (t[e]++, t[e] === 0); e--);
  }
  var B2i = (t, e) => {
      t = t.toLowerCase();
      for (let r of Object.keys(e)) if (t === r.toLowerCase()) return !0;
      return !1;
    },
    L2i = (t, e = {}) => {
      let { headers: r, query: n = {} } = A2i.HttpRequest.clone(t);
      for (let o of Object.keys(r)) {
        let s = o.toLowerCase();
        ((s.slice(0, 6) === "x-amz-" && !e.unhoistableHeaders?.has(s)) || e.hoistableHeaders?.has(s)) &&
          ((n[o] = r[o]), delete r[o]);
      }
      return { ...t, headers: r, query: n };
    },
    T3r = (t) => {
      t = A2i.HttpRequest.clone(t);
      for (let e of Object.keys(t.headers)) S2i.indexOf(e.toLowerCase()) > -1 && delete t.headers[e];
      return t;
    },
    M2i = ({ query: t = {} }) => {
      let e = [],
        r = {};
      for (let n of Object.keys(t)) {
        if (n.toLowerCase() === w2i) continue;
        let o = b0t.escapeUri(n);
        e.push(o);
        let s = t[n];
        typeof s == "string"
          ? (r[o] = `${o}=${b0t.escapeUri(s)}`)
          : Array.isArray(s) &&
            (r[o] = s
              .slice(0)
              .reduce((a, u) => a.concat([`${o}=${b0t.escapeUri(u)}`]), [])
              .sort()
              .join("&"));
      }
      return e
        .sort()
        .map((n) => r[n])
        .filter((n) => n)
        .join("&");
    },
    KIa = (t) =>
      JIa(t)
        .toISOString()
        .replace(/\.\d{3}Z$/, "Z"),
    JIa = (t) =>
      typeof t == "number"
        ? new Date(t * 1e3)
        : typeof t == "string"
          ? Number(t)
            ? new Date(Number(t) * 1e3)
            : new Date(t)
          : t,
    C0t = class {
      service;
      regionProvider;
      credentialProvider;
      sha256;
      uriEscapePath;
      applyChecksum;
      constructor({ applyChecksum: e, credentials: r, region: n, service: o, sha256: s, uriEscapePath: a = !0 }) {
        ((this.service = o),
          (this.sha256 = s),
          (this.uriEscapePath = a),
          (this.applyChecksum = typeof e == "boolean" ? e : !0),
          (this.regionProvider = h2i.normalizeProvider(n)),
          (this.credentialProvider = h2i.normalizeProvider(r)));
      }
      createCanonicalRequest(e, r, n) {
        let o = Object.keys(r).sort();
        return `${e.method}
${this.getCanonicalPath(e)}
${M2i(e)}
${o.map((s) => `${s}:${r[s]}`).join(`
`)}

${o.join(";")}
${n}`;
      }
      async createStringToSign(e, r, n, o) {
        let s = new this.sha256();
        s.update(bK.toUint8Array(n));
        let a = await s.digest();
        return `${o}
${e}
${r}
${C$.toHex(a)}`;
      }
      getCanonicalPath({ path: e }) {
        if (this.uriEscapePath) {
          let r = [];
          for (let s of e.split("/")) s?.length !== 0 && s !== "." && (s === ".." ? r.pop() : r.push(s));
          let n = `${e?.startsWith("/") ? "/" : ""}${r.join("/")}${r.length > 0 && e?.endsWith("/") ? "/" : ""}`;
          return b0t.escapeUri(n).replace(/%2F/g, "/");
        }
        return e;
      }
      validateResolvedCredentials(e) {
        if (typeof e != "object" || typeof e.accessKeyId != "string" || typeof e.secretAccessKey != "string")
          throw new Error("Resolved credential object is not valid");
      }
      formatDate(e) {
        let r = KIa(e).replace(/[\-:]/g, "");
        return { longDate: r, shortDate: r.slice(0, 8) };
      }
      getCanonicalHeaderList(e) {
        return Object.keys(e).sort().join(";");
      }
    },
    D3r = class extends C0t {
      headerFormatter = new w3r();
      constructor({ applyChecksum: e, credentials: r, region: n, service: o, sha256: s, uriEscapePath: a = !0 }) {
        super({ applyChecksum: e, credentials: r, region: n, service: o, sha256: s, uriEscapePath: a });
      }
      async presign(e, r = {}) {
        let {
            signingDate: n = new Date(),
            expiresIn: o = 3600,
            unsignableHeaders: s,
            unhoistableHeaders: a,
            signableHeaders: u,
            hoistableHeaders: c,
            signingRegion: m,
            signingService: d,
          } = r,
          f = await this.credentialProvider();
        this.validateResolvedCredentials(f);
        let p = m ?? (await this.regionProvider()),
          { longDate: h, shortDate: g } = this.formatDate(n);
        if (o > N2i)
          return Promise.reject(
            "Signature version 4 presigned URLs must have an expiration date less than one week in the future",
          );
        let b = _0t(g, p, d ?? this.service),
          A = L2i(T3r(e), { unhoistableHeaders: a, hoistableHeaders: c });
        (f.sessionToken && (A.query[k3r] = f.sessionToken),
          (A.query[y2i] = A0t),
          (A.query[_2i] = `${f.accessKeyId}/${b}`),
          (A.query[I3r] = h),
          (A.query[v2i] = o.toString(10)));
        let y = S3r(A, s, u);
        return (
          (A.query[E2i] = this.getCanonicalHeaderList(y)),
          (A.query[R3r] = await this.getSignature(
            h,
            b,
            this.getSigningKey(f, p, g, d),
            this.createCanonicalRequest(A, y, await E0t(e, this.sha256)),
          )),
          A
        );
      }
      async sign(e, r) {
        return typeof e == "string"
          ? this.signString(e, r)
          : e.headers && e.payload
            ? this.signEvent(e, r)
            : e.message
              ? this.signMessage(e, r)
              : this.signRequest(e, r);
      }
      async signEvent(
        { headers: e, payload: r },
        { signingDate: n = new Date(), priorSignature: o, signingRegion: s, signingService: a },
      ) {
        let u = s ?? (await this.regionProvider()),
          { shortDate: c, longDate: m } = this.formatDate(n),
          d = _0t(c, u, a ?? this.service),
          f = await E0t({ headers: {}, body: r }, this.sha256),
          p = new this.sha256();
        p.update(e);
        let h = C$.toHex(await p.digest()),
          g = [R2i, m, d, o, h, f].join(`
`);
        return this.signString(g, { signingDate: n, signingRegion: u, signingService: a });
      }
      async signMessage(e, { signingDate: r = new Date(), signingRegion: n, signingService: o }) {
        return this.signEvent(
          { headers: this.headerFormatter.format(e.message.headers), payload: e.message.body },
          { signingDate: r, signingRegion: n, signingService: o, priorSignature: e.priorSignature },
        ).then((a) => ({ message: e.message, signature: a }));
      }
      async signString(e, { signingDate: r = new Date(), signingRegion: n, signingService: o } = {}) {
        let s = await this.credentialProvider();
        this.validateResolvedCredentials(s);
        let a = n ?? (await this.regionProvider()),
          { shortDate: u } = this.formatDate(r),
          c = new this.sha256(await this.getSigningKey(s, a, u, o));
        return (c.update(bK.toUint8Array(e)), C$.toHex(await c.digest()));
      }
      async signRequest(
        e,
        {
          signingDate: r = new Date(),
          signableHeaders: n,
          unsignableHeaders: o,
          signingRegion: s,
          signingService: a,
        } = {},
      ) {
        let u = await this.credentialProvider();
        this.validateResolvedCredentials(u);
        let c = s ?? (await this.regionProvider()),
          m = T3r(e),
          { longDate: d, shortDate: f } = this.formatDate(r),
          p = _0t(f, c, a ?? this.service);
        ((m.headers[N3r] = d), u.sessionToken && (m.headers[x2i] = u.sessionToken));
        let h = await E0t(m, this.sha256);
        !B2i(v0t, m.headers) && this.applyChecksum && (m.headers[v0t] = h);
        let g = S3r(m, o, n),
          b = await this.getSignature(d, p, this.getSigningKey(u, c, f, a), this.createCanonicalRequest(m, g, h));
        return (
          (m.headers[O3r] =
            `${A0t} Credential=${u.accessKeyId}/${p}, SignedHeaders=${this.getCanonicalHeaderList(g)}, Signature=${b}`),
          m
        );
      }
      async getSignature(e, r, n, o) {
        let s = await this.createStringToSign(e, r, o, A0t),
          a = new this.sha256(await n);
        return (a.update(bK.toUint8Array(s)), C$.toHex(await a.digest()));
      }
      getSigningKey(e, r, n, o) {
        return P2i(this.sha256, e, n, r, o || this.service);
      }
    },
    XIa = { SignatureV4a: null };
  Ca.ALGORITHM_IDENTIFIER = A0t;
  Ca.ALGORITHM_IDENTIFIER_V4A = WIa;
  Ca.ALGORITHM_QUERY_PARAM = y2i;
  Ca.ALWAYS_UNSIGNABLE_HEADERS = T2i;
  Ca.AMZ_DATE_HEADER = N3r;
  Ca.AMZ_DATE_QUERY_PARAM = I3r;
  Ca.AUTH_HEADER = O3r;
  Ca.CREDENTIAL_QUERY_PARAM = _2i;
  Ca.DATE_HEADER = C2i;
  Ca.EVENT_ALGORITHM_IDENTIFIER = R2i;
  Ca.EXPIRES_QUERY_PARAM = v2i;
  Ca.GENERATED_HEADERS = S2i;
  Ca.HOST_HEADER = HIa;
  Ca.KEY_TYPE_IDENTIFIER = P3r;
  Ca.MAX_CACHE_SIZE = O2i;
  Ca.MAX_PRESIGNED_TTL = N2i;
  Ca.PROXY_HEADER_PATTERN = D2i;
  Ca.REGION_SET_PARAM = qIa;
  Ca.SEC_HEADER_PATTERN = I2i;
  Ca.SHA256_HEADER = v0t;
  Ca.SIGNATURE_HEADER = w2i;
  Ca.SIGNATURE_QUERY_PARAM = R3r;
  Ca.SIGNED_HEADERS_QUERY_PARAM = E2i;
  Ca.SignatureV4 = D3r;
  Ca.SignatureV4Base = C0t;
  Ca.TOKEN_HEADER = x2i;
  Ca.TOKEN_QUERY_PARAM = k3r;
  Ca.UNSIGNABLE_PATTERNS = VIa;
  Ca.UNSIGNED_PAYLOAD = k2i;
  Ca.clearCredentialCache = zIa;
  Ca.createScope = _0t;
  Ca.getCanonicalHeaders = S3r;
  Ca.getCanonicalQuery = M2i;
  Ca.getPayloadHash = E0t;
  Ca.getSigningKey = P2i;
  Ca.hasHeader = B2i;
  Ca.moveHeadersToQuery = L2i;
  Ca.prepareRequest = T3r;
  Ca.signatureV4aContainer = XIa;
});
function ZIa(t, { credentials: e, credentialDefaultProvider: r }) {
  let n;
  return (
    e
      ? e?.memoized
        ? (n = e)
        : (n = _3r(e, y3r, g0t))
      : r
        ? (n = y$(r(Object.assign({}, t, { parentClientConfig: t }))))
        : (n = async () => {
            throw new Error(
              "@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.",
            );
          }),
    (n.memoized = !0),
    n
  );
}
function e7a(t, e) {
  if (e.configBound) return e;
  let r = async (n) => e({ ...n, callerClientConfig: t });
  return ((r.memoized = e.memoized), (r.configBound = !0), r);
}
var B3r,
  xN,
  F2i,
  U2i = j(() => {
    _v();
    EA();
    ((B3r = Se(S0t())),
      (xN = (t) => {
        let e = t.credentials,
          r = !!t.credentials,
          n;
        (Object.defineProperty(t, "credentials", {
          set(m) {
            (m && m !== e && m !== n && (r = !0), (e = m));
            let d = ZIa(t, { credentials: e, credentialDefaultProvider: t.credentialDefaultProvider }),
              f = e7a(t, d);
            if (r && !f.attributed) {
              let p = typeof e == "object" && e !== null;
              ((n = async (h) => {
                let b = await f(h);
                return p && (!b.$source || Object.keys(b.$source).length === 0) ? b$(b, "CREDENTIALS_CODE", "e") : b;
              }),
                (n.memoized = f.memoized),
                (n.configBound = f.configBound),
                (n.attributed = !0));
            } else n = f;
          },
          get() {
            return n;
          },
          enumerable: !0,
          configurable: !0,
        }),
          (t.credentials = e));
        let { signingEscapePath: o = !0, systemClockOffset: s = t.systemClockOffset || 0, sha256: a } = t,
          u;
        return (
          t.signer
            ? (u = y$(t.signer))
            : t.regionInfoProvider
              ? (u = () =>
                  y$(t.region)()
                    .then(async (m) => [
                      (await t.regionInfoProvider(m, {
                        useFipsEndpoint: await t.useFipsEndpoint(),
                        useDualstackEndpoint: await t.useDualstackEndpoint(),
                      })) || {},
                      m,
                    ])
                    .then(([m, d]) => {
                      let { signingRegion: f, signingService: p } = m;
                      ((t.signingRegion = t.signingRegion || f || d),
                        (t.signingName = t.signingName || p || t.serviceId));
                      let h = {
                          ...t,
                          credentials: t.credentials,
                          region: t.signingRegion,
                          service: t.signingName,
                          sha256: a,
                          uriEscapePath: o,
                        },
                        g = t.signerConstructor || B3r.SignatureV4;
                      return new g(h);
                    }))
              : (u = async (m) => {
                  m = Object.assign(
                    {},
                    {
                      name: "sigv4",
                      signingName: t.signingName || t.defaultSigningName,
                      signingRegion: await y$(t.region)(),
                      properties: {},
                    },
                    m,
                  );
                  let d = m.signingRegion,
                    f = m.signingName;
                  ((t.signingRegion = t.signingRegion || d), (t.signingName = t.signingName || f || t.serviceId));
                  let p = {
                      ...t,
                      credentials: t.credentials,
                      region: t.signingRegion,
                      service: t.signingName,
                      sha256: a,
                      uriEscapePath: o,
                    },
                    h = t.signerConstructor || B3r.SignatureV4;
                  return new h(p);
                }),
          Object.assign(t, { systemClockOffset: s, signingEscapePath: o, signer: u })
        );
      }),
      (F2i = xN));
  });
var $2i = j(() => {
  Ypr();
  tgi();
  ogi();
  p2i();
  U2i();
});
var j2i = {};
Wi(j2i, {
  AWSSDKSigV4Signer: () => zpr,
  AwsSdkSigV4ASigner: () => FSe,
  AwsSdkSigV4Signer: () => yA,
  NODE_AUTH_SCHEME_PREFERENCE_OPTIONS: () => A$,
  NODE_SIGV4A_CONFIG_OPTIONS: () => f2i,
  getBearerTokenEnvKey: () => Dlt,
  resolveAWSSDKSigV4Config: () => F2i,
  resolveAwsSdkSigV4AConfig: () => d2i,
  resolveAwsSdkSigV4Config: () => xN,
  validateSigningProperties: () => Eme,
});
var L3r = j(() => {
  $2i();
  Jpr();
});
function S$(t) {
  return typeof Buffer < "u" ? Buffer.alloc(t) : new Uint8Array(t);
}
function w0t(t) {
  return ((t[M3r] = !0), t);
}
var M3r,
  x0t = j(() => {
    M3r = Symbol("@smithy/core/cbor::tagSymbol");
  });
function q2i(t) {
  ((o0 = t), (DN = new DataView(o0.buffer, o0.byteOffset, o0.byteLength)));
}
function nI(t, e) {
  if (t >= e) throw new Error("unexpected end of (decode) payload.");
  let r = (o0[t] & 224) >> 5,
    n = o0[t] & 31;
  switch (r) {
    case 0:
    case 1:
    case 6:
      let o, s;
      if (n < 24) ((o = n), (s = 1));
      else
        switch (n) {
          case 24:
          case 25:
          case 26:
          case 27:
            let a = V2i[n],
              u = a + 1;
            if (((s = u), e - t < u)) throw new Error(`countLength ${a} greater than remaining buf len.`);
            let c = t + 1;
            a === 1
              ? (o = o0[c])
              : a === 2
                ? (o = DN.getUint16(c))
                : a === 4
                  ? (o = DN.getUint32(c))
                  : (o = DN.getBigUint64(c));
            break;
          default:
            throw new Error(`unexpected minor value ${n}.`);
        }
      if (r === 0) return ((Xa = s), F3r(o));
      if (r === 1) {
        let a;
        return (typeof o == "bigint" ? (a = BigInt(-1) - o) : (a = -1 - o), (Xa = s), F3r(a));
      } else if (n === 2 || n === 3) {
        let a = twe(t + s, e),
          u = BigInt(0),
          c = t + s + Xa;
        for (let m = c; m < c + a; ++m) u = (u << BigInt(8)) | BigInt(o0[m]);
        return ((Xa = s + Xa + a), n === 3 ? -u - BigInt(1) : u);
      } else if (n === 4) {
        let a = nI(t + s, e),
          [u, c] = a,
          m = c < 0 ? -1 : 1,
          d = "0".repeat(Math.abs(u) + 1) + String(BigInt(m) * BigInt(c)),
          f,
          p = c < 0 ? "-" : "";
        return (
          (f = u === 0 ? d : d.slice(0, d.length + u) + "." + d.slice(u)),
          (f = f.replace(/^0+/g, "")),
          f === "" && (f = "0"),
          f[0] === "." && (f = "0" + f),
          (f = p + f),
          (Xa = s + Xa),
          a3r(f)
        );
      } else {
        let a = nI(t + s, e);
        return ((Xa = s + Xa), w0t({ tag: F3r(o), value: a }));
      }
    case 3:
    case 5:
    case 4:
    case 2:
      if (n === 31)
        switch (r) {
          case 3:
            return a7a(t, e);
          case 5:
            return d7a(t, e);
          case 4:
            return l7a(t, e);
          case 2:
            return u7a(t, e);
        }
      else
        switch (r) {
          case 3:
            return s7a(t, e);
          case 5:
            return m7a(t, e);
          case 4:
            return c7a(t, e);
          case 2:
            return q3r(t, e);
        }
    default:
      return f7a(t, e);
  }
}
function H2i(t, e, r) {
  return n7a && t.constructor?.name === "Buffer"
    ? t.toString("utf-8", e, r)
    : Q2i
      ? Q2i.decode(t.subarray(e, r))
      : (0, G2i.toUtf8)(t.subarray(e, r));
}
function i7a(t) {
  let e = Number(t);
  return (
    (e < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < e) &&
      console.warn(new Error(`@smithy/core/cbor - truncating BigInt(${t}) to ${e} with loss of precision.`)),
    e
  );
}
function o7a(t, e) {
  let r = t >> 7,
    n = (t & 124) >> 2,
    o = ((t & 3) << 8) | e,
    s = r === 0 ? 1 : -1,
    a,
    u;
  if (n === 0) {
    if (o === 0) return 0;
    ((a = Math.pow(2, -14)), (u = 0));
  } else {
    if (n === 31) return o === 0 ? s * (1 / 0) : NaN;
    ((a = Math.pow(2, n - 15)), (u = 1));
  }
  return ((u += o / 1024), s * (a * u));
}
function twe(t, e) {
  let r = o0[t] & 31;
  if (r < 24) return ((Xa = 1), r);
  if (r === 24 || r === 25 || r === 26 || r === 27) {
    let n = V2i[r];
    if (((Xa = n + 1), e - t < Xa)) throw new Error(`countLength ${n} greater than remaining buf len.`);
    let o = t + 1;
    return n === 1 ? o0[o] : n === 2 ? DN.getUint16(o) : n === 4 ? DN.getUint32(o) : i7a(DN.getBigUint64(o));
  }
  throw new Error(`unexpected minor value ${r}.`);
}
function s7a(t, e) {
  let r = twe(t, e),
    n = Xa;
  if (((t += n), e - t < r)) throw new Error(`string len ${r} greater than remaining buf len.`);
  let o = H2i(o0, t, t + r);
  return ((Xa = n + r), o);
}
function a7a(t, e) {
  t += 1;
  let r = [];
  for (let n = t; t < e; ) {
    if (o0[t] === 255) {
      let c = S$(r.length);
      return (c.set(r, 0), (Xa = t - n + 2), H2i(c, 0, c.length));
    }
    let o = (o0[t] & 224) >> 5,
      s = o0[t] & 31;
    if (o !== 3) throw new Error(`unexpected major type ${o} in indefinite string.`);
    if (s === 31) throw new Error("nested indefinite string.");
    let a = q3r(t, e);
    t += Xa;
    for (let c = 0; c < a.length; ++c) r.push(a[c]);
  }
  throw new Error("expected break marker.");
}
function q3r(t, e) {
  let r = twe(t, e),
    n = Xa;
  if (((t += n), e - t < r)) throw new Error(`unstructured byte string len ${r} greater than remaining buf len.`);
  let o = o0.subarray(t, t + r);
  return ((Xa = n + r), o);
}
function u7a(t, e) {
  t += 1;
  let r = [];
  for (let n = t; t < e; ) {
    if (o0[t] === 255) {
      let c = S$(r.length);
      return (c.set(r, 0), (Xa = t - n + 2), c);
    }
    let o = (o0[t] & 224) >> 5,
      s = o0[t] & 31;
    if (o !== 2) throw new Error(`unexpected major type ${o} in indefinite string.`);
    if (s === 31) throw new Error("nested indefinite string.");
    let a = q3r(t, e);
    t += Xa;
    for (let c = 0; c < a.length; ++c) r.push(a[c]);
  }
  throw new Error("expected break marker.");
}
function c7a(t, e) {
  let r = twe(t, e),
    n = Xa;
  t += n;
  let o = t,
    s = Array(r);
  for (let a = 0; a < r; ++a) {
    let u = nI(t, e),
      c = Xa;
    ((s[a] = u), (t += c));
  }
  return ((Xa = n + (t - o)), s);
}
function l7a(t, e) {
  t += 1;
  let r = [];
  for (let n = t; t < e; ) {
    if (o0[t] === 255) return ((Xa = t - n + 2), r);
    let o = nI(t, e);
    ((t += Xa), r.push(o));
  }
  throw new Error("expected break marker.");
}
function m7a(t, e) {
  let r = twe(t, e),
    n = Xa;
  t += n;
  let o = t,
    s = {};
  for (let a = 0; a < r; ++a) {
    if (t >= e) throw new Error("unexpected end of map payload.");
    let u = (o0[t] & 224) >> 5;
    if (u !== 3) throw new Error(`unexpected major type ${u} for map key at index ${t}.`);
    let c = nI(t, e);
    t += Xa;
    let m = nI(t, e);
    ((t += Xa), (s[c] = m));
  }
  return ((Xa = n + (t - o)), s);
}
function d7a(t, e) {
  t += 1;
  let r = t,
    n = {};
  for (; t < e; ) {
    if (t >= e) throw new Error("unexpected end of map payload.");
    if (o0[t] === 255) return ((Xa = t - r + 2), n);
    let o = (o0[t] & 224) >> 5;
    if (o !== 3) throw new Error(`unexpected major type ${o} for map key.`);
    let s = nI(t, e);
    t += Xa;
    let a = nI(t, e);
    ((t += Xa), (n[s] = a));
  }
  throw new Error("expected break marker.");
}
function f7a(t, e) {
  let r = o0[t] & 31;
  switch (r) {
    case 21:
    case 20:
      return ((Xa = 1), r === 21);
    case 22:
      return ((Xa = 1), null);
    case 23:
      return ((Xa = 1), null);
    case 25:
      if (e - t < 3) throw new Error("incomplete float16 at end of buf.");
      return ((Xa = 3), o7a(o0[t + 1], o0[t + 2]));
    case 26:
      if (e - t < 5) throw new Error("incomplete float32 at end of buf.");
      return ((Xa = 5), DN.getFloat32(t + 1));
    case 27:
      if (e - t < 9) throw new Error("incomplete float64 at end of buf.");
      return ((Xa = 9), DN.getFloat64(t + 1));
    default:
      throw new Error(`unexpected minor value ${r}.`);
  }
}
function F3r(t) {
  if (typeof t == "number") return t;
  let e = Number(t);
  return Number.MIN_SAFE_INTEGER <= e && e <= Number.MAX_SAFE_INTEGER ? e : t;
}
var G2i,
  r7a,
  n7a,
  o0,
  DN,
  Q2i,
  Xa,
  V2i,
  W2i = j(() => {
    o5();
    G2i = Se(ep());
    x0t();
    ((r7a = typeof TextDecoder < "u"),
      (n7a = typeof Buffer < "u"),
      (o0 = S$(0)),
      (DN = new DataView(o0.buffer, o0.byteOffset, o0.byteLength)),
      (Q2i = r7a ? new TextDecoder() : null),
      (Xa = 0));
    V2i = { 24: 1, 25: 2, 26: 4, 27: 8 };
  });
function V3r(t) {
  ys.byteLength - lo < t &&
    (lo < 16e6 ? D0t(Math.max(ys.byteLength * 4, ys.byteLength + t)) : D0t(ys.byteLength + t + 16e6));
}
function W3r() {
  let t = S$(lo);
  return (t.set(ys.subarray(0, lo), 0), (lo = 0), t);
}
function D0t(t) {
  let e = ys;
  ((ys = S$(t)),
    e && (e.copy ? e.copy(ys, 0, 0, e.byteLength) : ys.set(e, 0)),
    (kN = new DataView(ys.buffer, ys.byteOffset, ys.byteLength)));
}
function RN(t, e) {
  e < 24
    ? (ys[lo++] = (t << 5) | e)
    : e < 256
      ? ((ys[lo++] = (t << 5) | 24), (ys[lo++] = e))
      : e < 65536
        ? ((ys[lo++] = (t << 5) | 25), kN.setUint16(lo, e), (lo += 2))
        : e < 2 ** 32
          ? ((ys[lo++] = (t << 5) | 26), kN.setUint32(lo, e), (lo += 4))
          : ((ys[lo++] = (t << 5) | 27), kN.setBigUint64(lo, typeof e == "bigint" ? e : BigInt(e)), (lo += 8));
}
function K2i(t) {
  let e = [t];
  for (; e.length; ) {
    let r = e.pop();
    if ((V3r(typeof r == "string" ? r.length * 4 : 64), typeof r == "string")) {
      if (z2i) (RN(3, Buffer.byteLength(r)), (lo += ys.write(r, lo)));
      else {
        let n = (0, Y2i.fromUtf8)(r);
        (RN(3, n.byteLength), ys.set(n, lo), (lo += n.byteLength));
      }
      continue;
    } else if (typeof r == "number") {
      if (Number.isInteger(r)) {
        let n = r >= 0,
          o = n ? 0 : 1,
          s = n ? r : -r - 1;
        s < 24
          ? (ys[lo++] = (o << 5) | s)
          : s < 256
            ? ((ys[lo++] = (o << 5) | 24), (ys[lo++] = s))
            : s < 65536
              ? ((ys[lo++] = (o << 5) | 25), (ys[lo++] = s >> 8), (ys[lo++] = s))
              : s < 4294967296
                ? ((ys[lo++] = (o << 5) | 26), kN.setUint32(lo, s), (lo += 4))
                : ((ys[lo++] = (o << 5) | 27), kN.setBigUint64(lo, BigInt(s)), (lo += 8));
        continue;
      }
      ((ys[lo++] = 251), kN.setFloat64(lo, r), (lo += 8));
      continue;
    } else if (typeof r == "bigint") {
      let n = r >= 0,
        o = n ? 0 : 1,
        s = n ? r : -r - BigInt(1),
        a = Number(s);
      if (a < 24) ys[lo++] = (o << 5) | a;
      else if (a < 256) ((ys[lo++] = (o << 5) | 24), (ys[lo++] = a));
      else if (a < 65536) ((ys[lo++] = (o << 5) | 25), (ys[lo++] = a >> 8), (ys[lo++] = a & 255));
      else if (a < 4294967296) ((ys[lo++] = (o << 5) | 26), kN.setUint32(lo, a), (lo += 4));
      else if (s < BigInt("18446744073709551616")) ((ys[lo++] = (o << 5) | 27), kN.setBigUint64(lo, s), (lo += 8));
      else {
        let u = s.toString(2),
          c = new Uint8Array(Math.ceil(u.length / 8)),
          m = s,
          d = 0;
        for (; c.byteLength - ++d >= 0; ) ((c[c.byteLength - d] = Number(m & BigInt(255))), (m >>= BigInt(8)));
        (V3r(c.byteLength * 2),
          (ys[lo++] = n ? 194 : 195),
          z2i ? RN(2, Buffer.byteLength(c)) : RN(2, c.byteLength),
          ys.set(c, lo),
          (lo += c.byteLength));
      }
      continue;
    } else if (r === null) {
      ys[lo++] = 246;
      continue;
    } else if (typeof r == "boolean") {
      ys[lo++] = 224 | (r ? 21 : 20);
      continue;
    } else {
      if (typeof r > "u") throw new Error("@smithy/core/cbor: client may not serialize undefined value.");
      if (Array.isArray(r)) {
        for (let n = r.length - 1; n >= 0; --n) e.push(r[n]);
        RN(4, r.length);
        continue;
      } else if (typeof r.byteLength == "number") {
        (V3r(r.length * 2), RN(2, r.length), ys.set(r, lo), (lo += r.byteLength));
        continue;
      } else if (typeof r == "object") {
        if (r instanceof em) {
          let o = r.string.indexOf("."),
            s = o === -1 ? 0 : o - r.string.length + 1,
            a = BigInt(r.string.replace(".", ""));
          ((ys[lo++] = 196), e.push(a), e.push(s), RN(4, 2));
          continue;
        }
        if (r[M3r])
          if ("tag" in r && "value" in r) {
            (e.push(r.value), RN(6, r.tag));
            continue;
          } else
            throw new Error("tag encountered with missing fields, need 'tag' and 'value', found: " + JSON.stringify(r));
        let n = Object.keys(r);
        for (let o = n.length - 1; o >= 0; --o) {
          let s = n[o];
          (e.push(r[s]), e.push(s));
        }
        RN(5, n.length);
        continue;
      }
    }
    throw new Error(`data type ${r?.constructor?.name ?? typeof r} not compatible for encoding.`);
  }
}
var Y2i,
  z2i,
  p7a,
  ys,
  kN,
  lo,
  J2i = j(() => {
    o5();
    Y2i = Se(ep());
    x0t();
    ((z2i = typeof Buffer < "u"),
      (p7a = 2048),
      (ys = S$(p7a)),
      (kN = new DataView(ys.buffer, ys.byteOffset, ys.byteLength)),
      (lo = 0));
  });
var z3r,
  X2i = j(() => {
    W2i();
    J2i();
    z3r = {
      deserialize(t) {
        return (q2i(t), nI(0, t.length));
      },
      serialize(t) {
        try {
          return (K2i(t), W3r());
        } catch (e) {
          throw (W3r(), e);
        }
      },
      resizeEncodingBuffer(t) {
        D0t(t);
      },
    };
  });
var I0t,
  R0t,
  k0t = j(() => {
    x0t();
    ((I0t = (t) => w0t({ tag: 1, value: t.getTime() / 1e3 })),
      (R0t = (t, e) => {
        let r = (o) => {
          let s = o;
          return (
            typeof s == "number" && (s = s.toString()),
            s.indexOf(",") >= 0 && (s = s.split(",")[0]),
            s.indexOf(":") >= 0 && (s = s.split(":")[0]),
            s.indexOf("#") >= 0 && (s = s.split("#")[1]),
            s
          );
        };
        if (e.__type !== void 0) return r(e.__type);
        let n = Object.keys(e).find((o) => o.toLowerCase() === "code");
        if (n && e[n] !== void 0) return r(e[n]);
      }));
  });
var J3r,
  O0t,
  Y3r,
  K3r,
  X3r = j(() => {
    g9();
    Wc();
    o5();
    o5();
    J3r = Se(p3());
    X2i();
    k0t();
    ((O0t = class extends s5 {
      createSerializer() {
        let e = new Y3r();
        return (e.setSerdeContext(this.serdeContext), e);
      }
      createDeserializer() {
        let e = new K3r();
        return (e.setSerdeContext(this.serdeContext), e);
      }
    }),
      (Y3r = class extends s5 {
        value;
        write(e, r) {
          this.value = this.serialize(e, r);
        }
        serialize(e, r) {
          let n = ji.of(e);
          if (r == null) return n.isIdempotencyToken() ? (0, vv.v4)() : r;
          if (n.isBlobSchema())
            return typeof r == "string" ? (this.serdeContext?.base64Decoder ?? J3r.fromBase64)(r) : r;
          if (n.isTimestampSchema())
            return typeof r == "number" || typeof r == "bigint" ? I0t(new Date((Number(r) / 1e3) | 0)) : I0t(r);
          if (typeof r == "function" || typeof r == "object") {
            let o = r;
            if (n.isListSchema() && Array.isArray(o)) {
              let a = !!n.getMergedTraits().sparse,
                u = [],
                c = 0;
              for (let m of o) {
                let d = this.serialize(n.getValueSchema(), m);
                (d != null || a) && (u[c++] = d);
              }
              return u;
            }
            if (o instanceof Date) return I0t(o);
            let s = {};
            if (n.isMapSchema()) {
              let a = !!n.getMergedTraits().sparse;
              for (let u of Object.keys(o)) {
                let c = this.serialize(n.getValueSchema(), o[u]);
                (c != null || a) && (s[u] = c);
              }
            } else if (n.isStructSchema()) {
              for (let [u, c] of n.structIterator()) {
                let m = this.serialize(c, o[u]);
                m != null && (s[u] = m);
              }
              if (n.isUnionSchema() && Array.isArray(o.$unknown)) {
                let [u, c] = o.$unknown;
                s[u] = c;
              }
            } else if (n.isDocumentSchema())
              for (let a of Object.keys(o)) s[a] = this.serialize(n.getValueSchema(), o[a]);
            return s;
          }
          return r;
        }
        flush() {
          let e = z3r.serialize(this.value);
          return ((this.value = void 0), e);
        }
      }),
      (K3r = class extends s5 {
        read(e, r) {
          let n = z3r.deserialize(r);
          return this.readValue(e, n);
        }
        readValue(e, r) {
          let n = ji.of(e);
          if (n.isTimestampSchema()) {
            if (typeof r == "number") return Rme(r);
            if (typeof r == "object" && r.tag === 1 && "value" in r) return Rme(r.value);
          }
          if (n.isBlobSchema())
            return typeof r == "string" ? (this.serdeContext?.base64Decoder ?? J3r.fromBase64)(r) : r;
          if (
            typeof r > "u" ||
            typeof r == "boolean" ||
            typeof r == "number" ||
            typeof r == "string" ||
            typeof r == "bigint" ||
            typeof r == "symbol"
          )
            return r;
          if (typeof r == "object") {
            if (r === null) return null;
            if ("byteLength" in r || r instanceof Date || n.isDocumentSchema()) return r;
            if (n.isListSchema()) {
              let s = [],
                a = n.getValueSchema(),
                u = !!n.getMergedTraits().sparse;
              for (let c of r) {
                let m = this.readValue(a, c);
                (m != null || u) && s.push(m);
              }
              return s;
            }
            let o = {};
            if (n.isMapSchema()) {
              let s = !!n.getMergedTraits().sparse,
                a = n.getValueSchema();
              for (let u of Object.keys(r)) {
                let c = this.readValue(a, r[u]);
                (c != null || s) && (o[u] = c);
              }
            } else if (n.isStructSchema()) {
              let s = n.isUnionSchema(),
                a;
              s && (a = new Set(Object.keys(r).filter((u) => u !== "__type")));
              for (let [u, c] of n.structIterator())
                (s && a.delete(u), r[u] != null && (o[u] = this.readValue(c, r[u])));
              if (s && a?.size === 1 && Object.keys(o).length === 0) {
                let u = a.values().next().value;
                o.$unknown = [u, r[u]];
              }
            } else if (r instanceof em) return r;
            return o;
          } else return r;
        }
      }));
  });
var Z2i,
  N0t,
  e5i = j(() => {
    g9();
    Wc();
    Z2i = Se(Hg());
    X3r();
    k0t();
    N0t = class extends SN {
      codec = new O0t();
      serializer = this.codec.createSerializer();
      deserializer = this.codec.createDeserializer();
      constructor({ defaultNamespace: e }) {
        super({ defaultNamespace: e });
      }
      getShapeId() {
        return "smithy.protocols#rpcv2Cbor";
      }
      getPayloadCodec() {
        return this.codec;
      }
      async serializeRequest(e, r, n) {
        let o = await super.serializeRequest(e, r, n);
        if (
          (Object.assign(o.headers, {
            "content-type": this.getDefaultContentType(),
            "smithy-protocol": "rpc-v2-cbor",
            accept: this.getDefaultContentType(),
          }),
          US(e.input) === "unit")
        )
          (delete o.body, delete o.headers["content-type"]);
        else {
          o.body || (this.serializer.write(15, {}), (o.body = this.serializer.flush()));
          try {
            o.headers["content-length"] = String(o.body.byteLength);
          } catch {}
        }
        let { service: s, operation: a } = (0, Z2i.getSmithyContext)(n),
          u = `/service/${s}/operation/${a}`;
        return (o.path.endsWith("/") ? (o.path += u.slice(1)) : (o.path += u), o);
      }
      async deserializeResponse(e, r, n) {
        return super.deserializeResponse(e, r, n);
      }
      async handleError(e, r, n, o, s) {
        let a = R0t(n, o) ?? "Unknown",
          u = this.options.defaultNamespace;
        a.includes("#") && ([u] = a.split("#"));
        let c = { $metadata: s, $fault: n.statusCode <= 500 ? "client" : "server" },
          m = es.for(u),
          d;
        try {
          d = m.getSchema(a);
        } catch {
          o.Message && (o.message = o.Message);
          let y = es.for("smithy.ts.sdk.synthetic." + u),
            E = y.getBaseException();
          if (E) {
            let v = y.getErrorCtor(E);
            throw Object.assign(new v({ name: a }), c, o);
          }
          throw Object.assign(new Error(a), c, o);
        }
        let f = ji.of(d),
          p = m.getErrorCtor(d),
          h = o.message ?? o.Message ?? "Unknown",
          g = new p(h),
          b = {};
        for (let [A, y] of f.structIterator()) b[A] = this.deserializer.readValue(y, o[A]);
        throw Object.assign(g, c, { $fault: f.getMergedTraits().error, message: h }, b);
      }
      getDefaultContentType() {
        return "application/cbor";
      }
    };
  });
var t5i = j(() => {
  k0t();
  e5i();
  X3r();
});