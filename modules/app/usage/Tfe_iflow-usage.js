/**
 * @module Tfe
 * @category app/usage
 * @label iflow-usage
 * @position 1909 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tfe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends, class extends, class extends, class extends, class t
 * Functions: GXi, Hbt, bEr, gEr, o, QXi
 * Features: esbuild module exports: Tfe
 * === End semantic info ===
 */


var Tfe = T((iwl, bXi) => {
  "use strict";
  var Ifu = zv(),
    Rfu = (t, e, r) => Ifu(t, e, r) > 0;
  bXi.exports = Rfu;
});
var QJ,
  uEr = j(() => {
    QJ = class extends Error {
      response;
      request;
      options;
      constructor(e, r, n) {
        let o = e.status || e.status === 0 ? e.status : "",
          s = e.statusText ?? "",
          a = `${o} ${s}`.trim(),
          u = a ? `status code ${a}` : "an unknown error";
        (super(`Request failed with ${u}: ${r.method} ${r.url}`),
          (this.name = "HTTPError"),
          (this.response = e),
          (this.request = r),
          (this.options = n));
      }
    };
  });
var Dfe,
  cEr = j(() => {
    Dfe = class extends Error {
      name = "NonError";
      value;
      constructor(e) {
        let r = "Non-error value was thrown";
        try {
          typeof e == "string"
            ? (r = e)
            : e && typeof e == "object" && "message" in e && typeof e.message == "string" && (r = e.message);
        } catch {}
        (super(r), (this.value = e));
      }
    };
  });
var Ife,
  AXi = j(() => {
    cEr();
    Ife = class extends Error {
      name = "ForceRetryError";
      customDelay;
      code;
      customRequest;
      constructor(e) {
        let r = e?.cause ? (e.cause instanceof Error ? e.cause : new Dfe(e.cause)) : void 0;
        (super(e?.code ? `Forced retry: ${e.code}` : "Forced retry", r ? { cause: r } : void 0),
          (this.customDelay = e?.delay),
          (this.code = e?.code),
          (this.customRequest = e?.request));
      }
    };
  });
var lEr,
  yXi,
  jbt,
  _Xi,
  EXi,
  Qbt,
  kfu,
  vXi,
  Gbt,
  CXi,
  qbt,
  wDe,
  SXi,
  wXi,
  xXi,
  TXi,
  GJ = j(() => {
    ((lEr = (() => {
      let t = !1,
        e = !1,
        r = typeof globalThis.ReadableStream == "function",
        n = typeof globalThis.Request == "function";
      if (r && n)
        try {
          e = new globalThis.Request("https://empty.invalid", {
            body: new globalThis.ReadableStream(),
            method: "POST",
            get duplex() {
              return ((t = !0), "half");
            },
          }).headers.has("Content-Type");
        } catch (o) {
          if (o instanceof Error && o.message === "unsupported BodyInit type") return !1;
          throw o;
        }
      return t && !e;
    })()),
      (yXi = typeof globalThis.AbortController == "function"),
      (jbt = typeof globalThis.AbortSignal == "function" && typeof globalThis.AbortSignal.any == "function"),
      (_Xi = typeof globalThis.ReadableStream == "function"),
      (EXi = typeof globalThis.FormData == "function"),
      (Qbt = ["get", "post", "put", "patch", "head", "delete"]),
      (kfu = () => {}));
    kfu();
    ((vXi = {
      json: "application/json",
      text: "text/*",
      formData: "multipart/form-data",
      arrayBuffer: "*/*",
      blob: "*/*",
      bytes: "*/*",
    }),
      (Gbt = 2147483647),
      (CXi = new TextEncoder().encode("------WebKitFormBoundaryaxpyiPgbbPti10Rw").length),
      (qbt = Symbol("stop")),
      (wDe = class {
        options;
        constructor(e) {
          this.options = e;
        }
      }),
      (SXi = (t) => new wDe(t)),
      (wXi = {
        json: !0,
        parseJson: !0,
        stringifyJson: !0,
        searchParams: !0,
        prefixUrl: !0,
        retry: !0,
        timeout: !0,
        hooks: !0,
        throwHttpErrors: !0,
        onDownloadProgress: !0,
        onUploadProgress: !0,
        fetch: !0,
        context: !0,
      }),
      (xXi = { next: !0 }),
      (TXi = {
        method: !0,
        headers: !0,
        body: !0,
        mode: !0,
        credentials: !0,
        cache: !0,
        redirect: !0,
        referrer: !0,
        referrerPolicy: !0,
        integrity: !0,
        keepalive: !0,
        signal: !0,
        window: !0,
        duplex: !0,
      }));
  });
