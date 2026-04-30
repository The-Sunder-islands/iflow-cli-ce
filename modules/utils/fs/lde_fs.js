/**
 * @module lde
 * @category utils/fs
 * @label fs
 * @position 1799 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (lde) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var lde = T((J_i) => {
  "use strict";
  var wAr = Ae("node:fs"),
    lLa = (t) => {
      if (!t) return 0;
      if (typeof t == "string") return Buffer.byteLength(t);
      if (typeof t.byteLength == "number") return t.byteLength;
      if (typeof t.size == "number") return t.size;
      if (typeof t.start == "number" && typeof t.end == "number") return t.end + 1 - t.start;
      if (t instanceof wAr.ReadStream) {
        if (t.path != null) return wAr.lstatSync(t.path).size;
        if (typeof t.fd == "number") return wAr.fstatSync(t.fd).size;
      }
      throw new Error(`Body Length computation failed for ${t}`);
    };
  J_i.calculateBodyLength = lLa;
});