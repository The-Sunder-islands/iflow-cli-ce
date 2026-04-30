/**
 * @module lBn
 * @category utils/lodash
 * @label lodash
 * @position 1298 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lBn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lBn = T((w_e, Rue) => {
  var TFs = 200,
    DFs = "Expected a function",
    fZt = "__lodash_hash_undefined__",
    ftt = 1,
    kue = 2,
    jPn = 1 / 0,
    QPn = 9007199254740991,
    stt = "[object Arguments]",
    sZt = "[object Array]",
    GPn = "[object Boolean]",
    qPn = "[object Date]",
    HPn = "[object Error]",
    VPn = "[object Function]",
    IFs = "[object GeneratorFunction]",
    att = "[object Map]",
    WPn = "[object Number]",
    Iue = "[object Object]",
    OPn = "[object Promise]",
    zPn = "[object RegExp]",
    utt = "[object Set]",
    YPn = "[object String]",
    KPn = "[object Symbol]",
    aZt = "[object WeakMap]",
    JPn = "[object ArrayBuffer]",
    ctt = "[object DataView]",
    RFs = "[object Float32Array]",
    kFs = "[object Float64Array]",
    OFs = "[object Int8Array]",
    NFs = "[object Int16Array]",
    PFs = "[object Int32Array]",
    BFs = "[object Uint8Array]",
    LFs = "[object Uint8ClampedArray]",
    MFs = "[object Uint16Array]",
    FFs = "[object Uint32Array]",
    UFs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    $Fs = /^\w*$/,
    jFs = /^\./,
    QFs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    GFs = /[\\^$.*+?()[\]{}|]/g,
    qFs = /\\(\\)?/g,
    HFs = /^\[object .+?Constructor\]$/,
    VFs = /^(?:0|[1-9]\d*)$/,
    Dm = {};
  Dm[RFs] = Dm[kFs] = Dm[OFs] = Dm[NFs] = Dm[PFs] = Dm[BFs] = Dm[LFs] = Dm[MFs] = Dm[FFs] = !0;
  Dm[stt] =
    Dm[sZt] =
    Dm[JPn] =
    Dm[GPn] =
    Dm[ctt] =
    Dm[qPn] =
    Dm[HPn] =
    Dm[VPn] =
    Dm[att] =
    Dm[WPn] =
    Dm[Iue] =
    Dm[zPn] =
    Dm[utt] =
    Dm[YPn] =
    Dm[aZt] =
      !1;
  var XPn = typeof global == "object" && global && global.Object === Object && global,
    WFs = typeof self == "object" && self && self.Object === Object && self,
    kF = XPn || WFs || Function("return this")(),
    ZPn = typeof w_e == "object" && w_e && !w_e.nodeType && w_e,
    NPn = ZPn && typeof Rue == "object" && Rue && !Rue.nodeType && Rue,
    zFs = NPn && NPn.exports === ZPn,
    PPn = zFs && XPn.process,
    BPn = (function () {
      try {
        return PPn && PPn.binding("util");
      } catch {}
    })(),
    LPn = BPn && BPn.isTypedArray;
  function YFs(t, e, r, n) {
    for (var o = -1, s = t ? t.length : 0; ++o < s; ) {
      var a = t[o];
      e(n, a, r(a), t);
    }
    return n;
  }
  function KFs(t, e) {
    for (var r = -1, n = t ? t.length : 0; ++r < n; ) if (e(t[r], r, t)) return !0;
    return !1;
  }
  function JFs(t) {
    return function (e) {
      return e?.[t];
    };
  }
  function XFs(t, e) {
    for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
    return n;
  }
  function ZFs(t) {
    return function (e) {
      return t(e);
    };
  }
  function eUs(t, e) {
    return t?.[e];
  }
  function uZt(t) {
    var e = !1;
    if (t != null && typeof t.toString != "function")
      try {
        e = !!(t + "");
      } catch {}
    return e;
  }
  function tUs(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function (n, o) {
        r[++e] = [o, n];
      }),
      r
    );
  }
  function rUs(t, e) {
    return function (r) {
      return t(e(r));
    };
  }
  function nUs(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function (n) {
        r[++e] = n;
      }),
      r
    );
  }
  var iUs = Array.prototype,
    oUs = Function.prototype,
    ptt = Object.prototype,
    iZt = kF["__core-js_shared__"],
    MPn = (function () {
      var t = /[^.]+$/.exec((iZt && iZt.keys && iZt.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })(),
    eBn = oUs.toString,
    iD = ptt.hasOwnProperty,
    Oue = ptt.toString,
    sUs = RegExp(
      "^" +
        eBn
          .call(iD)
          .replace(GFs, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    ),
    FPn = kF.Symbol,
    UPn = kF.Uint8Array,
    aUs = ptt.propertyIsEnumerable,
    uUs = iUs.splice,
    cUs = rUs(Object.keys, Object),
    cZt = Nue(kF, "DataView"),
    x_e = Nue(kF, "Map"),
    lZt = Nue(kF, "Promise"),
    mZt = Nue(kF, "Set"),
    dZt = Nue(kF, "WeakMap"),
    T_e = Nue(Object, "create"),
    lUs = kW(cZt),
    mUs = kW(x_e),
    dUs = kW(lZt),
    fUs = kW(mZt),
    pUs = kW(dZt),
    ltt = FPn ? FPn.prototype : void 0,
    oZt = ltt ? ltt.valueOf : void 0,
    $Pn = ltt ? ltt.toString : void 0;
  function RW(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function hUs() {
    this.__data__ = T_e ? T_e(null) : {};
  }
  function gUs(t) {
    return this.has(t) && delete this.__data__[t];
  }
  function bUs(t) {
    var e = this.__data__;
    if (T_e) {
      var r = e[t];
      return r === fZt ? void 0 : r;
    }
    return iD.call(e, t) ? e[t] : void 0;
  }
  function AUs(t) {
    var e = this.__data__;
    return T_e ? e[t] !== void 0 : iD.call(e, t);
  }
  function yUs(t, e) {
    var r = this.__data__;
    return ((r[t] = T_e && e === void 0 ? fZt : e), this);
  }
  RW.prototype.clear = hUs;
  RW.prototype.delete = gUs;
  RW.prototype.get = bUs;
  RW.prototype.has = AUs;
  RW.prototype.set = yUs;
  function nO(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function _Us() {
    this.__data__ = [];
  }
  function EUs(t) {
    var e = this.__data__,
      r = htt(e, t);
    if (r < 0) return !1;
    var n = e.length - 1;
    return (r == n ? e.pop() : uUs.call(e, r, 1), !0);
  }
  function vUs(t) {
    var e = this.__data__,
      r = htt(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function CUs(t) {
    return htt(this.__data__, t) > -1;
  }
  function SUs(t, e) {
    var r = this.__data__,
      n = htt(r, t);
    return (n < 0 ? r.push([t, e]) : (r[n][1] = e), this);
  }
  nO.prototype.clear = _Us;
  nO.prototype.delete = EUs;
  nO.prototype.get = vUs;
  nO.prototype.has = CUs;
  nO.prototype.set = SUs;
  function iO(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function wUs() {
    this.__data__ = { hash: new RW(), map: new (x_e || nO)(), string: new RW() };
  }
  function xUs(t) {
    return gtt(this, t).delete(t);
  }
  function TUs(t) {
    return gtt(this, t).get(t);
  }
  function DUs(t) {
    return gtt(this, t).has(t);
  }
  function IUs(t, e) {
    return (gtt(this, t).set(t, e), this);
  }
  iO.prototype.clear = wUs;
  iO.prototype.delete = xUs;
  iO.prototype.get = TUs;
  iO.prototype.has = DUs;
  iO.prototype.set = IUs;
  function mtt(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.__data__ = new iO(); ++e < r; ) this.add(t[e]);
  }
  function RUs(t) {
    return (this.__data__.set(t, fZt), this);
  }
  function kUs(t) {
    return this.__data__.has(t);
  }
  mtt.prototype.add = mtt.prototype.push = RUs;
  mtt.prototype.has = kUs;
  function rO(t) {
    this.__data__ = new nO(t);
  }
  function OUs() {
    this.__data__ = new nO();
  }
  function NUs(t) {
    return this.__data__.delete(t);
  }
  function PUs(t) {
    return this.__data__.get(t);
  }
  function BUs(t) {
    return this.__data__.has(t);
  }
  function LUs(t, e) {
    var r = this.__data__;
    if (r instanceof nO) {
      var n = r.__data__;
      if (!x_e || n.length < TFs - 1) return (n.push([t, e]), this);
      r = this.__data__ = new iO(n);
    }
    return (r.set(t, e), this);
  }
  rO.prototype.clear = OUs;
  rO.prototype.delete = NUs;
  rO.prototype.get = PUs;
  rO.prototype.has = BUs;
  rO.prototype.set = LUs;
  function MUs(t, e) {
    var r = RF(t) || uBn(t) ? XFs(t.length, String) : [],
      n = r.length,
      o = !!n;
    for (var s in t) (e || iD.call(t, s)) && !(o && (s == "length" || iBn(s, n))) && r.push(s);
    return r;
  }
  function htt(t, e) {
    for (var r = t.length; r--; ) if (aBn(t[r][0], e)) return r;
    return -1;
  }
  function FUs(t, e, r, n) {
    return (
      UUs(t, function (o, s, a) {
        e(n, o, r(o), a);
      }),
      n
    );
  }
  var UUs = t$s(jUs),
    $Us = r$s();
  function jUs(t, e) {
    return t && $Us(t, e, dtt);
  }
  function tBn(t, e) {
    e = btt(e, t) ? [e] : rBn(e);
    for (var r = 0, n = e.length; t != null && r < n; ) t = t[Att(e[r++])];
    return r && r == n ? t : void 0;
  }
  function QUs(t) {
    return Oue.call(t);
  }
  function GUs(t, e) {
    return t != null && e in Object(t);
  }
  function pZt(t, e, r, n, o) {
    return t === e ? !0 : t == null || e == null || (!ytt(t) && !_tt(e)) ? t !== t && e !== e : qUs(t, e, pZt, r, n, o);
  }
  function qUs(t, e, r, n, o, s) {
    var a = RF(t),
      u = RF(e),
      c = sZt,
      m = sZt;
    (a || ((c = IF(t)), (c = c == stt ? Iue : c)), u || ((m = IF(e)), (m = m == stt ? Iue : m)));
    var d = c == Iue && !uZt(t),
      f = m == Iue && !uZt(e),
      p = c == m;
    if (p && !d) return (s || (s = new rO()), a || f$s(t) ? nBn(t, e, r, n, o, s) : n$s(t, e, c, r, n, o, s));
    if (!(o & kue)) {
      var h = d && iD.call(t, "__wrapped__"),
        g = f && iD.call(e, "__wrapped__");
      if (h || g) {
        var b = h ? t.value() : t,
          A = g ? e.value() : e;
        return (s || (s = new rO()), r(b, A, n, o, s));
      }
    }
    return p ? (s || (s = new rO()), i$s(t, e, r, n, o, s)) : !1;
  }
  function HUs(t, e, r, n) {
    var o = r.length,
      s = o,
      a = !n;
    if (t == null) return !s;
    for (t = Object(t); o--; ) {
      var u = r[o];
      if (a && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
    }
    for (; ++o < s; ) {
      u = r[o];
      var c = u[0],
        m = t[c],
        d = u[1];
      if (a && u[2]) {
        if (m === void 0 && !(c in t)) return !1;
      } else {
        var f = new rO();
        if (n) var p = n(m, d, c, t, e, f);
        if (!(p === void 0 ? pZt(d, m, n, ftt | kue, f) : p)) return !1;
      }
    }
    return !0;
  }
  function VUs(t) {
    if (!ytt(t) || u$s(t)) return !1;
    var e = cBn(t) || uZt(t) ? sUs : HFs;
    return e.test(kW(t));
  }
  function WUs(t) {
    return _tt(t) && bZt(t.length) && !!Dm[Oue.call(t)];
  }
  function zUs(t) {
    return typeof t == "function"
      ? t
      : t == null
        ? b$s
        : typeof t == "object"
          ? RF(t)
            ? JUs(t[0], t[1])
            : KUs(t)
          : A$s(t);
  }
  function YUs(t) {
    if (!c$s(t)) return cUs(t);
    var e = [];
    for (var r in Object(t)) iD.call(t, r) && r != "constructor" && e.push(r);
    return e;
  }
  function KUs(t) {
    var e = o$s(t);
    return e.length == 1 && e[0][2]
      ? sBn(e[0][0], e[0][1])
      : function (r) {
          return r === t || HUs(r, t, e);
        };
  }
  function JUs(t, e) {
    return btt(t) && oBn(e)
      ? sBn(Att(t), e)
      : function (r) {
          var n = h$s(r, t);
          return n === void 0 && n === e ? g$s(r, t) : pZt(e, n, void 0, ftt | kue);
        };
  }
  function XUs(t) {
    return function (e) {
      return tBn(e, t);
    };
  }
  function ZUs(t) {
    if (typeof t == "string") return t;
    if (AZt(t)) return $Pn ? $Pn.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -jPn ? "-0" : e;
  }
  function rBn(t) {
    return RF(t) ? t : l$s(t);
  }
  function e$s(t, e) {
    return function (r, n) {
      var o = RF(r) ? YFs : FUs,
        s = e ? e() : {};
      return o(r, t, zUs(n, 2), s);
    };
  }
  function t$s(t, e) {
    return function (r, n) {
      if (r == null) return r;
      if (!gZt(r)) return t(r, n);
      for (var o = r.length, s = e ? o : -1, a = Object(r); (e ? s-- : ++s < o) && n(a[s], s, a) !== !1; );
      return r;
    };
  }
  function r$s(t) {
    return function (e, r, n) {
      for (var o = -1, s = Object(e), a = n(e), u = a.length; u--; ) {
        var c = a[t ? u : ++o];
        if (r(s[c], c, s) === !1) break;
      }
      return e;
    };
  }
  function nBn(t, e, r, n, o, s) {
    var a = o & kue,
      u = t.length,
      c = e.length;
    if (u != c && !(a && c > u)) return !1;
    var m = s.get(t);
    if (m && s.get(e)) return m == e;
    var d = -1,
      f = !0,
      p = o & ftt ? new mtt() : void 0;
    for (s.set(t, e), s.set(e, t); ++d < u; ) {
      var h = t[d],
        g = e[d];
      if (n) var b = a ? n(g, h, d, e, t, s) : n(h, g, d, t, e, s);
      if (b !== void 0) {
        if (b) continue;
        f = !1;
        break;
      }
      if (p) {
        if (
          !KFs(e, function (A, y) {
            if (!p.has(y) && (h === A || r(h, A, n, o, s))) return p.add(y);
          })
        ) {
          f = !1;
          break;
        }
      } else if (!(h === g || r(h, g, n, o, s))) {
        f = !1;
        break;
      }
    }
    return (s.delete(t), s.delete(e), f);
  }
  function n$s(t, e, r, n, o, s, a) {
    switch (r) {
      case ctt:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        ((t = t.buffer), (e = e.buffer));
      case JPn:
        return !(t.byteLength != e.byteLength || !n(new UPn(t), new UPn(e)));
      case GPn:
      case qPn:
      case WPn:
        return aBn(+t, +e);
      case HPn:
        return t.name == e.name && t.message == e.message;
      case zPn:
      case YPn:
        return t == e + "";
      case att:
        var u = tUs;
      case utt:
        var c = s & kue;
        if ((u || (u = nUs), t.size != e.size && !c)) return !1;
        var m = a.get(t);
        if (m) return m == e;
        ((s |= ftt), a.set(t, e));
        var d = nBn(u(t), u(e), n, o, s, a);
        return (a.delete(t), d);
      case KPn:
        if (oZt) return oZt.call(t) == oZt.call(e);
    }
    return !1;
  }
  function i$s(t, e, r, n, o, s) {
    var a = o & kue,
      u = dtt(t),
      c = u.length,
      m = dtt(e),
      d = m.length;
    if (c != d && !a) return !1;
    for (var f = c; f--; ) {
      var p = u[f];
      if (!(a ? p in e : iD.call(e, p))) return !1;
    }
    var h = s.get(t);
    if (h && s.get(e)) return h == e;
    var g = !0;
    (s.set(t, e), s.set(e, t));
    for (var b = a; ++f < c; ) {
      p = u[f];
      var A = t[p],
        y = e[p];
      if (n) var E = a ? n(y, A, p, e, t, s) : n(A, y, p, t, e, s);
      if (!(E === void 0 ? A === y || r(A, y, n, o, s) : E)) {
        g = !1;
        break;
      }
      b || (b = p == "constructor");
    }
    if (g && !b) {
      var v = t.constructor,
        C = e.constructor;
      v != C &&
        "constructor" in t &&
        "constructor" in e &&
        !(typeof v == "function" && v instanceof v && typeof C == "function" && C instanceof C) &&
        (g = !1);
    }
    return (s.delete(t), s.delete(e), g);
  }
  function gtt(t, e) {
    var r = t.__data__;
    return a$s(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function o$s(t) {
    for (var e = dtt(t), r = e.length; r--; ) {
      var n = e[r],
        o = t[n];
      e[r] = [n, o, oBn(o)];
    }
    return e;
  }
  function Nue(t, e) {
    var r = eUs(t, e);
    return VUs(r) ? r : void 0;
  }
  var IF = QUs;
  ((cZt && IF(new cZt(new ArrayBuffer(1))) != ctt) ||
    (x_e && IF(new x_e()) != att) ||
    (lZt && IF(lZt.resolve()) != OPn) ||
    (mZt && IF(new mZt()) != utt) ||
    (dZt && IF(new dZt()) != aZt)) &&
    (IF = function (t) {
      var e = Oue.call(t),
        r = e == Iue ? t.constructor : void 0,
        n = r ? kW(r) : void 0;
      if (n)
        switch (n) {
          case lUs:
            return ctt;
          case mUs:
            return att;
          case dUs:
            return OPn;
          case fUs:
            return utt;
          case pUs:
            return aZt;
        }
      return e;
    });
  function s$s(t, e, r) {
    e = btt(e, t) ? [e] : rBn(e);
    for (var n, o = -1, a = e.length; ++o < a; ) {
      var s = Att(e[o]);
      if (!(n = t != null && r(t, s))) break;
      t = t[s];
    }
    if (n) return n;
    var a = t ? t.length : 0;
    return !!a && bZt(a) && iBn(s, a) && (RF(t) || uBn(t));
  }
  function iBn(t, e) {
    return ((e = e ?? QPn), !!e && (typeof t == "number" || VFs.test(t)) && t > -1 && t % 1 == 0 && t < e);
  }
  function btt(t, e) {
    if (RF(t)) return !1;
    var r = typeof t;
    return r == "number" || r == "symbol" || r == "boolean" || t == null || AZt(t)
      ? !0
      : $Fs.test(t) || !UFs.test(t) || (e != null && t in Object(e));
  }
  function a$s(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function u$s(t) {
    return !!MPn && MPn in t;
  }
  function c$s(t) {
    var e = t && t.constructor,
      r = (typeof e == "function" && e.prototype) || ptt;
    return t === r;
  }
  function oBn(t) {
    return t === t && !ytt(t);
  }
  function sBn(t, e) {
    return function (r) {
      return r == null ? !1 : r[t] === e && (e !== void 0 || t in Object(r));
    };
  }
  var l$s = hZt(function (t) {
    t = p$s(t);
    var e = [];
    return (
      jFs.test(t) && e.push(""),
      t.replace(QFs, function (r, n, o, s) {
        e.push(o ? s.replace(qFs, "$1") : n || r);
      }),
      e
    );
  });
  function Att(t) {
    if (typeof t == "string" || AZt(t)) return t;
    var e = t + "";
    return e == "0" && 1 / t == -jPn ? "-0" : e;
  }
  function kW(t) {
    if (t != null) {
      try {
        return eBn.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var m$s = e$s(function (t, e, r) {
    iD.call(t, r) ? t[r].push(e) : (t[r] = [e]);
  });
  function hZt(t, e) {
    if (typeof t != "function" || (e && typeof e != "function")) throw new TypeError(DFs);
    var r = function () {
      var n = arguments,
        o = e ? e.apply(this, n) : n[0],
        s = r.cache;
      if (s.has(o)) return s.get(o);
      var a = t.apply(this, n);
      return ((r.cache = s.set(o, a)), a);
    };
    return ((r.cache = new (hZt.Cache || iO)()), r);
  }
  hZt.Cache = iO;
  function aBn(t, e) {
    return t === e || (t !== t && e !== e);
  }
  function uBn(t) {
    return d$s(t) && iD.call(t, "callee") && (!aUs.call(t, "callee") || Oue.call(t) == stt);
  }
  var RF = Array.isArray;
  function gZt(t) {
    return t != null && bZt(t.length) && !cBn(t);
  }
  function d$s(t) {
    return _tt(t) && gZt(t);
  }
  function cBn(t) {
    var e = ytt(t) ? Oue.call(t) : "";
    return e == VPn || e == IFs;
  }
  function bZt(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= QPn;
  }
  function ytt(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function");
  }
  function _tt(t) {
    return !!t && typeof t == "object";
  }
  function AZt(t) {
    return typeof t == "symbol" || (_tt(t) && Oue.call(t) == KPn);
  }
  var f$s = LPn ? ZFs(LPn) : WUs;
  function p$s(t) {
    return t == null ? "" : ZUs(t);
  }
  function h$s(t, e, r) {
    var n = t == null ? void 0 : tBn(t, e);
    return n === void 0 ? r : n;
  }
  function g$s(t, e) {
    return t != null && s$s(t, e, GUs);
  }
  function dtt(t) {
    return gZt(t) ? MUs(t) : YUs(t);
  }
  function b$s(t) {
    return t;
  }
  function A$s(t) {
    return btt(t) ? JFs(Att(t)) : XUs(t);
  }
  Rue.exports = m$s;
});