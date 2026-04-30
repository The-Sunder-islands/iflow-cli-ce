/**
 * @module oPn
 * @category utils/lodash
 * @label lodash
 * @position 1284 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oPn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oPn = T((y_e, yue) => {
  var dBs = 200,
    FXt = "__lodash_hash_undefined__",
    Jet = 1,
    LNn = 2,
    MNn = 9007199254740991,
    qet = "[object Arguments]",
    kXt = "[object Array]",
    fBs = "[object AsyncFunction]",
    FNn = "[object Boolean]",
    UNn = "[object Date]",
    $Nn = "[object Error]",
    jNn = "[object Function]",
    pBs = "[object GeneratorFunction]",
    Het = "[object Map]",
    QNn = "[object Number]",
    hBs = "[object Null]",
    Aue = "[object Object]",
    wNn = "[object Promise]",
    gBs = "[object Proxy]",
    GNn = "[object RegExp]",
    Vet = "[object Set]",
    qNn = "[object String]",
    bBs = "[object Symbol]",
    ABs = "[object Undefined]",
    OXt = "[object WeakMap]",
    HNn = "[object ArrayBuffer]",
    Wet = "[object DataView]",
    yBs = "[object Float32Array]",
    _Bs = "[object Float64Array]",
    EBs = "[object Int8Array]",
    vBs = "[object Int16Array]",
    CBs = "[object Int32Array]",
    SBs = "[object Uint8Array]",
    wBs = "[object Uint8ClampedArray]",
    xBs = "[object Uint16Array]",
    TBs = "[object Uint32Array]",
    DBs = /[\\^$.*+?()[\]{}|]/g,
    IBs = /^\[object .+?Constructor\]$/,
    RBs = /^(?:0|[1-9]\d*)$/,
    Tm = {};
  Tm[yBs] = Tm[_Bs] = Tm[EBs] = Tm[vBs] = Tm[CBs] = Tm[SBs] = Tm[wBs] = Tm[xBs] = Tm[TBs] = !0;
  Tm[qet] =
    Tm[kXt] =
    Tm[HNn] =
    Tm[FNn] =
    Tm[Wet] =
    Tm[UNn] =
    Tm[$Nn] =
    Tm[jNn] =
    Tm[Het] =
    Tm[QNn] =
    Tm[Aue] =
    Tm[GNn] =
    Tm[Vet] =
    Tm[qNn] =
    Tm[OXt] =
      !1;
  var VNn = typeof global == "object" && global && global.Object === Object && global,
    kBs = typeof self == "object" && self && self.Object === Object && self,
    eO = VNn || kBs || Function("return this")(),
    WNn = typeof y_e == "object" && y_e && !y_e.nodeType && y_e,
    xNn = WNn && typeof yue == "object" && yue && !yue.nodeType && yue,
    zNn = xNn && xNn.exports === WNn,
    DXt = zNn && VNn.process,
    TNn = (function () {
      try {
        return DXt && DXt.binding && DXt.binding("util");
      } catch {}
    })(),
    DNn = TNn && TNn.isTypedArray;
  function OBs(t, e) {
    for (var r = -1, n = t == null ? 0 : t.length, o = 0, s = []; ++r < n; ) {
      var a = t[r];
      e(a, r, t) && (s[o++] = a);
    }
    return s;
  }
  function NBs(t, e) {
    for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
    return t;
  }
  function PBs(t, e) {
    for (var r = -1, n = t == null ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0;
    return !1;
  }
  function BBs(t, e) {
    for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
    return n;
  }
  function LBs(t) {
    return function (e) {
      return t(e);
    };
  }
  function MBs(t, e) {
    return t.has(e);
  }
  function FBs(t, e) {
    return t?.[e];
  }
  function UBs(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function (n, o) {
        r[++e] = [o, n];
      }),
      r
    );
  }
  function $Bs(t, e) {
    return function (r) {
      return t(e(r));
    };
  }
  function jBs(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function (n) {
        r[++e] = n;
      }),
      r
    );
  }
  var QBs = Array.prototype,
    GBs = Function.prototype,
    Xet = Object.prototype,
    IXt = eO["__core-js_shared__"],
    YNn = GBs.toString,
    nD = Xet.hasOwnProperty,
    INn = (function () {
      var t = /[^.]+$/.exec((IXt && IXt.keys && IXt.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })(),
    KNn = Xet.toString,
    qBs = RegExp(
      "^" +
        YNn.call(nD)
          .replace(DBs, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    ),
    RNn = zNn ? eO.Buffer : void 0,
    zet = eO.Symbol,
    kNn = eO.Uint8Array,
    JNn = Xet.propertyIsEnumerable,
    HBs = QBs.splice,
    wW = zet ? zet.toStringTag : void 0,
    ONn = Object.getOwnPropertySymbols,
    VBs = RNn ? RNn.isBuffer : void 0,
    WBs = $Bs(Object.keys, Object),
    NXt = _ue(eO, "DataView"),
    __e = _ue(eO, "Map"),
    PXt = _ue(eO, "Promise"),
    BXt = _ue(eO, "Set"),
    LXt = _ue(eO, "WeakMap"),
    E_e = _ue(Object, "create"),
    zBs = DW(NXt),
    YBs = DW(__e),
    KBs = DW(PXt),
    JBs = DW(BXt),
    XBs = DW(LXt),
    NNn = zet ? zet.prototype : void 0,
    RXt = NNn ? NNn.valueOf : void 0;
  function xW(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function ZBs() {
    ((this.__data__ = E_e ? E_e(null) : {}), (this.size = 0));
  }
  function eLs(t) {
    var e = this.has(t) && delete this.__data__[t];
    return ((this.size -= e ? 1 : 0), e);
  }
  function tLs(t) {
    var e = this.__data__;
    if (E_e) {
      var r = e[t];
      return r === FXt ? void 0 : r;
    }
    return nD.call(e, t) ? e[t] : void 0;
  }
  function rLs(t) {
    var e = this.__data__;
    return E_e ? e[t] !== void 0 : nD.call(e, t);
  }
  function nLs(t, e) {
    var r = this.__data__;
    return ((this.size += this.has(t) ? 0 : 1), (r[t] = E_e && e === void 0 ? FXt : e), this);
  }
  xW.prototype.clear = ZBs;
  xW.prototype.delete = eLs;
  xW.prototype.get = tLs;
  xW.prototype.has = rLs;
  xW.prototype.set = nLs;
  function tO(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function iLs() {
    ((this.__data__ = []), (this.size = 0));
  }
  function oLs(t) {
    var e = this.__data__,
      r = Zet(e, t);
    if (r < 0) return !1;
    var n = e.length - 1;
    return (r == n ? e.pop() : HBs.call(e, r, 1), --this.size, !0);
  }
  function sLs(t) {
    var e = this.__data__,
      r = Zet(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function aLs(t) {
    return Zet(this.__data__, t) > -1;
  }
  function uLs(t, e) {
    var r = this.__data__,
      n = Zet(r, t);
    return (n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this);
  }
  tO.prototype.clear = iLs;
  tO.prototype.delete = oLs;
  tO.prototype.get = sLs;
  tO.prototype.has = aLs;
  tO.prototype.set = uLs;
  function TW(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function cLs() {
    ((this.size = 0), (this.__data__ = { hash: new xW(), map: new (__e || tO)(), string: new xW() }));
  }
  function lLs(t) {
    var e = ett(this, t).delete(t);
    return ((this.size -= e ? 1 : 0), e);
  }
  function mLs(t) {
    return ett(this, t).get(t);
  }
  function dLs(t) {
    return ett(this, t).has(t);
  }
  function fLs(t, e) {
    var r = ett(this, t),
      n = r.size;
    return (r.set(t, e), (this.size += r.size == n ? 0 : 1), this);
  }
  TW.prototype.clear = cLs;
  TW.prototype.delete = lLs;
  TW.prototype.get = mLs;
  TW.prototype.has = dLs;
  TW.prototype.set = fLs;
  function Yet(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.__data__ = new TW(); ++e < r; ) this.add(t[e]);
  }
  function pLs(t) {
    return (this.__data__.set(t, FXt), this);
  }
  function hLs(t) {
    return this.__data__.has(t);
  }
  Yet.prototype.add = Yet.prototype.push = pLs;
  Yet.prototype.has = hLs;
  function DF(t) {
    var e = (this.__data__ = new tO(t));
    this.size = e.size;
  }
  function gLs() {
    ((this.__data__ = new tO()), (this.size = 0));
  }
  function bLs(t) {
    var e = this.__data__,
      r = e.delete(t);
    return ((this.size = e.size), r);
  }
  function ALs(t) {
    return this.__data__.get(t);
  }
  function yLs(t) {
    return this.__data__.has(t);
  }
  function _Ls(t, e) {
    var r = this.__data__;
    if (r instanceof tO) {
      var n = r.__data__;
      if (!__e || n.length < dBs - 1) return (n.push([t, e]), (this.size = ++r.size), this);
      r = this.__data__ = new TW(n);
    }
    return (r.set(t, e), (this.size = r.size), this);
  }
  DF.prototype.clear = gLs;
  DF.prototype.delete = bLs;
  DF.prototype.get = ALs;
  DF.prototype.has = yLs;
  DF.prototype.set = _Ls;
  function ELs(t, e) {
    var r = Ket(t),
      n = !r && LLs(t),
      o = !r && !n && MXt(t),
      s = !r && !n && !o && iPn(t),
      a = r || n || o || s,
      u = a ? BBs(t.length, String) : [],
      c = u.length;
    for (var m in t)
      (e || nD.call(t, m)) &&
        !(
          a &&
          (m == "length" ||
            (o && (m == "offset" || m == "parent")) ||
            (s && (m == "buffer" || m == "byteLength" || m == "byteOffset")) ||
            kLs(m, c))
        ) &&
        u.push(m);
    return u;
  }
  function Zet(t, e) {
    for (var r = t.length; r--; ) if (ePn(t[r][0], e)) return r;
    return -1;
  }
  function vLs(t, e, r) {
    var n = e(t);
    return Ket(t) ? n : NBs(n, r(t));
  }
  function C_e(t) {
    return t == null ? (t === void 0 ? ABs : hBs) : wW && wW in Object(t) ? ILs(t) : BLs(t);
  }
  function PNn(t) {
    return v_e(t) && C_e(t) == qet;
  }
  function XNn(t, e, r, n, o) {
    return t === e ? !0 : t == null || e == null || (!v_e(t) && !v_e(e)) ? t !== t && e !== e : CLs(t, e, r, n, XNn, o);
  }
  function CLs(t, e, r, n, o, s) {
    var a = Ket(t),
      u = Ket(e),
      c = a ? kXt : TF(t),
      m = u ? kXt : TF(e);
    ((c = c == qet ? Aue : c), (m = m == qet ? Aue : m));
    var d = c == Aue,
      f = m == Aue,
      p = c == m;
    if (p && MXt(t)) {
      if (!MXt(e)) return !1;
      ((a = !0), (d = !1));
    }
    if (p && !d) return (s || (s = new DF()), a || iPn(t) ? ZNn(t, e, r, n, o, s) : TLs(t, e, c, r, n, o, s));
    if (!(r & Jet)) {
      var h = d && nD.call(t, "__wrapped__"),
        g = f && nD.call(e, "__wrapped__");
      if (h || g) {
        var b = h ? t.value() : t,
          A = g ? e.value() : e;
        return (s || (s = new DF()), o(b, A, r, n, s));
      }
    }
    return p ? (s || (s = new DF()), DLs(t, e, r, n, o, s)) : !1;
  }
  function SLs(t) {
    if (!nPn(t) || NLs(t)) return !1;
    var e = tPn(t) ? qBs : IBs;
    return e.test(DW(t));
  }
  function wLs(t) {
    return v_e(t) && rPn(t.length) && !!Tm[C_e(t)];
  }
  function xLs(t) {
    if (!PLs(t)) return WBs(t);
    var e = [];
    for (var r in Object(t)) nD.call(t, r) && r != "constructor" && e.push(r);
    return e;
  }
  function ZNn(t, e, r, n, o, s) {
    var a = r & Jet,
      u = t.length,
      c = e.length;
    if (u != c && !(a && c > u)) return !1;
    var m = s.get(t);
    if (m && s.get(e)) return m == e;
    var d = -1,
      f = !0,
      p = r & LNn ? new Yet() : void 0;
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
          !PBs(e, function (A, y) {
            if (!MBs(p, y) && (h === A || o(h, A, r, n, s))) return p.push(y);
          })
        ) {
          f = !1;
          break;
        }
      } else if (!(h === g || o(h, g, r, n, s))) {
        f = !1;
        break;
      }
    }
    return (s.delete(t), s.delete(e), f);
  }
  function TLs(t, e, r, n, o, s, a) {
    switch (r) {
      case Wet:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        ((t = t.buffer), (e = e.buffer));
      case HNn:
        return !(t.byteLength != e.byteLength || !s(new kNn(t), new kNn(e)));
      case FNn:
      case UNn:
      case QNn:
        return ePn(+t, +e);
      case $Nn:
        return t.name == e.name && t.message == e.message;
      case GNn:
      case qNn:
        return t == e + "";
      case Het:
        var u = UBs;
      case Vet:
        var c = n & Jet;
        if ((u || (u = jBs), t.size != e.size && !c)) return !1;
        var m = a.get(t);
        if (m) return m == e;
        ((n |= LNn), a.set(t, e));
        var d = ZNn(u(t), u(e), n, o, s, a);
        return (a.delete(t), d);
      case bBs:
        if (RXt) return RXt.call(t) == RXt.call(e);
    }
    return !1;
  }
  function DLs(t, e, r, n, o, s) {
    var a = r & Jet,
      u = BNn(t),
      c = u.length,
      m = BNn(e),
      d = m.length;
    if (c != d && !a) return !1;
    for (var f = c; f--; ) {
      var p = u[f];
      if (!(a ? p in e : nD.call(e, p))) return !1;
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
      if (!(E === void 0 ? A === y || o(A, y, r, n, s) : E)) {
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
  function BNn(t) {
    return vLs(t, ULs, RLs);
  }
  function ett(t, e) {
    var r = t.__data__;
    return OLs(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function _ue(t, e) {
    var r = FBs(t, e);
    return SLs(r) ? r : void 0;
  }
  function ILs(t) {
    var e = nD.call(t, wW),
      r = t[wW];
    try {
      t[wW] = void 0;
      var n = !0;
    } catch {}
    var o = KNn.call(t);
    return (n && (e ? (t[wW] = r) : delete t[wW]), o);
  }
  var RLs = ONn
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              OBs(ONn(t), function (e) {
                return JNn.call(t, e);
              }));
        }
      : $Ls,
    TF = C_e;
  ((NXt && TF(new NXt(new ArrayBuffer(1))) != Wet) ||
    (__e && TF(new __e()) != Het) ||
    (PXt && TF(PXt.resolve()) != wNn) ||
    (BXt && TF(new BXt()) != Vet) ||
    (LXt && TF(new LXt()) != OXt)) &&
    (TF = function (t) {
      var e = C_e(t),
        r = e == Aue ? t.constructor : void 0,
        n = r ? DW(r) : "";
      if (n)
        switch (n) {
          case zBs:
            return Wet;
          case YBs:
            return Het;
          case KBs:
            return wNn;
          case JBs:
            return Vet;
          case XBs:
            return OXt;
        }
      return e;
    });
  function kLs(t, e) {
    return ((e = e ?? MNn), !!e && (typeof t == "number" || RBs.test(t)) && t > -1 && t % 1 == 0 && t < e);
  }
  function OLs(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function NLs(t) {
    return !!INn && INn in t;
  }
  function PLs(t) {
    var e = t && t.constructor,
      r = (typeof e == "function" && e.prototype) || Xet;
    return t === r;
  }
  function BLs(t) {
    return KNn.call(t);
  }
  function DW(t) {
    if (t != null) {
      try {
        return YNn.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  function ePn(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var LLs = PNn(
      (function () {
        return arguments;
      })(),
    )
      ? PNn
      : function (t) {
          return v_e(t) && nD.call(t, "callee") && !JNn.call(t, "callee");
        },
    Ket = Array.isArray;
  function MLs(t) {
    return t != null && rPn(t.length) && !tPn(t);
  }
  var MXt = VBs || jLs;
  function FLs(t, e) {
    return XNn(t, e);
  }
  function tPn(t) {
    if (!nPn(t)) return !1;
    var e = C_e(t);
    return e == jNn || e == pBs || e == fBs || e == gBs;
  }
  function rPn(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= MNn;
  }
  function nPn(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  function v_e(t) {
    return t != null && typeof t == "object";
  }
  var iPn = DNn ? LBs(DNn) : wLs;
  function ULs(t) {
    return MLs(t) ? ELs(t) : xLs(t);
  }
  function $Ls() {
    return [];
  }
  function jLs() {
    return !1;
  }
  yue.exports = FLs;
});