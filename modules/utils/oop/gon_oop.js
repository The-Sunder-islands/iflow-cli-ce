/**
 * @module gon
 * @category utils/oop
 * @label oop
 * @position 641 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gon = T((fT) => {
  "use strict";
  Object.defineProperty(fT, "__esModule", { value: !0 });
  fT.getStringListFromEnv = fT.getBooleanFromEnv = fT.getStringFromEnv = fT.getNumberFromEnv = void 0;
  var fon = (Zt(), bt(cr)),
    pon = Ae("util");
  function gKo(t) {
    let e = process.env[t];
    if (e == null || e.trim() === "") return;
    let r = Number(e);
    if (isNaN(r)) {
      fon.diag.warn(`Unknown value ${(0, pon.inspect)(e)} for ${t}, expected a number, using defaults`);
      return;
    }
    return r;
  }
  fT.getNumberFromEnv = gKo;
  function hon(t) {
    let e = process.env[t];
    if (!(e == null || e.trim() === "")) return e;
  }
  fT.getStringFromEnv = hon;
  function bKo(t) {
    let e = process.env[t]?.trim().toLowerCase();
    return e == null || e === ""
      ? !1
      : e === "true"
        ? !0
        : (e === "false" ||
            fon.diag.warn(
              `Unknown value ${(0, pon.inspect)(e)} for ${t}, expected 'true' or 'false', falling back to 'false' (default)`,
            ),
          !1);
  }
  fT.getBooleanFromEnv = bKo;
  function AKo(t) {
    return hon(t)
      ?.split(",")
      .map((e) => e.trim())
      .filter((e) => e !== "");
  }
  fT.getStringListFromEnv = AKo;
});