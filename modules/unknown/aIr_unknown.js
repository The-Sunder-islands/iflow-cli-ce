/**
 * @module aIr
 * @category unknown
 * @label unknown
 * @position 34 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aIr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aIr = T((mCu, sIr) => {
  "use strict";
  var e1 = {};
  sIr.exports = e1;
  function oIr(t) {
    return t < 0 ? -1 : 1;
  }
  function Odo(t) {
    return t % 1 === 0.5 && (t & 1) === 0 ? Math.floor(t) : Math.round(t);
  }
  function iB(t, e) {
    e.unsigned || --t;
    let r = e.unsigned ? 0 : -Math.pow(2, t),
      n = Math.pow(2, t) - 1,
      o = e.moduloBitLength ? Math.pow(2, e.moduloBitLength) : Math.pow(2, t),
      s = e.moduloBitLength ? Math.pow(2, e.moduloBitLength - 1) : Math.pow(2, t - 1);
    return function (a, u) {
      u || (u = {});
      let c = +a;
      if (u.enforceRange) {
        if (!Number.isFinite(c)) throw new TypeError("Argument is not a finite number");
        if (((c = oIr(c) * Math.floor(Math.abs(c))), c < r || c > n))
          throw new TypeError("Argument is not in byte range");
        return c;
      }
      if (!isNaN(c) && u.clamp) return ((c = Odo(c)), c < r && (c = r), c > n && (c = n), c);
      if (!Number.isFinite(c) || c === 0) return 0;
      if (((c = oIr(c) * Math.floor(Math.abs(c))), (c = c % o), !e.unsigned && c >= s)) return c - o;
      if (e.unsigned) {
        if (c < 0) c += o;
        else if (c === -0) return 0;
      }
      return c;
    };
  }
  e1.void = function () {};
  e1.boolean = function (t) {
    return !!t;
  };
  e1.byte = iB(8, { unsigned: !1 });
  e1.octet = iB(8, { unsigned: !0 });
  e1.short = iB(16, { unsigned: !1 });
  e1["unsigned short"] = iB(16, { unsigned: !0 });
  e1.long = iB(32, { unsigned: !1 });
  e1["unsigned long"] = iB(32, { unsigned: !0 });
  e1["long long"] = iB(32, { unsigned: !1, moduloBitLength: 64 });
  e1["unsigned long long"] = iB(32, { unsigned: !0, moduloBitLength: 64 });
  e1.double = function (t) {
    let e = +t;
    if (!Number.isFinite(e)) throw new TypeError("Argument is not a finite floating-point value");
    return e;
  };
  e1["unrestricted double"] = function (t) {
    let e = +t;
    if (isNaN(e)) throw new TypeError("Argument is NaN");
    return e;
  };
  e1.float = e1.double;
  e1["unrestricted float"] = e1["unrestricted double"];
  e1.DOMString = function (t, e) {
    return (e || (e = {}), e.treatNullAsEmptyString && t === null ? "" : String(t));
  };
  e1.ByteString = function (t, e) {
    let r = String(t),
      n;
    for (let o = 0; (n = r.codePointAt(o)) !== void 0; ++o)
      if (n > 255) throw new TypeError("Argument is not a valid bytestring");
    return r;
  };
  e1.USVString = function (t) {
    let e = String(t),
      r = e.length,
      n = [];
    for (let o = 0; o < r; ++o) {
      let s = e.charCodeAt(o);
      if (s < 55296 || s > 57343) n.push(String.fromCodePoint(s));
      else if (56320 <= s && s <= 57343) n.push(String.fromCodePoint(65533));
      else if (o === r - 1) n.push(String.fromCodePoint(65533));
      else {
        let a = e.charCodeAt(o + 1);
        if (56320 <= a && a <= 57343) {
          let u = s & 1023,
            c = a & 1023;
          (n.push(String.fromCodePoint(65536 + 1024 * u + c)), ++o);
        } else n.push(String.fromCodePoint(65533));
      }
    }
    return n.join("");
  };
  e1.Date = function (t, e) {
    if (!(t instanceof Date)) throw new TypeError("Argument is not a Date object");
    if (!isNaN(t)) return t;
  };
  e1.RegExp = function (t, e) {
    return (t instanceof RegExp || (t = new RegExp(t)), t);
  };
});