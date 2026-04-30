/**
 * @module atr
 * @category utils/lodash
 * @label lodash
 * @position 1358 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (atr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var atr = T((L8c, BFn) => {
  var qHs = 200,
    itr = "__lodash_hash_undefined__",
    HHs = 1 / 0,
    VHs = 9007199254740991,
    WHs = "[object Arguments]",
    zHs = "[object Function]",
    YHs = "[object GeneratorFunction]",
    KHs = /[\\^$.*+?()[\]{}|]/g,
    JHs = /^\[object .+?Constructor\]$/,
    XHs = typeof global == "object" && global && global.Object === Object && global,
    ZHs = typeof self == "object" && self && self.Object === Object && self,
    brt = XHs || ZHs || Function("return this")();
  function eVs(t, e, r) {
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
  function tVs(t, e) {
    var r = t ? t.length : 0;
    return !!r && oVs(t, e, 0) > -1;
  }
  function rVs(t, e, r) {
    for (var n = -1, o = t ? t.length : 0; ++n < o; ) if (r(e, t[n])) return !0;
    return !1;
  }
  function nVs(t, e) {
    for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
    return t;
  }
  function iVs(t, e, r, n) {
    for (var o = t.length, s = r + (n ? 1 : -1); n ? s-- : ++s < o; ) if (e(t[s], s, t)) return s;
    return -1;
  }
  function oVs(t, e, r) {
    if (e !== e) return iVs(t, sVs, r);
    for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
    return -1;
  }
  function sVs(t) {
    return t !== t;
  }
  function aVs(t, e) {
    return t.has(e);
  }
  function uVs(t, e) {
    return t?.[e];
  }
  function cVs(t) {
    var e = !1;
    if (t != null && typeof t.toString != "function")
      try {
        e = !!(t + "");
      } catch {}
    return e;
  }
  function DFn(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function (n) {
        r[++e] = n;
      }),
      r
    );
  }
  var lVs = Array.prototype,
    mVs = Function.prototype,
    otr = Object.prototype,
    rtr = brt["__core-js_shared__"],
    SFn = (function () {
      var t = /[^.]+$/.exec((rtr && rtr.keys && rtr.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })(),
    IFn = mVs.toString,
    Art = otr.hasOwnProperty,
    RFn = otr.toString,
    dVs = RegExp(
      "^" +
        IFn.call(Art)
          .replace(KHs, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    ),
    wFn = brt.Symbol,
    fVs = otr.propertyIsEnumerable,
    pVs = lVs.splice,
    xFn = wFn ? wFn.isConcatSpreadable : void 0,
    TFn = Math.max,
    hVs = str(brt, "Map"),
    ntr = str(brt, "Set"),
    Y_e = str(Object, "create");
  function FW(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function gVs() {
    this.__data__ = Y_e ? Y_e(null) : {};
  }
  function bVs(t) {
    return this.has(t) && delete this.__data__[t];
  }
  function AVs(t) {
    var e = this.__data__;
    if (Y_e) {
      var r = e[t];
      return r === itr ? void 0 : r;
    }
    return Art.call(e, t) ? e[t] : void 0;
  }
  function yVs(t) {
    var e = this.__data__;
    return Y_e ? e[t] !== void 0 : Art.call(e, t);
  }
  function _Vs(t, e) {
    var r = this.__data__;
    return ((r[t] = Y_e && e === void 0 ? itr : e), this);
  }
  FW.prototype.clear = gVs;
  FW.prototype.delete = bVs;
  FW.prototype.get = AVs;
  FW.prototype.has = yVs;
  FW.prototype.set = _Vs;
  function Jue(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function EVs() {
    this.__data__ = [];
  }
  function vVs(t) {
    var e = this.__data__,
      r = yrt(e, t);
    if (r < 0) return !1;
    var n = e.length - 1;
    return (r == n ? e.pop() : pVs.call(e, r, 1), !0);
  }
  function CVs(t) {
    var e = this.__data__,
      r = yrt(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function SVs(t) {
    return yrt(this.__data__, t) > -1;
  }
  function wVs(t, e) {
    var r = this.__data__,
      n = yrt(r, t);
    return (n < 0 ? r.push([t, e]) : (r[n][1] = e), this);
  }
  Jue.prototype.clear = EVs;
  Jue.prototype.delete = vVs;
  Jue.prototype.get = CVs;
  Jue.prototype.has = SVs;
  Jue.prototype.set = wVs;
  function Xue(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function xVs() {
    this.__data__ = { hash: new FW(), map: new (hVs || Jue)(), string: new FW() };
  }
  function TVs(t) {
    return _rt(this, t).delete(t);
  }
  function DVs(t) {
    return _rt(this, t).get(t);
  }
  function IVs(t) {
    return _rt(this, t).has(t);
  }
  function RVs(t, e) {
    return (_rt(this, t).set(t, e), this);
  }
  Xue.prototype.clear = xVs;
  Xue.prototype.delete = TVs;
  Xue.prototype.get = DVs;
  Xue.prototype.has = IVs;
  Xue.prototype.set = RVs;
  function grt(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.__data__ = new Xue(); ++e < r; ) this.add(t[e]);
  }
  function kVs(t) {
    return (this.__data__.set(t, itr), this);
  }
  function OVs(t) {
    return this.__data__.has(t);
  }
  grt.prototype.add = grt.prototype.push = kVs;
  grt.prototype.has = OVs;
  function yrt(t, e) {
    for (var r = t.length; r--; ) if (QVs(t[r][0], e)) return r;
    return -1;
  }
  function kFn(t, e, r, n, o) {
    var s = -1,
      a = t.length;
    for (r || (r = MVs), o || (o = []); ++s < a; ) {
      var u = t[s];
      e > 0 && r(u) ? (e > 1 ? kFn(u, e - 1, r, n, o) : nVs(o, u)) : n || (o[o.length] = u);
    }
    return o;
  }
  function NVs(t) {
    if (!PFn(t) || UVs(t)) return !1;
    var e = NFn(t) || cVs(t) ? dVs : JHs;
    return e.test($Vs(t));
  }
  function PVs(t, e) {
    return (
      (e = TFn(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, n = -1, o = TFn(r.length - e, 0), s = Array(o); ++n < o; ) s[n] = r[e + n];
        n = -1;
        for (var a = Array(e + 1); ++n < e; ) a[n] = r[n];
        return ((a[e] = s), eVs(t, this, a));
      }
    );
  }
  function BVs(t, e, r) {
    var n = -1,
      o = tVs,
      s = t.length,
      a = !0,
      u = [],
      c = u;
    if (r) ((a = !1), (o = rVs));
    else if (s >= qHs) {
      var m = e ? null : LVs(t);
      if (m) return DFn(m);
      ((a = !1), (o = aVs), (c = new grt()));
    } else c = e ? [] : u;
    e: for (; ++n < s; ) {
      var d = t[n],
        f = e ? e(d) : d;
      if (((d = r || d !== 0 ? d : 0), a && f === f)) {
        for (var p = c.length; p--; ) if (c[p] === f) continue e;
        (e && c.push(f), u.push(d));
      } else o(c, f, r) || (c !== u && c.push(f), u.push(d));
    }
    return u;
  }
  var LVs =
    ntr && 1 / DFn(new ntr([, -0]))[1] == HHs
      ? function (t) {
          return new ntr(t);
        }
      : zVs;
  function _rt(t, e) {
    var r = t.__data__;
    return FVs(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function str(t, e) {
    var r = uVs(t, e);
    return NVs(r) ? r : void 0;
  }
  function MVs(t) {
    return qVs(t) || GVs(t) || !!(xFn && t && t[xFn]);
  }
  function FVs(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function UVs(t) {
    return !!SFn && SFn in t;
  }
  function $Vs(t) {
    if (t != null) {
      try {
        return IFn.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var jVs = PVs(function (t) {
    return BVs(kFn(t, 1, OFn, !0));
  });
  function QVs(t, e) {
    return t === e || (t !== t && e !== e);
  }
  function GVs(t) {
    return OFn(t) && Art.call(t, "callee") && (!fVs.call(t, "callee") || RFn.call(t) == WHs);
  }
  var qVs = Array.isArray;
  function HVs(t) {
    return t != null && VVs(t.length) && !NFn(t);
  }
  function OFn(t) {
    return WVs(t) && HVs(t);
  }
  function NFn(t) {
    var e = PFn(t) ? RFn.call(t) : "";
    return e == zHs || e == YHs;
  }
  function VVs(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= VHs;
  }
  function PFn(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function");
  }
  function WVs(t) {
    return !!t && typeof t == "object";
  }
  function zVs() {}
  BFn.exports = jVs;
});