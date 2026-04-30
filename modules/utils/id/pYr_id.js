/**
 * @module pYr
 * @category utils/id
 * @label id
 * @position 312 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (pYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var pYr = T((hLe) => {
  "use strict";
  Object.defineProperty(hLe, "__esModule", { value: !0 });
  hLe.serviceInstanceIdDetector = void 0;
  var oko = Rge(),
    sko = Ae("crypto"),
    G4t = class {
      detect(e) {
        return { attributes: { [oko.ATTR_SERVICE_INSTANCE_ID]: (0, sko.randomUUID)() } };
      }
    };
  hLe.serviceInstanceIdDetector = new G4t();
});