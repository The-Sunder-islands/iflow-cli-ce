/**
 * @module j6e
 * @category unknown
 * @label unknown
 * @position 995 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (j6e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var j6e = T((n3c, bEn) => {
  "use strict";
  bEn.exports = {
    isNode: typeof Buffer < "u",
    newBufferFrom: function (t, e) {
      if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(t, e);
      if (typeof t == "number") throw new Error('The "data" argument must not be a number');
      return new Buffer(t, e);
    },
    allocBuffer: function (t) {
      if (Buffer.alloc) return Buffer.alloc(t);
      var e = new Buffer(t);
      return (e.fill(0), e);
    },
    isBuffer: function (t) {
      return Buffer.isBuffer(t);
    },
    isStream: function (t) {
      return t && typeof t.on == "function" && typeof t.pause == "function" && typeof t.resume == "function";
    },
  };
});