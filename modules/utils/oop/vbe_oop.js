/**
 * @module vbe
 * @category utils/oop
 * @label oop
 * @position 490 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vbe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vbe = T((KTt) => {
  "use strict";
  Object.defineProperty(KTt, "__esModule", { value: !0 });
  KTt.restrictControlPlaneStatusCode = I$o;
  var tT = La(),
    D$o = [
      tT.Status.OK,
      tT.Status.INVALID_ARGUMENT,
      tT.Status.NOT_FOUND,
      tT.Status.ALREADY_EXISTS,
      tT.Status.FAILED_PRECONDITION,
      tT.Status.ABORTED,
      tT.Status.OUT_OF_RANGE,
      tT.Status.DATA_LOSS,
    ];
  function I$o(t, e) {
    return D$o.includes(t)
      ? { code: tT.Status.INTERNAL, details: `Invalid status from control plane: ${t} ${tT.Status[t]} ${e}` }
      : { code: t, details: e };
  }
});