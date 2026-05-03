/**
 * @module pot
 * @category app/core
 * @label iflow-core
 * @position 1515 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pot) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class t
 * Functions: a, L0a, n
 * Features: esbuild module exports: pot
 * === End semantic info ===
 */


var pot = T((nCc, KXn) => {
  "use strict";
  var gle = Ae("node:assert"),
    { kRetryHandlerDefaultRetry: WXn } = n0(),
    { RequestRetryError: cCe } = da(),
    P0a = kve(),
    { isDisturbed: zXn, parseRangeHeader: YXn, wrapRequestBody: B0a } = ks();
  function L0a(t) {
    let e = new Date(t).getTime();
    return isNaN(e) ? 0 : e - Date.now();
  }
  var Gar = class t {
    constructor(e, { dispatch: r, handler: n }) {
      let { retryOptions: o, ...s } = e,
        {
          retry: a,
          maxRetries: u,
          maxTimeout: c,
          minTimeout: m,
          timeoutFactor: d,
          methods: f,
          errorCodes: p,
          retryAfter: h,
          statusCodes: g,
          throwOnError: b,
        } = o ?? {};
      ((this.error = null),
        (this.dispatch = r),
        (this.handler = P0a.wrap(n)),
        (this.opts = { ...s, body: B0a(e.body) }),
        (this.retryOpts = {
          throwOnError: b ?? !0,
          retry: a ?? t[WXn],
          retryAfter: h ?? !0,
          maxTimeout: c ?? 30 * 1e3,
          minTimeout: m ?? 500,
          timeoutFactor: d ?? 2,
          maxRetries: u ?? 5,
          methods: f ?? ["GET", "HEAD", "OPTIONS", "PUT", "DELETE", "TRACE"],
          statusCodes: g ?? [500, 502, 503, 504, 429],
          errorCodes: p ?? [
            "ECONNRESET",
            "ECONNREFUSED",
            "ENOTFOUND",
            "ENETDOWN",
            "ENETUNREACH",
            "EHOSTDOWN",
            "EHOSTUNREACH",
            "EPIPE",
            "UND_ERR_SOCKET",
          ],
        }),
        (this.retryCount = 0),
        (this.retryCountCheckpoint = 0),
        (this.headersSent = !1),
        (this.start = 0),
        (this.end = null),
        (this.etag = null));
    }
    onResponseStartWithRetry(e, r, n, o, s) {
      if (this.retryOpts.throwOnError) {
        this.retryOpts.statusCodes.includes(r) === !1
          ? ((this.headersSent = !0), this.handler.onResponseStart?.(e, r, n, o))
          : (this.error = s);
        return;
      }
      if (zXn(this.opts.body)) {
        ((this.headersSent = !0), this.handler.onResponseStart?.(e, r, n, o));
        return;
      }
      function a(u) {
        if (u) {
          ((this.headersSent = !0), this.handler.onResponseStart?.(e, r, n, o), e.resume());
          return;
        }
        ((this.error = s), e.resume());
      }
      (e.pause(),
        this.retryOpts.retry(
          s,
          { state: { counter: this.retryCount }, opts: { retryOptions: this.retryOpts, ...this.opts } },
          a.bind(this),
        ));
    }
    onRequestStart(e, r) {
      this.headersSent || this.handler.onRequestStart?.(e, r);
    }
    onRequestUpgrade(e, r, n, o) {
      this.handler.onRequestUpgrade?.(e, r, n, o);
    }
    static [WXn](e, { state: r, opts: n }, o) {
      let { statusCode: s, code: a, headers: u } = e,
        { method: c, retryOptions: m } = n,
        {
          maxRetries: d,
          minTimeout: f,
          maxTimeout: p,
          timeoutFactor: h,
          statusCodes: g,
          errorCodes: b,
          methods: A,
        } = m,
        { counter: y } = r;
      if (a && a !== "UND_ERR_REQ_RETRY" && !b.includes(a)) {
        o(e);
        return;
      }
      if (Array.isArray(A) && !A.includes(c)) {
        o(e);
        return;
      }
      if (s != null && Array.isArray(g) && !g.includes(s)) {
        o(e);
        return;
      }
      if (y > d) {
        o(e);
        return;
      }
      let E = u?.["retry-after"];
      E && ((E = Number(E)), (E = Number.isNaN(E) ? L0a(u["retry-after"]) : E * 1e3));
      let v = E > 0 ? Math.min(E, p) : Math.min(f * h ** (y - 1), p);
      setTimeout(() => o(null), v);
    }
    onResponseStart(e, r, n, o) {
      if (((this.error = null), (this.retryCount += 1), r >= 300)) {
        let s = new cCe("Request failed", r, { headers: n, data: { count: this.retryCount } });
        this.onResponseStartWithRetry(e, r, n, o, s);
        return;
      }
      if (this.headersSent) {
        if (r !== 206 && (this.start > 0 || r !== 200))
          throw new cCe("server does not support the range header and the payload was partially consumed", r, {
            headers: n,
            data: { count: this.retryCount },
          });
        let s = YXn(n["content-range"]);
        if (!s) throw new cCe("Content-Range mismatch", r, { headers: n, data: { count: this.retryCount } });
        if (this.etag != null && this.etag !== n.etag)
          throw new cCe("ETag mismatch", r, { headers: n, data: { count: this.retryCount } });
        let { start: a, size: u, end: c = u ? u - 1 : null } = s;
        (gle(this.start === a, "content-range mismatch"),
          gle(this.end == null || this.end === c, "content-range mismatch"));
        return;
      }
      if (this.end == null) {
        if (r === 206) {
          let s = YXn(n["content-range"]);
          if (s == null) {
            ((this.headersSent = !0), this.handler.onResponseStart?.(e, r, n, o));
            return;
          }
          let { start: a, size: u, end: c = u ? u - 1 : null } = s;
          (gle(a != null && Number.isFinite(a), "content-range mismatch"),
            gle(c != null && Number.isFinite(c), "invalid content-length"),
            (this.start = a),
            (this.end = c));
        }
        if (this.end == null) {
          let s = n["content-length"];
          this.end = s != null ? Number(s) - 1 : null;
        }
        (gle(Number.isFinite(this.start)),
          gle(this.end == null || Number.isFinite(this.end), "invalid content-length"),
          (this.resume = !0),
          (this.etag = n.etag != null ? n.etag : null),
          this.etag != null && this.etag[0] === "W" && this.etag[1] === "/" && (this.etag = null),
          (this.headersSent = !0),
          this.handler.onResponseStart?.(e, r, n, o));
      } else throw new cCe("Request failed", r, { headers: n, data: { count: this.retryCount } });
    }
    onResponseData(e, r) {
      this.error || ((this.start += r.length), this.handler.onResponseData?.(e, r));
    }
    onResponseEnd(e, r) {
      if (this.error && this.retryOpts.throwOnError) throw this.error;
      if (!this.error) return ((this.retryCount = 0), this.handler.onResponseEnd?.(e, r));
      this.retry(e);
    }
    retry(e) {
      if (this.start !== 0) {
        let r = { range: `bytes=${this.start}-${this.end ?? ""}` };
        (this.etag != null && (r["if-match"] = this.etag),
          (this.opts = { ...this.opts, headers: { ...this.opts.headers, ...r } }));
      }
      try {
        ((this.retryCountCheckpoint = this.retryCount), this.dispatch(this.opts, this));
      } catch (r) {
        this.handler.onResponseError?.(e, r);
      }
    }
    onResponseError(e, r) {
      if (e?.aborted || zXn(this.opts.body)) {
        this.handler.onResponseError?.(e, r);
        return;
      }
      function n(o) {
        if (!o) {
          this.retry(e);
          return;
        }
        this.handler?.onResponseError?.(e, o);
      }
      (this.retryCount - this.retryCountCheckpoint > 0
        ? (this.retryCount = this.retryCountCheckpoint + (this.retryCount - this.retryCountCheckpoint))
        : (this.retryCount += 1),
        this.retryOpts.retry(
          r,
          { state: { counter: this.retryCount }, opts: { retryOptions: this.retryOpts, ...this.opts } },
          n.bind(this),
        ));
    }
  };
  KXn.exports = Gar;
});