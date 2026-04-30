/**
 * @module cde
 * @category utils/crypto
 * @label crypto
 * @position 1798 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cde) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cde = T((K_i) => {
  "use strict";
  var CAr = Cme(),
    uLa = ep(),
    cLa = Ae("buffer"),
    z_i = Ae("crypto"),
    SAr = class {
      algorithmIdentifier;
      secret;
      hash;
      constructor(e, r) {
        ((this.algorithmIdentifier = e), (this.secret = r), this.reset());
      }
      update(e, r) {
        this.hash.update(uLa.toUint8Array(Y_i(e, r)));
      }
      digest() {
        return Promise.resolve(this.hash.digest());
      }
      reset() {
        this.hash = this.secret
          ? z_i.createHmac(this.algorithmIdentifier, Y_i(this.secret))
          : z_i.createHash(this.algorithmIdentifier);
      }
    };
  function Y_i(t, e) {
    return cLa.Buffer.isBuffer(t)
      ? t
      : typeof t == "string"
        ? CAr.fromString(t, e)
        : ArrayBuffer.isView(t)
          ? CAr.fromArrayBuffer(t.buffer, t.byteOffset, t.byteLength)
          : CAr.fromArrayBuffer(t);
  }
  K_i.Hash = SAr;
});