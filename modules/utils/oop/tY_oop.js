/**
 * @module tY
 * @category utils/oop
 * @label oop
 * @position 1556 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tY) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tY = T((WCc, Lti) => {
  "use strict";
  var { kConstruct: mfa } = n0(),
    { kEnumerableProperty: Dle } = ks(),
    { iteratorMixin: dfa, isValidHeaderName: ECe, isValidHeaderValue: kti } = z6(),
    { webidl: Iu } = jg(),
    ccr = Ae("node:assert"),
    Not = Ae("node:util");
  function Rti(t) {
    return t === 10 || t === 13 || t === 9 || t === 32;
  }
  function Oti(t) {
    let e = 0,
      r = t.length;
    for (; r > e && Rti(t.charCodeAt(r - 1)); ) --r;
    for (; r > e && Rti(t.charCodeAt(e)); ) ++e;
    return e === 0 && r === t.length ? t : t.substring(e, r);
  }
  function Nti(t, e) {
    if (Array.isArray(e))
      for (let r = 0; r < e.length; ++r) {
        let n = e[r];
        if (n.length !== 2)
          throw Iu.errors.exception({
            header: "Headers constructor",
            message: `expected name/value pair to be length 2, found ${n.length}.`,
          });
        lcr(t, n[0], n[1]);
      }
    else if (typeof e == "object" && e !== null) {
      let r = Object.keys(e);
      for (let n = 0; n < r.length; ++n) lcr(t, r[n], e[r[n]]);
    } else
      throw Iu.errors.conversionFailed({
        prefix: "Headers constructor",
        argument: "Argument 1",
        types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"],
      });
  }
  function lcr(t, e, r) {
    if (((r = Oti(r)), ECe(e))) {
      if (!kti(r)) throw Iu.errors.invalidArgument({ prefix: "Headers.append", value: r, type: "header value" });
    } else throw Iu.errors.invalidArgument({ prefix: "Headers.append", value: e, type: "header name" });
    if (Bti(t) === "immutable") throw new TypeError("immutable");
    return Bot(t).append(e, r, !1);
  }
  function ffa(t) {
    let e = Bot(t);
    if (!e) return [];
    if (e.sortedMap) return e.sortedMap;
    let r = [],
      n = e.toSortedArray(),
      o = e.cookies;
    if (o === null || o.length === 1) return (e.sortedMap = n);
    for (let s = 0; s < n.length; ++s) {
      let { 0: a, 1: u } = n[s];
      if (a === "set-cookie") for (let c = 0; c < o.length; ++c) r.push([a, o[c]]);
      else r.push([a, u]);
    }
    return (e.sortedMap = r);
  }
  function Pti(t, e) {
    return t[0] < e[0] ? -1 : 1;
  }
  var Pot = class t {
      cookies = null;
      sortedMap;
      headersMap;
      constructor(e) {
        e instanceof t
          ? ((this.headersMap = new Map(e.headersMap)),
            (this.sortedMap = e.sortedMap),
            (this.cookies = e.cookies === null ? null : [...e.cookies]))
          : ((this.headersMap = new Map(e)), (this.sortedMap = null));
      }
      contains(e, r) {
        return this.headersMap.has(r ? e : e.toLowerCase());
      }
      clear() {
        (this.headersMap.clear(), (this.sortedMap = null), (this.cookies = null));
      }
      append(e, r, n) {
        this.sortedMap = null;
        let o = n ? e : e.toLowerCase(),
          s = this.headersMap.get(o);
        if (s) {
          let a = o === "cookie" ? "; " : ", ";
          this.headersMap.set(o, { name: s.name, value: `${s.value}${a}${r}` });
        } else this.headersMap.set(o, { name: e, value: r });
        o === "set-cookie" && (this.cookies ??= []).push(r);
      }
      set(e, r, n) {
        this.sortedMap = null;
        let o = n ? e : e.toLowerCase();
        (o === "set-cookie" && (this.cookies = [r]), this.headersMap.set(o, { name: e, value: r }));
      }
      delete(e, r) {
        ((this.sortedMap = null),
          r || (e = e.toLowerCase()),
          e === "set-cookie" && (this.cookies = null),
          this.headersMap.delete(e));
      }
      get(e, r) {
        return this.headersMap.get(r ? e : e.toLowerCase())?.value ?? null;
      }
      *[Symbol.iterator]() {
        for (let {
          0: e,
          1: { value: r },
        } of this.headersMap)
          yield [e, r];
      }
      get entries() {
        let e = {};
        if (this.headersMap.size !== 0) for (let { name: r, value: n } of this.headersMap.values()) e[r] = n;
        return e;
      }
      rawValues() {
        return this.headersMap.values();
      }
      get entriesList() {
        let e = [];
        if (this.headersMap.size !== 0)
          for (let {
            0: r,
            1: { name: n, value: o },
          } of this.headersMap)
            if (r === "set-cookie") for (let s of this.cookies) e.push([n, s]);
            else e.push([n, o]);
        return e;
      }
      toSortedArray() {
        let e = this.headersMap.size,
          r = new Array(e);
        if (e <= 32) {
          if (e === 0) return r;
          let n = this.headersMap[Symbol.iterator](),
            o = n.next().value;
          ((r[0] = [o[0], o[1].value]), ccr(o[1].value !== null));
          for (let s = 1, a = 0, u = 0, c = 0, m = 0, d, f; s < e; ++s) {
            for (f = n.next().value, d = r[s] = [f[0], f[1].value], ccr(d[1] !== null), c = 0, u = s; c < u; )
              ((m = c + ((u - c) >> 1)), r[m][0] <= d[0] ? (c = m + 1) : (u = m));
            if (s !== m) {
              for (a = s; a > c; ) r[a] = r[--a];
              r[c] = d;
            }
          }
          if (!n.next().done) throw new TypeError("Unreachable");
          return r;
        } else {
          let n = 0;
          for (let {
            0: o,
            1: { value: s },
          } of this.headersMap)
            ((r[n++] = [o, s]), ccr(s !== null));
          return r.sort(Pti);
        }
      }
    },
    vS = class t {
      #e;
      #t;
      constructor(e = void 0) {
        (Iu.util.markAsUncloneable(this),
          e !== mfa &&
            ((this.#t = new Pot()),
            (this.#e = "none"),
            e !== void 0 && ((e = Iu.converters.HeadersInit(e, "Headers constructor", "init")), Nti(this, e))));
      }
      append(e, r) {
        (Iu.brandCheck(this, t), Iu.argumentLengthCheck(arguments, 2, "Headers.append"));
        let n = "Headers.append";
        return (
          (e = Iu.converters.ByteString(e, n, "name")),
          (r = Iu.converters.ByteString(r, n, "value")),
          lcr(this, e, r)
        );
      }
      delete(e) {
        if (
          (Iu.brandCheck(this, t),
          Iu.argumentLengthCheck(arguments, 1, "Headers.delete"),
          (e = Iu.converters.ByteString(e, "Headers.delete", "name")),
          !ECe(e))
        )
          throw Iu.errors.invalidArgument({ prefix: "Headers.delete", value: e, type: "header name" });
        if (this.#e === "immutable") throw new TypeError("immutable");
        this.#t.contains(e, !1) && this.#t.delete(e, !1);
      }
      get(e) {
        (Iu.brandCheck(this, t), Iu.argumentLengthCheck(arguments, 1, "Headers.get"));
        let r = "Headers.get";
        if (((e = Iu.converters.ByteString(e, r, "name")), !ECe(e)))
          throw Iu.errors.invalidArgument({ prefix: r, value: e, type: "header name" });
        return this.#t.get(e, !1);
      }
      has(e) {
        (Iu.brandCheck(this, t), Iu.argumentLengthCheck(arguments, 1, "Headers.has"));
        let r = "Headers.has";
        if (((e = Iu.converters.ByteString(e, r, "name")), !ECe(e)))
          throw Iu.errors.invalidArgument({ prefix: r, value: e, type: "header name" });
        return this.#t.contains(e, !1);
      }
      set(e, r) {
        (Iu.brandCheck(this, t), Iu.argumentLengthCheck(arguments, 2, "Headers.set"));
        let n = "Headers.set";
        if (
          ((e = Iu.converters.ByteString(e, n, "name")),
          (r = Iu.converters.ByteString(r, n, "value")),
          (r = Oti(r)),
          ECe(e))
        ) {
          if (!kti(r)) throw Iu.errors.invalidArgument({ prefix: n, value: r, type: "header value" });
        } else throw Iu.errors.invalidArgument({ prefix: n, value: e, type: "header name" });
        if (this.#e === "immutable") throw new TypeError("immutable");
        this.#t.set(e, r, !1);
      }
      getSetCookie() {
        Iu.brandCheck(this, t);
        let e = this.#t.cookies;
        return e ? [...e] : [];
      }
      [Not.inspect.custom](e, r) {
        return ((r.depth ??= e), `Headers ${Not.formatWithOptions(r, this.#t.entries)}`);
      }
      static getHeadersGuard(e) {
        return e.#e;
      }
      static setHeadersGuard(e, r) {
        e.#e = r;
      }
      static getHeadersList(e) {
        return e.#t;
      }
      static setHeadersList(e, r) {
        e.#t = r;
      }
    },
    { getHeadersGuard: Bti, setHeadersGuard: pfa, getHeadersList: Bot, setHeadersList: hfa } = vS;
  Reflect.deleteProperty(vS, "getHeadersGuard");
  Reflect.deleteProperty(vS, "setHeadersGuard");
  Reflect.deleteProperty(vS, "getHeadersList");
  Reflect.deleteProperty(vS, "setHeadersList");
  dfa("Headers", vS, ffa, 0, 1);
  Object.defineProperties(vS.prototype, {
    append: Dle,
    delete: Dle,
    get: Dle,
    has: Dle,
    set: Dle,
    getSetCookie: Dle,
    [Symbol.toStringTag]: { value: "Headers", configurable: !0 },
    [Not.inspect.custom]: { enumerable: !1 },
  });
  Iu.converters.HeadersInit = function (t, e, r) {
    if (Iu.util.Type(t) === Iu.util.Types.OBJECT) {
      let n = Reflect.get(t, Symbol.iterator);
      if (!Not.types.isProxy(t) && n === vS.prototype.entries)
        try {
          return Bot(t).entriesList;
        } catch {}
      return typeof n == "function"
        ? Iu.converters["sequence<sequence<ByteString>>"](t, e, r, n.bind(t))
        : Iu.converters["record<ByteString, ByteString>"](t, e, r);
    }
    throw Iu.errors.conversionFailed({
      prefix: "Headers constructor",
      argument: "Argument 1",
      types: ["sequence<sequence<ByteString>>", "record<ByteString, ByteString>"],
    });
  };
  Lti.exports = {
    fill: Nti,
    compareHeaderName: Pti,
    Headers: vS,
    HeadersList: Pot,
    getHeadersGuard: Bti,
    setHeadersGuard: pfa,
    setHeadersList: hfa,
    getHeadersList: Bot,
  };
});