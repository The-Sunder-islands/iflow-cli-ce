/**
 * @module Rgi
 * @category utils/oop
 * @label oop
 * @position 1711 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rgi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rgi = T((klt) => {
  "use strict";
  Object.defineProperty(klt, "__esModule", { value: !0 });
  klt.fromBase64 = void 0;
  var RTa = Cme(),
    kTa = /^[A-Za-z0-9+/]*={0,2}$/,
    OTa = (t) => {
      if ((t.length * 3) % 4 !== 0) throw new TypeError("Incorrect padding on base64 string.");
      if (!kTa.exec(t)) throw new TypeError("Invalid base64 string.");
      let e = (0, RTa.fromString)(t, "base64");
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    };
  klt.fromBase64 = OTa;
});