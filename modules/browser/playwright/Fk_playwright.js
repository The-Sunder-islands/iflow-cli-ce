/**
 * @module Fk
 * @category browser/playwright
 * @label playwright
 * @position 993 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fk) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fk = T((D6) => {
  "use strict";
  D6.base64 = !0;
  D6.array = !0;
  D6.string = !0;
  D6.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u";
  D6.nodebuffer = typeof Buffer < "u";
  D6.uint8array = typeof Uint8Array < "u";
  if (typeof ArrayBuffer > "u") D6.blob = !1;
  else {
    FHt = new ArrayBuffer(0);
    try {
      D6.blob = new Blob([FHt], { type: "application/zip" }).size === 0;
    } catch {
      try {
        ((gEn = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder),
          (UHt = new gEn()),
          UHt.append(FHt),
          (D6.blob = UHt.getBlob("application/zip").size === 0));
      } catch {
        D6.blob = !1;
      }
    }
  }
  var FHt, gEn, UHt;
  try {
    D6.nodestream = !!MHt().Readable;
  } catch {
    D6.nodestream = !1;
  }
});