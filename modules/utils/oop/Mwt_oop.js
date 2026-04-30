/**
 * @module Mwt
 * @category utils/oop
 * @label oop
 * @position 416 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Mwt) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Mwt = T((LB) => {
  "use strict";
  Object.defineProperty(LB, "__esModule", { value: !0 });
  LB.isWrapped = LB.safeExecuteInTheMiddleAsync = LB.safeExecuteInTheMiddle = void 0;
  function sBo(t, e, r) {
    let n, o;
    try {
      o = t();
    } catch (s) {
      n = s;
    } finally {
      if ((e(n, o), n && !r)) throw n;
      return o;
    }
  }
  LB.safeExecuteInTheMiddle = sBo;
  async function aBo(t, e, r) {
    let n, o;
    try {
      o = await t();
    } catch (s) {
      n = s;
    } finally {
      if ((e(n, o), n && !r)) throw n;
      return o;
    }
  }
  LB.safeExecuteInTheMiddleAsync = aBo;
  function uBo(t) {
    return (
      typeof t == "function" &&
      typeof t.__original == "function" &&
      typeof t.__unwrap == "function" &&
      t.__wrapped === !0
    );
  }
  LB.isWrapped = uBo;
});