/**
 * @module Zvt
 * @category utils/oop
 * @label oop
 * @position 182 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Zvt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Zvt = T((X5) => {
  "use strict";
  Object.defineProperty(X5, "__esModule", { value: !0 });
  X5.getSignificand =
    X5.getNormalBase2 =
    X5.MIN_VALUE =
    X5.MAX_NORMAL_EXPONENT =
    X5.MIN_NORMAL_EXPONENT =
    X5.SIGNIFICAND_WIDTH =
      void 0;
  X5.SIGNIFICAND_WIDTH = 52;
  var Kxo = 2146435072,
    Jxo = 1048575,
    Xvt = 1023;
  X5.MIN_NORMAL_EXPONENT = -Xvt + 1;
  X5.MAX_NORMAL_EXPONENT = Xvt;
  X5.MIN_VALUE = Math.pow(2, -1022);
  function Xxo(t) {
    let e = new DataView(new ArrayBuffer(8));
    return (e.setFloat64(0, t), ((e.getUint32(0) & Kxo) >> 20) - Xvt);
  }
  X5.getNormalBase2 = Xxo;
  function Zxo(t) {
    let e = new DataView(new ArrayBuffer(8));
    e.setFloat64(0, t);
    let r = e.getUint32(0),
      n = e.getUint32(4);
    return (r & Jxo) * Math.pow(2, 32) + n;
  }
  X5.getSignificand = Zxo;
});