/**
 * @module fZn
 * @category network/http
 * @label undici
 * @position 1519 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fZn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fZn = T((aCc, Xar) => {
  "use strict";
  var z0a = Ae("node:assert"),
    { AsyncResource: Y0a } = Ae("node:async_hooks"),
    { Readable: K0a } = lZn(),
    { InvalidArgumentError: ble, RequestAbortedError: mZn } = da(),
    ZE = ks();
  function mCe() {}
  var Aot = class extends Y0a {
    constructor(e, r) {
      if (!e || typeof e != "object") throw new ble("invalid opts");
      let { signal: n, method: o, opaque: s, body: a, onInfo: u, responseHeaders: c, highWaterMark: m } = e;
      try {
        if (typeof r != "function") throw new ble("invalid callback");
        if (m && (typeof m != "number" || m < 0)) throw new ble("invalid highWaterMark");
        if (n && typeof n.on != "function" && typeof n.addEventListener != "function")
          throw new ble("signal must be an EventEmitter or EventTarget");
        if (o === "CONNECT") throw new ble("invalid method");
        if (u && typeof u != "function") throw new ble("invalid onInfo callback");
        super("UNDICI_REQUEST");
      } catch (d) {
        throw (ZE.isStream(a) && ZE.destroy(a.on("error", mCe), d), d);
      }
      ((this.method = o),
        (this.responseHeaders = c || null),
        (this.opaque = s || null),
        (this.callback = r),
        (this.res = null),
        (this.abort = null),
        (this.body = a),
        (this.trailers = {}),
        (this.context = null),
        (this.onInfo = u || null),
        (this.highWaterMark = m),
        (this.reason = null),
        (this.removeAbortListener = null),
        n?.aborted
          ? (this.reason = n.reason ?? new mZn())
          : n &&
            (this.removeAbortListener = ZE.addAbortListener(n, () => {
              ((this.reason = n.reason ?? new mZn()),
                this.res ? ZE.destroy(this.res.on("error", mCe), this.reason) : this.abort && this.abort(this.reason));
            })));
    }
    onConnect(e, r) {
      if (this.reason) {
        e(this.reason);
        return;
      }
      (z0a(this.callback), (this.abort = e), (this.context = r));
    }
    onHeaders(e, r, n, o) {
      let { callback: s, opaque: a, abort: u, context: c, responseHeaders: m, highWaterMark: d } = this,
        f = m === "raw" ? ZE.parseRawHeaders(r) : ZE.parseHeaders(r);
      if (e < 200) {
        this.onInfo && this.onInfo({ statusCode: e, headers: f });
        return;
      }
      let p = m === "raw" ? ZE.parseHeaders(r) : f,
        h = p["content-type"],
        g = p["content-length"],
        b = new K0a({
          resume: n,
          abort: u,
          contentType: h,
          contentLength: this.method !== "HEAD" && g ? Number(g) : null,
          highWaterMark: d,
        });
      if (
        (this.removeAbortListener && (b.on("close", this.removeAbortListener), (this.removeAbortListener = null)),
        (this.callback = null),
        (this.res = b),
        s !== null)
      )
        try {
          this.runInAsyncScope(s, null, null, {
            statusCode: e,
            headers: f,
            trailers: this.trailers,
            opaque: a,
            body: b,
            context: c,
          });
        } catch (A) {
          ((this.res = null),
            ZE.destroy(b.on("error", mCe), A),
            queueMicrotask(() => {
              throw A;
            }));
        }
    }
    onData(e) {
      return this.res.push(e);
    }
    onComplete(e) {
      (ZE.parseHeaders(e, this.trailers), this.res.push(null));
    }
    onError(e) {
      let { res: r, callback: n, body: o, opaque: s } = this;
      (n &&
        ((this.callback = null),
        queueMicrotask(() => {
          this.runInAsyncScope(n, null, e, { opaque: s });
        })),
        r &&
          ((this.res = null),
          queueMicrotask(() => {
            ZE.destroy(r.on("error", mCe), e);
          })),
        o && ((this.body = null), ZE.isStream(o) && (o.on("error", mCe), ZE.destroy(o, e))),
        this.removeAbortListener && (this.removeAbortListener(), (this.removeAbortListener = null)));
    }
  };
  function dZn(t, e) {
    if (e === void 0)
      return new Promise((r, n) => {
        dZn.call(this, t, (o, s) => (o ? n(o) : r(s)));
      });
    try {
      let r = new Aot(t, e);
      this.dispatch(t, r);
    } catch (r) {
      if (typeof e != "function") throw r;
      let n = t?.opaque;
      queueMicrotask(() => e(r, { opaque: n }));
    }
  }
  Xar.exports = dZn;
  Xar.exports.RequestHandler = Aot;
});