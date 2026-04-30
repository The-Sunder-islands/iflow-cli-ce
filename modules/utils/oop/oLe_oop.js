/**
 * @module oLe
 * @category utils/oop
 * @label oop
 * @position 301 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oLe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oLe = T((iLe) => {
  "use strict";
  Object.defineProperty(iLe, "__esModule", { value: !0 });
  iLe.execAsync = void 0;
  var PRo = Ae("child_process"),
    BRo = Ae("util");
  iLe.execAsync = BRo.promisify(PRo.exec);
});