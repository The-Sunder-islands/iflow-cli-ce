/**
 * @module lAt
 * @category utils/versioning
 * @label versioning
 * @position 1960 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lAt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lAt = T((Hxl, Ato) => {
  "use strict";
  var c3u = NA(),
    bto = NDe(),
    { ANY: l3u } = bto,
    m3u = Yv(),
    d3u = BDe(),
    hto = Tfe(),
    gto = oAt(),
    f3u = aAt(),
    p3u = sAt(),
    h3u = (t, e, r, n) => {
      ((t = new c3u(t, n)), (e = new m3u(e, n)));
      let o, s, a, u, c;
      switch (r) {
        case ">":
          ((o = hto), (s = f3u), (a = gto), (u = ">"), (c = ">="));
          break;
        case "<":
          ((o = gto), (s = p3u), (a = hto), (u = "<"), (c = "<="));
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (d3u(t, e, n)) return !1;
      for (let m = 0; m < e.set.length; ++m) {
        let d = e.set[m],
          f = null,
          p = null;
        if (
          (d.forEach((h) => {
            (h.semver === l3u && (h = new bto(">=0.0.0")),
              (f = f || h),
              (p = p || h),
              o(h.semver, f.semver, n) ? (f = h) : a(h.semver, p.semver, n) && (p = h));
          }),
          f.operator === u || f.operator === c || ((!p.operator || p.operator === u) && s(t, p.semver)))
        )
          return !1;
        if (p.operator === c && a(t, p.semver)) return !1;
      }
      return !0;
    };
  Ato.exports = h3u;
});