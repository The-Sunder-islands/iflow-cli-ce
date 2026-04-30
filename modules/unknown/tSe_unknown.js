/**
 * @module tSe
 * @category unknown
 * @label unknown
 * @position 1621 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (tSe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var tSe = T((p9) => {
  "use strict";
  var {
    REGEX_BACKSLASH: eCa,
    REGEX_REMOVE_BACKSLASH: tCa,
    REGEX_SPECIAL_CHARS: rCa,
    REGEX_SPECIAL_CHARS_GLOBAL: nCa,
  } = eSe();
  p9.isObject = (t) => t !== null && typeof t == "object" && !Array.isArray(t);
  p9.hasRegexChars = (t) => rCa.test(t);
  p9.isRegexChar = (t) => t.length === 1 && p9.hasRegexChars(t);
  p9.escapeRegex = (t) => t.replace(nCa, "\\$1");
  p9.toPosixSlashes = (t) => t.replace(eCa, "/");
  p9.isWindows = () => {
    if (typeof navigator < "u" && navigator.platform) {
      let t = navigator.platform.toLowerCase();
      return t === "win32" || t === "windows";
    }
    return typeof process < "u" && process.platform ? process.platform === "win32" : !1;
  };
  p9.removeBackslashes = (t) => t.replace(tCa, (e) => (e === "\\" ? "" : e));
  p9.escapeLast = (t, e, r) => {
    let n = t.lastIndexOf(e, r);
    return n === -1 ? t : t[n - 1] === "\\" ? p9.escapeLast(t, e, n - 1) : `${t.slice(0, n)}\\${t.slice(n)}`;
  };
  p9.removePrefix = (t, e = {}) => {
    let r = t;
    return (r.startsWith("./") && ((r = r.slice(2)), (e.prefix = "./")), r);
  };
  p9.wrapOutput = (t, e = {}, r = {}) => {
    let n = r.contains ? "" : "^",
      o = r.contains ? "" : "$",
      s = `${n}(?:${t})${o}`;
    return (e.negated === !0 && (s = `(?:^(?!${s}).*$)`), s);
  };
  p9.basename = (t, { windows: e } = {}) => {
    let r = t.split(e ? /[\\/]/ : "/"),
      n = r[r.length - 1];
    return n === "" ? r[r.length - 2] : n;
  };
});