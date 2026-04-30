/**
 * @module dto
 * @category utils/versioning
 * @label versioning
 * @position 1958 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dto) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dto = T((Gxl, mto) => {
  "use strict";
  var HEr = NA(),
    o3u = Yv(),
    lto = Tfe(),
    s3u = (t, e) => {
      t = new o3u(t, e);
      let r = new HEr("0.0.0");
      if (t.test(r) || ((r = new HEr("0.0.0-0")), t.test(r))) return r;
      r = null;
      for (let n = 0; n < t.set.length; ++n) {
        let o = t.set[n],
          s = null;
        (o.forEach((a) => {
          let u = new HEr(a.semver.version);
          switch (a.operator) {
            case ">":
              (u.prerelease.length === 0 ? u.patch++ : u.prerelease.push(0), (u.raw = u.format()));
            case "":
            case ">=":
              (!s || lto(u, s)) && (s = u);
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${a.operator}`);
          }
        }),
          s && (!r || lto(r, s)) && (r = s));
      }
      return r && t.test(r) ? r : null;
    };
  mto.exports = s3u;
});