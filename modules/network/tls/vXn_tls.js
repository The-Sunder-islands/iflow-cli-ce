/**
 * @module vXn
 * @category network/tls
 * @label tls
 * @position 1511 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vXn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vXn = T((Zvc, EXn) => {
  "use strict";
  var {
      PoolBase: r0a,
      kClients: cot,
      kNeedDrain: n0a,
      kAddClient: yXn,
      kGetDispatcher: i0a,
      kRemoveClient: o0a,
    } = rot(),
    s0a = EU(),
    { InvalidArgumentError: Rar } = da(),
    _Xn = ks(),
    { kUrl: kar } = n0(),
    a0a = ile(),
    sCe = Symbol("options"),
    Oar = Symbol("connections"),
    Nar = Symbol("factory"),
    lot = Symbol("index");
  function u0a(t, e) {
    return new s0a(t, e);
  }
  var Par = class extends r0a {
    constructor(
      e,
      {
        connections: r,
        factory: n = u0a,
        connect: o,
        connectTimeout: s,
        tls: a,
        maxCachedSessions: u,
        socketPath: c,
        autoSelectFamily: m,
        autoSelectFamilyAttemptTimeout: d,
        allowH2: f,
        clientTtl: p,
        ...h
      } = {},
    ) {
      if (r != null && (!Number.isFinite(r) || r < 0)) throw new Rar("invalid connections");
      if (typeof n != "function") throw new Rar("factory must be a function.");
      if (o != null && typeof o != "function" && typeof o != "object")
        throw new Rar("connect must be a function or an object");
      (typeof o != "function" &&
        (o = a0a({
          ...a,
          maxCachedSessions: u,
          allowH2: f,
          socketPath: c,
          timeout: s,
          ...(typeof m == "boolean" ? { autoSelectFamily: m, autoSelectFamilyAttemptTimeout: d } : void 0),
          ...o,
        })),
        super(),
        (this[Oar] = r || null),
        (this[kar] = _Xn.parseOrigin(e)),
        (this[sCe] = { ..._Xn.deepClone(h), connect: o, allowH2: f, clientTtl: p }),
        (this[sCe].interceptors = h.interceptors ? { ...h.interceptors } : void 0),
        (this[Nar] = n),
        (this[lot] = -1),
        this.on("connect", (g, b) => {
          if (p != null && p > 0) for (let A of b) Object.assign(A, { ttl: Date.now() });
        }),
        this.on("connectionError", (g, b, A) => {
          for (let y of b) {
            let E = this[cot].indexOf(y);
            E !== -1 && this[cot].splice(E, 1);
          }
        }));
    }
    [i0a]() {
      let e = this[sCe].clientTtl,
        r = this[cot].length;
      if (r === 0) {
        let o = this[Nar](this[kar], this[sCe]);
        return (this[yXn](o), o);
      }
      let n = 0;
      for (; n < r; ) {
        this[lot] = (this[lot] + 1) % r;
        let o = this[cot][this[lot]];
        if (e != null && e > 0 && o.ttl && Date.now() - o.ttl > e) {
          (this[o0a](o), n++);
          continue;
        }
        if (!o[n0a]) return o;
        n++;
      }
      if (!this[Oar] || r < this[Oar]) {
        let o = this[Nar](this[kar], this[sCe]);
        return (this[yXn](o), o);
      }
    }
  };
  EXn.exports = Par;
});