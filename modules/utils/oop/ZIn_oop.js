/**
 * @module ZIn
 * @category utils/oop
 * @label oop
 * @position 1165 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ZIn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ZIn = T((il) => {
  "use strict";
  Object.defineProperty(il, "__esModule", { value: !0 });
  il.CHAR = "-\uD7FF\uE000-\uFFFD\u{10000}-\u{10FFFF}";
  il.RESTRICTED_CHAR = "-\b\v\f-\x7F-\x84\x86-\x9F";
  il.S = ` 	\r
`;
  il.NAME_START_CHAR =
    ":A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}";
  il.NAME_CHAR = "-" + il.NAME_START_CHAR + ".0-9\xB7\u0300-\u036F\u203F-\u2040";
  il.CHAR_RE = new RegExp("^[" + il.CHAR + "]$", "u");
  il.RESTRICTED_CHAR_RE = new RegExp("^[" + il.RESTRICTED_CHAR + "]$", "u");
  il.S_RE = new RegExp("^[" + il.S + "]+$", "u");
  il.NAME_START_CHAR_RE = new RegExp("^[" + il.NAME_START_CHAR + "]$", "u");
  il.NAME_CHAR_RE = new RegExp("^[" + il.NAME_CHAR + "]$", "u");
  il.NAME_RE = new RegExp("^[" + il.NAME_START_CHAR + "][" + il.NAME_CHAR + "]*$", "u");
  il.NMTOKEN_RE = new RegExp("^[" + il.NAME_CHAR + "]+$", "u");
  var zIn = 9,
    YIn = 10,
    KIn = 13,
    JIn = 32;
  il.S_LIST = [JIn, YIn, KIn, zIn];
  function YIs(t) {
    return (t >= 1 && t <= 55295) || (t >= 57344 && t <= 65533) || (t >= 65536 && t <= 1114111);
  }
  il.isChar = YIs;
  function KIs(t) {
    return (
      (t >= 1 && t <= 8) ||
      t === 11 ||
      t === 12 ||
      (t >= 14 && t <= 31) ||
      (t >= 127 && t <= 132) ||
      (t >= 134 && t <= 159)
    );
  }
  il.isRestrictedChar = KIs;
  function JIs(t) {
    return (
      t === 9 ||
      t === 10 ||
      t === 13 ||
      (t > 31 && t < 127) ||
      t === 133 ||
      (t > 159 && t <= 55295) ||
      (t >= 57344 && t <= 65533) ||
      (t >= 65536 && t <= 1114111)
    );
  }
  il.isCharAndNotRestricted = JIs;
  function XIs(t) {
    return t === JIn || t === YIn || t === KIn || t === zIn;
  }
  il.isS = XIs;
  function XIn(t) {
    return (
      (t >= 65 && t <= 90) ||
      (t >= 97 && t <= 122) ||
      t === 58 ||
      t === 95 ||
      t === 8204 ||
      t === 8205 ||
      (t >= 192 && t <= 214) ||
      (t >= 216 && t <= 246) ||
      (t >= 248 && t <= 767) ||
      (t >= 880 && t <= 893) ||
      (t >= 895 && t <= 8191) ||
      (t >= 8304 && t <= 8591) ||
      (t >= 11264 && t <= 12271) ||
      (t >= 12289 && t <= 55295) ||
      (t >= 63744 && t <= 64975) ||
      (t >= 65008 && t <= 65533) ||
      (t >= 65536 && t <= 983039)
    );
  }
  il.isNameStartChar = XIn;
  function ZIs(t) {
    return (
      XIn(t) ||
      (t >= 48 && t <= 57) ||
      t === 45 ||
      t === 46 ||
      t === 183 ||
      (t >= 768 && t <= 879) ||
      (t >= 8255 && t <= 8256)
    );
  }
  il.isNameChar = ZIs;
});