/**
 * @module aKr
 * @category utils/id
 * @label id
 * @position 355 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (aKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var aKr = T((ZLe) => {
  "use strict";
  Object.defineProperty(ZLe, "__esModule", { value: !0 });
  ZLe.serviceInstanceIdDetector = void 0;
  var kOo = Pge(),
    OOo = Ae("crypto"),
    ySt = class {
      detect(e) {
        return { attributes: { [kOo.ATTR_SERVICE_INSTANCE_ID]: (0, OOo.randomUUID)() } };
      }
    };
  ZLe.serviceInstanceIdDetector = new ySt();
});