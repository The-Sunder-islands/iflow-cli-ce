/**
 * @module xKr
 * @category utils/oop
 * @label oop
 * @position 372 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xKr = T((AMe) => {
  "use strict";
  Object.defineProperty(AMe, "__esModule", { value: !0 });
  AMe.RandomIdGenerator = void 0;
  var JOo = 8,
    wKr = 16,
    BSt = class {
      generateTraceId = SKr(wKr);
      generateSpanId = SKr(JOo);
    };
  AMe.RandomIdGenerator = BSt;
  var bMe = Buffer.allocUnsafe(wKr);
  function SKr(t) {
    return function () {
      for (let r = 0; r < t / 4; r++) bMe.writeUInt32BE((Math.random() * 2 ** 32) >>> 0, r * 4);
      for (let r = 0; r < t && !(bMe[r] > 0); r++) r === t - 1 && (bMe[t - 1] = 1);
      return bMe.toString("hex", 0, t);
    };
  }
});