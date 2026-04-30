/**
 * @module pCe
 * @category utils/cache
 * @label cache
 * @position 1528 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pCe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pCe = T((gCc, KZn) => {
  "use strict";
  var { MockNotMatchedError: vle } = cur(),
    { kDispatches: yot, kMockAgent: Cma, kOriginalDispatch: Sma, kOrigin: wma, kGetNetConnect: xma } = Jz(),
    { serializePathWithQuery: Tma } = ks(),
    { STATUS_CODES: Dma } = Ae("node:http"),
    {
      types: { isPromise: Ima },
    } = Ae("node:util"),
    { InvalidArgumentError: lur } = da();
  function ID(t, e) {
    return typeof t == "string" ? t === e : t instanceof RegExp ? t.test(e) : typeof t == "function" ? t(e) === !0 : !1;
  }
  function jZn(t) {
    return Object.fromEntries(Object.entries(t).map(([e, r]) => [e.toLocaleLowerCase(), r]));
  }
  function QZn(t, e) {
    if (Array.isArray(t)) {
      for (let r = 0; r < t.length; r += 2) if (t[r].toLocaleLowerCase() === e.toLocaleLowerCase()) return t[r + 1];
      return;
    } else return typeof t.get == "function" ? t.get(e) : jZn(t)[e.toLocaleLowerCase()];
  }
  function pur(t) {
    let e = t.slice(),
      r = [];
    for (let n = 0; n < e.length; n += 2) r.push([e[n], e[n + 1]]);
    return Object.fromEntries(r);
  }
  function GZn(t, e) {
    if (typeof t.headers == "function") return (Array.isArray(e) && (e = pur(e)), t.headers(e ? jZn(e) : {}));
    if (typeof t.headers > "u") return !0;
    if (typeof e != "object" || typeof t.headers != "object") return !1;
    for (let [r, n] of Object.entries(t.headers)) {
      let o = QZn(e, r);
      if (!ID(n, o)) return !1;
    }
    return !0;
  }
  function Rma(t) {
    if (typeof t != "string") return t;
    let e = new URLSearchParams(t),
      r = new URLSearchParams();
    for (let [n, o] of e.entries()) {
      if (((n = n.replace("[]", "")), /^(['"]).*\1$/.test(o))) {
        r.append(n, o);
        continue;
      }
      if (o.includes(",")) {
        let a = o.split(",");
        for (let u of a) r.append(n, u);
        continue;
      }
      r.append(n, o);
    }
    return r;
  }
  function mur(t) {
    if (typeof t != "string") return t;
    let e = t.split("?", 3);
    if (e.length !== 2) return t;
    let r = new URLSearchParams(e.pop());
    return (r.sort(), [...e, r.toString()].join("?"));
  }
  function kma(t, { path: e, method: r, body: n, headers: o }) {
    let s = ID(t.path, e),
      a = ID(t.method, r),
      u = typeof t.body < "u" ? ID(t.body, n) : !0,
      c = GZn(t, o);
    return s && a && u && c;
  }
  function qZn(t) {
    return Buffer.isBuffer(t) || t instanceof Uint8Array || t instanceof ArrayBuffer
      ? t
      : typeof t == "object"
        ? JSON.stringify(t)
        : t
          ? t.toString()
          : "";
  }
  function HZn(t, e) {
    let r = e.query ? Tma(e.path, e.query) : e.path,
      n = typeof r == "string" ? mur(r) : r,
      o = $Zn(n),
      s = t
        .filter(({ consumed: a }) => !a)
        .filter(({ path: a, ignoreTrailingSlash: u }) => (u ? ID($Zn(mur(a)), o) : ID(mur(a), n)));
    if (s.length === 0) throw new vle(`Mock dispatch not matched for path '${n}'`);
    if (((s = s.filter(({ method: a }) => ID(a, e.method))), s.length === 0))
      throw new vle(`Mock dispatch not matched for method '${e.method}' on path '${n}'`);
    if (((s = s.filter(({ body: a }) => (typeof a < "u" ? ID(a, e.body) : !0))), s.length === 0))
      throw new vle(`Mock dispatch not matched for body '${e.body}' on path '${n}'`);
    if (((s = s.filter((a) => GZn(a, e.headers))), s.length === 0)) {
      let a = typeof e.headers == "object" ? JSON.stringify(e.headers) : e.headers;
      throw new vle(`Mock dispatch not matched for headers '${a}' on path '${n}'`);
    }
    return s[0];
  }
  function Oma(t, e, r, n) {
    let o = { timesInvoked: 0, times: 1, persist: !1, consumed: !1, ...n },
      s = typeof r == "function" ? { callback: r } : { ...r },
      a = { ...o, ...e, pending: !0, data: { error: null, ...s } };
    return (t.push(a), a);
  }
  function dur(t, e) {
    let r = t.findIndex((n) => (n.consumed ? kma(n, e) : !1));
    r !== -1 && t.splice(r, 1);
  }
  function $Zn(t) {
    for (; t.endsWith("/"); ) t = t.slice(0, -1);
    return (t.length === 0 && (t = "/"), t);
  }
  function VZn(t) {
    let { path: e, method: r, body: n, headers: o, query: s } = t;
    return { path: e, method: r, body: n, headers: o, query: s };
  }
  function fur(t) {
    let e = Object.keys(t),
      r = [];
    for (let n = 0; n < e.length; ++n) {
      let o = e[n],
        s = t[o],
        a = Buffer.from(`${o}`);
      if (Array.isArray(s)) for (let u = 0; u < s.length; ++u) r.push(a, Buffer.from(`${s[u]}`));
      else r.push(a, Buffer.from(`${s}`));
    }
    return r;
  }
  function WZn(t) {
    return Dma[t] || "unknown";
  }
  async function Nma(t) {
    let e = [];
    for await (let r of t) e.push(r);
    return Buffer.concat(e).toString("utf8");
  }
  function zZn(t, e) {
    let r = VZn(t),
      n = HZn(this[yot], r);
    (n.timesInvoked++, n.data.callback && (n.data = { ...n.data, ...n.data.callback(t) }));
    let {
        data: { statusCode: o, data: s, headers: a, trailers: u, error: c },
        delay: m,
        persist: d,
      } = n,
      { timesInvoked: f, times: p } = n;
    if (((n.consumed = !d && f >= p), (n.pending = f < p), c !== null)) return (dur(this[yot], r), e.onError(c), !0);
    typeof m == "number" && m > 0
      ? setTimeout(() => {
          h(this[yot]);
        }, m)
      : h(this[yot]);
    function h(b, A = s) {
      let y = Array.isArray(t.headers) ? pur(t.headers) : t.headers,
        E = typeof A == "function" ? A({ ...t, headers: y }) : A;
      if (Ima(E)) return E.then((k) => h(b, k));
      let v = qZn(E),
        C = fur(a),
        x = fur(u);
      (e.onConnect?.((k) => e.onError(k), null),
        e.onHeaders?.(o, C, g, WZn(o)),
        e.onData?.(Buffer.from(v)),
        e.onComplete?.(x),
        dur(b, r));
    }
    function g() {}
    return !0;
  }
  function Pma() {
    let t = this[Cma],
      e = this[wma],
      r = this[Sma];
    return function (o, s) {
      if (t.isMockActive)
        try {
          zZn.call(this, o, s);
        } catch (a) {
          if (a.code === "UND_MOCK_ERR_MOCK_NOT_MATCHED") {
            let u = t[xma]();
            if (u === !1)
              throw new vle(`${a.message}: subsequent request to origin ${e} was not allowed (net.connect disabled)`);
            if (YZn(u, e)) r.call(this, o, s);
            else
              throw new vle(
                `${a.message}: subsequent request to origin ${e} was not allowed (net.connect is not enabled for this origin)`,
              );
          } else throw a;
        }
      else r.call(this, o, s);
    };
  }
  function YZn(t, e) {
    let r = new URL(e);
    return t === !0 ? !0 : !!(Array.isArray(t) && t.some((n) => ID(n, r.host)));
  }
  function Bma(t) {
    let { agent: e, ...r } = t;
    if ("enableCallHistory" in r && typeof r.enableCallHistory != "boolean")
      throw new lur("options.enableCallHistory must to be a boolean");
    if ("acceptNonStandardSearchParameters" in r && typeof r.acceptNonStandardSearchParameters != "boolean")
      throw new lur("options.acceptNonStandardSearchParameters must to be a boolean");
    if ("ignoreTrailingSlash" in r && typeof r.ignoreTrailingSlash != "boolean")
      throw new lur("options.ignoreTrailingSlash must to be a boolean");
    return r;
  }
  KZn.exports = {
    getResponseData: qZn,
    getMockDispatch: HZn,
    addMockDispatch: Oma,
    deleteMockDispatch: dur,
    buildKey: VZn,
    generateKeyValues: fur,
    matchValue: ID,
    getResponse: Nma,
    getStatusText: WZn,
    mockDispatch: zZn,
    buildMockDispatch: Pma,
    checkNetConnect: YZn,
    buildAndValidateMockOptions: Bma,
    getHeaderByName: QZn,
    buildHeadersFromArray: pur,
    normalizeSearchParams: Rma,
  };
});