/**
 * @module KXr
 * @category utils/oop
 * @label oop
 * @position 449 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (KXr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var KXr = T((ULu, YXr) => {
  var wMo = 1 / 0,
    xMo = "[object Symbol]",
    TMo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
    DMo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    $Fe = "\\ud800-\\udfff",
    NXr = "\\u0300-\\u036f\\ufe20-\\ufe23",
    PXr = "\\u20d0-\\u20f0",
    BXr = "\\u2700-\\u27bf",
    LXr = "a-z\\xdf-\\xf6\\xf8-\\xff",
    IMo = "\\xac\\xb1\\xd7\\xf7",
    RMo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
    kMo = "\\u2000-\\u206f",
    OMo =
      " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    MXr = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    FXr = "\\ufe0e\\ufe0f",
    UXr = IMo + RMo + kMo + OMo,
    qxt = "['\u2019]",
    NMo = "[" + $Fe + "]",
    xXr = "[" + UXr + "]",
    UFe = "[" + NXr + PXr + "]",
    $Xr = "\\d+",
    PMo = "[" + BXr + "]",
    jXr = "[" + LXr + "]",
    QXr = "[^" + $Fe + UXr + $Xr + BXr + LXr + MXr + "]",
    Gxt = "\\ud83c[\\udffb-\\udfff]",
    BMo = "(?:" + UFe + "|" + Gxt + ")",
    GXr = "[^" + $Fe + "]",
    Hxt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Vxt = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Bre = "[" + MXr + "]",
    qXr = "\\u200d",
    TXr = "(?:" + jXr + "|" + QXr + ")",
    LMo = "(?:" + Bre + "|" + QXr + ")",
    DXr = "(?:" + qxt + "(?:d|ll|m|re|s|t|ve))?",
    IXr = "(?:" + qxt + "(?:D|LL|M|RE|S|T|VE))?",
    HXr = BMo + "?",
    VXr = "[" + FXr + "]?",
    MMo = "(?:" + qXr + "(?:" + [GXr, Hxt, Vxt].join("|") + ")" + VXr + HXr + ")*",
    WXr = VXr + HXr + MMo,
    FMo = "(?:" + [PMo, Hxt, Vxt].join("|") + ")" + WXr,
    UMo = "(?:" + [GXr + UFe + "?", UFe, Hxt, Vxt, NMo].join("|") + ")",
    $Mo = RegExp(qxt, "g"),
    jMo = RegExp(UFe, "g"),
    QMo = RegExp(Gxt + "(?=" + Gxt + ")|" + UMo + WXr, "g"),
    GMo = RegExp(
      [
        Bre + "?" + jXr + "+" + DXr + "(?=" + [xXr, Bre, "$"].join("|") + ")",
        LMo + "+" + IXr + "(?=" + [xXr, Bre + TXr, "$"].join("|") + ")",
        Bre + "?" + TXr + "+" + DXr,
        Bre + "+" + IXr,
        $Xr,
        FMo,
      ].join("|"),
      "g",
    ),
    qMo = RegExp("[" + qXr + $Fe + NXr + PXr + FXr + "]"),
    HMo = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    VMo = {
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "ss",
    },
    WMo = typeof global == "object" && global && global.Object === Object && global,
    zMo = typeof self == "object" && self && self.Object === Object && self,
    YMo = WMo || zMo || Function("return this")();
  function KMo(t, e, r, n) {
    var o = -1,
      s = t ? t.length : 0;
    for (n && s && (r = t[++o]); ++o < s; ) r = e(r, t[o], o, t);
    return r;
  }
  function JMo(t) {
    return t.split("");
  }
  function XMo(t) {
    return t.match(TMo) || [];
  }
  function ZMo(t) {
    return function (e) {
      return t?.[e];
    };
  }
  var eFo = ZMo(VMo);
  function zXr(t) {
    return qMo.test(t);
  }
  function tFo(t) {
    return HMo.test(t);
  }
  function rFo(t) {
    return zXr(t) ? nFo(t) : JMo(t);
  }
  function nFo(t) {
    return t.match(QMo) || [];
  }
  function iFo(t) {
    return t.match(GMo) || [];
  }
  var oFo = Object.prototype,
    sFo = oFo.toString,
    RXr = YMo.Symbol,
    kXr = RXr ? RXr.prototype : void 0,
    OXr = kXr ? kXr.toString : void 0;
  function aFo(t, e, r) {
    var n = -1,
      o = t.length;
    (e < 0 && (e = -e > o ? 0 : o + e),
      (r = r > o ? o : r),
      r < 0 && (r += o),
      (o = e > r ? 0 : (r - e) >>> 0),
      (e >>>= 0));
    for (var s = Array(o); ++n < o; ) s[n] = t[n + e];
    return s;
  }
  function uFo(t) {
    if (typeof t == "string") return t;
    if (fFo(t)) return OXr ? OXr.call(t) : "";
    var e = t + "";
    return e == "0" && 1 / t == -wMo ? "-0" : e;
  }
  function cFo(t, e, r) {
    var n = t.length;
    return ((r = r === void 0 ? n : r), !e && r >= n ? t : aFo(t, e, r));
  }
  function lFo(t) {
    return function (e) {
      e = jFe(e);
      var r = zXr(e) ? rFo(e) : void 0,
        n = r ? r[0] : e.charAt(0),
        o = r ? cFo(r, 1).join("") : e.slice(1);
      return n[t]() + o;
    };
  }
  function mFo(t) {
    return function (e) {
      return KMo(AFo(gFo(e).replace($Mo, "")), t, "");
    };
  }
  function dFo(t) {
    return !!t && typeof t == "object";
  }
  function fFo(t) {
    return typeof t == "symbol" || (dFo(t) && sFo.call(t) == xMo);
  }
  function jFe(t) {
    return t == null ? "" : uFo(t);
  }
  var pFo = mFo(function (t, e, r) {
    return ((e = e.toLowerCase()), t + (r ? hFo(e) : e));
  });
  function hFo(t) {
    return bFo(jFe(t).toLowerCase());
  }
  function gFo(t) {
    return ((t = jFe(t)), t && t.replace(DMo, eFo).replace(jMo, ""));
  }
  var bFo = lFo("toUpperCase");
  function AFo(t, e, r) {
    return ((t = jFe(t)), (e = r ? void 0 : e), e === void 0 ? (tFo(t) ? iFo(t) : XMo(t)) : t.match(e) || []);
  }
  YXr.exports = pFo;
});