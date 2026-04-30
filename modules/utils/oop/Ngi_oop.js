/**
 * @module Ngi
 * @category utils/oop
 * @label oop
 * @position 1713 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Ngi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Ngi = T((Nlt) => {
  "use strict";
  Object.defineProperty(Nlt, "__esModule", { value: !0 });
  Nlt.toBase64 = void 0;
  var BTa = Cme(),
    LTa = ep(),
    MTa = (t) => {
      let e;
      if (
        (typeof t == "string" ? (e = (0, LTa.fromUtf8)(t)) : (e = t),
        typeof e != "object" || typeof e.byteOffset != "number" || typeof e.byteLength != "number")
      )
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
      return (0, BTa.fromArrayBuffer)(e.buffer, e.byteOffset, e.byteLength).toString("base64");
    };
  Nlt.toBase64 = MTa;
});