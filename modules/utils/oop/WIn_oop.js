/**
 * @module WIn
 * @category utils/oop
 * @label oop
 * @position 1164 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (WIn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var WIn = T((xm) => {
  "use strict";
  Object.defineProperty(xm, "__esModule", { value: !0 });
  xm.CHAR = `	
\r -\uD7FF\uE000-\uFFFD\u{10000}-\u{10FFFF}`;
  xm.S = ` 	\r
`;
  xm.NAME_START_CHAR =
    ":A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}";
  xm.NAME_CHAR = "-" + xm.NAME_START_CHAR + ".0-9\xB7\u0300-\u036F\u203F-\u2040";
  xm.CHAR_RE = new RegExp("^[" + xm.CHAR + "]$", "u");
  xm.S_RE = new RegExp("^[" + xm.S + "]+$", "u");
  xm.NAME_START_CHAR_RE = new RegExp("^[" + xm.NAME_START_CHAR + "]$", "u");
  xm.NAME_CHAR_RE = new RegExp("^[" + xm.NAME_CHAR + "]$", "u");
  xm.NAME_RE = new RegExp("^[" + xm.NAME_START_CHAR + "][" + xm.NAME_CHAR + "]*$", "u");
  xm.NMTOKEN_RE = new RegExp("^[" + xm.NAME_CHAR + "]+$", "u");
  var AYt = 9,
    yYt = 10,
    _Yt = 13,
    EYt = 32;
  xm.S_LIST = [EYt, yYt, _Yt, AYt];
  function VIs(t) {
    return (
      (t >= EYt && t <= 55295) ||
      t === yYt ||
      t === _Yt ||
      t === AYt ||
      (t >= 57344 && t <= 65533) ||
      (t >= 65536 && t <= 1114111)
    );
  }
  xm.isChar = VIs;
  function WIs(t) {
    return t === EYt || t === yYt || t === _Yt || t === AYt;
  }
  xm.isS = WIs;
  function VIn(t) {
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
  xm.isNameStartChar = VIn;
  function zIs(t) {
    return (
      VIn(t) ||
      (t >= 48 && t <= 57) ||
      t === 45 ||
      t === 46 ||
      t === 183 ||
      (t >= 768 && t <= 879) ||
      (t >= 8255 && t <= 8256)
    );
  }
  xm.isNameChar = zIs;
});