/**
 * @module GLe
 * @category utils/oop
 * @label oop
 * @position 344 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GLe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GLe = T((QLe) => {
  "use strict";
  Object.defineProperty(QLe, "__esModule", { value: !0 });
  QLe.execAsync = void 0;
  var sOo = Ae("child_process"),
    aOo = Ae("util");
  QLe.execAsync = aOo.promisify(sOo.exec);
});