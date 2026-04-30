/**
 * @module iee
 * @category unknown
 * @label unknown
 * @position 16 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (iee) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var iee = T((cyu, uRe) => {
  "use strict";
  var { isUtf8: Wwr } = Ae("buffer"),
    { hasBlob: Nlo } = eR(),
    Plo = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1,
      1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
    ];
  function Blo(t) {
    return (t >= 1e3 && t <= 1014 && t !== 1004 && t !== 1005 && t !== 1006) || (t >= 3e3 && t <= 4999);
  }
  function u9t(t) {
    let e = t.length,
      r = 0;
    for (; r < e; )
      if ((t[r] & 128) === 0) r++;
      else if ((t[r] & 224) === 192) {
        if (r + 1 === e || (t[r + 1] & 192) !== 128 || (t[r] & 254) === 192) return !1;
        r += 2;
      } else if ((t[r] & 240) === 224) {
        if (
          r + 2 >= e ||
          (t[r + 1] & 192) !== 128 ||
          (t[r + 2] & 192) !== 128 ||
          (t[r] === 224 && (t[r + 1] & 224) === 128) ||
          (t[r] === 237 && (t[r + 1] & 224) === 160)
        )
          return !1;
        r += 3;
      } else if ((t[r] & 248) === 240) {
        if (
          r + 3 >= e ||
          (t[r + 1] & 192) !== 128 ||
          (t[r + 2] & 192) !== 128 ||
          (t[r + 3] & 192) !== 128 ||
          (t[r] === 240 && (t[r + 1] & 240) === 128) ||
          (t[r] === 244 && t[r + 1] > 143) ||
          t[r] > 244
        )
          return !1;
        r += 4;
      } else return !1;
    return !0;
  }
  function Llo(t) {
    return (
      Nlo &&
      typeof t == "object" &&
      typeof t.arrayBuffer == "function" &&
      typeof t.type == "string" &&
      typeof t.stream == "function" &&
      (t[Symbol.toStringTag] === "Blob" || t[Symbol.toStringTag] === "File")
    );
  }
  uRe.exports = { isBlob: Llo, isValidStatusCode: Blo, isValidUTF8: u9t, tokenChars: Plo };
  if (Wwr)
    uRe.exports.isValidUTF8 = function (t) {
      return t.length < 24 ? u9t(t) : Wwr(t);
    };
  else if (!process.env.WS_NO_UTF_8_VALIDATE)
    try {
      let t = Ae("utf-8-validate");
      uRe.exports.isValidUTF8 = function (e) {
        return e.length < 32 ? u9t(e) : t(e);
      };
    } catch {}
});