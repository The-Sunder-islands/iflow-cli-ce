/**
 * @module A8i
 * @category utils/compression
 * @label compression
 * @position 1754 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (A8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var A8i = T((omt) => {
  "use strict";
  Object.defineProperty(omt, "__esModule", { value: !0 });
  omt.AwsCrc32 = void 0;
  var g8i = (rI(), bt(tI)),
    Ugr = Gme(),
    b8i = smt(),
    NRa = (function () {
      function t() {
        this.crc32 = new b8i.Crc32();
      }
      return (
        (t.prototype.update = function (e) {
          (0, Ugr.isEmptyData)(e) || this.crc32.update((0, Ugr.convertToBuffer)(e));
        }),
        (t.prototype.digest = function () {
          return g8i.__awaiter(this, void 0, void 0, function () {
            return g8i.__generator(this, function (e) {
              return [2, (0, Ugr.numToUint8)(this.crc32.digest())];
            });
          });
        }),
        (t.prototype.reset = function () {
          this.crc32 = new b8i.Crc32();
        }),
        t
      );
    })();
  omt.AwsCrc32 = NRa;
});