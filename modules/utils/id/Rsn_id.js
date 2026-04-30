/**
 * @module Rsn
 * @category utils/id
 * @label id
 * @position 685 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Rsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Rsn = T((HQe) => {
  "use strict";
  Object.defineProperty(HQe, "__esModule", { value: !0 });
  HQe.serviceInstanceIdDetector = void 0;
  var _Xo = bAe(),
    EXo = Ae("crypto"),
    LRt = class {
      detect(e) {
        return { attributes: { [_Xo.ATTR_SERVICE_INSTANCE_ID]: (0, EXo.randomUUID)() } };
      }
    };
  HQe.serviceInstanceIdDetector = new LRt();
});