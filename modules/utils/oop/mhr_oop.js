/**
 * @module mhr
 * @category utils/oop
 * @label oop
 * @position 1719 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mhr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mhr = T((Mlt) => {
  "use strict";
  Object.defineProperty(Mlt, "__esModule", { value: !0 });
  Mlt.ByteArrayCollector = void 0;
  var lhr = class {
    allocByteArray;
    byteLength = 0;
    byteArrays = [];
    constructor(e) {
      this.allocByteArray = e;
    }
    push(e) {
      (this.byteArrays.push(e), (this.byteLength += e.byteLength));
    }
    flush() {
      if (this.byteArrays.length === 1) {
        let n = this.byteArrays[0];
        return (this.reset(), n);
      }
      let e = this.allocByteArray(this.byteLength),
        r = 0;
      for (let n = 0; n < this.byteArrays.length; ++n) {
        let o = this.byteArrays[n];
        (e.set(o, r), (r += o.byteLength));
      }
      return (this.reset(), e);
    }
    reset() {
      ((this.byteArrays = []), (this.byteLength = 0));
    }
  };
  Mlt.ByteArrayCollector = lhr;
});