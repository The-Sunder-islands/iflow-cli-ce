/**
 * @module pno
 * @category app/core
 * @label iflow-core
 * @position 1978 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pno) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pno = T((jIl, fno) => {
  "use strict";
  var Mfe = xAt(),
    _vr = class extends Date {
      constructor(e) {
        (super(e + "Z"), (this.isFloating = !0));
      }
      toISOString() {
        let e = `${this.getUTCFullYear()}-${Mfe(2, this.getUTCMonth() + 1)}-${Mfe(2, this.getUTCDate())}`,
          r = `${Mfe(2, this.getUTCHours())}:${Mfe(2, this.getUTCMinutes())}:${Mfe(2, this.getUTCSeconds())}.${Mfe(3, this.getUTCMilliseconds())}`;
        return `${e}T${r}`;
      }
    };
  fno.exports = (t) => {
    let e = new _vr(t);
    if (isNaN(e)) throw new TypeError("Invalid Datetime");
    return e;
  };
});