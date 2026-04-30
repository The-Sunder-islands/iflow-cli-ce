/**
 * @module Lri
 * @category utils/oop
 * @label oop
 * @position 1562 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Lri) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Lri = T((ZCc, Bri) => {
  "use strict";
  var wcr = Ae("node:assert"),
    { kConstruct: fha } = n0(),
    { urlEquals: pha, getFieldValues: xcr } = Nri(),
    { kEnumerableProperty: sY, isDisturbed: hha } = ks(),
    { webidl: Ki } = jg(),
    { cloneResponse: gha, fromInnerResponse: bha, getResponseState: Aha } = CCe(),
    { Request: xCe, fromInnerRequest: yha, getRequestState: ND } = Rle(),
    { fetching: _ha } = wCe(),
    { urlIsHttpHttpsScheme: Jot, readAllBytes: Eha } = z6(),
    { createDeferredPromise: kle } = $ve(),
    Xot = class t {
      #e;
      constructor() {
        (arguments[0] !== fha && Ki.illegalConstructor(), Ki.util.markAsUncloneable(this), (this.#e = arguments[1]));
      }
      async match(e, r = {}) {
        Ki.brandCheck(this, t);
        let n = "Cache.match";
        (Ki.argumentLengthCheck(arguments, 1, n),
          (e = Ki.converters.RequestInfo(e)),
          (r = Ki.converters.CacheQueryOptions(r, n, "options")));
        let o = this.#i(e, r, 1);
        if (o.length !== 0) return o[0];
      }
      async matchAll(e = void 0, r = {}) {
        Ki.brandCheck(this, t);
        let n = "Cache.matchAll";
        return (
          e !== void 0 && (e = Ki.converters.RequestInfo(e)),
          (r = Ki.converters.CacheQueryOptions(r, n, "options")),
          this.#i(e, r)
        );
      }
      async add(e) {
        (Ki.brandCheck(this, t), Ki.argumentLengthCheck(arguments, 1, "Cache.add"), (e = Ki.converters.RequestInfo(e)));
        let n = [e];
        return await this.addAll(n);
      }
      async addAll(e) {
        Ki.brandCheck(this, t);
        let r = "Cache.addAll";
        Ki.argumentLengthCheck(arguments, 1, r);
        let n = [],
          o = [];
        for (let p of e) {
          if (p === void 0)
            throw Ki.errors.conversionFailed({
              prefix: r,
              argument: "Argument 1",
              types: ["undefined is not allowed"],
            });
          if (((p = Ki.converters.RequestInfo(p)), typeof p == "string")) continue;
          let h = ND(p);
          if (!Jot(h.url) || h.method !== "GET")
            throw Ki.errors.exception({ header: r, message: "Expected http/s scheme when method is not GET." });
        }
        let s = [];
        for (let p of e) {
          let h = ND(new xCe(p));
          if (!Jot(h.url)) throw Ki.errors.exception({ header: r, message: "Expected http/s scheme." });
          ((h.initiator = "fetch"), (h.destination = "subresource"), o.push(h));
          let g = kle();
          (s.push(
            _ha({
              request: h,
              processResponse(b) {
                if (b.type === "error" || b.status === 206 || b.status < 200 || b.status > 299)
                  g.reject(
                    Ki.errors.exception({
                      header: "Cache.addAll",
                      message: "Received an invalid status code or the request failed.",
                    }),
                  );
                else if (b.headersList.contains("vary")) {
                  let A = xcr(b.headersList.get("vary"));
                  for (let y of A)
                    if (y === "*") {
                      g.reject(Ki.errors.exception({ header: "Cache.addAll", message: "invalid vary field value" }));
                      for (let E of s) E.abort();
                      return;
                    }
                }
              },
              processResponseEndOfBody(b) {
                if (b.aborted) {
                  g.reject(new DOMException("aborted", "AbortError"));
                  return;
                }
                g.resolve(b);
              },
            }),
          ),
            n.push(g.promise));
        }
        let u = await Promise.all(n),
          c = [],
          m = 0;
        for (let p of u) {
          let h = { type: "put", request: o[m], response: p };
          (c.push(h), m++);
        }
        let d = kle(),
          f = null;
        try {
          this.#t(c);
        } catch (p) {
          f = p;
        }
        return (
          queueMicrotask(() => {
            f === null ? d.resolve(void 0) : d.reject(f);
          }),
          d.promise
        );
      }
      async put(e, r) {
        Ki.brandCheck(this, t);
        let n = "Cache.put";
        (Ki.argumentLengthCheck(arguments, 2, n),
          (e = Ki.converters.RequestInfo(e)),
          (r = Ki.converters.Response(r, n, "response")));
        let o = null;
        if ((Ki.is.Request(e) ? (o = ND(e)) : (o = ND(new xCe(e))), !Jot(o.url) || o.method !== "GET"))
          throw Ki.errors.exception({ header: n, message: "Expected an http/s scheme when method is not GET" });
        let s = Aha(r);
        if (s.status === 206) throw Ki.errors.exception({ header: n, message: "Got 206 status" });
        if (s.headersList.contains("vary")) {
          let h = xcr(s.headersList.get("vary"));
          for (let g of h) if (g === "*") throw Ki.errors.exception({ header: n, message: "Got * vary field value" });
        }
        if (s.body && (hha(s.body.stream) || s.body.stream.locked))
          throw Ki.errors.exception({ header: n, message: "Response body is locked or disturbed" });
        let a = gha(s),
          u = kle();
        if (s.body != null) {
          let g = s.body.stream.getReader();
          Eha(g, u.resolve, u.reject);
        } else u.resolve(void 0);
        let c = [],
          m = { type: "put", request: o, response: a };
        c.push(m);
        let d = await u.promise;
        a.body != null && (a.body.source = d);
        let f = kle(),
          p = null;
        try {
          this.#t(c);
        } catch (h) {
          p = h;
        }
        return (
          queueMicrotask(() => {
            p === null ? f.resolve() : f.reject(p);
          }),
          f.promise
        );
      }
      async delete(e, r = {}) {
        Ki.brandCheck(this, t);
        let n = "Cache.delete";
        (Ki.argumentLengthCheck(arguments, 1, n),
          (e = Ki.converters.RequestInfo(e)),
          (r = Ki.converters.CacheQueryOptions(r, n, "options")));
        let o = null;
        if (Ki.is.Request(e)) {
          if (((o = ND(e)), o.method !== "GET" && !r.ignoreMethod)) return !1;
        } else (wcr(typeof e == "string"), (o = ND(new xCe(e))));
        let s = [],
          a = { type: "delete", request: o, options: r };
        s.push(a);
        let u = kle(),
          c = null,
          m;
        try {
          m = this.#t(s);
        } catch (d) {
          c = d;
        }
        return (
          queueMicrotask(() => {
            c === null ? u.resolve(!!m?.length) : u.reject(c);
          }),
          u.promise
        );
      }
      async keys(e = void 0, r = {}) {
        Ki.brandCheck(this, t);
        let n = "Cache.keys";
        (e !== void 0 && (e = Ki.converters.RequestInfo(e)), (r = Ki.converters.CacheQueryOptions(r, n, "options")));
        let o = null;
        if (e !== void 0)
          if (Ki.is.Request(e)) {
            if (((o = ND(e)), o.method !== "GET" && !r.ignoreMethod)) return [];
          } else typeof e == "string" && (o = ND(new xCe(e)));
        let s = kle(),
          a = [];
        if (e === void 0) for (let u of this.#e) a.push(u[0]);
        else {
          let u = this.#r(o, r);
          for (let c of u) a.push(c[0]);
        }
        return (
          queueMicrotask(() => {
            let u = [];
            for (let c of a) {
              let m = yha(c, void 0, new AbortController().signal, "immutable");
              u.push(m);
            }
            s.resolve(Object.freeze(u));
          }),
          s.promise
        );
      }
      #t(e) {
        let r = this.#e,
          n = [...r],
          o = [],
          s = [];
        try {
          for (let a of e) {
            if (a.type !== "delete" && a.type !== "put")
              throw Ki.errors.exception({
                header: "Cache.#batchCacheOperations",
                message: 'operation type does not match "delete" or "put"',
              });
            if (a.type === "delete" && a.response != null)
              throw Ki.errors.exception({
                header: "Cache.#batchCacheOperations",
                message: "delete operation should not have an associated response",
              });
            if (this.#r(a.request, a.options, o).length) throw new DOMException("???", "InvalidStateError");
            let u;
            if (a.type === "delete") {
              if (((u = this.#r(a.request, a.options)), u.length === 0)) return [];
              for (let c of u) {
                let m = r.indexOf(c);
                (wcr(m !== -1), r.splice(m, 1));
              }
            } else if (a.type === "put") {
              if (a.response == null)
                throw Ki.errors.exception({
                  header: "Cache.#batchCacheOperations",
                  message: "put operation should have an associated response",
                });
              let c = a.request;
              if (!Jot(c.url))
                throw Ki.errors.exception({
                  header: "Cache.#batchCacheOperations",
                  message: "expected http or https scheme",
                });
              if (c.method !== "GET")
                throw Ki.errors.exception({ header: "Cache.#batchCacheOperations", message: "not get method" });
              if (a.options != null)
                throw Ki.errors.exception({
                  header: "Cache.#batchCacheOperations",
                  message: "options must not be defined",
                });
              u = this.#r(a.request);
              for (let m of u) {
                let d = r.indexOf(m);
                (wcr(d !== -1), r.splice(d, 1));
              }
              (r.push([a.request, a.response]), o.push([a.request, a.response]));
            }
            s.push([a.request, a.response]);
          }
          return s;
        } catch (a) {
          throw ((this.#e.length = 0), (this.#e = n), a);
        }
      }
      #r(e, r, n) {
        let o = [],
          s = n ?? this.#e;
        for (let a of s) {
          let [u, c] = a;
          this.#n(e, u, c, r) && o.push(a);
        }
        return o;
      }
      #n(e, r, n = null, o) {
        let s = new URL(e.url),
          a = new URL(r.url);
        if ((o?.ignoreSearch && ((a.search = ""), (s.search = "")), !pha(s, a, !0))) return !1;
        if (n == null || o?.ignoreVary || !n.headersList.contains("vary")) return !0;
        let u = xcr(n.headersList.get("vary"));
        for (let c of u) {
          if (c === "*") return !1;
          let m = r.headersList.get(c),
            d = e.headersList.get(c);
          if (m !== d) return !1;
        }
        return !0;
      }
      #i(e, r, n = 1 / 0) {
        let o = null;
        if (e !== void 0)
          if (Ki.is.Request(e)) {
            if (((o = ND(e)), o.method !== "GET" && !r.ignoreMethod)) return [];
          } else typeof e == "string" && (o = ND(new xCe(e)));
        let s = [];
        if (e === void 0) for (let u of this.#e) s.push(u[1]);
        else {
          let u = this.#r(o, r);
          for (let c of u) s.push(c[1]);
        }
        let a = [];
        for (let u of s) {
          let c = bha(u, "immutable");
          if ((a.push(c.clone()), a.length >= n)) break;
        }
        return Object.freeze(a);
      }
    };
  Object.defineProperties(Xot.prototype, {
    [Symbol.toStringTag]: { value: "Cache", configurable: !0 },
    match: sY,
    matchAll: sY,
    add: sY,
    addAll: sY,
    put: sY,
    delete: sY,
    keys: sY,
  });
  var Pri = [
    { key: "ignoreSearch", converter: Ki.converters.boolean, defaultValue: () => !1 },
    { key: "ignoreMethod", converter: Ki.converters.boolean, defaultValue: () => !1 },
    { key: "ignoreVary", converter: Ki.converters.boolean, defaultValue: () => !1 },
  ];
  Ki.converters.CacheQueryOptions = Ki.dictionaryConverter(Pri);
  Ki.converters.MultiCacheQueryOptions = Ki.dictionaryConverter([
    ...Pri,
    { key: "cacheName", converter: Ki.converters.DOMString },
  ]);
  Ki.converters.Response = Ki.interfaceConverter(Ki.is.Response, "Response");
  Ki.converters["sequence<RequestInfo>"] = Ki.sequenceConverter(Ki.converters.RequestInfo);
  Bri.exports = { Cache: Xot };
});