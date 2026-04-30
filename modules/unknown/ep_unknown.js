/**
 * @module ep
 * @category unknown
 * @label unknown
 * @position 1712 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ep) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ep = T((Olt) => {
  "use strict";
  var kgi = Cme(),
    Ogi = (t) => {
      let e = kgi.fromString(t, "utf8");
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    },
    NTa = (t) =>
      typeof t == "string"
        ? Ogi(t)
        : ArrayBuffer.isView(t)
          ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength / Uint8Array.BYTES_PER_ELEMENT)
          : new Uint8Array(t),
    PTa = (t) => {
      if (typeof t == "string") return t;
      if (typeof t != "object" || typeof t.byteOffset != "number" || typeof t.byteLength != "number")
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
      return kgi.fromArrayBuffer(t.buffer, t.byteOffset, t.byteLength).toString("utf8");
    };
  Olt.fromUtf8 = Ogi;
  Olt.toUint8Array = NTa;
  Olt.toUtf8 = PTa;
});