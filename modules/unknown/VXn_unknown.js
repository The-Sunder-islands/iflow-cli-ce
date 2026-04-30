/**
 * @module VXn
 * @category unknown
 * @label unknown
 * @position 1514 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (VXn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var VXn = T((rCc, HXn) => {
  "use strict";
  var D0a = nle(),
    {
      kClose: I0a,
      kDestroy: R0a,
      kClosed: QXn,
      kDestroyed: GXn,
      kDispatch: k0a,
      kNoProxyAgent: uCe,
      kHttpProxyAgent: CU,
      kHttpsProxyAgent: Yz,
    } = n0(),
    qXn = jar(),
    O0a = zz(),
    N0a = { "http:": 80, "https:": 443 },
    Qar = class extends D0a {
      #e = null;
      #t = null;
      #r = null;
      constructor(e = {}) {
        (super(), (this.#r = e));
        let { httpProxy: r, httpsProxy: n, noProxy: o, ...s } = e;
        this[uCe] = new O0a(s);
        let a = r ?? process.env.http_proxy ?? process.env.HTTP_PROXY;
        a ? (this[CU] = new qXn({ ...s, uri: a })) : (this[CU] = this[uCe]);
        let u = n ?? process.env.https_proxy ?? process.env.HTTPS_PROXY;
        (u ? (this[Yz] = new qXn({ ...s, uri: u })) : (this[Yz] = this[CU]), this.#o());
      }
      [k0a](e, r) {
        let n = new URL(e.origin);
        return this.#n(n).dispatch(e, r);
      }
      [I0a]() {
        return Promise.all([this[uCe].close(), !this[CU][QXn] && this[CU].close(), !this[Yz][QXn] && this[Yz].close()]);
      }
      [R0a](e) {
        return Promise.all([
          this[uCe].destroy(e),
          !this[CU][GXn] && this[CU].destroy(e),
          !this[Yz][GXn] && this[Yz].destroy(e),
        ]);
      }
      #n(e) {
        let { protocol: r, host: n, port: o } = e;
        return (
          (n = n.replace(/:\d*$/, "").toLowerCase()),
          (o = Number.parseInt(o, 10) || N0a[r] || 0),
          this.#i(n, o) ? (r === "https:" ? this[Yz] : this[CU]) : this[uCe]
        );
      }
      #i(e, r) {
        if ((this.#u && this.#o(), this.#t.length === 0)) return !0;
        if (this.#e === "*") return !1;
        for (let n = 0; n < this.#t.length; n++) {
          let o = this.#t[n];
          if (!(o.port && o.port !== r)) {
            if (/^[.*]/.test(o.hostname)) {
              if (e.endsWith(o.hostname.replace(/^\*/, ""))) return !1;
            } else if (e === o.hostname) return !1;
          }
        }
        return !0;
      }
      #o() {
        let e = this.#r.noProxy ?? this.#a,
          r = e.split(/[,\s]/),
          n = [];
        for (let o = 0; o < r.length; o++) {
          let s = r[o];
          if (!s) continue;
          let a = s.match(/^(.+):(\d+)$/);
          n.push({ hostname: (a ? a[1] : s).toLowerCase(), port: a ? Number.parseInt(a[2], 10) : 0 });
        }
        ((this.#e = e), (this.#t = n));
      }
      get #u() {
        return this.#r.noProxy !== void 0 ? !1 : this.#e !== this.#a;
      }
      get #a() {
        return process.env.no_proxy ?? process.env.NO_PROXY ?? "";
      }
    };
  HXn.exports = Qar;
});