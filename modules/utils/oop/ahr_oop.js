/**
 * @module ahr
 * @category utils/oop
 * @label oop
 * @position 1715 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ahr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ahr = T((Plt) => {
  "use strict";
  Object.defineProperty(Plt, "__esModule", { value: !0 });
  Plt.ChecksumStream = void 0;
  var FTa = p3(),
    UTa = Ae("stream"),
    shr = class extends UTa.Duplex {
      expectedChecksum;
      checksumSourceLocation;
      checksum;
      source;
      base64Encoder;
      constructor({ expectedChecksum: e, checksum: r, source: n, checksumSourceLocation: o, base64Encoder: s }) {
        if ((super(), typeof n.pipe == "function")) this.source = n;
        else
          throw new Error(
            `@smithy/util-stream: unsupported source type ${n?.constructor?.name ?? n} in ChecksumStream.`,
          );
        ((this.base64Encoder = s ?? FTa.toBase64),
          (this.expectedChecksum = e),
          (this.checksum = r),
          (this.checksumSourceLocation = o),
          this.source.pipe(this));
      }
      _read(e) {}
      _write(e, r, n) {
        try {
          (this.checksum.update(e), this.push(e));
        } catch (o) {
          return n(o);
        }
        return n();
      }
      async _final(e) {
        try {
          let r = await this.checksum.digest(),
            n = this.base64Encoder(r);
          if (this.expectedChecksum !== n)
            return e(
              new Error(
                `Checksum mismatch: expected "${this.expectedChecksum}" but received "${n}" in response header "${this.checksumSourceLocation}".`,
              ),
            );
        } catch (r) {
          return e(r);
        }
        return (this.push(null), e());
      }
    };
  Plt.ChecksumStream = shr;
});
var _$ = T((Sme) => {
  "use strict";
  Object.defineProperty(Sme, "__esModule", { value: !0 });
  Sme.isBlob = Sme.isReadableStream = void 0;
  var $Ta = (t) =>
    typeof ReadableStream == "function" &&
    (t?.constructor?.name === ReadableStream.name || t instanceof ReadableStream);
  Sme.isReadableStream = $Ta;
  var jTa = (t) => typeof Blob == "function" && (t?.constructor?.name === Blob.name || t instanceof Blob);
  Sme.isBlob = jTa;
});