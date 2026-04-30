/**
 * @module rot
 * @category utils/fs
 * @label fs
 * @position 1508 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rot) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rot = T((Kvc, lXn) => {
  "use strict";
  var { PoolStats: Rla } = fsr(),
    kla = nle(),
    Ola = Aar(),
    {
      kConnected: yar,
      kSize: rXn,
      kRunning: nXn,
      kPending: iXn,
      kQueued: nCe,
      kBusy: Nla,
      kFree: Pla,
      kUrl: Bla,
      kClose: Lla,
      kDestroy: Mla,
      kDispatch: Fla,
    } = n0(),
    Yf = Symbol("clients"),
    G2 = Symbol("needDrain"),
    iCe = Symbol("queue"),
    _ar = Symbol("closed resolve"),
    Ear = Symbol("onDrain"),
    oXn = Symbol("onConnect"),
    sXn = Symbol("onDisconnect"),
    aXn = Symbol("onConnectionError"),
    Car = Symbol("get dispatcher"),
    uXn = Symbol("add client"),
    cXn = Symbol("remove client"),
    Sar = class extends kla {
      [iCe] = new Ola();
      [nCe] = 0;
      [Yf] = [];
      [G2] = !1;
      [Ear](e, r, n) {
        let o = this[iCe],
          s = !1;
        for (; !s; ) {
          let a = o.shift();
          if (!a) break;
          (this[nCe]--, (s = !e.dispatch(a.opts, a.handler)));
        }
        if (
          ((e[G2] = s),
          !s && this[G2] && ((this[G2] = !1), this.emit("drain", r, [this, ...n])),
          this[_ar] && o.isEmpty())
        ) {
          let a = new Array(this[Yf].length);
          for (let u = 0; u < this[Yf].length; u++) a[u] = this[Yf][u].close();
          return Promise.all(a).then(this[_ar]);
        }
      }
      [oXn] = (e, r) => {
        this.emit("connect", e, [this, ...r]);
      };
      [sXn] = (e, r, n) => {
        this.emit("disconnect", e, [this, ...r], n);
      };
      [aXn] = (e, r, n) => {
        this.emit("connectionError", e, [this, ...r], n);
      };
      get [Nla]() {
        return this[G2];
      }
      get [yar]() {
        let e = 0;
        for (let { [yar]: r } of this[Yf]) e += r;
        return e;
      }
      get [Pla]() {
        let e = 0;
        for (let { [yar]: r, [G2]: n } of this[Yf]) e += r && !n;
        return e;
      }
      get [iXn]() {
        let e = this[nCe];
        for (let { [iXn]: r } of this[Yf]) e += r;
        return e;
      }
      get [nXn]() {
        let e = 0;
        for (let { [nXn]: r } of this[Yf]) e += r;
        return e;
      }
      get [rXn]() {
        let e = this[nCe];
        for (let { [rXn]: r } of this[Yf]) e += r;
        return e;
      }
      get stats() {
        return new Rla(this);
      }
      [Lla]() {
        if (this[iCe].isEmpty()) {
          let e = new Array(this[Yf].length);
          for (let r = 0; r < this[Yf].length; r++) e[r] = this[Yf][r].close();
          return Promise.all(e);
        } else
          return new Promise((e) => {
            this[_ar] = e;
          });
      }
      [Mla](e) {
        for (;;) {
          let n = this[iCe].shift();
          if (!n) break;
          n.handler.onError(e);
        }
        let r = new Array(this[Yf].length);
        for (let n = 0; n < this[Yf].length; n++) r[n] = this[Yf][n].destroy(e);
        return Promise.all(r);
      }
      [Fla](e, r) {
        let n = this[Car]();
        return (
          n
            ? n.dispatch(e, r) || ((n[G2] = !0), (this[G2] = !this[Car]()))
            : ((this[G2] = !0), this[iCe].push({ opts: e, handler: r }), this[nCe]++),
          !this[G2]
        );
      }
      [uXn](e) {
        return (
          e
            .on("drain", this[Ear].bind(this, e))
            .on("connect", this[oXn])
            .on("disconnect", this[sXn])
            .on("connectionError", this[aXn]),
          this[Yf].push(e),
          this[G2] &&
            queueMicrotask(() => {
              this[G2] && this[Ear](e, e[Bla], [e, this]);
            }),
          this
        );
      }
      [cXn](e) {
        (e.close(() => {
          let r = this[Yf].indexOf(e);
          r !== -1 && this[Yf].splice(r, 1);
        }),
          (this[G2] = this[Yf].some((r) => !r[G2] && r.closed !== !0 && r.destroyed !== !0)));
      }
    };
  lXn.exports = {
    PoolBase: Sar,
    kClients: Yf,
    kNeedDrain: G2,
    kAddClient: uXn,
    kRemoveClient: cXn,
    kGetDispatcher: Car,
  };
});