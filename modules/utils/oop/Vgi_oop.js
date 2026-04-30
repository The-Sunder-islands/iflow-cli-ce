/**
 * @module Vgi
 * @category utils/oop
 * @label oop
 * @position 1723 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Vgi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Vgi = T((fhr) => {
  "use strict";
  Object.defineProperty(fhr, "__esModule", { value: !0 });
  fhr.headStream = nDa;
  async function nDa(t, e) {
    let r = 0,
      n = [],
      o = t.getReader(),
      s = !1;
    for (; !s; ) {
      let { done: c, value: m } = await o.read();
      if ((m && (n.push(m), (r += m?.byteLength ?? 0)), r >= e)) break;
      s = c;
    }
    o.releaseLock();
    let a = new Uint8Array(Math.min(e, r)),
      u = 0;
    for (let c of n) {
      if (c.byteLength > a.byteLength - u) {
        a.set(c.subarray(0, a.byteLength - u), u);
        break;
      } else a.set(c, u);
      u += c.length;
    }
    return a;
  }
});