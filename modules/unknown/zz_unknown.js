/**
 * @module zz
 * @category unknown
 * @label unknown
 * @position 1512 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zz) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zz = T((eCc, IXn) => {
  "use strict";
  var { InvalidArgumentError: mot, MaxOriginsReachedError: c0a } = da(),
    { kClients: XE, kRunning: CXn, kClose: l0a, kDestroy: m0a, kDispatch: d0a, kUrl: f0a } = n0(),
    p0a = nle(),
    h0a = ple(),
    g0a = EU(),
    b0a = ks(),
    SXn = Symbol("onConnect"),
    wXn = Symbol("onDisconnect"),
    xXn = Symbol("onConnectionError"),
    TXn = Symbol("onDrain"),
    DXn = Symbol("factory"),
    Bar = Symbol("options"),
    aCe = Symbol("origins");
  function A0a(t, e) {
    return e && e.connections === 1 ? new g0a(t, e) : new h0a(t, e);
  }
  var Lar = class extends p0a {
    constructor({ factory: e = A0a, maxOrigins: r = 1 / 0, connect: n, ...o } = {}) {
      if (typeof e != "function") throw new mot("factory must be a function.");
      if (n != null && typeof n != "function" && typeof n != "object")
        throw new mot("connect must be a function or an object");
      if (typeof r != "number" || Number.isNaN(r) || r <= 0)
        throw new mot("maxOrigins must be a number greater than 0");
      (super(),
        n && typeof n != "function" && (n = { ...n }),
        (this[Bar] = { ...b0a.deepClone(o), maxOrigins: r, connect: n }),
        (this[DXn] = e),
        (this[XE] = new Map()),
        (this[aCe] = new Set()),
        (this[TXn] = (s, a) => {
          this.emit("drain", s, [this, ...a]);
        }),
        (this[SXn] = (s, a) => {
          this.emit("connect", s, [this, ...a]);
        }),
        (this[wXn] = (s, a, u) => {
          this.emit("disconnect", s, [this, ...a], u);
        }),
        (this[xXn] = (s, a, u) => {
          this.emit("connectionError", s, [this, ...a], u);
        }));
    }
    get [CXn]() {
      let e = 0;
      for (let { dispatcher: r } of this[XE].values()) e += r[CXn];
      return e;
    }
    [d0a](e, r) {
      let n;
      if (e.origin && (typeof e.origin == "string" || e.origin instanceof URL)) n = String(e.origin);
      else throw new mot("opts.origin must be a non-empty string or URL.");
      if (this[aCe].size >= this[Bar].maxOrigins && !this[aCe].has(n)) throw new c0a();
      let o = this[XE].get(n),
        s = o && o.dispatcher;
      if (!s) {
        let a = (u) => {
          let c = this[XE].get(n);
          c && (u && (c.count -= 1), c.count <= 0 && (this[XE].delete(n), c.dispatcher.close()), this[aCe].delete(n));
        };
        ((s = this[DXn](e.origin, this[Bar])
          .on("drain", this[TXn])
          .on("connect", (u, c) => {
            let m = this[XE].get(n);
            (m && (m.count += 1), this[SXn](u, c));
          })
          .on("disconnect", (u, c, m) => {
            (a(!0), this[wXn](u, c, m));
          })
          .on("connectionError", (u, c, m) => {
            (a(!1), this[xXn](u, c, m));
          })),
          this[XE].set(n, { count: 0, dispatcher: s }),
          this[aCe].add(n));
      }
      return s.dispatch(e, r);
    }
    [l0a]() {
      let e = [];
      for (let { dispatcher: r } of this[XE].values()) e.push(r.close());
      return (this[XE].clear(), Promise.all(e));
    }
    [m0a](e) {
      let r = [];
      for (let { dispatcher: n } of this[XE].values()) r.push(n.destroy(e));
      return (this[XE].clear(), Promise.all(r));
    }
    get stats() {
      let e = {};
      for (let { dispatcher: r } of this[XE].values()) r.stats && (e[r[f0a].origin] = r.stats);
      return e;
    }
  };
  IXn.exports = Lar;
});