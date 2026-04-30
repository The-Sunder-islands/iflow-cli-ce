/**
 * @module fKn
 * @category utils/net
 * @label mime
 * @position 1483 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fKn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fKn = T((vvc, dKn) => {
  "use strict";
  var { InvalidArgumentError: Nm, NotSupportedError: Goa } = da(),
    yD = Ae("node:assert"),
    {
      isValidHTTPToken: mKn,
      isValidHeaderValue: cKn,
      isStream: qoa,
      destroy: Hoa,
      isBuffer: Voa,
      isFormDataLike: Woa,
      isIterable: zoa,
      isBlobLike: Yoa,
      serializePathWithQuery: Koa,
      assertRequestHandler: Joa,
      getServerName: Xoa,
      normalizedMethodRecords: Zoa,
      getProtocolFromUrlString: esa,
    } = ks(),
    { channels: X8 } = mU(),
    { headerNameLowerCasedRecord: lKn } = xit(),
    tsa = /[^\u0021-\u00ff]/,
    qE = Symbol("handler"),
    Asr = class {
      constructor(
        e,
        {
          path: r,
          method: n,
          body: o,
          headers: s,
          query: a,
          idempotent: u,
          blocking: c,
          upgrade: m,
          headersTimeout: d,
          bodyTimeout: f,
          reset: p,
          expectContinue: h,
          servername: g,
          throwOnError: b,
          maxRedirections: A,
        },
        y,
      ) {
        if (typeof r != "string") throw new Nm("path must be a string");
        if (r[0] !== "/" && !(r.startsWith("http://") || r.startsWith("https://")) && n !== "CONNECT")
          throw new Nm("path must be an absolute URL or start with a slash");
        if (tsa.test(r)) throw new Nm("invalid request path");
        if (typeof n != "string") throw new Nm("method must be a string");
        if (Zoa[n] === void 0 && !mKn(n)) throw new Nm("invalid request method");
        if (m && typeof m != "string") throw new Nm("upgrade must be a string");
        if (d != null && (!Number.isFinite(d) || d < 0)) throw new Nm("invalid headersTimeout");
        if (f != null && (!Number.isFinite(f) || f < 0)) throw new Nm("invalid bodyTimeout");
        if (p != null && typeof p != "boolean") throw new Nm("invalid reset");
        if (h != null && typeof h != "boolean") throw new Nm("invalid expectContinue");
        if (b != null) throw new Nm("invalid throwOnError");
        if (A != null && A !== 0) throw new Nm("maxRedirections is not supported, use the redirect interceptor");
        if (((this.headersTimeout = d), (this.bodyTimeout = f), (this.method = n), (this.abort = null), o == null))
          this.body = null;
        else if (qoa(o)) {
          this.body = o;
          let E = this.body._readableState;
          ((!E || !E.autoDestroy) &&
            ((this.endHandler = function () {
              Hoa(this);
            }),
            this.body.on("end", this.endHandler)),
            (this.errorHandler = (v) => {
              this.abort ? this.abort(v) : (this.error = v);
            }),
            this.body.on("error", this.errorHandler));
        } else if (Voa(o)) this.body = o.byteLength ? o : null;
        else if (ArrayBuffer.isView(o))
          this.body = o.buffer.byteLength ? Buffer.from(o.buffer, o.byteOffset, o.byteLength) : null;
        else if (o instanceof ArrayBuffer) this.body = o.byteLength ? Buffer.from(o) : null;
        else if (typeof o == "string") this.body = o.length ? Buffer.from(o) : null;
        else if (Woa(o) || zoa(o) || Yoa(o)) this.body = o;
        else throw new Nm("body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable");
        if (
          ((this.completed = !1),
          (this.aborted = !1),
          (this.upgrade = m || null),
          (this.path = a ? Koa(r, a) : r),
          (this.origin = e),
          (this.protocol = esa(e)),
          (this.idempotent = u ?? (n === "HEAD" || n === "GET")),
          (this.blocking = c ?? this.method !== "HEAD"),
          (this.reset = p ?? null),
          (this.host = null),
          (this.contentLength = null),
          (this.contentType = null),
          (this.headers = []),
          (this.expectContinue = h ?? !1),
          Array.isArray(s))
        ) {
          if (s.length % 2 !== 0) throw new Nm("headers array must be even");
          for (let E = 0; E < s.length; E += 2) Pit(this, s[E], s[E + 1]);
        } else if (s && typeof s == "object")
          if (s[Symbol.iterator])
            for (let E of s) {
              if (!Array.isArray(E) || E.length !== 2) throw new Nm("headers must be in key-value pair format");
              Pit(this, E[0], E[1]);
            }
          else {
            let E = Object.keys(s);
            for (let v = 0; v < E.length; ++v) Pit(this, E[v], s[E[v]]);
          }
        else if (s != null) throw new Nm("headers must be an object or an array");
        (Joa(y, n, m),
          (this.servername = g || Xoa(this.host) || null),
          (this[qE] = y),
          X8.create.hasSubscribers && X8.create.publish({ request: this }));
      }
      onBodySent(e) {
        if (
          (X8.bodyChunkSent.hasSubscribers && X8.bodyChunkSent.publish({ request: this, chunk: e }),
          this[qE].onBodySent)
        )
          try {
            return this[qE].onBodySent(e);
          } catch (r) {
            this.abort(r);
          }
      }
      onRequestSent() {
        if ((X8.bodySent.hasSubscribers && X8.bodySent.publish({ request: this }), this[qE].onRequestSent))
          try {
            return this[qE].onRequestSent();
          } catch (e) {
            this.abort(e);
          }
      }
      onConnect(e) {
        if ((yD(!this.aborted), yD(!this.completed), this.error)) e(this.error);
        else return ((this.abort = e), this[qE].onConnect(e));
      }
      onResponseStarted() {
        return this[qE].onResponseStarted?.();
      }
      onHeaders(e, r, n, o) {
        (yD(!this.aborted),
          yD(!this.completed),
          X8.headers.hasSubscribers &&
            X8.headers.publish({ request: this, response: { statusCode: e, headers: r, statusText: o } }));
        try {
          return this[qE].onHeaders(e, r, n, o);
        } catch (s) {
          this.abort(s);
        }
      }
      onData(e) {
        (yD(!this.aborted),
          yD(!this.completed),
          X8.bodyChunkReceived.hasSubscribers && X8.bodyChunkReceived.publish({ request: this, chunk: e }));
        try {
          return this[qE].onData(e);
        } catch (r) {
          return (this.abort(r), !1);
        }
      }
      onUpgrade(e, r, n) {
        return (yD(!this.aborted), yD(!this.completed), this[qE].onUpgrade(e, r, n));
      }
      onComplete(e) {
        (this.onFinally(),
          yD(!this.aborted),
          yD(!this.completed),
          (this.completed = !0),
          X8.trailers.hasSubscribers && X8.trailers.publish({ request: this, trailers: e }));
        try {
          return this[qE].onComplete(e);
        } catch (r) {
          this.onError(r);
        }
      }
      onError(e) {
        if ((this.onFinally(), X8.error.hasSubscribers && X8.error.publish({ request: this, error: e }), !this.aborted))
          return ((this.aborted = !0), this[qE].onError(e));
      }
      onFinally() {
        (this.errorHandler && (this.body.off("error", this.errorHandler), (this.errorHandler = null)),
          this.endHandler && (this.body.off("end", this.endHandler), (this.endHandler = null)));
      }
      addHeader(e, r) {
        return (Pit(this, e, r), this);
      }
    };
  function Pit(t, e, r) {
    if (r && typeof r == "object" && !Array.isArray(r)) throw new Nm(`invalid ${e} header`);
    if (r === void 0) return;
    let n = lKn[e];
    if (n === void 0 && ((n = e.toLowerCase()), lKn[n] === void 0 && !mKn(n))) throw new Nm("invalid header key");
    if (Array.isArray(r)) {
      let o = [];
      for (let s = 0; s < r.length; s++)
        if (typeof r[s] == "string") {
          if (!cKn(r[s])) throw new Nm(`invalid ${e} header`);
          o.push(r[s]);
        } else if (r[s] === null) o.push("");
        else {
          if (typeof r[s] == "object") throw new Nm(`invalid ${e} header`);
          o.push(`${r[s]}`);
        }
      r = o;
    } else if (typeof r == "string") {
      if (!cKn(r)) throw new Nm(`invalid ${e} header`);
    } else r === null ? (r = "") : (r = `${r}`);
    if (t.host === null && n === "host") {
      if (typeof r != "string") throw new Nm("invalid host header");
      t.host = r;
    } else if (t.contentLength === null && n === "content-length") {
      if (((t.contentLength = parseInt(r, 10)), !Number.isFinite(t.contentLength)))
        throw new Nm("invalid content-length header");
    } else if (t.contentType === null && n === "content-type") ((t.contentType = r), t.headers.push(e, r));
    else {
      if (n === "transfer-encoding" || n === "keep-alive" || n === "upgrade") throw new Nm(`invalid ${n} header`);
      if (n === "connection") {
        let o = typeof r == "string" ? r.toLowerCase() : null;
        if (o !== "close" && o !== "keep-alive") throw new Nm("invalid connection header");
        o === "close" && (t.reset = !0);
      } else {
        if (n === "expect") throw new Goa("expect header not supported");
        t.headers.push(e, r);
      }
    }
  }
  dKn.exports = Asr;
});