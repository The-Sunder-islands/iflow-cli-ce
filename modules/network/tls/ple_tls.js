/**
 * @module ple
 * @category network/tls
 * @label tls
 * @position 1509 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ple) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ple = T((Jvc, pXn) => {
  "use strict";
  var {
      PoolBase: Ula,
      kClients: not,
      kNeedDrain: $la,
      kAddClient: jla,
      kGetDispatcher: Qla,
      kRemoveClient: Gla,
    } = rot(),
    qla = EU(),
    { InvalidArgumentError: war } = da(),
    mXn = ks(),
    { kUrl: dXn } = n0(),
    Hla = ile(),
    iot = Symbol("options"),
    xar = Symbol("connections"),
    fXn = Symbol("factory");
  function Vla(t, e) {
    return new qla(t, e);
  }
  var Tar = class extends Ula {
    constructor(
      e,
      {
        connections: r,
        factory: n = Vla,
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
      if (r != null && (!Number.isFinite(r) || r < 0)) throw new war("invalid connections");
      if (typeof n != "function") throw new war("factory must be a function.");
      if (o != null && typeof o != "function" && typeof o != "object")
        throw new war("connect must be a function or an object");
      (typeof o != "function" &&
        (o = Hla({
          ...a,
          maxCachedSessions: u,
          allowH2: f,
          socketPath: c,
          timeout: s,
          ...(typeof m == "boolean" ? { autoSelectFamily: m, autoSelectFamilyAttemptTimeout: d } : void 0),
          ...o,
        })),
        super(),
        (this[xar] = r || null),
        (this[dXn] = mXn.parseOrigin(e)),
        (this[iot] = { ...mXn.deepClone(h), connect: o, allowH2: f, clientTtl: p }),
        (this[iot].interceptors = h.interceptors ? { ...h.interceptors } : void 0),
        (this[fXn] = n),
        this.on("connect", (g, b) => {
          if (p != null && p > 0) for (let A of b) Object.assign(A, { ttl: Date.now() });
        }),
        this.on("connectionError", (g, b, A) => {
          for (let y of b) {
            let E = this[not].indexOf(y);
            E !== -1 && this[not].splice(E, 1);
          }
        }));
    }
    [Qla]() {
      let e = this[iot].clientTtl;
      for (let r of this[not])
        if (e != null && e > 0 && r.ttl && Date.now() - r.ttl > e) this[Gla](r);
        else if (!r[$la]) return r;
      if (!this[xar] || this[not].length < this[xar]) {
        let r = this[fXn](this[dXn], this[iot]);
        return (this[jla](r), r);
      }
    }
  };
  pXn.exports = Tar;
});