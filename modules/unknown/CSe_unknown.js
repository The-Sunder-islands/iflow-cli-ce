/**
 * @module CSe
 * @category unknown
 * @label unknown
 * @position 1630 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (CSe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var CSe = T((Xjc, rfi) => {
  var pSa = function (t, e, r) {
      let n;
      switch (r) {
        case 1:
          n = t.readUInt8(e);
          break;
        case 2:
          n = t.readUInt16LE(e);
          break;
        case 4:
          n = t.readUInt32LE(e);
          break;
        case 8:
          n = Number(t.readBigUInt64LE(e));
          break;
        default:
          throw new Error("Unsupported UInt LE size!");
      }
      return n;
    },
    hSa = function (t, e) {
      let r = {},
        n = 0;
      for (let [o, s] of e) (t.length >= n + s ? (r[o] = pSa(t, n, s)) : (r[o] = null), (n += s));
      return r;
    };
  rfi.exports = { parse: hSa };
});