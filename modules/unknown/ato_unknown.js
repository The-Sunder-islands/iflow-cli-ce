/**
 * @module ato
 * @category unknown
 * @label unknown
 * @position 1956 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ato) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ato = T((jxl, sto) => {
  "use strict";
  var Zhu = NA(),
    e3u = Yv(),
    t3u = (t, e, r) => {
      let n = null,
        o = null,
        s = null;
      try {
        s = new e3u(e, r);
      } catch {
        return null;
      }
      return (
        t.forEach((a) => {
          s.test(a) && (!n || o.compare(a) === -1) && ((n = a), (o = new Zhu(n, r)));
        }),
        n
      );
    };
  sto.exports = t3u;
});