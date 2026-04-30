/**
 * @module ePe
 * @category utils/oop
 * @label oop
 * @position 183 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ePe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ePe = T((Ote) => {
  "use strict";
  Object.defineProperty(Ote, "__esModule", { value: !0 });
  Ote.nextGreaterSquare = Ote.ldexp = void 0;
  function eTo(t, e) {
    return t === 0 || t === Number.POSITIVE_INFINITY || t === Number.NEGATIVE_INFINITY || Number.isNaN(t)
      ? t
      : t * Math.pow(2, e);
  }
  Ote.ldexp = eTo;
  function tTo(t) {
    return (t--, (t |= t >> 1), (t |= t >> 2), (t |= t >> 4), (t |= t >> 8), (t |= t >> 16), t++, t);
  }
  Ote.nextGreaterSquare = tTo;
});