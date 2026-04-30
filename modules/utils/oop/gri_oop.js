/**
 * @module gri
 * @category utils/oop
 * @label oop
 * @position 1559 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gri) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gri = T((KCc, hri) => {
  "use strict";
  var upa = Ae("node:assert"),
    { runtimeFeatures: lri } = PO(),
    nY = new Map([
      ["sha256", 0],
      ["sha384", 1],
      ["sha512", 2],
    ]),
    hcr;
  if (lri.has("crypto")) {
    hcr = Ae("node:crypto");
    let t = hcr.getHashes();
    t.length === 0 && nY.clear();
    for (let e of nY.keys()) t.includes(e) === !1 && nY.delete(e);
  } else nY.clear();
  var cri = Map.prototype.get.bind(nY),
    gcr = Map.prototype.has.bind(nY),
    cpa =
      lri.has("crypto") === !1 || nY.size === 0
        ? () => !0
        : (t, e) => {
            let r = dri(e);
            if (r.length === 0) return !0;
            let n = mri(r);
            for (let o of n) {
              let s = o.alg,
                a = o.val,
                u = fri(s, t);
              if (pri(u, a)) return !0;
            }
            return !1;
          };
  function mri(t) {
    let e = [],
      r = null;
    for (let n of t) {
      if ((upa(gcr(n.alg), "Invalid SRI hash algorithm token"), e.length === 0)) {
        (e.push(n), (r = n));
        continue;
      }
      let o = r.alg,
        s = cri(o),
        a = n.alg,
        u = cri(a);
      u < s || (u > s ? ((r = n), (e[0] = n), (e.length = 1)) : e.push(n));
    }
    return e;
  }
  function dri(t) {
    let e = [];
    for (let r of t.split(" ")) {
      let o = r.split("?", 1)[0],
        s = "",
        a = [o.slice(0, 6), o.slice(7)],
        u = a[0];
      if (!gcr(u)) continue;
      a[1] && (s = a[1]);
      let c = { alg: u, val: s };
      e.push(c);
    }
    return e;
  }
  var fri = (t, e) => hcr.hash(t, e, "base64");
  function pri(t, e) {
    let r = t.length;
    (r !== 0 && t[r - 1] === "=" && (r -= 1), r !== 0 && t[r - 1] === "=" && (r -= 1));
    let n = e.length;
    if ((n !== 0 && e[n - 1] === "=" && (n -= 1), n !== 0 && e[n - 1] === "=" && (n -= 1), r !== n)) return !1;
    for (let o = 0; o < r; ++o)
      if (!(t[o] === e[o] || (t[o] === "+" && e[o] === "-") || (t[o] === "/" && e[o] === "_"))) return !1;
    return !0;
  }
  hri.exports = {
    applyAlgorithmToBytes: fri,
    bytesMatch: cpa,
    caseSensitiveMatch: pri,
    isValidSRIHashAlgorithm: gcr,
    getStrongestMetadata: mri,
    parseMetadata: dri,
  };
});