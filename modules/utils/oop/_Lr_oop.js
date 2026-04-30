/**
 * @module _Lr
 * @category utils/oop
 * @label oop
 * @position 129 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (_Lr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var _Lr = T((bx) => {
  "use strict";
  Object.defineProperty(bx, "__esModule", { value: !0 });
  bx.getStringListFromEnv = bx.getBooleanFromEnv = bx.getStringFromEnv = bx.getNumberFromEnv = void 0;
  var bLr = (Zt(), bt(cr)),
    ALr = Ae("util");
  function K2o(t) {
    let e = process.env[t];
    if (e == null || e.trim() === "") return;
    let r = Number(e);
    if (isNaN(r)) {
      bLr.diag.warn(`Unknown value ${(0, ALr.inspect)(e)} for ${t}, expected a number, using defaults`);
      return;
    }
    return r;
  }
  bx.getNumberFromEnv = K2o;
  function yLr(t) {
    let e = process.env[t];
    if (!(e == null || e.trim() === "")) return e;
  }
  bx.getStringFromEnv = yLr;
  function J2o(t) {
    let e = process.env[t]?.trim().toLowerCase();
    return e == null || e === ""
      ? !1
      : e === "true"
        ? !0
        : (e === "false" ||
            bLr.diag.warn(
              `Unknown value ${(0, ALr.inspect)(e)} for ${t}, expected 'true' or 'false', falling back to 'false' (default)`,
            ),
          !1);
  }
  bx.getBooleanFromEnv = J2o;
  function X2o(t) {
    return yLr(t)
      ?.split(",")
      .map((e) => e.trim())
      .filter((e) => e !== "");
  }
  bx.getStringListFromEnv = X2o;
});