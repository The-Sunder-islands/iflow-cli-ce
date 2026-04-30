/**
 * @module Lle
 * @category network/ws
 * @label websocket
 * @position 1570 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Lle) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Lle = T((u4c, ani) => {
  "use strict";
  var { runtimeFeatures: f3a } = PO(),
    { maxUnsigned16Bit: sni, opcodes: p3a } = TU(),
    ust = 8 * 1024,
    ICe = null,
    Ble = ust,
    h3a = f3a.has("crypto")
      ? Ae("node:crypto").randomFillSync
      : function (e, r, n) {
          for (let o = 0; o < e.length; ++o) e[o] = (Math.random() * 255) | 0;
          return e;
        };
  function Icr() {
    return (
      Ble === ust && ((Ble = 0), h3a((ICe ??= Buffer.allocUnsafeSlow(ust)), 0, ust)),
      [ICe[Ble++], ICe[Ble++], ICe[Ble++], ICe[Ble++]]
    );
  }
  var Rcr = class {
    constructor(e) {
      this.frameData = e;
    }
    createFrame(e) {
      let r = this.frameData,
        n = Icr(),
        o = r?.byteLength ?? 0,
        s = o,
        a = 6;
      o > sni ? ((a += 8), (s = 127)) : o > 125 && ((a += 2), (s = 126));
      let u = Buffer.allocUnsafe(o + a);
      ((u[0] = u[1] = 0), (u[0] |= 128), (u[0] = (u[0] & 240) + e));
      ((u[a - 4] = n[0]),
        (u[a - 3] = n[1]),
        (u[a - 2] = n[2]),
        (u[a - 1] = n[3]),
        (u[1] = s),
        s === 126 ? u.writeUInt16BE(o, 2) : s === 127 && ((u[2] = u[3] = 0), u.writeUIntBE(o, 4, 6)),
        (u[1] |= 128));
      for (let c = 0; c < o; ++c) u[a + c] = r[c] ^ n[c & 3];
      return u;
    }
    static createFastTextFrame(e) {
      let r = Icr(),
        n = e.length;
      for (let u = 0; u < n; ++u) e[u] ^= r[u & 3];
      let o = n,
        s = 6;
      n > sni ? ((s += 8), (o = 127)) : n > 125 && ((s += 2), (o = 126));
      let a = Buffer.allocUnsafeSlow(s);
      return (
        (a[0] = 128 | p3a.TEXT),
        (a[1] = o | 128),
        (a[s - 4] = r[0]),
        (a[s - 3] = r[1]),
        (a[s - 2] = r[2]),
        (a[s - 1] = r[3]),
        o === 126 ? a.writeUInt16BE(n, 2) : o === 127 && ((a[2] = a[3] = 0), a.writeUIntBE(n, 4, 6)),
        [a, e]
      );
    }
  };
  ani.exports = { WebsocketFrameSend: Rcr, generateMask: Icr };
});