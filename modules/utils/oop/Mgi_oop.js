/**
 * @module Mgi
 * @category utils/oop
 * @label oop
 * @position 1717 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mgi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mgi = T((Llt) => {
  "use strict";
  Object.defineProperty(Llt, "__esModule", { value: !0 });
  Llt.createChecksumStream = void 0;
  var GTa = p3(),
    qTa = _$(),
    HTa = Lgi(),
    VTa = ({ expectedChecksum: t, checksum: e, source: r, checksumSourceLocation: n, base64Encoder: o }) => {
      if (!(0, qTa.isReadableStream)(r))
        throw new Error(`@smithy/util-stream: unsupported source type ${r?.constructor?.name ?? r} in ChecksumStream.`);
      let s = o ?? GTa.toBase64;
      if (typeof TransformStream != "function")
        throw new Error(
          "@smithy/util-stream: unable to instantiate ChecksumStream because API unavailable: ReadableStream/TransformStream.",
        );
      let a = new TransformStream({
        start() {},
        async transform(c, m) {
          (e.update(c), m.enqueue(c));
        },
        async flush(c) {
          let m = await e.digest(),
            d = s(m);
          if (t !== d) {
            let f = new Error(`Checksum mismatch: expected "${t}" but received "${d}" in response header "${n}".`);
            c.error(f);
          } else c.terminate();
        },
      });
      r.pipeThrough(a);
      let u = a.readable;
      return (Object.setPrototypeOf(u, HTa.ChecksumStream.prototype), u);
    };
  Llt.createChecksumStream = VTa;
});