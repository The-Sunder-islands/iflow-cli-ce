/**
 * @module wno
 * @category unknown
 * @label unknown
 * @position 1984 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wno) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wno = T((VIl, Sno) => {
  "use strict";
  Sno.exports = Rbu;
  var Ibu = DAt(),
    Cno = IAt();
  function Rbu(t, e) {
    e || (e = {});
    let r = 0,
      n = e.blocksize || 40960,
      o = new Ibu();
    return new Promise((a, u) => {
      setImmediate(s, r, n, a, u);
    });
    function s(a, u, c, m) {
      if (a >= t.length)
        try {
          return c(o.finish());
        } catch (d) {
          return m(Cno(d, t));
        }
      try {
        (o.parse(t.slice(a, a + u)), setImmediate(s, a + u, u, c, m));
      } catch (d) {
        m(Cno(d, t));
      }
    }
  }
});