/**
 * @module BQe
 * @category utils/oop
 * @label oop
 * @position 674 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (BQe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var BQe = T((PQe) => {
  "use strict";
  Object.defineProperty(PQe, "__esModule", { value: !0 });
  PQe.execAsync = void 0;
  var YJo = Ae("child_process"),
    KJo = Ae("util");
  PQe.execAsync = KJo.promisify(YJo.exec);
});