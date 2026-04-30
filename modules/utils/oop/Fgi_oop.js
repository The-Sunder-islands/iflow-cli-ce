/**
 * @module Fgi
 * @category utils/oop
 * @label oop
 * @position 1718 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Fgi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Fgi = T((chr) => {
  "use strict";
  Object.defineProperty(chr, "__esModule", { value: !0 });
  chr.createChecksumStream = KTa;
  var WTa = _$(),
    zTa = ahr(),
    YTa = Mgi();
  function KTa(t) {
    return typeof ReadableStream == "function" && (0, WTa.isReadableStream)(t.source)
      ? (0, YTa.createChecksumStream)(t)
      : new zTa.ChecksumStream(t);
  }
});