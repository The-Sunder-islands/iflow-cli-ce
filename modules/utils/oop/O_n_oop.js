/**
 * @module O_n
 * @category utils/oop
 * @label oop
 * @position 981 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (O_n) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var O_n = T((Ghc, bHt) => {
  typeof Object.create == "function"
    ? (bHt.exports = function (e, r) {
        r &&
          ((e.super_ = r),
          (e.prototype = Object.create(r.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })));
      })
    : (bHt.exports = function (e, r) {
        if (r) {
          e.super_ = r;
          var n = function () {};
          ((n.prototype = r.prototype), (e.prototype = new n()), (e.prototype.constructor = e));
        }
      });
});