/**
 * @module trt
 * @category unknown
 * @label unknown
 * @position 1344 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (trt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var trt = T((E8c, dMn) => {
  dMn.exports = function (t, e) {
    if (typeof t != "string") throw new TypeError("expected path to be a string");
    if (t === "\\" || t === "/") return "/";
    var r = t.length;
    if (r <= 1) return t;
    var n = "";
    if (r > 4 && t[3] === "\\") {
      var o = t[2];
      (o === "?" || o === ".") && t.slice(0, 2) === "\\\\" && ((t = t.slice(2)), (n = "//"));
    }
    var s = t.split(/[/\\]+/);
    return (e !== !1 && s[s.length - 1] === "" && s.pop(), n + s.join("/"));
  };
});