/**
 * @module IHt
 * @category utils/oop
 * @label oop
 * @position 988 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (IHt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var IHt = T((K_n) => {
  "use strict";
  var DHt = N6e().Buffer,
    Y_n =
      DHt.isEncoding ||
      function (t) {
        switch (((t = "" + t), t && t.toLowerCase())) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return !0;
          default:
            return !1;
        }
      };
  function g_s(t) {
    if (!t) return "utf8";
    for (var e; ; )
      switch (t) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return t;
        default:
          if (e) return;
          ((t = ("" + t).toLowerCase()), (e = !0));
      }
  }
  function b_s(t) {
    var e = g_s(t);
    if (typeof e != "string" && (DHt.isEncoding === Y_n || !Y_n(t))) throw new Error("Unknown encoding: " + t);
    return e || t;
  }
  K_n.StringDecoder = M6e;
  function M6e(t) {
    this.encoding = b_s(t);
    var e;
    switch (this.encoding) {
      case "utf16le":
        ((this.text = C_s), (this.end = S_s), (e = 4));
        break;
      case "utf8":
        ((this.fillLast = __s), (e = 4));
        break;
      case "base64":
        ((this.text = w_s), (this.end = x_s), (e = 3));
        break;
      default:
        ((this.write = T_s), (this.end = D_s));
        return;
    }
    ((this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = DHt.allocUnsafe(e)));
  }
  M6e.prototype.write = function (t) {
    if (t.length === 0) return "";
    var e, r;
    if (this.lastNeed) {
      if (((e = this.fillLast(t)), e === void 0)) return "";
      ((r = this.lastNeed), (this.lastNeed = 0));
    } else r = 0;
    return r < t.length ? (e ? e + this.text(t, r) : this.text(t, r)) : e || "";
  };
  M6e.prototype.end = v_s;
  M6e.prototype.text = E_s;
  M6e.prototype.fillLast = function (t) {
    if (this.lastNeed <= t.length)
      return (
        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)
      );
    (t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), (this.lastNeed -= t.length));
  };
  function THt(t) {
    return t <= 127 ? 0 : t >> 5 === 6 ? 2 : t >> 4 === 14 ? 3 : t >> 3 === 30 ? 4 : t >> 6 === 2 ? -1 : -2;
  }
  function A_s(t, e, r) {
    var n = e.length - 1;
    if (n < r) return 0;
    var o = THt(e[n]);
    return o >= 0
      ? (o > 0 && (t.lastNeed = o - 1), o)
      : --n < r || o === -2
        ? 0
        : ((o = THt(e[n])),
          o >= 0
            ? (o > 0 && (t.lastNeed = o - 2), o)
            : --n < r || o === -2
              ? 0
              : ((o = THt(e[n])), o >= 0 ? (o > 0 && (o === 2 ? (o = 0) : (t.lastNeed = o - 3)), o) : 0));
  }
  function y_s(t, e, r) {
    if ((e[0] & 192) !== 128) return ((t.lastNeed = 0), "\uFFFD");
    if (t.lastNeed > 1 && e.length > 1) {
      if ((e[1] & 192) !== 128) return ((t.lastNeed = 1), "\uFFFD");
      if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128) return ((t.lastNeed = 2), "\uFFFD");
    }
  }
  function __s(t) {
    var e = this.lastTotal - this.lastNeed,
      r = y_s(this, t, e);
    if (r !== void 0) return r;
    if (this.lastNeed <= t.length)
      return (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal));
    (t.copy(this.lastChar, e, 0, t.length), (this.lastNeed -= t.length));
  }
  function E_s(t, e) {
    var r = A_s(this, t, e);
    if (!this.lastNeed) return t.toString("utf8", e);
    this.lastTotal = r;
    var n = t.length - (r - this.lastNeed);
    return (t.copy(this.lastChar, 0, n), t.toString("utf8", e, n));
  }
  function v_s(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + "\uFFFD" : e;
  }
  function C_s(t, e) {
    if ((t.length - e) % 2 === 0) {
      var r = t.toString("utf16le", e);
      if (r) {
        var n = r.charCodeAt(r.length - 1);
        if (n >= 55296 && n <= 56319)
          return (
            (this.lastNeed = 2),
            (this.lastTotal = 4),
            (this.lastChar[0] = t[t.length - 2]),
            (this.lastChar[1] = t[t.length - 1]),
            r.slice(0, -1)
          );
      }
      return r;
    }
    return (
      (this.lastNeed = 1),
      (this.lastTotal = 2),
      (this.lastChar[0] = t[t.length - 1]),
      t.toString("utf16le", e, t.length - 1)
    );
  }
  function S_s(t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      var r = this.lastTotal - this.lastNeed;
      return e + this.lastChar.toString("utf16le", 0, r);
    }
    return e;
  }
  function w_s(t, e) {
    var r = (t.length - e) % 3;
    return r === 0
      ? t.toString("base64", e)
      : ((this.lastNeed = 3 - r),
        (this.lastTotal = 3),
        r === 1
          ? (this.lastChar[0] = t[t.length - 1])
          : ((this.lastChar[0] = t[t.length - 2]), (this.lastChar[1] = t[t.length - 1])),
        t.toString("base64", e, t.length - r));
  }
  function x_s(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
  }
  function T_s(t) {
    return t.toString(this.encoding);
  }
  function D_s(t) {
    return t && t.length ? this.write(t) : "";
  }
});