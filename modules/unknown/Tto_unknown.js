/**
 * @module Tto
 * @category unknown
 * @label unknown
 * @position 1964 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Tto) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Tto = T((Yxl, xto) => {
  "use strict";
  var E3u = BDe(),
    v3u = zv();
  xto.exports = (t, e, r) => {
    let n = [],
      o = null,
      s = null,
      a = t.sort((d, f) => v3u(d, f, r));
    for (let d of a) E3u(d, e, r) ? ((s = d), o || (o = d)) : (s && n.push([o, s]), (s = null), (o = null));
    o && n.push([o, null]);
    let u = [];
    for (let [d, f] of n)
      d === f
        ? u.push(d)
        : !f && d === a[0]
          ? u.push("*")
          : f
            ? d === a[0]
              ? u.push(`<=${f}`)
              : u.push(`${d} - ${f}`)
            : u.push(`>=${d}`);
    let c = u.join(" || "),
      m = typeof e.raw == "string" ? e.raw : String(e);
    return c.length < m.length ? c : e;
  };
});