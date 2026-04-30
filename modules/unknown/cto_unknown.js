/**
 * @module cto
 * @category unknown
 * @label unknown
 * @position 1957 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cto) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cto = T((Qxl, uto) => {
  "use strict";
  var r3u = NA(),
    n3u = Yv(),
    i3u = (t, e, r) => {
      let n = null,
        o = null,
        s = null;
      try {
        s = new n3u(e, r);
      } catch {
        return null;
      }
      return (
        t.forEach((a) => {
          s.test(a) && (!n || o.compare(a) === 1) && ((n = a), (o = new r3u(n, r)));
        }),
        n
      );
    };
  uto.exports = i3u;
});