var Ofu,
  DXi,
  IXi,
  RXi,
  kXi = j(() => {
    GJ();
    ((Ofu = (t) => {
      if (!t) return 0;
      if (t instanceof FormData) {
        let e = 0;
        for (let [r, n] of t)
          ((e += CXi),
            (e += new TextEncoder().encode(`Content-Disposition: form-data; name="${r}"`).length),
            (e += typeof n == "string" ? new TextEncoder().encode(n).length : n.size));
        return e;
      }
      if (t instanceof Blob) return t.size;
      if (t instanceof ArrayBuffer) return t.byteLength;
      if (typeof t == "string") return new TextEncoder().encode(t).length;
      if (t instanceof URLSearchParams) return new TextEncoder().encode(t.toString()).length;
      if ("byteLength" in t) return t.byteLength;
      if (typeof t == "object" && t !== null)
        try {
          let e = JSON.stringify(t);
          return new TextEncoder().encode(e).length;
        } catch {
          return 0;
        }
      return 0;
    }),
      (DXi = (t, e, r) => {
        let n,
          o = 0;
        return t.pipeThrough(
          new TransformStream({
            transform(s, a) {
              if ((a.enqueue(s), n)) {
                o += n.byteLength;
                let u = e === 0 ? 0 : o / e;
                (u >= 1 && (u = 1 - Number.EPSILON),
                  r?.({ percent: u, totalBytes: Math.max(e, o), transferredBytes: o }, n));
              }
              n = s;
            },
            flush() {
              n && ((o += n.byteLength), r?.({ percent: 1, totalBytes: Math.max(e, o), transferredBytes: o }, n));
            },
          }),
        );
      }),
      (IXi = (t, e) => {
        if (!t.body) return t;
        if (t.status === 204)
          return new Response(null, { status: t.status, statusText: t.statusText, headers: t.headers });
        let r = Math.max(0, Number(t.headers.get("content-length")) || 0);
        return new Response(DXi(t.body, r, e), { status: t.status, statusText: t.statusText, headers: t.headers });
      }),
      (RXi = (t, e, r) => {
        if (!t.body) return t;
        let n = Ofu(r ?? t.body);
        return new Request(t, { duplex: "half", body: DXi(t.body, n, e) });
      }));
  });
var Hj,
  OXi = j(() => {
    Hj = (t) => t !== null && typeof t == "object";
  });
