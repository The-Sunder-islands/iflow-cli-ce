/**
 * @module Oje
 * @category utils/oop
 * @label oop
 * @position 606 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Oje) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Oje = T((kje) => {
  "use strict";
  Object.defineProperty(kje, "__esModule", { value: !0 });
  kje.execAsync = void 0;
  var nYo = Ae("child_process"),
    iYo = Ae("util");
  kje.execAsync = iYo.promisify(nYo.exec);
});