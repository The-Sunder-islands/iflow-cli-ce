/**
 * @module XKr
 * @category utils/oop
 * @label oop
 * @position 394 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (XKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var XKr = T((qMe) => {
  "use strict";
  Object.defineProperty(qMe, "__esModule", { value: !0 });
  qMe.RandomIdGenerator = void 0;
  var LNo = 8,
    JKr = 16,
    uwt = class {
      generateTraceId = KKr(JKr);
      generateSpanId = KKr(LNo);
    };
  qMe.RandomIdGenerator = uwt;
  var GMe = Buffer.allocUnsafe(JKr);
  function KKr(t) {
    return function () {
      for (let r = 0; r < t / 4; r++) GMe.writeUInt32BE((Math.random() * 2 ** 32) >>> 0, r * 4);
      for (let r = 0; r < t && !(GMe[r] > 0); r++) r === t - 1 && (GMe[t - 1] = 1);
      return GMe.toString("hex", 0, t);
    };
  }
});