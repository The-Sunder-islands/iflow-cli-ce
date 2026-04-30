/**
 * @module J5i
 * @category utils/oop
 * @label oop
 * @position 1743 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (J5i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var J5i = T((TKc, K5i) => {
  var J0t = Object.defineProperty,
    Q7a = Object.getOwnPropertyDescriptor,
    G7a = Object.getOwnPropertyNames,
    q7a = Object.prototype.hasOwnProperty,
    H7a = (t, e) => J0t(t, "name", { value: e, configurable: !0 }),
    V7a = (t, e) => {
      for (var r in e) J0t(t, r, { get: e[r], enumerable: !0 });
    },
    W7a = (t, e, r, n) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let o of G7a(e))
          !q7a.call(t, o) && o !== r && J0t(t, o, { get: () => e[o], enumerable: !(n = Q7a(e, o)) || n.enumerable });
      return t;
    },
    z7a = (t) => W7a(J0t({}, "__esModule", { value: !0 }), t),
    Y5i = {};
  V7a(Y5i, { isArrayBuffer: () => Y7a });
  K5i.exports = z7a(Y5i);
  var Y7a = H7a(
    (t) =>
      (typeof ArrayBuffer == "function" && t instanceof ArrayBuffer) ||
      Object.prototype.toString.call(t) === "[object ArrayBuffer]",
    "isArrayBuffer",
  );
});