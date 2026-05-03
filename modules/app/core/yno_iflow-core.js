/**
 * @module yno
 * @category app/core
 * @label iflow-core
 * @position 1980 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (yno) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 *
 * === Auto-analyzed semantic info ===
 * Classes: class extends
 * Features: esbuild module exports: yno
 * === End semantic info ===
 */


var yno = T((GIl, Ano) => {
  "use strict";
  var TAt = xAt(),
    vvr = class extends Date {
      constructor(e) {
        (super(`0000-01-01T${e}Z`), (this.isTime = !0));
      }
      toISOString() {
        return `${TAt(2, this.getUTCHours())}:${TAt(2, this.getUTCMinutes())}:${TAt(2, this.getUTCSeconds())}.${TAt(3, this.getUTCMilliseconds())}`;
      }
    };
  Ano.exports = (t) => {
    let e = new vvr(t);
    if (isNaN(e)) throw new TypeError("Invalid Datetime");
    return e;
  };
});