/**
 * @module a8i
 * @category utils/oop
 * @label oop
 * @position 1746 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (a8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var a8i = T((emt) => {
  "use strict";
  Object.defineProperty(emt, "__esModule", { value: !0 });
  emt.convertToBuffer = void 0;
  var fRa = s8i(),
    pRa =
      typeof Buffer < "u" && Buffer.from
        ? function (t) {
            return Buffer.from(t, "utf8");
          }
        : fRa.fromUtf8;
  function hRa(t) {
    return t instanceof Uint8Array
      ? t
      : typeof t == "string"
        ? pRa(t)
        : ArrayBuffer.isView(t)
          ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT)
          : new Uint8Array(t);
  }
  emt.convertToBuffer = hRa;
});