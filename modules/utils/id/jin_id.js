/**
 * @module jin
 * @category utils/id
 * @label id
 * @position 616 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jin = T((Qje) => {
  "use strict";
  Object.defineProperty(Qje, "__esModule", { value: !0 });
  Qje.serviceInstanceIdDetector = void 0;
  var DYo = uAe(),
    IYo = Ae("crypto"),
    K7t = class {
      detect(e) {
        return { attributes: { [DYo.ATTR_SERVICE_INSTANCE_ID]: (0, IYo.randomUUID)() } };
      }
    };
  Qje.serviceInstanceIdDetector = new K7t();
});