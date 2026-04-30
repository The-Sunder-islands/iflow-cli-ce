/**
 * @module nZr
 * @category unknown
 * @label unknown
 * @position 452 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (nZr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var nZr = T((rZr) => {
  "use strict";
  var Kxt = rZr,
    tZr = (Kxt.isAbsolute = function (e) {
      return /^(?:\/|\w+:)/.test(e);
    }),
    Yxt = (Kxt.normalize = function (e) {
      e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
      var r = e.split("/"),
        n = tZr(e),
        o = "";
      n && (o = r.shift() + "/");
      for (var s = 0; s < r.length; )
        r[s] === ".."
          ? s > 0 && r[s - 1] !== ".."
            ? r.splice(--s, 2)
            : n
              ? r.splice(s, 1)
              : ++s
          : r[s] === "."
            ? r.splice(s, 1)
            : ++s;
      return o + r.join("/");
    });
  Kxt.resolve = function (e, r, n) {
    return (
      n || (r = Yxt(r)),
      tZr(r) ? r : (n || (e = Yxt(e)), (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? Yxt(e + "/" + r) : r)
    );
  };
});