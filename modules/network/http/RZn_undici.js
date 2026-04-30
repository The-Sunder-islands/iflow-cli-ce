/**
 * @module RZn
 * @category network/http
 * @label undici
 * @position 1523 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RZn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RZn = T((mCc, IZn) => {
  "use strict";
  var { InvalidArgumentError: iur, SocketError: pma } = da(),
    { AsyncResource: hma } = Ae("node:async_hooks"),
    wZn = Ae("node:assert"),
    xZn = ks(),
    { kHTTP2Stream: gma } = n0(),
    { addSignal: bma, removeSignal: TZn } = dCe(),
    our = class extends hma {
      constructor(e, r) {
        if (!e || typeof e != "object") throw new iur("invalid opts");
        if (typeof r != "function") throw new iur("invalid callback");
        let { signal: n, opaque: o, responseHeaders: s } = e;
        if (n && typeof n.on != "function" && typeof n.addEventListener != "function")
          throw new iur("signal must be an EventEmitter or EventTarget");
        (super("UNDICI_UPGRADE"),
          (this.responseHeaders = s || null),
          (this.opaque = o || null),
          (this.callback = r),
          (this.abort = null),
          (this.context = null),
          bma(this, n));
      }
      onConnect(e, r) {
        if (this.reason) {
          e(this.reason);
          return;
        }
        (wZn(this.callback), (this.abort = e), (this.context = null));
      }
      onHeaders() {
        throw new pma("bad upgrade", null);
      }
      onUpgrade(e, r, n) {
        wZn(n[gma] === !0 ? e === 200 : e === 101);
        let { callback: o, opaque: s, context: a } = this;
        (TZn(this), (this.callback = null));
        let u = this.responseHeaders === "raw" ? xZn.parseRawHeaders(r) : xZn.parseHeaders(r);
        this.runInAsyncScope(o, null, null, { headers: u, socket: n, opaque: s, context: a });
      }
      onError(e) {
        let { callback: r, opaque: n } = this;
        (TZn(this),
          r &&
            ((this.callback = null),
            queueMicrotask(() => {
              this.runInAsyncScope(r, null, e, { opaque: n });
            })));
      }
    };
  function DZn(t, e) {
    if (e === void 0)
      return new Promise((r, n) => {
        DZn.call(this, t, (o, s) => (o ? n(o) : r(s)));
      });
    try {
      let r = new our(t, e),
        n = { ...t, method: t.method || "GET", upgrade: t.protocol || "Websocket" };
      this.dispatch(n, r);
    } catch (r) {
      if (typeof e != "function") throw r;
      let n = t?.opaque;
      queueMicrotask(() => e(r, { opaque: n }));
    }
  }
  IZn.exports = DZn;
});