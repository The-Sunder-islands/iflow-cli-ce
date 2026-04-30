/**
 * @module BZn
 * @category network/http
 * @label undici
 * @position 1524 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (BZn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var BZn = T((dCc, PZn) => {
  "use strict";
  var Ama = Ae("node:assert"),
    { AsyncResource: yma } = Ae("node:async_hooks"),
    { InvalidArgumentError: sur, SocketError: _ma } = da(),
    kZn = ks(),
    { addSignal: Ema, removeSignal: OZn } = dCe(),
    aur = class extends yma {
      constructor(e, r) {
        if (!e || typeof e != "object") throw new sur("invalid opts");
        if (typeof r != "function") throw new sur("invalid callback");
        let { signal: n, opaque: o, responseHeaders: s } = e;
        if (n && typeof n.on != "function" && typeof n.addEventListener != "function")
          throw new sur("signal must be an EventEmitter or EventTarget");
        (super("UNDICI_CONNECT"),
          (this.opaque = o || null),
          (this.responseHeaders = s || null),
          (this.callback = r),
          (this.abort = null),
          Ema(this, n));
      }
      onConnect(e, r) {
        if (this.reason) {
          e(this.reason);
          return;
        }
        (Ama(this.callback), (this.abort = e), (this.context = r));
      }
      onHeaders() {
        throw new _ma("bad connect", null);
      }
      onUpgrade(e, r, n) {
        let { callback: o, opaque: s, context: a } = this;
        (OZn(this), (this.callback = null));
        let u = r;
        (u != null && (u = this.responseHeaders === "raw" ? kZn.parseRawHeaders(r) : kZn.parseHeaders(r)),
          this.runInAsyncScope(o, null, null, { statusCode: e, headers: u, socket: n, opaque: s, context: a }));
      }
      onError(e) {
        let { callback: r, opaque: n } = this;
        (OZn(this),
          r &&
            ((this.callback = null),
            queueMicrotask(() => {
              this.runInAsyncScope(r, null, e, { opaque: n });
            })));
      }
    };
  function NZn(t, e) {
    if (e === void 0)
      return new Promise((r, n) => {
        NZn.call(this, t, (o, s) => (o ? n(o) : r(s)));
      });
    try {
      let r = new aur(t, e),
        n = { ...t, method: "CONNECT" };
      this.dispatch(n, r);
    } catch (r) {
      if (typeof e != "function") throw r;
      let n = t?.opaque;
      queueMicrotask(() => e(r, { opaque: n }));
    }
  }
  PZn.exports = NZn;
});