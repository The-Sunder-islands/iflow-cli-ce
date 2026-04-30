/**
 * @module xwt
 * @category unknown
 * @label unknown
 * @position 410 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xwt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xwt = T((zBu, SJr) => {
  "use strict";
  var wwt = Ae("path").sep;
  SJr.exports = function (t) {
    var e = t.split(wwt),
      r = e.lastIndexOf("node_modules");
    if (r !== -1 && e[r + 1]) {
      for (
        var n = e[r + 1][0] === "@",
          o = n ? e[r + 1] + "/" + e[r + 2] : e[r + 1],
          s = n ? 3 : 2,
          a = "",
          u = r + s - 1,
          c = 0;
        c <= u;
        c++
      )
        c === u ? (a += e[c]) : (a += e[c] + wwt);
      for (var m = "", d = e.length - 1, f = r + s; f <= d; f++) f === d ? (m += e[f]) : (m += e[f] + wwt);
      return { name: o, basedir: a, path: m };
    }
  };
});