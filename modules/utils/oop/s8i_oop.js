/**
 * @module s8i
 * @category utils/oop
 * @label oop
 * @position 1745 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (s8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var s8i = T((IKc, o8i) => {
  var Z0t = Object.defineProperty,
    oRa = Object.getOwnPropertyDescriptor,
    sRa = Object.getOwnPropertyNames,
    aRa = Object.prototype.hasOwnProperty,
    xgr = (t, e) => Z0t(t, "name", { value: e, configurable: !0 }),
    uRa = (t, e) => {
      for (var r in e) Z0t(t, r, { get: e[r], enumerable: !0 });
    },
    cRa = (t, e, r, n) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let o of sRa(e))
          !aRa.call(t, o) && o !== r && Z0t(t, o, { get: () => e[o], enumerable: !(n = oRa(e, o)) || n.enumerable });
      return t;
    },
    lRa = (t) => cRa(Z0t({}, "__esModule", { value: !0 }), t),
    r8i = {};
  uRa(r8i, { fromUtf8: () => i8i, toUint8Array: () => mRa, toUtf8: () => dRa });
  o8i.exports = lRa(r8i);
  var n8i = t8i(),
    i8i = xgr((t) => {
      let e = (0, n8i.fromString)(t, "utf8");
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }, "fromUtf8"),
    mRa = xgr(
      (t) =>
        typeof t == "string"
          ? i8i(t)
          : ArrayBuffer.isView(t)
            ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT)
            : new Uint8Array(t),
      "toUint8Array",
    ),
    dRa = xgr((t) => {
      if (typeof t == "string") return t;
      if (typeof t != "object" || typeof t.byteOffset != "number" || typeof t.byteLength != "number")
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return (0, n8i.fromArrayBuffer)(t.buffer, t.byteOffset, t.byteLength).toString("utf8");
    }, "toUtf8");
});