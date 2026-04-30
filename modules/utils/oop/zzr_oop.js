/**
 * @module zzr
 * @category utils/oop
 * @label oop
 * @position 296 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zzr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zzr = T((Zte) => {
  "use strict";
  Object.defineProperty(Zte, "__esModule", { value: !0 });
  Zte.identity = Zte.isPromiseLike = void 0;
  var CRo = (t) => t !== null && typeof t == "object" && typeof t.then == "function";
  Zte.isPromiseLike = CRo;
  function SRo(t) {
    return t;
  }
  Zte.identity = SRo;
});