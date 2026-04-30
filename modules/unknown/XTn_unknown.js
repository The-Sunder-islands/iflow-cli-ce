/**
 * @module XTn
 * @category unknown
 * @label unknown
 * @position 1129 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XTn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XTn = T((vbc, JTn) => {
  var DZe = Pd(),
    uTs = /(([a-z_\-0-9]*)!)?([a-z0-9_$]{2,})([(])?/gi,
    cTs = /^([$])?([a-z]+)([$])?([1-9][0-9]*)$/i;
  function lTs(t, e, r) {
    let n = DZe.decode(e),
      o = DZe.decode(r);
    return t.replace(uTs, (s, a, u, c, m) => {
      if (m) return s;
      let d = cTs.exec(c);
      if (d) {
        let f = d[1],
          p = d[2].toUpperCase(),
          h = d[3],
          g = d[4];
        if (p.length > 3 || (p.length === 3 && p > "XFD")) return s;
        let b = DZe.l2n(p),
          A = parseInt(g, 10);
        return (
          f || (b += o.col - n.col),
          h || (A += o.row - n.row),
          (a || "") + (f || "") + DZe.n2l(b) + (h || "") + A
        );
      }
      return s;
    });
  }
  JTn.exports = { slideFormula: lTs };
});