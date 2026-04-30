/**
 * @module ttr
 * @category utils/lodash
 * @label lodash
 * @position 1357 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ttr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ttr = T((B8c, CFn) => {
  var $qs = 200,
    Xer = "__lodash_hash_undefined__",
    jqs = 9007199254740991,
    Qqs = "[object Arguments]",
    Gqs = "[object Function]",
    qqs = "[object GeneratorFunction]",
    Hqs = /[\\^$.*+?()[\]{}|]/g,
    Vqs = /^\[object .+?Constructor\]$/,
    Wqs = typeof global == "object" && global && global.Object === Object && global,
    zqs = typeof self == "object" && self && self.Object === Object && self,
    Zer = Wqs || zqs || Function("return this")();
  function Yqs(t, e, r) {
    switch (r.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, r[0]);
      case 2:
        return t.call(e, r[0], r[1]);
      case 3:
        return t.call(e, r[0], r[1], r[2]);
    }
    return t.apply(e, r);
  }
  function Kqs(t, e) {
    var r = t ? t.length : 0;
    return !!r && tHs(t, e, 0) > -1;
  }
  function Jqs(t, e, r) {
    for (var n = -1, o = t ? t.length : 0; ++n < o; ) if (r(e, t[n])) return !0;
    return !1;
  }
  function Xqs(t, e) {
    for (var r = -1, n = t ? t.length : 0, o = Array(n); ++r < n; ) o[r] = e(t[r], r, t);
    return o;
  }
  function Zqs(t, e) {
    for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
    return t;
  }
  function eHs(t, e, r, n) {
    for (var o = t.length, s = r + (n ? 1 : -1); n ? s-- : ++s < o; ) if (e(t[s], s, t)) return s;
    return -1;
  }
  function tHs(t, e, r) {
    if (e !== e) return eHs(t, rHs, r);
    for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
    return -1;
  }
  function rHs(t) {
    return t !== t;
  }
  function nHs(t) {
    return function (e) {
      return t(e);
    };
  }
  function iHs(t, e) {
    return t.has(e);
  }
  function oHs(t, e) {
    return t?.[e];
  }
  function sHs(t) {
    var e = !1;
    if (t != null && typeof t.toString != "function")
      try {
        e = !!(t + "");
      } catch {}
    return e;
  }
  var aHs = Array.prototype,
    uHs = Function.prototype,
    etr = Object.prototype,
    Ker = Zer["__core-js_shared__"],
    fFn = (function () {
      var t = /[^.]+$/.exec((Ker && Ker.keys && Ker.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })(),
    bFn = uHs.toString,
    frt = etr.hasOwnProperty,
    AFn = etr.toString,
    cHs = RegExp(
      "^" +
        bFn
          .call(frt)
          .replace(Hqs, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    ),
    pFn = Zer.Symbol,
    lHs = etr.propertyIsEnumerable,
    mHs = aHs.splice,
    hFn = pFn ? pFn.isConcatSpreadable : void 0,
    gFn = Math.max,
    dHs = _Fn(Zer, "Map"),
    z_e = _Fn(Object, "create");
  function MW(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function fHs() {
    this.__data__ = z_e ? z_e(null) : {};
  }
  function pHs(t) {
    return this.has(t) && delete this.__data__[t];
  }
  function hHs(t) {
    var e = this.__data__;
    if (z_e) {
      var r = e[t];
      return r === Xer ? void 0 : r;
    }
    return frt.call(e, t) ? e[t] : void 0;
  }
  function gHs(t) {
    var e = this.__data__;
    return z_e ? e[t] !== void 0 : frt.call(e, t);
  }
  function bHs(t, e) {
    var r = this.__data__;
    return ((r[t] = z_e && e === void 0 ? Xer : e), this);
  }
  MW.prototype.clear = fHs;
  MW.prototype.delete = pHs;
  MW.prototype.get = hHs;
  MW.prototype.has = gHs;
  MW.prototype.set = bHs;
  function Yue(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function AHs() {
    this.__data__ = [];
  }
  function yHs(t) {
    var e = this.__data__,
      r = prt(e, t);
    if (r < 0) return !1;
    var n = e.length - 1;
    return (r == n ? e.pop() : mHs.call(e, r, 1), !0);
  }
  function _Hs(t) {
    var e = this.__data__,
      r = prt(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function EHs(t) {
    return prt(this.__data__, t) > -1;
  }
  function vHs(t, e) {
    var r = this.__data__,
      n = prt(r, t);
    return (n < 0 ? r.push([t, e]) : (r[n][1] = e), this);
  }
  Yue.prototype.clear = AHs;
  Yue.prototype.delete = yHs;
  Yue.prototype.get = _Hs;
  Yue.prototype.has = EHs;
  Yue.prototype.set = vHs;
  function Kue(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function CHs() {
    this.__data__ = { hash: new MW(), map: new (dHs || Yue)(), string: new MW() };
  }
  function SHs(t) {
    return hrt(this, t).delete(t);
  }
  function wHs(t) {
    return hrt(this, t).get(t);
  }
  function xHs(t) {
    return hrt(this, t).has(t);
  }
  function THs(t, e) {
    return (hrt(this, t).set(t, e), this);
  }
  Kue.prototype.clear = CHs;
  Kue.prototype.delete = SHs;
  Kue.prototype.get = wHs;
  Kue.prototype.has = xHs;
  Kue.prototype.set = THs;
  function drt(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.__data__ = new Kue(); ++e < r; ) this.add(t[e]);
  }
  function DHs(t) {
    return (this.__data__.set(t, Xer), this);
  }
  function IHs(t) {
    return this.__data__.has(t);
  }
  drt.prototype.add = drt.prototype.push = DHs;
  drt.prototype.has = IHs;
  function prt(t, e) {
    for (var r = t.length; r--; ) if (FHs(t[r][0], e)) return r;
    return -1;
  }
  function RHs(t, e, r, n) {
    var o = -1,
      s = Kqs,
      a = !0,
      u = t.length,
      c = [],
      m = e.length;
    if (!u) return c;
    (r && (e = Xqs(e, nHs(r))), n ? ((s = Jqs), (a = !1)) : e.length >= $qs && ((s = iHs), (a = !1), (e = new drt(e))));
    e: for (; ++o < u; ) {
      var d = t[o],
        f = r ? r(d) : d;
      if (((d = n || d !== 0 ? d : 0), a && f === f)) {
        for (var p = m; p--; ) if (e[p] === f) continue e;
        c.push(d);
      } else s(e, f, n) || c.push(d);
    }
    return c;
  }
  function yFn(t, e, r, n, o) {
    var s = -1,
      a = t.length;
    for (r || (r = NHs), o || (o = []); ++s < a; ) {
      var u = t[s];
      e > 0 && r(u) ? (e > 1 ? yFn(u, e - 1, r, n, o) : Zqs(o, u)) : n || (o[o.length] = u);
    }
    return o;
  }
  function kHs(t) {
    if (!vFn(t) || BHs(t)) return !1;
    var e = EFn(t) || sHs(t) ? cHs : Vqs;
    return e.test(LHs(t));
  }
  function OHs(t, e) {
    return (
      (e = gFn(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, n = -1, o = gFn(r.length - e, 0), s = Array(o); ++n < o; ) s[n] = r[e + n];
        n = -1;
        for (var a = Array(e + 1); ++n < e; ) a[n] = r[n];
        return ((a[e] = s), Yqs(t, this, a));
      }
    );
  }
  function hrt(t, e) {
    var r = t.__data__;
    return PHs(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function _Fn(t, e) {
    var r = oHs(t, e);
    return kHs(r) ? r : void 0;
  }
  function NHs(t) {
    return $Hs(t) || UHs(t) || !!(hFn && t && t[hFn]);
  }
  function PHs(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function BHs(t) {
    return !!fFn && fFn in t;
  }
  function LHs(t) {
    if (t != null) {
      try {
        return bFn.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var MHs = OHs(function (t, e) {
    return Jer(t) ? RHs(t, yFn(e, 1, Jer, !0)) : [];
  });
  function FHs(t, e) {
    return t === e || (t !== t && e !== e);
  }
  function UHs(t) {
    return Jer(t) && frt.call(t, "callee") && (!lHs.call(t, "callee") || AFn.call(t) == Qqs);
  }
  var $Hs = Array.isArray;
  function jHs(t) {
    return t != null && QHs(t.length) && !EFn(t);
  }
  function Jer(t) {
    return GHs(t) && jHs(t);
  }
  function EFn(t) {
    var e = vFn(t) ? AFn.call(t) : "";
    return e == Gqs || e == qqs;
  }
  function QHs(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= jqs;
  }
  function vFn(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function");
  }
  function GHs(t) {
    return !!t && typeof t == "object";
  }
  CFn.exports = MHs;
});