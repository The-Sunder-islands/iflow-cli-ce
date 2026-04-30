/**
 * @module Hlt
 * @category unknown
 * @label unknown
 * @position 1728 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hlt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hlt = T((Thr) => {
  "use strict";
  var abi = {},
    xhr = {};
  for (let t = 0; t < 256; t++) {
    let e = t.toString(16).toLowerCase();
    (e.length === 1 && (e = `0${e}`), (abi[t] = e), (xhr[e] = t));
  }
  function IDa(t) {
    if (t.length % 2 !== 0) throw new Error("Hex encoded strings must have an even number length");
    let e = new Uint8Array(t.length / 2);
    for (let r = 0; r < t.length; r += 2) {
      let n = t.slice(r, r + 2).toLowerCase();
      if (n in xhr) e[r / 2] = xhr[n];
      else throw new Error(`Cannot decode unrecognized sequence ${n} as hexadecimal`);
    }
    return e;
  }
  function RDa(t) {
    let e = "";
    for (let r = 0; r < t.byteLength; r++) e += abi[t[r]];
    return e;
  }
  Thr.fromHex = IDa;
  Thr.toHex = RDa;
});