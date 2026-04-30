/**
 * @module s_t
 * @category utils/oop
 * @label oop
 * @position 105 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (s_t) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var s_t = T((Jke) => {
  "use strict";
  Object.defineProperty(Jke, "__esModule", { value: !0 });
  Jke.AwsRequestSigner = void 0;
  var Vkr = Pee(),
    Hkr = "AWS4-HMAC-SHA256",
    O3o = "aws4_request",
    o_t = class {
      constructor(e, r) {
        ((this.getCredentials = e), (this.region = r), (this.crypto = (0, Vkr.createCrypto)()));
      }
      async getRequestOptions(e) {
        if (!e.url) throw new Error('"url" is required in "amzOptions"');
        let r = typeof e.data == "object" ? JSON.stringify(e.data) : e.data,
          n = e.url,
          o = e.method || "GET",
          s = e.body || r,
          a = e.headers,
          u = await this.getCredentials(),
          c = new URL(n),
          m = await P3o({
            crypto: this.crypto,
            host: c.host,
            canonicalUri: c.pathname,
            canonicalQuerystring: c.search.substr(1),
            method: o,
            region: this.region,
            securityCredentials: u,
            requestPayload: s,
            additionalAmzHeaders: a,
          }),
          d = Object.assign(
            m.amzDate ? { "x-amz-date": m.amzDate } : {},
            { Authorization: m.authorizationHeader, host: c.host },
            a || {},
          );
        u.token && Object.assign(d, { "x-amz-security-token": u.token });
        let f = { url: n, method: o, headers: d };
        return (typeof s < "u" && (f.body = s), f);
      }
    };
  Jke.AwsRequestSigner = o_t;
  async function _3e(t, e, r) {
    return await t.signWithHmacSha256(e, r);
  }
  async function N3o(t, e, r, n, o) {
    let s = await _3e(t, `AWS4${e}`, r),
      a = await _3e(t, s, n),
      u = await _3e(t, a, o);
    return await _3e(t, u, "aws4_request");
  }
  async function P3o(t) {
    let e = t.additionalAmzHeaders || {},
      r = t.requestPayload || "",
      n = t.host.split(".")[0],
      o = new Date(),
      s = o
        .toISOString()
        .replace(/[-:]/g, "")
        .replace(/\.[0-9]+/, ""),
      a = o.toISOString().replace(/[-]/g, "").replace(/T.*/, ""),
      u = {};
    (Object.keys(e).forEach((v) => {
      u[v.toLowerCase()] = e[v];
    }),
      t.securityCredentials.token && (u["x-amz-security-token"] = t.securityCredentials.token));
    let c = Object.assign({ host: t.host }, u.date ? {} : { "x-amz-date": s }, u),
      m = "",
      d = Object.keys(c).sort();
    d.forEach((v) => {
      m += `${v}:${c[v]}
`;
    });
    let f = d.join(";"),
      p = await t.crypto.sha256DigestHex(r),
      h = `${t.method}
${t.canonicalUri}
${t.canonicalQuerystring}
${m}
${f}
${p}`,
      g = `${a}/${t.region}/${n}/${O3o}`,
      b =
        `${Hkr}
${s}
${g}
` + (await t.crypto.sha256DigestHex(h)),
      A = await N3o(t.crypto, t.securityCredentials.secretAccessKey, a, t.region, n),
      y = await _3e(t.crypto, A, b),
      E = `${Hkr} Credential=${t.securityCredentials.accessKeyId}/${g}, SignedHeaders=${f}, Signature=${(0, Vkr.fromArrayBufferToHex)(y)}`;
    return { amzDate: u.date ? void 0 : s, authorizationHeader: E, canonicalQuerystring: t.canonicalQuerystring };
  }
});