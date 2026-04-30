/**
 * @module Rnn
 * @category utils/oop
 * @label oop
 * @position 577 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rnn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rnn = T((aT) => {
  "use strict";
  Object.defineProperty(aT, "__esModule", { value: !0 });
  aT.getStringListFromEnv = aT.getBooleanFromEnv = aT.getStringFromEnv = aT.getNumberFromEnv = void 0;
  var Tnn = (Zt(), bt(cr)),
    Dnn = Ae("util");
  function TWo(t) {
    let e = process.env[t];
    if (e == null || e.trim() === "") return;
    let r = Number(e);
    if (isNaN(r)) {
      Tnn.diag.warn(`Unknown value ${(0, Dnn.inspect)(e)} for ${t}, expected a number, using defaults`);
      return;
    }
    return r;
  }
  aT.getNumberFromEnv = TWo;
  function Inn(t) {
    let e = process.env[t];
    if (!(e == null || e.trim() === "")) return e;
  }
  aT.getStringFromEnv = Inn;
  function DWo(t) {
    let e = process.env[t]?.trim().toLowerCase();
    return e == null || e === ""
      ? !1
      : e === "true"
        ? !0
        : (e === "false" ||
            Tnn.diag.warn(
              `Unknown value ${(0, Dnn.inspect)(e)} for ${t}, expected 'true' or 'false', falling back to 'false' (default)`,
            ),
          !1);
  }
  aT.getBooleanFromEnv = DWo;
  function IWo(t) {
    return Inn(t)
      ?.split(",")
      .map((e) => e.trim())
      .filter((e) => e !== "");
  }
  aT.getStringListFromEnv = IWo;
});