function Hbt(t, e, r) {
  return Object.hasOwn(e, r) && e[r] === void 0 ? [] : fEr(t[r] ?? [], e[r] ?? []);
}
var xDe,
  mEr,
  dEr,
  Nfu,
  fEr,
  pEr = j(() => {
    GJ();
    OXi();
    ((xDe = (...t) => {
      for (let e of t)
        if ((!Hj(e) || Array.isArray(e)) && e !== void 0)
          throw new TypeError("The `options` argument must be an object");
      return fEr({}, ...t);
    }),
      (mEr = (t = {}, e = {}) => {
        let r = new globalThis.Headers(t),
          n = e instanceof globalThis.Headers,
          o = new globalThis.Headers(e);
        for (let [s, a] of o.entries()) (n && a === "undefined") || a === void 0 ? r.delete(s) : r.set(s, a);
        return r;
      }));
    ((dEr = (t = {}, e = {}) => ({
      beforeRequest: Hbt(t, e, "beforeRequest"),
      beforeRetry: Hbt(t, e, "beforeRetry"),
      afterResponse: Hbt(t, e, "afterResponse"),
      beforeError: Hbt(t, e, "beforeError"),
    })),
      (Nfu = (t, e) => {
        let r = new URLSearchParams();
        for (let n of [t, e])
          if (n !== void 0)
            if (n instanceof URLSearchParams) for (let [o, s] of n.entries()) r.append(o, s);
            else if (Array.isArray(n))
              for (let o of n) {
                if (!Array.isArray(o) || o.length !== 2)
                  throw new TypeError("Array search parameters must be provided in [[key, value], ...] format");
                r.append(String(o[0]), String(o[1]));
              }
            else if (Hj(n)) for (let [o, s] of Object.entries(n)) s !== void 0 && r.append(o, String(s));
            else {
              let o = new URLSearchParams(n);
              for (let [s, a] of o.entries()) r.append(s, a);
            }
        return r;
      }),
      (fEr = (...t) => {
        let e = {},
          r = {},
          n = {},
          o,
          s = [];
        for (let a of t)
          if (Array.isArray(a)) (Array.isArray(e) || (e = []), (e = [...e, ...a]));
          else if (Hj(a)) {
            for (let [u, c] of Object.entries(a)) {
              if (u === "signal" && c instanceof globalThis.AbortSignal) {
                s.push(c);
                continue;
              }
              if (u === "context") {
                if (c != null && (!Hj(c) || Array.isArray(c)))
                  throw new TypeError("The `context` option must be an object");
                e = { ...e, context: c == null ? {} : { ...e.context, ...c } };
                continue;
              }
              if (u === "searchParams") {
                c == null ? (o = void 0) : (o = o === void 0 ? c : Nfu(o, c));
                continue;
              }
              (Hj(c) && u in e && (c = fEr(e[u], c)), (e = { ...e, [u]: c }));
            }
            (Hj(a.hooks) && ((n = dEr(n, a.hooks)), (e.hooks = n)),
              Hj(a.headers) && ((r = mEr(r, a.headers)), (e.headers = r)));
          }
        return (
          o !== void 0 && (e.searchParams = o),
          s.length > 0 &&
            (s.length === 1 ? (e.signal = s[0]) : jbt ? (e.signal = AbortSignal.any(s)) : (e.signal = s.at(-1))),
          e.context === void 0 && (e.context = {}),
          e
        );
      }));
  });
var PXi,
  Pfu,
  Bfu,
  Lfu,
  NXi,
  BXi,
  LXi = j(() => {
    GJ();
    ((PXi = (t) => (Qbt.includes(t) ? t.toUpperCase() : t)),
      (Pfu = ["get", "put", "head", "delete", "options", "trace"]),
      (Bfu = [408, 413, 429, 500, 502, 503, 504]),
      (Lfu = [413, 429, 503]),
      (NXi = {
        limit: 2,
        methods: Pfu,
        statusCodes: Bfu,
        afterStatusCodes: Lfu,
        maxRetryAfter: Number.POSITIVE_INFINITY,
        backoffLimit: Number.POSITIVE_INFINITY,
        delay: (t) => 0.3 * 2 ** (t - 1) * 1e3,
        jitter: void 0,
        retryOnTimeout: !1,
      }),
      (BXi = (t = {}) => {
        if (typeof t == "number") return { ...NXi, limit: t };
        if (t.methods && !Array.isArray(t.methods)) throw new Error("retry.methods must be an array");
        if (((t.methods &&= t.methods.map((r) => r.toLowerCase())), t.statusCodes && !Array.isArray(t.statusCodes)))
          throw new Error("retry.statusCodes must be an array");
        let e = Object.fromEntries(Object.entries(t).filter(([, r]) => r !== void 0));
        return { ...NXi, ...e };
      }));
  });
var qJ,
  hEr = j(() => {
    qJ = class extends Error {
      request;
      constructor(e) {
        (super(`Request timed out: ${e.method} ${e.url}`), (this.name = "TimeoutError"), (this.request = e));
      }
    };
  });
