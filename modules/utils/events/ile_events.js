/**
 * @module ile
 * @category utils/events
 * @label events
 * @position 1488 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ile) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ile = T((Dvc, CKn) => {
  "use strict";
  var fsa = Ae("node:net"),
    EKn = Ae("node:assert"),
    vKn = ks(),
    { InvalidArgumentError: psa } = da(),
    wsr,
    hsa = class {
      constructor(e) {
        ((this._maxCachedSessions = e),
          (this._sessionCache = new Map()),
          (this._sessionRegistry = new FinalizationRegistry((r) => {
            if (this._sessionCache.size < this._maxCachedSessions) return;
            let n = this._sessionCache.get(r);
            n !== void 0 && n.deref() === void 0 && this._sessionCache.delete(r);
          })));
      }
      get(e) {
        let r = this._sessionCache.get(e);
        return r ? r.deref() : null;
      }
      set(e, r) {
        this._maxCachedSessions !== 0 &&
          (this._sessionCache.set(e, new WeakRef(r)), this._sessionRegistry.register(r, e));
      }
    };
  function gsa({ allowH2: t, useH2c: e, maxCachedSessions: r, socketPath: n, timeout: o, session: s, ...a }) {
    if (r != null && (!Number.isInteger(r) || r < 0))
      throw new psa("maxCachedSessions must be a positive integer or zero");
    let u = { path: n, ...a },
      c = new hsa(r ?? 100);
    return (
      (o = o ?? 1e4),
      (t = t ?? !1),
      function ({ hostname: d, host: f, protocol: p, port: h, servername: g, localAddress: b, httpSocket: A }, y) {
        let E;
        if (p === "https:") {
          (wsr || (wsr = Ae("node:tls")), (g = g || u.servername || vKn.getServerName(f) || null));
          let C = g || d;
          EKn(C);
          let x = s || c.get(C) || null;
          ((h = h || 443),
            (E = wsr.connect({
              highWaterMark: 16384,
              ...u,
              servername: g,
              session: x,
              localAddress: b,
              ALPNProtocols: t ? ["http/1.1", "h2"] : ["http/1.1"],
              socket: A,
              port: h,
              host: d,
            })),
            E.on("session", function (k) {
              c.set(C, k);
            }));
        } else
          (EKn(!A, "httpSocket can only be sent on TLS update"),
            (h = h || 80),
            (E = fsa.connect({ highWaterMark: 64 * 1024, ...u, localAddress: b, port: h, host: d })),
            e === !0 && (E.alpnProtocol = "h2"));
        if (u.keepAlive == null || u.keepAlive) {
          let C = u.keepAliveInitialDelay === void 0 ? 6e4 : u.keepAliveInitialDelay;
          E.setKeepAlive(!0, C);
        }
        let v = vKn.setupConnectTimeout(new WeakRef(E), { timeout: o, hostname: d, port: h });
        return (
          E.setNoDelay(!0)
            .once(p === "https:" ? "secureConnect" : "connect", function () {
              if ((queueMicrotask(v), y)) {
                let C = y;
                ((y = null), C(null, this));
              }
            })
            .on("error", function (C) {
              if ((queueMicrotask(v), y)) {
                let x = y;
                ((y = null), x(C));
              }
            }),
          E
        );
      }
    );
  }
  CKn.exports = gsa;
});