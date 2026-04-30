/**
 * @module kPn
 * @category utils/lodash
 * @label lodash
 * @position 1297 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kPn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kPn = T((N5c, RPn) => {
  var OMs = 200,
    eZt = "__lodash_hash_undefined__",
    NMs = 1 / 0,
    PMs = "[object Function]",
    BMs = "[object GeneratorFunction]",
    LMs = /[\\^$.*+?()[\]{}|]/g,
    MMs = /^\[object .+?Constructor\]$/,
    FMs = typeof global == "object" && global && global.Object === Object && global,
    UMs = typeof self == "object" && self && self.Object === Object && self,
    tZt = FMs || UMs || Function("return this")();
  function $Ms(t, e) {
    var r = t ? t.length : 0;
    return !!r && GMs(t, e, 0) > -1;
  }
  function jMs(t, e, r) {
    for (var n = -1, o = t ? t.length : 0; ++n < o; ) if (r(e, t[n])) return !0;
    return !1;
  }
  function QMs(t, e, r, n) {
    for (var o = t.length, s = r + (n ? 1 : -1); n ? s-- : ++s < o; ) if (e(t[s], s, t)) return s;
    return -1;
  }
  function GMs(t, e, r) {
    if (e !== e) return QMs(t, qMs, r);
    for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
    return -1;
  }
  function qMs(t) {
    return t !== t;
  }
  function HMs(t, e) {
    return t.has(e);
  }
  function VMs(t, e) {
    return t?.[e];
  }
  function WMs(t) {
    var e = !1;
    if (t != null && typeof t.toString != "function")
      try {
        e = !!(t + "");
      } catch {}
    return e;
  }
  function xPn(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function (n) {
        r[++e] = n;
      }),
      r
    );
  }
  var zMs = Array.prototype,
    YMs = Function.prototype,
    TPn = Object.prototype,
    XXt = tZt["__core-js_shared__"],
    wPn = (function () {
      var t = /[^.]+$/.exec((XXt && XXt.keys && XXt.keys.IE_PROTO) || "");
      return t ? "Symbol(src)_1." + t : "";
    })(),
    DPn = YMs.toString,
    rZt = TPn.hasOwnProperty,
    KMs = TPn.toString,
    JMs = RegExp(
      "^" +
        DPn.call(rZt)
          .replace(LMs, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$",
    ),
    XMs = zMs.splice,
    ZMs = nZt(tZt, "Map"),
    ZXt = nZt(tZt, "Set"),
    S_e = nZt(Object, "create");
  function IW(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function eFs() {
    this.__data__ = S_e ? S_e(null) : {};
  }
  function tFs(t) {
    return this.has(t) && delete this.__data__[t];
  }
  function rFs(t) {
    var e = this.__data__;
    if (S_e) {
      var r = e[t];
      return r === eZt ? void 0 : r;
    }
    return rZt.call(e, t) ? e[t] : void 0;
  }
  function nFs(t) {
    var e = this.__data__;
    return S_e ? e[t] !== void 0 : rZt.call(e, t);
  }
  function iFs(t, e) {
    var r = this.__data__;
    return ((r[t] = S_e && e === void 0 ? eZt : e), this);
  }
  IW.prototype.clear = eFs;
  IW.prototype.delete = tFs;
  IW.prototype.get = rFs;
  IW.prototype.has = nFs;
  IW.prototype.set = iFs;
  function Tue(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function oFs() {
    this.__data__ = [];
  }
  function sFs(t) {
    var e = this.__data__,
      r = itt(e, t);
    if (r < 0) return !1;
    var n = e.length - 1;
    return (r == n ? e.pop() : XMs.call(e, r, 1), !0);
  }
  function aFs(t) {
    var e = this.__data__,
      r = itt(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function uFs(t) {
    return itt(this.__data__, t) > -1;
  }
  function cFs(t, e) {
    var r = this.__data__,
      n = itt(r, t);
    return (n < 0 ? r.push([t, e]) : (r[n][1] = e), this);
  }
  Tue.prototype.clear = oFs;
  Tue.prototype.delete = sFs;
  Tue.prototype.get = aFs;
  Tue.prototype.has = uFs;
  Tue.prototype.set = cFs;
  function Due(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  function lFs() {
    this.__data__ = { hash: new IW(), map: new (ZMs || Tue)(), string: new IW() };
  }
  function mFs(t) {
    return ott(this, t).delete(t);
  }
  function dFs(t) {
    return ott(this, t).get(t);
  }
  function fFs(t) {
    return ott(this, t).has(t);
  }
  function pFs(t, e) {
    return (ott(this, t).set(t, e), this);
  }
  Due.prototype.clear = lFs;
  Due.prototype.delete = mFs;
  Due.prototype.get = dFs;
  Due.prototype.has = fFs;
  Due.prototype.set = pFs;
  function ntt(t) {
    var e = -1,
      r = t ? t.length : 0;
    for (this.__data__ = new Due(); ++e < r; ) this.add(t[e]);
  }
  function hFs(t) {
    return (this.__data__.set(t, eZt), this);
  }
  function gFs(t) {
    return this.__data__.has(t);
  }
  ntt.prototype.add = ntt.prototype.push = hFs;
  ntt.prototype.has = gFs;
  function itt(t, e) {
    for (var r = t.length; r--; ) if (SFs(t[r][0], e)) return r;
    return -1;
  }
  function bFs(t) {
    if (!IPn(t) || EFs(t)) return !1;
    var e = wFs(t) || WMs(t) ? JMs : MMs;
    return e.test(vFs(t));
  }
  function AFs(t, e, r) {
    var n = -1,
      o = $Ms,
      s = t.length,
      a = !0,
      u = [],
      c = u;
    if (r) ((a = !1), (o = jMs));
    else if (s >= OMs) {
      var m = e ? null : yFs(t);
      if (m) return xPn(m);
      ((a = !1), (o = HMs), (c = new ntt()));
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
  var yFs =
    ZXt && 1 / xPn(new ZXt([, -0]))[1] == NMs
      ? function (t) {
          return new ZXt(t);
        }
      : xFs;
  function ott(t, e) {
    var r = t.__data__;
    return _Fs(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
  }
  function nZt(t, e) {
    var r = VMs(t, e);
    return bFs(r) ? r : void 0;
  }
  function _Fs(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
  }
  function EFs(t) {
    return !!wPn && wPn in t;
  }
  function vFs(t) {
    if (t != null) {
      try {
        return DPn.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  function CFs(t) {
    return t && t.length ? AFs(t) : [];
  }
  function SFs(t, e) {
    return t === e || (t !== t && e !== e);
  }
  function wFs(t) {
    var e = IPn(t) ? KMs.call(t) : "";
    return e == PMs || e == BMs;
  }
  function IPn(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function");
  }
  function xFs() {}
  RPn.exports = CFs;
});