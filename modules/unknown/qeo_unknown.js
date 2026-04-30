/**
 * @module qeo
 * @category unknown
 * @label unknown
 * @position 1950 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qeo) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qeo = T((Bxl, Geo) => {
  "use strict";
  var whu = NA(),
    xhu = hJ(),
    { safeRe: uAt, t: cAt } = w1e(),
    Thu = (t, e) => {
      if (t instanceof whu) return t;
      if ((typeof t == "number" && (t = String(t)), typeof t != "string")) return null;
      e = e || {};
      let r = null;
      if (!e.rtl) r = t.match(e.includePrerelease ? uAt[cAt.COERCEFULL] : uAt[cAt.COERCE]);
      else {
        let c = e.includePrerelease ? uAt[cAt.COERCERTLFULL] : uAt[cAt.COERCERTL],
          m;
        for (; (m = c.exec(t)) && (!r || r.index + r[0].length !== t.length); )
          ((!r || m.index + m[0].length !== r.index + r[0].length) && (r = m),
            (c.lastIndex = m.index + m[1].length + m[2].length));
        c.lastIndex = -1;
      }
      if (r === null) return null;
      let n = r[2],
        o = r[3] || "0",
        s = r[4] || "0",
        a = e.includePrerelease && r[5] ? `-${r[5]}` : "",
        u = e.includePrerelease && r[6] ? `+${r[6]}` : "";
      return xhu(`${n}.${o}.${s}${a}${u}`, e);
    };
  Geo.exports = Thu;
});