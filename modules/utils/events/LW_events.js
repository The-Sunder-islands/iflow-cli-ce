/**
 * @module LW
 * @category utils/events
 * @label events
 * @position 1351 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (LW) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var LW = T((D8c, UMn) => {
  "use strict";
  var LMn = Z1(),
    MGs =
      Object.keys ||
      function (t) {
        var e = [];
        for (var r in t) e.push(r);
        return e;
      };
  UMn.exports = cO;
  var MMn = Object.create(z0());
  MMn.inherits = qo();
  var FMn = Mer(),
    Ler = Per();
  MMn.inherits(cO, FMn);
  for (Ber = MGs(Ler.prototype), art = 0; art < Ber.length; art++)
    ((urt = Ber[art]), cO.prototype[urt] || (cO.prototype[urt] = Ler.prototype[urt]));
  var Ber, urt, art;
  function cO(t) {
    if (!(this instanceof cO)) return new cO(t);
    (FMn.call(this, t),
      Ler.call(this, t),
      t && t.readable === !1 && (this.readable = !1),
      t && t.writable === !1 && (this.writable = !1),
      (this.allowHalfOpen = !0),
      t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
      this.once("end", FGs));
  }
  Object.defineProperty(cO.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    },
  });
  function FGs() {
    this.allowHalfOpen || this._writableState.ended || LMn.nextTick(UGs, this);
  }
  function UGs(t) {
    t.end();
  }
  Object.defineProperty(cO.prototype, "destroyed", {
    get: function () {
      return this._readableState === void 0 || this._writableState === void 0
        ? !1
        : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function (t) {
      this._readableState === void 0 ||
        this._writableState === void 0 ||
        ((this._readableState.destroyed = t), (this._writableState.destroyed = t));
    },
  });
  cO.prototype._destroy = function (t, e) {
    (this.push(null), this.end(), LMn.nextTick(e, t));
  };
});
var $er = T((jMn) => {
  "use strict";
  var Uer = $_e().Buffer,
    $Mn =
      Uer.isEncoding ||
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
  function $Gs(t) {
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
  function jGs(t) {
    var e = $Gs(t);
    if (typeof e != "string" && (Uer.isEncoding === $Mn || !$Mn(t))) throw new Error("Unknown encoding: " + t);
    return e || t;
  }
  jMn.StringDecoder = q_e;
  function q_e(t) {
    this.encoding = jGs(t);
    var e;
    switch (this.encoding) {
      case "utf16le":
        ((this.text = WGs), (this.end = zGs), (e = 4));
        break;
      case "utf8":
        ((this.fillLast = qGs), (e = 4));
        break;
      case "base64":
        ((this.text = YGs), (this.end = KGs), (e = 3));
        break;
      default:
        ((this.write = JGs), (this.end = XGs));
        return;
    }
    ((this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = Uer.allocUnsafe(e)));
  }
  q_e.prototype.write = function (t) {
    if (t.length === 0) return "";
    var e, r;
    if (this.lastNeed) {
      if (((e = this.fillLast(t)), e === void 0)) return "";
      ((r = this.lastNeed), (this.lastNeed = 0));
    } else r = 0;
    return r < t.length ? (e ? e + this.text(t, r) : this.text(t, r)) : e || "";
  };
  q_e.prototype.end = VGs;
  q_e.prototype.text = HGs;
  q_e.prototype.fillLast = function (t) {
    if (this.lastNeed <= t.length)
      return (
        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
        this.lastChar.toString(this.encoding, 0, this.lastTotal)
      );
    (t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), (this.lastNeed -= t.length));
  };
  function Fer(t) {
    return t <= 127 ? 0 : t >> 5 === 6 ? 2 : t >> 4 === 14 ? 3 : t >> 3 === 30 ? 4 : t >> 6 === 2 ? -1 : -2;
  }
  function QGs(t, e, r) {
    var n = e.length - 1;
    if (n < r) return 0;
    var o = Fer(e[n]);
    return o >= 0
      ? (o > 0 && (t.lastNeed = o - 1), o)
      : --n < r || o === -2
        ? 0
        : ((o = Fer(e[n])),
          o >= 0
            ? (o > 0 && (t.lastNeed = o - 2), o)
            : --n < r || o === -2
              ? 0
              : ((o = Fer(e[n])), o >= 0 ? (o > 0 && (o === 2 ? (o = 0) : (t.lastNeed = o - 3)), o) : 0));
  }
  function GGs(t, e, r) {
    if ((e[0] & 192) !== 128) return ((t.lastNeed = 0), "\uFFFD");
    if (t.lastNeed > 1 && e.length > 1) {
      if ((e[1] & 192) !== 128) return ((t.lastNeed = 1), "\uFFFD");
      if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128) return ((t.lastNeed = 2), "\uFFFD");
    }
  }
  function qGs(t) {
    var e = this.lastTotal - this.lastNeed,
      r = GGs(this, t, e);
    if (r !== void 0) return r;
    if (this.lastNeed <= t.length)
      return (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal));
    (t.copy(this.lastChar, e, 0, t.length), (this.lastNeed -= t.length));
  }
  function HGs(t, e) {
    var r = QGs(this, t, e);
    if (!this.lastNeed) return t.toString("utf8", e);
    this.lastTotal = r;
    var n = t.length - (r - this.lastNeed);
    return (t.copy(this.lastChar, 0, n), t.toString("utf8", e, n));
  }
  function VGs(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + "\uFFFD" : e;
  }
  function WGs(t, e) {
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
  function zGs(t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      var r = this.lastTotal - this.lastNeed;
      return e + this.lastChar.toString("utf16le", 0, r);
    }
    return e;
  }
  function YGs(t, e) {
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
  function KGs(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
  }
  function JGs(t) {
    return t.toString(this.encoding);
  }
  function XGs(t) {
    return t && t.length ? this.write(t) : "";
  }
});