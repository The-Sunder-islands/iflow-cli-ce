/**
 * @module t7n
 * @category utils/oop
 * @label oop
 * @position 1166 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (t7n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var t7n = T((q8) => {
  "use strict";
  Object.defineProperty(q8, "__esModule", { value: !0 });
  q8.NC_NAME_START_CHAR =
    "A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\u{EFFFF}";
  q8.NC_NAME_CHAR = "-" + q8.NC_NAME_START_CHAR + ".0-9\xB7\u0300-\u036F\u203F-\u2040";
  q8.NC_NAME_START_CHAR_RE = new RegExp("^[" + q8.NC_NAME_START_CHAR + "]$", "u");
  q8.NC_NAME_CHAR_RE = new RegExp("^[" + q8.NC_NAME_CHAR + "]$", "u");
  q8.NC_NAME_RE = new RegExp("^[" + q8.NC_NAME_START_CHAR + "][" + q8.NC_NAME_CHAR + "]*$", "u");
  function e7n(t) {
    return (
      (t >= 65 && t <= 90) ||
      t === 95 ||
      (t >= 97 && t <= 122) ||
      (t >= 192 && t <= 214) ||
      (t >= 216 && t <= 246) ||
      (t >= 248 && t <= 767) ||
      (t >= 880 && t <= 893) ||
      (t >= 895 && t <= 8191) ||
      (t >= 8204 && t <= 8205) ||
      (t >= 8304 && t <= 8591) ||
      (t >= 11264 && t <= 12271) ||
      (t >= 12289 && t <= 55295) ||
      (t >= 63744 && t <= 64975) ||
      (t >= 65008 && t <= 65533) ||
      (t >= 65536 && t <= 983039)
    );
  }
  q8.isNCNameStartChar = e7n;
  function e7s(t) {
    return (
      e7n(t) ||
      t === 45 ||
      t === 46 ||
      (t >= 48 && t <= 57) ||
      t === 183 ||
      (t >= 768 && t <= 879) ||
      (t >= 8255 && t <= 8256)
    );
  }
  q8.isNCNameChar = e7s;
});