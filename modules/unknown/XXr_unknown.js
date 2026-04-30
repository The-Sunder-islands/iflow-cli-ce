/**
 * @module XXr
 * @category unknown
 * @label unknown
 * @position 450 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XXr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XXr = T(($Lu, JXr) => {
  "use strict";
  JXr.exports = Wxt;
  function Wxt(t, e) {
    typeof t == "string" && ((e = t), (t = void 0));
    var r = [];
    function n(s) {
      if (typeof s != "string") {
        var a = o();
        if ((Wxt.verbose && console.log("codegen: " + a), (a = "return " + a), s)) {
          for (var u = Object.keys(s), c = new Array(u.length + 1), m = new Array(u.length), d = 0; d < u.length; )
            ((c[d] = u[d]), (m[d] = s[u[d++]]));
          return ((c[d] = a), Function.apply(null, c).apply(null, m));
        }
        return Function(a)();
      }
      for (var f = new Array(arguments.length - 1), p = 0; p < f.length; ) f[p] = arguments[++p];
      if (
        ((p = 0),
        (s = s.replace(/%([%dfijs])/g, function (g, b) {
          var A = f[p++];
          switch (b) {
            case "d":
            case "f":
              return String(Number(A));
            case "i":
              return String(Math.floor(A));
            case "j":
              return JSON.stringify(A);
            case "s":
              return String(A);
          }
          return "%";
        })),
        p !== f.length)
      )
        throw Error("parameter count mismatch");
      return (r.push(s), n);
    }
    function o(s) {
      return (
        "function " +
        (s || e || "") +
        "(" +
        ((t && t.join(",")) || "") +
        `){
  ` +
        r.join(`
  `) +
        `
}`
      );
    }
    return ((n.toString = o), n);
  }
  Wxt.verbose = !1;
});