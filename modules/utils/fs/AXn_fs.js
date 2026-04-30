/**
 * @module AXn
 * @category utils/fs
 * @label fs
 * @position 1510 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (AXn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var AXn = T((Xvc, bXn) => {
  "use strict";
  var { BalancedPoolMissingUpstreamError: Wla, InvalidArgumentError: zla } = da(),
    { PoolBase: Yla, kClients: Qg, kNeedDrain: oCe, kAddClient: Kla, kRemoveClient: Jla, kGetDispatcher: Xla } = rot(),
    Zla = ple(),
    { kUrl: oot } = n0(),
    { parseOrigin: Dar } = ks(),
    hXn = Symbol("factory"),
    sot = Symbol("options"),
    gXn = Symbol("kGreatestCommonDivisor"),
    Vz = Symbol("kCurrentWeight"),
    Wz = Symbol("kIndex"),
    JE = Symbol("kWeight"),
    aot = Symbol("kMaxWeightPerServer"),
    uot = Symbol("kErrorPenalty");
  function e0a(t, e) {
    if (t === 0) return e;
    for (; e !== 0; ) {
      let r = e;
      ((e = t % e), (t = r));
    }
    return t;
  }
  function t0a(t, e) {
    return new Zla(t, e);
  }
  var Iar = class extends Yla {
    constructor(e = [], { factory: r = t0a, ...n } = {}) {
      if (typeof r != "function") throw new zla("factory must be a function.");
      (super(),
        (this[sot] = n),
        (this[Wz] = -1),
        (this[Vz] = 0),
        (this[aot] = this[sot].maxWeightPerServer || 100),
        (this[uot] = this[sot].errorPenalty || 15),
        Array.isArray(e) || (e = [e]),
        (this[hXn] = r));
      for (let o of e) this.addUpstream(o);
      this._updateBalancedPoolStats();
    }
    addUpstream(e) {
      let r = Dar(e).origin;
      if (this[Qg].find((o) => o[oot].origin === r && o.closed !== !0 && o.destroyed !== !0)) return this;
      let n = this[hXn](r, Object.assign({}, this[sot]));
      (this[Kla](n),
        n.on("connect", () => {
          n[JE] = Math.min(this[aot], n[JE] + this[uot]);
        }),
        n.on("connectionError", () => {
          ((n[JE] = Math.max(1, n[JE] - this[uot])), this._updateBalancedPoolStats());
        }),
        n.on("disconnect", (...o) => {
          let s = o[2];
          s &&
            s.code === "UND_ERR_SOCKET" &&
            ((n[JE] = Math.max(1, n[JE] - this[uot])), this._updateBalancedPoolStats());
        }));
      for (let o of this[Qg]) o[JE] = this[aot];
      return (this._updateBalancedPoolStats(), this);
    }
    _updateBalancedPoolStats() {
      let e = 0;
      for (let r = 0; r < this[Qg].length; r++) e = e0a(this[Qg][r][JE], e);
      this[gXn] = e;
    }
    removeUpstream(e) {
      let r = Dar(e).origin,
        n = this[Qg].find((o) => o[oot].origin === r && o.closed !== !0 && o.destroyed !== !0);
      return (n && this[Jla](n), this);
    }
    getUpstream(e) {
      let r = Dar(e).origin;
      return this[Qg].find((n) => n[oot].origin === r && n.closed !== !0 && n.destroyed !== !0);
    }
    get upstreams() {
      return this[Qg].filter((e) => e.closed !== !0 && e.destroyed !== !0).map((e) => e[oot].origin);
    }
    [Xla]() {
      if (this[Qg].length === 0) throw new Wla();
      if (
        !this[Qg].find((s) => !s[oCe] && s.closed !== !0 && s.destroyed !== !0) ||
        this[Qg].map((s) => s[oCe]).reduce((s, a) => s && a, !0)
      )
        return;
      let n = 0,
        o = this[Qg].findIndex((s) => !s[oCe]);
      for (; n++ < this[Qg].length; ) {
        this[Wz] = (this[Wz] + 1) % this[Qg].length;
        let s = this[Qg][this[Wz]];
        if (
          (s[JE] > this[Qg][o][JE] && !s[oCe] && (o = this[Wz]),
          this[Wz] === 0 && ((this[Vz] = this[Vz] - this[gXn]), this[Vz] <= 0 && (this[Vz] = this[aot])),
          s[JE] >= this[Vz] && !s[oCe])
        )
          return s;
      }
      return ((this[Vz] = this[Qg][o][JE]), (this[Wz] = o), this[Qg][o]);
    }
  };
  bXn.exports = Iar;
});