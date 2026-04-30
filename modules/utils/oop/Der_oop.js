/**
 * @module Der
 * @category utils/oop
 * @label oop
 * @position 1345 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Der) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Der = T((v8c, yMn) => {
  var pMn = 9007199254740991,
    qQs = "[object Arguments]",
    HQs = "[object Function]",
    VQs = "[object GeneratorFunction]",
    WQs = /^(?:0|[1-9]\d*)$/;
  function hMn(t, e, r) {
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
  function zQs(t, e) {
    for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
    return n;
  }
  var F_e = Object.prototype,
    U_e = F_e.hasOwnProperty,
    gMn = F_e.toString,
    YQs = F_e.propertyIsEnumerable,
    fMn = Math.max;
  function KQs(t, e) {
    var r = sGs(t) || oGs(t) ? zQs(t.length, String) : [],
      n = r.length,
      o = !!n;
    for (var s in t) (e || U_e.call(t, s)) && !(o && (s == "length" || AMn(s, n))) && r.push(s);
    return r;
  }
  function JQs(t, e, r, n) {
    return t === void 0 || (wer(t, F_e[r]) && !U_e.call(n, r)) ? e : t;
  }
  function XQs(t, e, r) {
    var n = t[e];
    (!(U_e.call(t, e) && wer(n, r)) || (r === void 0 && !(e in t))) && (t[e] = r);
  }
  function ZQs(t) {
    if (!Ter(t)) return iGs(t);
    var e = nGs(t),
      r = [];
    for (var n in t) (n == "constructor" && (e || !U_e.call(t, n))) || r.push(n);
    return r;
  }
  function bMn(t, e) {
    return (
      (e = fMn(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var r = arguments, n = -1, o = fMn(r.length - e, 0), s = Array(o); ++n < o; ) s[n] = r[e + n];
        n = -1;
        for (var a = Array(e + 1); ++n < e; ) a[n] = r[n];
        return ((a[e] = s), hMn(t, this, a));
      }
    );
  }
  function eGs(t, e, r, n) {
    r || (r = {});
    for (var o = -1, s = e.length; ++o < s; ) {
      var a = e[o],
        u = n ? n(r[a], t[a], a, r, t) : void 0;
      XQs(r, a, u === void 0 ? t[a] : u);
    }
    return r;
  }
  function tGs(t) {
    return bMn(function (e, r) {
      var n = -1,
        o = r.length,
        s = o > 1 ? r[o - 1] : void 0,
        a = o > 2 ? r[2] : void 0;
      for (
        s = t.length > 3 && typeof s == "function" ? (o--, s) : void 0,
          a && rGs(r[0], r[1], a) && ((s = o < 3 ? void 0 : s), (o = 1)),
          e = Object(e);
        ++n < o;
      ) {
        var u = r[n];
        u && t(e, u, n, s);
      }
      return e;
    });
  }
  function AMn(t, e) {
    return ((e = e ?? pMn), !!e && (typeof t == "number" || WQs.test(t)) && t > -1 && t % 1 == 0 && t < e);
  }
  function rGs(t, e, r) {
    if (!Ter(r)) return !1;
    var n = typeof e;
    return (n == "number" ? xer(r) && AMn(e, r.length) : n == "string" && e in r) ? wer(r[e], t) : !1;
  }
  function nGs(t) {
    var e = t && t.constructor,
      r = (typeof e == "function" && e.prototype) || F_e;
    return t === r;
  }
  function iGs(t) {
    var e = [];
    if (t != null) for (var r in Object(t)) e.push(r);
    return e;
  }
  function wer(t, e) {
    return t === e || (t !== t && e !== e);
  }
  function oGs(t) {
    return aGs(t) && U_e.call(t, "callee") && (!YQs.call(t, "callee") || gMn.call(t) == qQs);
  }
  var sGs = Array.isArray;
  function xer(t) {
    return t != null && cGs(t.length) && !uGs(t);
  }
  function aGs(t) {
    return lGs(t) && xer(t);
  }
  function uGs(t) {
    var e = Ter(t) ? gMn.call(t) : "";
    return e == HQs || e == VQs;
  }
  function cGs(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= pMn;
  }
  function Ter(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function");
  }
  function lGs(t) {
    return !!t && typeof t == "object";
  }
  var mGs = tGs(function (t, e, r, n) {
      eGs(e, fGs(e), t, n);
    }),
    dGs = bMn(function (t) {
      return (t.push(void 0, JQs), hMn(mGs, void 0, t));
    });
  function fGs(t) {
    return xer(t) ? KQs(t, !0) : ZQs(t);
  }
  yMn.exports = dGs;
});