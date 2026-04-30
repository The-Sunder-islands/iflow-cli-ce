/**
 * @module UYr
 * @category utils/oop
 * @label oop
 * @position 337 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (UYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var UYr = T((LLe) => {
  "use strict";
  Object.defineProperty(LLe, "__esModule", { value: !0 });
  LLe.defaultServiceName = void 0;
  function Vko() {
    return `unknown_service:${process.argv0}`;
  }
  LLe.defaultServiceName = Vko;
});
var $Yr = T((MLe) => {
  "use strict";
  Object.defineProperty(MLe, "__esModule", { value: !0 });
  MLe.defaultServiceName = void 0;
  var Wko = UYr();
  Object.defineProperty(MLe, "defaultServiceName", {
    enumerable: !0,
    get: function () {
      return Wko.defaultServiceName;
    },
  });
});