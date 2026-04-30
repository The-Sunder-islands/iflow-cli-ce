/**
 * @module xPe
 * @category utils/oop
 * @label oop
 * @position 207 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xPe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xPe = T((wPe) => {
  "use strict";
  Object.defineProperty(wPe, "__esModule", { value: !0 });
  wPe.execAsync = void 0;
  var $To = Ae("child_process"),
    jTo = Ae("util");
  wPe.execAsync = jTo.promisify($To.exec);
});