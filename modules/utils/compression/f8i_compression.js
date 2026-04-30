/**
 * @module f8i
 * @category utils/compression
 * @label compression
 * @position 1751 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (f8i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var f8i = T((imt) => {
  "use strict";
  Object.defineProperty(imt, "__esModule", { value: !0 });
  imt.AwsCrc32c = void 0;
  var m8i = (rI(), bt(tI)),
    Tgr = Gme(),
    d8i = Dgr(),
    CRa = (function () {
      function t() {
        this.crc32c = new d8i.Crc32c();
      }
      return (
        (t.prototype.update = function (e) {
          (0, Tgr.isEmptyData)(e) || this.crc32c.update((0, Tgr.convertToBuffer)(e));
        }),
        (t.prototype.digest = function () {
          return m8i.__awaiter(this, void 0, void 0, function () {
            return m8i.__generator(this, function (e) {
              return [2, (0, Tgr.numToUint8)(this.crc32c.digest())];
            });
          });
        }),
        (t.prototype.reset = function () {
          this.crc32c = new d8i.Crc32c();
        }),
        t
      );
    })();
  imt.AwsCrc32c = CRa;
});