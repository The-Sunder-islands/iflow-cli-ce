/**
 * @module cYr
 * @category telemetry/resource
 * @label resource
 * @position 309 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cYr = T((dLe) => {
  "use strict";
  Object.defineProperty(dLe, "__esModule", { value: !0 });
  dLe.hostDetector = void 0;
  var U4t = Rge(),
    uYr = Ae("os"),
    eko = aYr(),
    tko = F4t(),
    $4t = class {
      detect(e) {
        return {
          attributes: {
            [U4t.ATTR_HOST_NAME]: (0, uYr.hostname)(),
            [U4t.ATTR_HOST_ARCH]: (0, tko.normalizeArch)((0, uYr.arch)()),
            [U4t.ATTR_HOST_ID]: (0, eko.getMachineId)(),
          },
        };
      }
    };
  dLe.hostDetector = new $4t();
});