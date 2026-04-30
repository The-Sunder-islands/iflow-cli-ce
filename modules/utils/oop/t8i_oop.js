/**
 * @module t8i
 * @category utils/oop
 * @label oop
 * @position 1744 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (t8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var t8i = T((DKc, e8i) => {
  var X0t = Object.defineProperty,
    K7a = Object.getOwnPropertyDescriptor,
    J7a = Object.getOwnPropertyNames,
    X7a = Object.prototype.hasOwnProperty,
    X5i = (t, e) => X0t(t, "name", { value: e, configurable: !0 }),
    Z7a = (t, e) => {
      for (var r in e) X0t(t, r, { get: e[r], enumerable: !0 });
    },
    eRa = (t, e, r, n) => {
      if ((e && typeof e == "object") || typeof e == "function")
        for (let o of J7a(e))
          !X7a.call(t, o) && o !== r && X0t(t, o, { get: () => e[o], enumerable: !(n = K7a(e, o)) || n.enumerable });
      return t;
    },
    tRa = (t) => eRa(X0t({}, "__esModule", { value: !0 }), t),
    Z5i = {};
  Z7a(Z5i, { fromArrayBuffer: () => nRa, fromString: () => iRa });
  e8i.exports = tRa(Z5i);
  var rRa = J5i(),
    wgr = Ae("buffer"),
    nRa = X5i((t, e = 0, r = t.byteLength - e) => {
      if (!(0, rRa.isArrayBuffer)(t))
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof t} (${t})`);
      return wgr.Buffer.from(t, e, r);
    }, "fromArrayBuffer"),
    iRa = X5i((t, e) => {
      if (typeof t != "string")
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof t} (${t})`);
      return e ? wgr.Buffer.from(t, e) : wgr.Buffer.from(t);
    }, "fromString");
});