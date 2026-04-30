/**
 * @module l9n
 * @category unknown
 * @label unknown
 * @position 938 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (l9n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var l9n = T((esc, c9n) => {
  var s9n = { "prs.": 100, "x-": 200, "x.": 300, "vnd.": 400, default: 900 },
    a9n = { nginx: 10, apache: 20, iana: 40, default: 30 },
    u9n = { application: 1, font: 2, audio: 2, video: 3, default: 0 };
  c9n.exports = function (e, r = "default") {
    if (e === "application/octet-stream") return 0;
    let [n, o] = e.split("/"),
      s = o.replace(/(\.|x-).*/, "$1"),
      a = s9n[s] || s9n.default,
      u = a9n[r] || a9n.default,
      c = u9n[n] || u9n.default,
      m = 1 - e.length / 100;
    return a + u + c + m;
  };
});