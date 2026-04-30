/**
 * @module Kzt
 * @category utils/oop
 * @label oop
 * @position 1149 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Kzt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Kzt = T((XDn) => {
  "use strict";
  var Yzt = EG().Buffer,
    JDn =
      Yzt.isEncoding ||
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
  function _Ds(t) {
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
  function EDs(t) {
    var e = _Ds(t);
    if (typeof e != "string" && (Yzt.isEncoding === JDn || !JDn(t))) throw new Error("Unknown encoding: " + t);
    return e || t;
  }
  XDn.StringDecoder = t_e;
  function t_e(t) {
    this.encoding = EDs(t);
    var e;
    switch (this.encoding) {
      case "utf16le":
        ((this.text = TDs), (this.end = DDs), (e = 4));
        break;
      case "utf8":
        ((this.fillLast = SDs), (e = 4));
        break;
      case "base64":
        ((this.text = IDs), (this.end = RDs), (e = 3));
        break;
      default:
        ((this.write = kDs), (this.end = ODs));
        return;
    }
    ((this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = Yzt.allocUnsafe(e)));
  }
  t_e.prototype.write = function (t) {
    if (t.length === 0) return "";
    var e, r;
    if (this.lastNeed) {
      if (((e = this.fillLast(t)), e === void 0)) return "";
      ((r = this.lastNeed), (this.lastNeed = 0));
    } else r = 0;
    return r < t.length ? (e ? e + this.text(t, r) : this.text(t, r)) : e || "";
  };
  t_e.prototype.end = xDs;
  t_e.prototype.text = wDs;
  t_e.prototype.fillLast = function (t) {
    if (this.lastNeed <= t.length)
      return (
        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)
      );
    (t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), (this.lastNeed -= t.length));
  };
  function zzt(t) {
    return t <= 127 ? 0 : t >> 5 === 6 ? 2 : t >> 4 === 14 ? 3 : t >> 3 === 30 ? 4 : t >> 6 === 2 ? -1 : -2;
  }
  function vDs(t, e, r) {
    var n = e.length - 1;
    if (n < r) return 0;
    var o = zzt(e[n]);
    return o >= 0
      ? (o > 0 && (t.lastNeed = o - 1), o)
      : --n < r || o === -2
        ? 0
        : ((o = zzt(e[n])),
          o >= 0
            ? (o > 0 && (t.lastNeed = o - 2), o)
            : --n < r || o === -2
              ? 0
              : ((o = zzt(e[n])), o >= 0 ? (o > 0 && (o === 2 ? (o = 0) : (t.lastNeed = o - 3)), o) : 0));
  }
  function CDs(t, e, r) {
    if ((e[0] & 192) !== 128) return ((t.lastNeed = 0), "\uFFFD");
    if (t.lastNeed > 1 && e.length > 1) {
      if ((e[1] & 192) !== 128) return ((t.lastNeed = 1), "\uFFFD");
      if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128) return ((t.lastNeed = 2), "\uFFFD");
    }
  }
  function SDs(t) {
    var e = this.lastTotal - this.lastNeed,
      r = CDs(this, t, e);
    if (r !== void 0) return r;
    if (this.lastNeed <= t.length)
      return (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal));
    (t.copy(this.lastChar, e, 0, t.length), (this.lastNeed -= t.length));
  }
  function wDs(t, e) {
    var r = vDs(this, t, e);
    if (!this.lastNeed) return t.toString("utf8", e);
    this.lastTotal = r;
    var n = t.length - (r - this.lastNeed);
    return (t.copy(this.lastChar, 0, n), t.toString("utf8", e, n));
  }
  function xDs(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + "\uFFFD" : e;
  }
  function TDs(t, e) {
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
  function DDs(t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      var r = this.lastTotal - this.lastNeed;
      return e + this.lastChar.toString("utf16le", 0, r);
    }
    return e;
  }
  function IDs(t, e) {
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
  function RDs(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
  }
  function kDs(t) {
    return t.toString(this.encoding);
  }
  function ODs(t) {
    return t && t.length ? this.write(t) : "";
  }
});