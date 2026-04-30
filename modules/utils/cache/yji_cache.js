/**
 * @module yji
 * @category utils/cache
 * @label cache
 * @position 1872 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yji) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var yji = T((D3t) => {
  "use strict";
  Object.defineProperty(D3t, "__esModule", { value: !0 });
  D3t.LRUCache = void 0;
  var x1e = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date,
    gji = new Set(),
    u6r = typeof process == "object" && process ? process : {},
    bji = (t, e, r, n) => {
      typeof u6r.emitWarning == "function" ? u6r.emitWarning(t, e, r, n) : console.error(`[${r}] ${e}: ${t}`);
    },
    T3t = globalThis.AbortController,
    hji = globalThis.AbortSignal;
  if (typeof T3t > "u") {
    ((hji = class {
      onabort;
      _onabort = [];
      reason;
      aborted = !1;
      addEventListener(n, o) {
        this._onabort.push(o);
      }
    }),
      (T3t = class {
        constructor() {
          e();
        }
        signal = new hji();
        abort(n) {
          if (!this.signal.aborted) {
            ((this.signal.reason = n), (this.signal.aborted = !0));
            for (let o of this.signal._onabort) o(n);
            this.signal.onabort?.(n);
          }
        }
      }));
    let t = u6r.env?.LRU_CACHE_IGNORE_AC_WARNING !== "1",
      e = () => {
        t &&
          ((t = !1),
          bji(
            "AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.",
            "NO_ABORT_CONTROLLER",
            "ENOTSUP",
            e,
          ));
      };
  }
  var wsu = (t) => !gji.has(t),
    Wal = Symbol("type"),
    yj = (t) => t && t === Math.floor(t) && t > 0 && isFinite(t),
    Aji = (t) =>
      yj(t)
        ? t <= Math.pow(2, 8)
          ? Uint8Array
          : t <= Math.pow(2, 16)
            ? Uint16Array
            : t <= Math.pow(2, 32)
              ? Uint32Array
              : t <= Number.MAX_SAFE_INTEGER
                ? T1e
                : null
        : null,
    T1e = class extends Array {
      constructor(e) {
        (super(e), this.fill(0));
      }
    },
    c6r = class t {
      heap;
      length;
      static #e = !1;
      static create(e) {
        let r = Aji(e);
        if (!r) return [];
        t.#e = !0;
        let n = new t(e, r);
        return ((t.#e = !1), n);
      }
      constructor(e, r) {
        if (!t.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
        ((this.heap = new r(e)), (this.length = 0));
      }
      push(e) {
        this.heap[this.length++] = e;
      }
      pop() {
        return this.heap[--this.length];
      }
    },
    l6r = class t {
      #e;
      #t;
      #r;
      #n;
      #i;
      #o;
      ttl;
      ttlResolution;
      ttlAutopurge;
      updateAgeOnGet;
      updateAgeOnHas;
      allowStale;
      noDisposeOnSet;
      noUpdateTTL;
      maxEntrySize;
      sizeCalculation;
      noDeleteOnFetchRejection;
      noDeleteOnStaleGet;
      allowStaleOnFetchAbort;
      allowStaleOnFetchRejection;
      ignoreFetchAbort;
      #u;
      #a;
      #s;
      #l;
      #c;
      #p;
      #f;
      #h;
      #g;
      #E;
      #b;
      #v;
      #S;
      #_;
      #C;
      #w;
      #A;
      static unsafeExposeInternals(e) {
        return {
          starts: e.#S,
          ttls: e.#_,
          sizes: e.#v,
          keyMap: e.#s,
          keyList: e.#l,
          valList: e.#c,
          next: e.#p,
          prev: e.#f,
          get head() {
            return e.#h;
          },
          get tail() {
            return e.#g;
          },
          free: e.#E,
          isBackgroundFetch: (r) => e.#d(r),
          backgroundFetch: (r, n, o, s) => e.#U(r, n, o, s),
          moveToTail: (r) => e.#B(r),
          indexes: (r) => e.#x(r),
          rindexes: (r) => e.#T(r),
          isStale: (r) => e.#y(r),
        };
      }
      get max() {
        return this.#e;
      }
      get maxSize() {
        return this.#t;
      }
      get calculatedSize() {
        return this.#a;
      }
      get size() {
        return this.#u;
      }
      get fetchMethod() {
        return this.#i;
      }
      get memoMethod() {
        return this.#o;
      }
      get dispose() {
        return this.#r;
      }
      get disposeAfter() {
        return this.#n;
      }
      constructor(e) {
        let {
          max: r = 0,
          ttl: n,
          ttlResolution: o = 1,
          ttlAutopurge: s,
          updateAgeOnGet: a,
          updateAgeOnHas: u,
          allowStale: c,
          dispose: m,
          disposeAfter: d,
          noDisposeOnSet: f,
          noUpdateTTL: p,
          maxSize: h = 0,
          maxEntrySize: g = 0,
          sizeCalculation: b,
          fetchMethod: A,
          memoMethod: y,
          noDeleteOnFetchRejection: E,
          noDeleteOnStaleGet: v,
          allowStaleOnFetchRejection: C,
          allowStaleOnFetchAbort: x,
          ignoreFetchAbort: k,
        } = e;
        if (r !== 0 && !yj(r)) throw new TypeError("max option must be a nonnegative integer");
        let R = r ? Aji(r) : Array;
        if (!R) throw new Error("invalid max value: " + r);
        if (
          ((this.#e = r),
          (this.#t = h),
          (this.maxEntrySize = g || this.#t),
          (this.sizeCalculation = b),
          this.sizeCalculation)
        ) {
          if (!this.#t && !this.maxEntrySize)
            throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
          if (typeof this.sizeCalculation != "function") throw new TypeError("sizeCalculation set to non-function");
        }
        if (y !== void 0 && typeof y != "function") throw new TypeError("memoMethod must be a function if defined");
        if (((this.#o = y), A !== void 0 && typeof A != "function"))
          throw new TypeError("fetchMethod must be a function if specified");
        if (
          ((this.#i = A),
          (this.#w = !!A),
          (this.#s = new Map()),
          (this.#l = new Array(r).fill(void 0)),
          (this.#c = new Array(r).fill(void 0)),
          (this.#p = new R(r)),
          (this.#f = new R(r)),
          (this.#h = 0),
          (this.#g = 0),
          (this.#E = c6r.create(r)),
          (this.#u = 0),
          (this.#a = 0),
          typeof m == "function" && (this.#r = m),
          typeof d == "function" ? ((this.#n = d), (this.#b = [])) : ((this.#n = void 0), (this.#b = void 0)),
          (this.#C = !!this.#r),
          (this.#A = !!this.#n),
          (this.noDisposeOnSet = !!f),
          (this.noUpdateTTL = !!p),
          (this.noDeleteOnFetchRejection = !!E),
          (this.allowStaleOnFetchRejection = !!C),
          (this.allowStaleOnFetchAbort = !!x),
          (this.ignoreFetchAbort = !!k),
          this.maxEntrySize !== 0)
        ) {
          if (this.#t !== 0 && !yj(this.#t)) throw new TypeError("maxSize must be a positive integer if specified");
          if (!yj(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
          this.#O();
        }
        if (
          ((this.allowStale = !!c),
          (this.noDeleteOnStaleGet = !!v),
          (this.updateAgeOnGet = !!a),
          (this.updateAgeOnHas = !!u),
          (this.ttlResolution = yj(o) || o === 0 ? o : 1),
          (this.ttlAutopurge = !!s),
          (this.ttl = n || 0),
          this.ttl)
        ) {
          if (!yj(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
          this.#R();
        }
        if (this.#e === 0 && this.ttl === 0 && this.#t === 0)
          throw new TypeError("At least one of max, maxSize, or ttl is required");
        if (!this.ttlAutopurge && !this.#e && !this.#t) {
          let P = "LRU_CACHE_UNBOUNDED";
          wsu(P) &&
            (gji.add(P),
            bji(
              "TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.",
              "UnboundedCacheWarning",
              P,
              t,
            ));
        }
      }
      getRemainingTTL(e) {
        return this.#s.has(e) ? 1 / 0 : 0;
      }
      #R() {
        let e = new T1e(this.#e),
          r = new T1e(this.#e);
        ((this.#_ = e),
          (this.#S = r),
          (this.#L = (s, a, u = x1e.now()) => {
            if (((r[s] = a !== 0 ? u : 0), (e[s] = a), a !== 0 && this.ttlAutopurge)) {
              let c = setTimeout(() => {
                this.#y(s) && this.#D(this.#l[s], "expire");
              }, a + 1);
              c.unref && c.unref();
            }
          }),
          (this.#I = (s) => {
            r[s] = e[s] !== 0 ? x1e.now() : 0;
          }),
          (this.#m = (s, a) => {
            if (e[a]) {
              let u = e[a],
                c = r[a];
              if (!u || !c) return;
              ((s.ttl = u), (s.start = c), (s.now = n || o()));
              let m = s.now - c;
              s.remainingTTL = u - m;
            }
          }));
        let n = 0,
          o = () => {
            let s = x1e.now();
            if (this.ttlResolution > 0) {
              n = s;
              let a = setTimeout(() => (n = 0), this.ttlResolution);
              a.unref && a.unref();
            }
            return s;
          };
        ((this.getRemainingTTL = (s) => {
          let a = this.#s.get(s);
          if (a === void 0) return 0;
          let u = e[a],
            c = r[a];
          if (!u || !c) return 1 / 0;
          let m = (n || o()) - c;
          return u - m;
        }),
          (this.#y = (s) => {
            let a = r[s],
              u = e[s];
            return !!u && !!a && (n || o()) - a > u;
          }));
      }
      #I = () => {};
      #m = () => {};
      #L = () => {};
      #y = () => !1;
      #O() {
        let e = new T1e(this.#e);
        ((this.#a = 0),
          (this.#v = e),
          (this.#k = (r) => {
            ((this.#a -= e[r]), (e[r] = 0));
          }),
          (this.#M = (r, n, o, s) => {
            if (this.#d(n)) return 0;
            if (!yj(o))
              if (s) {
                if (typeof s != "function") throw new TypeError("sizeCalculation must be a function");
                if (((o = s(n, r)), !yj(o)))
                  throw new TypeError("sizeCalculation return invalid (expect positive integer)");
              } else
                throw new TypeError(
                  "invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.",
                );
            return o;
          }),
          (this.#N = (r, n, o) => {
            if (((e[r] = n), this.#t)) {
              let s = this.#t - e[r];
              for (; this.#a > s; ) this.#P(!0);
            }
            ((this.#a += e[r]), o && ((o.entrySize = n), (o.totalCalculatedSize = this.#a)));
          }));
      }
      #k = (e) => {};
      #N = (e, r, n) => {};
      #M = (e, r, n, o) => {
        if (n || o) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
        return 0;
      };
      *#x({ allowStale: e = this.allowStale } = {}) {
        if (this.#u)
          for (let r = this.#g; !(!this.#F(r) || ((e || !this.#y(r)) && (yield r), r === this.#h)); ) r = this.#f[r];
      }
      *#T({ allowStale: e = this.allowStale } = {}) {
        if (this.#u)
          for (let r = this.#h; !(!this.#F(r) || ((e || !this.#y(r)) && (yield r), r === this.#g)); ) r = this.#p[r];
      }
      #F(e) {
        return e !== void 0 && this.#s.get(this.#l[e]) === e;
      }
      *entries() {
        for (let e of this.#x())
          this.#c[e] !== void 0 && this.#l[e] !== void 0 && !this.#d(this.#c[e]) && (yield [this.#l[e], this.#c[e]]);
      }
      *rentries() {
        for (let e of this.#T())
          this.#c[e] !== void 0 && this.#l[e] !== void 0 && !this.#d(this.#c[e]) && (yield [this.#l[e], this.#c[e]]);
      }
      *keys() {
        for (let e of this.#x()) {
          let r = this.#l[e];
          r !== void 0 && !this.#d(this.#c[e]) && (yield r);
        }
      }
      *rkeys() {
        for (let e of this.#T()) {
          let r = this.#l[e];
          r !== void 0 && !this.#d(this.#c[e]) && (yield r);
        }
      }
      *values() {
        for (let e of this.#x()) this.#c[e] !== void 0 && !this.#d(this.#c[e]) && (yield this.#c[e]);
      }
      *rvalues() {
        for (let e of this.#T()) this.#c[e] !== void 0 && !this.#d(this.#c[e]) && (yield this.#c[e]);
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      [Symbol.toStringTag] = "LRUCache";
      find(e, r = {}) {
        for (let n of this.#x()) {
          let o = this.#c[n],
            s = this.#d(o) ? o.__staleWhileFetching : o;
          if (s !== void 0 && e(s, this.#l[n], this)) return this.get(this.#l[n], r);
        }
      }
      forEach(e, r = this) {
        for (let n of this.#x()) {
          let o = this.#c[n],
            s = this.#d(o) ? o.__staleWhileFetching : o;
          s !== void 0 && e.call(r, s, this.#l[n], this);
        }
      }
      rforEach(e, r = this) {
        for (let n of this.#T()) {
          let o = this.#c[n],
            s = this.#d(o) ? o.__staleWhileFetching : o;
          s !== void 0 && e.call(r, s, this.#l[n], this);
        }
      }
      purgeStale() {
        let e = !1;
        for (let r of this.#T({ allowStale: !0 })) this.#y(r) && (this.#D(this.#l[r], "expire"), (e = !0));
        return e;
      }
      info(e) {
        let r = this.#s.get(e);
        if (r === void 0) return;
        let n = this.#c[r],
          o = this.#d(n) ? n.__staleWhileFetching : n;
        if (o === void 0) return;
        let s = { value: o };
        if (this.#_ && this.#S) {
          let a = this.#_[r],
            u = this.#S[r];
          if (a && u) {
            let c = a - (x1e.now() - u);
            ((s.ttl = c), (s.start = Date.now()));
          }
        }
        return (this.#v && (s.size = this.#v[r]), s);
      }
      dump() {
        let e = [];
        for (let r of this.#x({ allowStale: !0 })) {
          let n = this.#l[r],
            o = this.#c[r],
            s = this.#d(o) ? o.__staleWhileFetching : o;
          if (s === void 0 || n === void 0) continue;
          let a = { value: s };
          if (this.#_ && this.#S) {
            a.ttl = this.#_[r];
            let u = x1e.now() - this.#S[r];
            a.start = Math.floor(Date.now() - u);
          }
          (this.#v && (a.size = this.#v[r]), e.unshift([n, a]));
        }
        return e;
      }
      load(e) {
        this.clear();
        for (let [r, n] of e) {
          if (n.start) {
            let o = Date.now() - n.start;
            n.start = x1e.now() - o;
          }
          this.set(r, n.value, n);
        }
      }
      set(e, r, n = {}) {
        if (r === void 0) return (this.delete(e), this);
        let {
            ttl: o = this.ttl,
            start: s,
            noDisposeOnSet: a = this.noDisposeOnSet,
            sizeCalculation: u = this.sizeCalculation,
            status: c,
          } = n,
          { noUpdateTTL: m = this.noUpdateTTL } = n,
          d = this.#M(e, r, n.size || 0, u);
        if (this.maxEntrySize && d > this.maxEntrySize)
          return (c && ((c.set = "miss"), (c.maxEntrySizeExceeded = !0)), this.#D(e, "set"), this);
        let f = this.#u === 0 ? void 0 : this.#s.get(e);
        if (f === void 0)
          ((f =
            this.#u === 0
              ? this.#g
              : this.#E.length !== 0
                ? this.#E.pop()
                : this.#u === this.#e
                  ? this.#P(!1)
                  : this.#u),
            (this.#l[f] = e),
            (this.#c[f] = r),
            this.#s.set(e, f),
            (this.#p[this.#g] = f),
            (this.#f[f] = this.#g),
            (this.#g = f),
            this.#u++,
            this.#N(f, d, c),
            c && (c.set = "add"),
            (m = !1));
        else {
          this.#B(f);
          let p = this.#c[f];
          if (r !== p) {
            if (this.#w && this.#d(p)) {
              p.__abortController.abort(new Error("replaced"));
              let { __staleWhileFetching: h } = p;
              h !== void 0 && !a && (this.#C && this.#r?.(h, e, "set"), this.#A && this.#b?.push([h, e, "set"]));
            } else a || (this.#C && this.#r?.(p, e, "set"), this.#A && this.#b?.push([p, e, "set"]));
            if ((this.#k(f), this.#N(f, d, c), (this.#c[f] = r), c)) {
              c.set = "replace";
              let h = p && this.#d(p) ? p.__staleWhileFetching : p;
              h !== void 0 && (c.oldValue = h);
            }
          } else c && (c.set = "update");
        }
        if (
          (o !== 0 && !this.#_ && this.#R(),
          this.#_ && (m || this.#L(f, o, s), c && this.#m(c, f)),
          !a && this.#A && this.#b)
        ) {
          let p = this.#b,
            h;
          for (; (h = p?.shift()); ) this.#n?.(...h);
        }
        return this;
      }
      pop() {
        try {
          for (; this.#u; ) {
            let e = this.#c[this.#h];
            if ((this.#P(!0), this.#d(e))) {
              if (e.__staleWhileFetching) return e.__staleWhileFetching;
            } else if (e !== void 0) return e;
          }
        } finally {
          if (this.#A && this.#b) {
            let e = this.#b,
              r;
            for (; (r = e?.shift()); ) this.#n?.(...r);
          }
        }
      }
      #P(e) {
        let r = this.#h,
          n = this.#l[r],
          o = this.#c[r];
        return (
          this.#w && this.#d(o)
            ? o.__abortController.abort(new Error("evicted"))
            : (this.#C || this.#A) && (this.#C && this.#r?.(o, n, "evict"), this.#A && this.#b?.push([o, n, "evict"])),
          this.#k(r),
          e && ((this.#l[r] = void 0), (this.#c[r] = void 0), this.#E.push(r)),
          this.#u === 1 ? ((this.#h = this.#g = 0), (this.#E.length = 0)) : (this.#h = this.#p[r]),
          this.#s.delete(n),
          this.#u--,
          r
        );
      }
      has(e, r = {}) {
        let { updateAgeOnHas: n = this.updateAgeOnHas, status: o } = r,
          s = this.#s.get(e);
        if (s !== void 0) {
          let a = this.#c[s];
          if (this.#d(a) && a.__staleWhileFetching === void 0) return !1;
          if (this.#y(s)) o && ((o.has = "stale"), this.#m(o, s));
          else return (n && this.#I(s), o && ((o.has = "hit"), this.#m(o, s)), !0);
        } else o && (o.has = "miss");
        return !1;
      }
      peek(e, r = {}) {
        let { allowStale: n = this.allowStale } = r,
          o = this.#s.get(e);
        if (o === void 0 || (!n && this.#y(o))) return;
        let s = this.#c[o];
        return this.#d(s) ? s.__staleWhileFetching : s;
      }
      #U(e, r, n, o) {
        let s = r === void 0 ? void 0 : this.#c[r];
        if (this.#d(s)) return s;
        let a = new T3t(),
          { signal: u } = n;
        u?.addEventListener("abort", () => a.abort(u.reason), { signal: a.signal });
        let c = { signal: a.signal, options: n, context: o },
          m = (b, A = !1) => {
            let { aborted: y } = a.signal,
              E = n.ignoreFetchAbort && b !== void 0;
            if (
              (n.status &&
                (y && !A
                  ? ((n.status.fetchAborted = !0),
                    (n.status.fetchError = a.signal.reason),
                    E && (n.status.fetchAbortIgnored = !0))
                  : (n.status.fetchResolved = !0)),
              y && !E && !A)
            )
              return f(a.signal.reason);
            let v = h;
            return (
              this.#c[r] === h &&
                (b === void 0
                  ? v.__staleWhileFetching
                    ? (this.#c[r] = v.__staleWhileFetching)
                    : this.#D(e, "fetch")
                  : (n.status && (n.status.fetchUpdated = !0), this.set(e, b, c.options))),
              b
            );
          },
          d = (b) => (n.status && ((n.status.fetchRejected = !0), (n.status.fetchError = b)), f(b)),
          f = (b) => {
            let { aborted: A } = a.signal,
              y = A && n.allowStaleOnFetchAbort,
              E = y || n.allowStaleOnFetchRejection,
              v = E || n.noDeleteOnFetchRejection,
              C = h;
            if (
              (this.#c[r] === h &&
                (!v || C.__staleWhileFetching === void 0
                  ? this.#D(e, "fetch")
                  : y || (this.#c[r] = C.__staleWhileFetching)),
              E)
            )
              return (
                n.status && C.__staleWhileFetching !== void 0 && (n.status.returnedStale = !0),
                C.__staleWhileFetching
              );
            if (C.__returned === C) throw b;
          },
          p = (b, A) => {
            let y = this.#i?.(e, s, c);
            (y && y instanceof Promise && y.then((E) => b(E === void 0 ? void 0 : E), A),
              a.signal.addEventListener("abort", () => {
                (!n.ignoreFetchAbort || n.allowStaleOnFetchAbort) &&
                  (b(void 0), n.allowStaleOnFetchAbort && (b = (E) => m(E, !0)));
              }));
          };
        n.status && (n.status.fetchDispatched = !0);
        let h = new Promise(p).then(m, d),
          g = Object.assign(h, { __abortController: a, __staleWhileFetching: s, __returned: void 0 });
        return (
          r === void 0 ? (this.set(e, g, { ...c.options, status: void 0 }), (r = this.#s.get(e))) : (this.#c[r] = g),
          g
        );
      }
      #d(e) {
        if (!this.#w) return !1;
        let r = e;
        return (
          !!r && r instanceof Promise && r.hasOwnProperty("__staleWhileFetching") && r.__abortController instanceof T3t
        );
      }
      async fetch(e, r = {}) {
        let {
          allowStale: n = this.allowStale,
          updateAgeOnGet: o = this.updateAgeOnGet,
          noDeleteOnStaleGet: s = this.noDeleteOnStaleGet,
          ttl: a = this.ttl,
          noDisposeOnSet: u = this.noDisposeOnSet,
          size: c = 0,
          sizeCalculation: m = this.sizeCalculation,
          noUpdateTTL: d = this.noUpdateTTL,
          noDeleteOnFetchRejection: f = this.noDeleteOnFetchRejection,
          allowStaleOnFetchRejection: p = this.allowStaleOnFetchRejection,
          ignoreFetchAbort: h = this.ignoreFetchAbort,
          allowStaleOnFetchAbort: g = this.allowStaleOnFetchAbort,
          context: b,
          forceRefresh: A = !1,
          status: y,
          signal: E,
        } = r;
        if (!this.#w)
          return (
            y && (y.fetch = "get"),
            this.get(e, { allowStale: n, updateAgeOnGet: o, noDeleteOnStaleGet: s, status: y })
          );
        let v = {
            allowStale: n,
            updateAgeOnGet: o,
            noDeleteOnStaleGet: s,
            ttl: a,
            noDisposeOnSet: u,
            size: c,
            sizeCalculation: m,
            noUpdateTTL: d,
            noDeleteOnFetchRejection: f,
            allowStaleOnFetchRejection: p,
            allowStaleOnFetchAbort: g,
            ignoreFetchAbort: h,
            status: y,
            signal: E,
          },
          C = this.#s.get(e);
        if (C === void 0) {
          y && (y.fetch = "miss");
          let x = this.#U(e, C, v, b);
          return (x.__returned = x);
        } else {
          let x = this.#c[C];
          if (this.#d(x)) {
            let O = n && x.__staleWhileFetching !== void 0;
            return (
              y && ((y.fetch = "inflight"), O && (y.returnedStale = !0)),
              O ? x.__staleWhileFetching : (x.__returned = x)
            );
          }
          let k = this.#y(C);
          if (!A && !k) return (y && (y.fetch = "hit"), this.#B(C), o && this.#I(C), y && this.#m(y, C), x);
          let R = this.#U(e, C, v, b),
            D = R.__staleWhileFetching !== void 0 && n;
          return (
            y && ((y.fetch = k ? "stale" : "refresh"), D && k && (y.returnedStale = !0)),
            D ? R.__staleWhileFetching : (R.__returned = R)
          );
        }
      }
      async forceFetch(e, r = {}) {
        let n = await this.fetch(e, r);
        if (n === void 0) throw new Error("fetch() returned undefined");
        return n;
      }
      memo(e, r = {}) {
        let n = this.#o;
        if (!n) throw new Error("no memoMethod provided to constructor");
        let { context: o, forceRefresh: s, ...a } = r,
          u = this.get(e, a);
        if (!s && u !== void 0) return u;
        let c = n(e, u, { options: a, context: o });
        return (this.set(e, c, a), c);
      }
      get(e, r = {}) {
        let {
            allowStale: n = this.allowStale,
            updateAgeOnGet: o = this.updateAgeOnGet,
            noDeleteOnStaleGet: s = this.noDeleteOnStaleGet,
            status: a,
          } = r,
          u = this.#s.get(e);
        if (u !== void 0) {
          let c = this.#c[u],
            m = this.#d(c);
          return (
            a && this.#m(a, u),
            this.#y(u)
              ? (a && (a.get = "stale"),
                m
                  ? (a && n && c.__staleWhileFetching !== void 0 && (a.returnedStale = !0),
                    n ? c.__staleWhileFetching : void 0)
                  : (s || this.#D(e, "expire"), a && n && (a.returnedStale = !0), n ? c : void 0))
              : (a && (a.get = "hit"), m ? c.__staleWhileFetching : (this.#B(u), o && this.#I(u), c))
          );
        } else a && (a.get = "miss");
      }
      #$(e, r) {
        ((this.#f[r] = e), (this.#p[e] = r));
      }
      #B(e) {
        e !== this.#g &&
          (e === this.#h ? (this.#h = this.#p[e]) : this.#$(this.#f[e], this.#p[e]),
          this.#$(this.#g, e),
          (this.#g = e));
      }
      delete(e) {
        return this.#D(e, "delete");
      }
      #D(e, r) {
        let n = !1;
        if (this.#u !== 0) {
          let o = this.#s.get(e);
          if (o !== void 0)
            if (((n = !0), this.#u === 1)) this.#j(r);
            else {
              this.#k(o);
              let s = this.#c[o];
              if (
                (this.#d(s)
                  ? s.__abortController.abort(new Error("deleted"))
                  : (this.#C || this.#A) && (this.#C && this.#r?.(s, e, r), this.#A && this.#b?.push([s, e, r])),
                this.#s.delete(e),
                (this.#l[o] = void 0),
                (this.#c[o] = void 0),
                o === this.#g)
              )
                this.#g = this.#f[o];
              else if (o === this.#h) this.#h = this.#p[o];
              else {
                let a = this.#f[o];
                this.#p[a] = this.#p[o];
                let u = this.#p[o];
                this.#f[u] = this.#f[o];
              }
              (this.#u--, this.#E.push(o));
            }
        }
        if (this.#A && this.#b?.length) {
          let o = this.#b,
            s;
          for (; (s = o?.shift()); ) this.#n?.(...s);
        }
        return n;
      }
      clear() {
        return this.#j("delete");
      }
      #j(e) {
        for (let r of this.#T({ allowStale: !0 })) {
          let n = this.#c[r];
          if (this.#d(n)) n.__abortController.abort(new Error("deleted"));
          else {
            let o = this.#l[r];
            (this.#C && this.#r?.(n, o, e), this.#A && this.#b?.push([n, o, e]));
          }
        }
        if (
          (this.#s.clear(),
          this.#c.fill(void 0),
          this.#l.fill(void 0),
          this.#_ && this.#S && (this.#_.fill(0), this.#S.fill(0)),
          this.#v && this.#v.fill(0),
          (this.#h = 0),
          (this.#g = 0),
          (this.#E.length = 0),
          (this.#a = 0),
          (this.#u = 0),
          this.#A && this.#b)
        ) {
          let r = this.#b,
            n;
          for (; (n = r?.shift()); ) this.#n?.(...n);
        }
      }
    };
  D3t.LRUCache = l6r;
});