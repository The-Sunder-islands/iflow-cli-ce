/**
 * @module _Zn
 * @category network/http
 * @label undici
 * @position 1521 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_Zn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _Zn = T((cCc, yZn) => {
  "use strict";
  var ema = Ae("node:assert"),
    { finished: tma } = Ae("node:stream"),
    { AsyncResource: rma } = Ae("node:async_hooks"),
    { InvalidArgumentError: yle, InvalidReturnValueError: nma } = da(),
    FO = ks(),
    { addSignal: ima, removeSignal: bZn } = dCe();
  function oma() {}
  var Zar = class extends rma {
    constructor(e, r, n) {
      if (!e || typeof e != "object") throw new yle("invalid opts");
      let { signal: o, method: s, opaque: a, body: u, onInfo: c, responseHeaders: m } = e;
      try {
        if (typeof n != "function") throw new yle("invalid callback");
        if (typeof r != "function") throw new yle("invalid factory");
        if (o && typeof o.on != "function" && typeof o.addEventListener != "function")
          throw new yle("signal must be an EventEmitter or EventTarget");
        if (s === "CONNECT") throw new yle("invalid method");
        if (c && typeof c != "function") throw new yle("invalid onInfo callback");
        super("UNDICI_STREAM");
      } catch (d) {
        throw (FO.isStream(u) && FO.destroy(u.on("error", oma), d), d);
      }
      ((this.responseHeaders = m || null),
        (this.opaque = a || null),
        (this.factory = r),
        (this.callback = n),
        (this.res = null),
        (this.abort = null),
        (this.context = null),
        (this.trailers = null),
        (this.body = u),
        (this.onInfo = c || null),
        FO.isStream(u) &&
          u.on("error", (d) => {
            this.onError(d);
          }),
        ima(this, o));
    }
    onConnect(e, r) {
      if (this.reason) {
        e(this.reason);
        return;
      }
      (ema(this.callback), (this.abort = e), (this.context = r));
    }
    onHeaders(e, r, n, o) {
      let { factory: s, opaque: a, context: u, responseHeaders: c } = this,
        m = c === "raw" ? FO.parseRawHeaders(r) : FO.parseHeaders(r);
      if (e < 200) {
        this.onInfo && this.onInfo({ statusCode: e, headers: m });
        return;
      }
      if (((this.factory = null), s === null)) return;
      let d = this.runInAsyncScope(s, null, { statusCode: e, headers: m, opaque: a, context: u });
      if (!d || typeof d.write != "function" || typeof d.end != "function" || typeof d.on != "function")
        throw new nma("expected Writable");
      return (
        tma(d, { readable: !1 }, (p) => {
          let { callback: h, res: g, opaque: b, trailers: A, abort: y } = this;
          ((this.res = null),
            (p || !g?.readable) && FO.destroy(g, p),
            (this.callback = null),
            this.runInAsyncScope(h, null, p || null, { opaque: b, trailers: A }),
            p && y());
        }),
        d.on("drain", n),
        (this.res = d),
        (d.writableNeedDrain !== void 0 ? d.writableNeedDrain : d._writableState?.needDrain) !== !0
      );
    }
    onData(e) {
      let { res: r } = this;
      return r ? r.write(e) : !0;
    }
    onComplete(e) {
      let { res: r } = this;
      (bZn(this), r && ((this.trailers = FO.parseHeaders(e)), r.end()));
    }
    onError(e) {
      let { res: r, callback: n, opaque: o, body: s } = this;
      (bZn(this),
        (this.factory = null),
        r
          ? ((this.res = null), FO.destroy(r, e))
          : n &&
            ((this.callback = null),
            queueMicrotask(() => {
              this.runInAsyncScope(n, null, e, { opaque: o });
            })),
        s && ((this.body = null), FO.destroy(s, e)));
    }
  };
  function AZn(t, e, r) {
    if (r === void 0)
      return new Promise((n, o) => {
        AZn.call(this, t, e, (s, a) => (s ? o(s) : n(a)));
      });
    try {
      let n = new Zar(t, e, r);
      this.dispatch(t, n);
    } catch (n) {
      if (typeof r != "function") throw n;
      let o = t?.opaque;
      queueMicrotask(() => r(n, { opaque: o }));
    }
  }
  yZn.exports = AZn;
});