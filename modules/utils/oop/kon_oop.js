/**
 * @module kon
 * @category utils/oop
 * @label oop
 * @position 653 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (kon) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var kon = T((Ene) => {
  "use strict";
  Object.defineProperty(Ene, "__esModule", { value: !0 });
  Ene.validateValue = Ene.validateKey = void 0;
  var gRt = "[_0-9a-z-*/]",
    LKo = `[a-z]${gRt}{0,255}`,
    MKo = `[a-z0-9]${gRt}{0,240}@[a-z]${gRt}{0,13}`,
    FKo = new RegExp(`^(?:${LKo}|${MKo})$`),
    UKo = /^[ -~]{0,255}[!-~]$/,
    $Ko = /,|=/;
  function jKo(t) {
    return FKo.test(t);
  }
  Ene.validateKey = jKo;
  function QKo(t) {
    return UKo.test(t) && !$Ko.test(t);
  }
  Ene.validateValue = QKo;
});