async function gEr(t, e, r, n) {
  return new Promise((o, s) => {
    let a = setTimeout(() => {
      (r && r.abort(), s(new qJ(t)));
    }, n.timeout);
    n.fetch(t, e)
      .then(o)
      .catch(s)
      .then(() => {
        clearTimeout(a);
      });
  });
}
var MXi = j(() => {
  hEr();
});
async function bEr(t, { signal: e }) {
  return new Promise((r, n) => {
    e && (e.throwIfAborted(), e.addEventListener("abort", o, { once: !0 }));
    function o() {
      (clearTimeout(s), n(e.reason));
    }
    let s = setTimeout(() => {
      (e?.removeEventListener("abort", o), r());
    }, t);
  });
}
var FXi = j(() => {});
var UXi,
  $Xi,
  jXi = j(() => {
    GJ();
    ((UXi = (t, e) => {
      let r = {};
      for (let n in e) Object.hasOwn(e, n) && !(n in TXi) && !(n in wXi) && (!(n in t) || n in xXi) && (r[n] = e[n]);
      return r;
    }),
      ($Xi = (t) =>
        t === void 0
          ? !1
          : Array.isArray(t)
            ? t.length > 0
            : t instanceof URLSearchParams
              ? t.size > 0
              : typeof t == "object"
                ? Object.keys(t).length > 0
                : typeof t == "string"
                  ? t.trim().length > 0
                  : !!t));
  });
