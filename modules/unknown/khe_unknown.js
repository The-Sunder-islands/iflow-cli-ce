/**
 * @module khe
 * @category unknown
 * @label unknown
 * @position 13 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (khe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var khe = T((syu, oRe) => {
  "use strict";
  var { EMPTY_BUFFER: wlo } = eR(),
    n9t = Buffer[Symbol.species];
  function xlo(t, e) {
    if (t.length === 0) return wlo;
    if (t.length === 1) return t[0];
    let r = Buffer.allocUnsafe(e),
      n = 0;
    for (let o = 0; o < t.length; o++) {
      let s = t[o];
      (r.set(s, n), (n += s.length));
    }
    return n < e ? new n9t(r.buffer, r.byteOffset, n) : r;
  }
  function Fwr(t, e, r, n, o) {
    for (let s = 0; s < o; s++) r[n + s] = t[s] ^ e[s & 3];
  }
  function Uwr(t, e) {
    for (let r = 0; r < t.length; r++) t[r] ^= e[r & 3];
  }
  function Tlo(t) {
    return t.length === t.buffer.byteLength ? t.buffer : t.buffer.slice(t.byteOffset, t.byteOffset + t.length);
  }
  function i9t(t) {
    if (((i9t.readOnly = !0), Buffer.isBuffer(t))) return t;
    let e;
    return (
      t instanceof ArrayBuffer
        ? (e = new n9t(t))
        : ArrayBuffer.isView(t)
          ? (e = new n9t(t.buffer, t.byteOffset, t.byteLength))
          : ((e = Buffer.from(t)), (i9t.readOnly = !1)),
      e
    );
  }
  oRe.exports = { concat: xlo, mask: Fwr, toArrayBuffer: Tlo, toBuffer: i9t, unmask: Uwr };
  if (!process.env.WS_NO_BUFFER_UTIL)
    try {
      let t = Ae("bufferutil");
      ((oRe.exports.mask = function (e, r, n, o, s) {
        s < 48 ? Fwr(e, r, n, o, s) : t.mask(e, r, n, o, s);
      }),
        (oRe.exports.unmask = function (e, r) {
          e.length < 32 ? Uwr(e, r) : t.unmask(e, r);
        }));
    } catch {}
});