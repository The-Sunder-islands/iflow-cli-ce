/**
 * @module E8i
 * @category utils/compression
 * @label compression
 * @position 1756 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (E8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var E8i = T((amt) => {
  "use strict";
  Object.defineProperty(amt, "__esModule", { value: !0 });
  amt.getCrc32ChecksumAlgorithmFunction = void 0;
  var $Ra = (rI(), bt(tI)),
    jRa = smt(),
    QRa = Gme(),
    _8i = $Ra.__importStar(Ae("zlib")),
    $gr = class {
      checksum = 0;
      update(e) {
        this.checksum = _8i.crc32(e, this.checksum);
      }
      async digest() {
        return (0, QRa.numToUint8)(this.checksum);
      }
      reset() {
        this.checksum = 0;
      }
    },
    GRa = () => (typeof _8i.crc32 > "u" ? jRa.AwsCrc32 : $gr);
  amt.getCrc32ChecksumAlgorithmFunction = GRa;
});