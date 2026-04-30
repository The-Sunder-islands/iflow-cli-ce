/**
 * @module eZi
 * @category unknown
 * @label unknown
 * @position 1911 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (eZi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var eZi = T((qwl, ZXi) => {
  "use strict";
  var _Er = 1,
    XXi = 2;
  function Ufu() {
    return "";
  }
  function $fu(t, e, r) {
    return t.slice(e, r).replace(/\S/g, " ");
  }
  ZXi.exports = function (t, e) {
    e = e || {};
    for (var r, n, o = !1, s = !1, a = 0, u = "", c = e.whitespace === !1 ? Ufu : $fu, m = 0; m < t.length; m++) {
      if (((r = t[m]), (n = t[m + 1]), !s && r === '"')) {
        var d = t[m - 1] === "\\" && t[m - 2] !== "\\";
        d || (o = !o);
      }
      if (!o) {
        if (!s && r + n === "//") ((u += t.slice(a, m)), (a = m), (s = _Er), m++);
        else if (
          s === _Er &&
          r + n ===
            `\r
`
        ) {
          (m++, (s = !1), (u += c(t, a, m)), (a = m));
          continue;
        } else if (
          s === _Er &&
          r ===
            `
`
        )
          ((s = !1), (u += c(t, a, m)), (a = m));
        else if (!s && r + n === "/*") {
          ((u += t.slice(a, m)), (a = m), (s = XXi), m++);
          continue;
        } else if (s === XXi && r + n === "*/") {
          (m++, (s = !1), (u += c(t, a, m + 1)), (a = m + 1));
          continue;
        }
      }
    }
    return u + (s ? c(t.substr(a)) : t.substr(a));
  };
});