function QXi(t) {
  return t instanceof QJ || t?.name === QJ.name;
}
function GXi(t) {
  return t instanceof qJ || t?.name === qJ.name;
}
var qXi = j(() => {
  uEr();
  hEr();
});
var TDe,
  HXi = j(() => {
    uEr();
    cEr();
    AXi();
    kXi();
    pEr();
    LXi();
    MXi();
    FXi();
    jXi();
    qXi();
    GJ();
    TDe = class t {
      static create(e, r) {
        let n = new t(e, r),
          o = async () => {
            if (typeof n.#i.timeout == "number" && n.#i.timeout > Gbt)
              throw new RangeError(`The \`timeout\` option cannot be greater than ${Gbt}`);
            await Promise.resolve();
            let a = await n.#g();
            for (let u of n.#i.hooks.afterResponse) {
              let c = n.#c(a.clone()),
                m;
              try {
                m = await u(n.request, n.#E(), c, { retryCount: n.#r });
              } catch (f) {
                throw (n.#f(c), n.#f(a), f);
              }
              if (m instanceof wDe) throw (n.#f(c), n.#f(a), new Ife(m.options));
              let d = m instanceof globalThis.Response ? m : a;
              (c !== d && n.#f(c), a !== d && n.#f(a), (a = d));
            }
            if (
              (n.#c(a),
              !a.ok &&
                (typeof n.#i.throwHttpErrors == "function" ? n.#i.throwHttpErrors(a.status) : n.#i.throwHttpErrors))
            ) {
              let u = new QJ(a, n.request, n.#E());
              for (let c of n.#i.hooks.beforeError) u = await c(u, { retryCount: n.#r });
              throw u;
            }
            if (n.#i.onDownloadProgress) {
              if (typeof n.#i.onDownloadProgress != "function")
                throw new TypeError("The `onDownloadProgress` option must be a function");
              if (!_Xi) throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
              let u = a.clone();
              return (n.#f(a), IXi(u, n.#i.onDownloadProgress));
            }
            return a;
          },
          s = n.#h(o).finally(() => {
            let a = n.#o;
            (n.#p(a?.body ?? void 0), n.#p(n.request.body ?? void 0));
          });
        for (let [a, u] of Object.entries(vXi))
          (a === "bytes" && typeof globalThis.Response?.prototype?.bytes != "function") ||
            (s[a] = async () => {
              n.request.headers.set("accept", n.request.headers.get("accept") || u);
              let c = await s;
              if (a === "json") {
                if (c.status === 204) return "";
                let m = await c.text();
                return m === "" ? "" : r.parseJson ? r.parseJson(m) : JSON.parse(m);
              }
              return c[a]();
            });
        return s;
      }
      static #e(e) {
        return e && typeof e == "object" && !Array.isArray(e) && !(e instanceof URLSearchParams)
          ? Object.fromEntries(Object.entries(e).filter(([, r]) => r !== void 0))
          : e;
      }
      request;
      #t;
      #r = 0;
      #n;
      #i;
      #o;
      #u;
      #a;
      constructor(e, r = {}) {
        if (
          ((this.#n = e),
          (this.#i = {
            ...r,
            headers: mEr(this.#n.headers, r.headers),
            hooks: dEr({ beforeRequest: [], beforeRetry: [], beforeError: [], afterResponse: [] }, r.hooks),
            method: PXi(r.method ?? this.#n.method ?? "GET"),
            prefixUrl: String(r.prefixUrl || ""),
            retry: BXi(r.retry),
            throwHttpErrors: r.throwHttpErrors ?? !0,
            timeout: r.timeout ?? 1e4,
            fetch: r.fetch ?? globalThis.fetch.bind(globalThis),
            context: r.context ?? {},
          }),
          typeof this.#n != "string" && !(this.#n instanceof URL || this.#n instanceof globalThis.Request))
        )
          throw new TypeError("`input` must be a string, URL, or Request");
        if (this.#i.prefixUrl && typeof this.#n == "string") {
          if (this.#n.startsWith("/")) throw new Error("`input` must not begin with a slash when using `prefixUrl`");
          (this.#i.prefixUrl.endsWith("/") || (this.#i.prefixUrl += "/"), (this.#n = this.#i.prefixUrl + this.#n));
        }
        (yXi &&
          jbt &&
          ((this.#u = this.#i.signal ?? this.#n.signal),
          (this.#t = new globalThis.AbortController()),
          (this.#i.signal = this.#u ? AbortSignal.any([this.#u, this.#t.signal]) : this.#t.signal)),
          lEr && (this.#i.duplex = "half"),
          this.#i.json !== void 0 &&
            ((this.#i.body = this.#i.stringifyJson?.(this.#i.json) ?? JSON.stringify(this.#i.json)),
            this.#i.headers.set("content-type", this.#i.headers.get("content-type") ?? "application/json")));
        let n = r.headers && new globalThis.Headers(r.headers).has("content-type");
        if (
          (this.#n instanceof globalThis.Request &&
            ((EXi && this.#i.body instanceof globalThis.FormData) || this.#i.body instanceof URLSearchParams) &&
            !n &&
            this.#i.headers.delete("content-type"),
          (this.request = new globalThis.Request(this.#n, this.#i)),
          $Xi(this.#i.searchParams))
        ) {
          let s =
              "?" +
              (typeof this.#i.searchParams == "string"
                ? this.#i.searchParams.replace(/^\?/, "")
                : new URLSearchParams(t.#e(this.#i.searchParams)).toString()),
            a = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, s);
          this.request = new globalThis.Request(a, this.#i);
        }
        if (this.#i.onUploadProgress) {
          if (typeof this.#i.onUploadProgress != "function")
            throw new TypeError("The `onUploadProgress` option must be a function");
          if (!lEr)
            throw new Error(
              "Request streams are not supported in your environment. The `duplex` option for `Request` is not available.",
            );
          this.request = this.#v(this.request, this.#i.body ?? void 0);
        }
      }
      #s() {
        let e = this.#i.retry.delay(this.#r),
          r = e;
        this.#i.retry.jitter === !0
          ? (r = Math.random() * e)
          : typeof this.#i.retry.jitter == "function" &&
            ((r = this.#i.retry.jitter(e)), (!Number.isFinite(r) || r < 0) && (r = e));
        let n = this.#i.retry.backoffLimit ?? Number.POSITIVE_INFINITY;
        return Math.min(n, r);
      }
      async #l(e) {
        if ((this.#r++, this.#r > this.#i.retry.limit)) throw e;
        let r = e instanceof Error ? e : new Dfe(e);
        if (r instanceof Ife) return r.customDelay ?? this.#s();
        if (!this.#i.retry.methods.includes(this.request.method.toLowerCase())) throw e;
        if (this.#i.retry.shouldRetry !== void 0) {
          let n = await this.#i.retry.shouldRetry({ error: r, retryCount: this.#r });
          if (n === !1) throw e;
          if (n === !0) return this.#s();
        }
        if (GXi(e) && !this.#i.retry.retryOnTimeout) throw e;
        if (QXi(e)) {
          if (!this.#i.retry.statusCodes.includes(e.response.status)) throw e;
          let n =
            e.response.headers.get("Retry-After") ??
            e.response.headers.get("RateLimit-Reset") ??
            e.response.headers.get("X-RateLimit-Retry-After") ??
            e.response.headers.get("X-RateLimit-Reset") ??
            e.response.headers.get("X-Rate-Limit-Reset");
          if (n && this.#i.retry.afterStatusCodes.includes(e.response.status)) {
            let o = Number(n) * 1e3;
            Number.isNaN(o) ? (o = Date.parse(n) - Date.now()) : o >= Date.parse("2024-01-01") && (o -= Date.now());
            let s = this.#i.retry.maxRetryAfter ?? o;
            return o < s ? o : s;
          }
          if (e.response.status === 413) throw e;
        }
        return this.#s();
      }
      #c(e) {
        return (this.#i.parseJson && (e.json = async () => this.#i.parseJson(await e.text())), e);
      }
      #p(e) {
        e && e.cancel().catch(() => {});
      }
      #f(e) {
        this.#p(e.body ?? void 0);
      }
      async #h(e) {
        try {
          return await e();
        } catch (r) {
          let n = Math.min(await this.#l(r), Gbt);
          if (this.#r < 1) throw r;
          if ((await bEr(n, this.#u ? { signal: this.#u } : {}), r instanceof Ife && r.customRequest)) {
            let o = this.#i.signal
              ? new globalThis.Request(r.customRequest, { signal: this.#i.signal })
              : new globalThis.Request(r.customRequest);
            this.#b(o);
          }
          for (let o of this.#i.hooks.beforeRetry) {
            let s = await o({ request: this.request, options: this.#E(), error: r, retryCount: this.#r });
            if (s instanceof globalThis.Request) {
              this.#b(s);
              break;
            }
            if (s instanceof globalThis.Response) return s;
            if (s === qbt) return;
          }
          return this.#h(e);
        }
      }
      async #g() {
        this.#t?.signal.aborted &&
          ((this.#t = new globalThis.AbortController()),
          (this.#i.signal = this.#u ? AbortSignal.any([this.#u, this.#t.signal]) : this.#t.signal),
          (this.request = new globalThis.Request(this.request, { signal: this.#i.signal })));
        for (let r of this.#i.hooks.beforeRequest) {
          let n = await r(this.request, this.#E(), { retryCount: this.#r });
          if (n instanceof Response) return n;
          if (n instanceof globalThis.Request) {
            this.#b(n);
            break;
          }
        }
        let e = UXi(this.request, this.#i);
        return (
          (this.#o = this.request),
          (this.request = this.#o.clone()),
          this.#i.timeout === !1 ? this.#i.fetch(this.#o, e) : gEr(this.#o, e, this.#t, this.#i)
        );
      }
      #E() {
        if (!this.#a) {
          let { hooks: e, ...r } = this.#i;
          this.#a = Object.freeze(r);
        }
        return this.#a;
      }
      #b(e) {
        ((this.#a = void 0), (this.request = this.#v(e)));
      }
      #v(e, r) {
        return !this.#i.onUploadProgress || !e.body ? e : RXi(e, this.#i.onUploadProgress, r ?? this.#i.body ?? void 0);
      }
    };
  });
var AEr,
  Mfu,
  VXi,
  WXi = j(() => {
    HXi();
    GJ();
    pEr();
    ((AEr = (t) => {
      let e = (r, n) => TDe.create(r, xDe(t, n));
      for (let r of Qbt) e[r] = (n, o) => TDe.create(n, xDe(t, o, { method: r }));
      return (
        (e.create = (r) => AEr(xDe(r))),
        (e.extend = (r) => (typeof r == "function" && (r = r(t ?? {})), AEr(xDe(t, r)))),
        (e.stop = qbt),
        (e.retry = SXi),
        e
      );
    }),
      (Mfu = AEr()),
      (VXi = Mfu));
  });