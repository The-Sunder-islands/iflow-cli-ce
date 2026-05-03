/**
 * @module bno
 * @category app/core
 * @label iflow-core
 * @position 1979 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (bno) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends
 * Features: esbuild module exports: bno
 * === End semantic info ===
 */


var bno = T((QIl, gno) => {
  "use strict";
  var hno = xAt(),
    Sbu = global.Date,
    Evr = class extends Sbu {
      constructor(e) {
        (super(e), (this.isDate = !0));
      }
      toISOString() {
        return `${this.getUTCFullYear()}-${hno(2, this.getUTCMonth() + 1)}-${hno(2, this.getUTCDate())}`;
      }
    };
  gno.exports = (t) => {
    let e = new Evr(t);
    if (isNaN(e)) throw new TypeError("Invalid Datetime");
    return e;
  };
});