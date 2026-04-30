/**
 * @module rKr
 * @category telemetry/resource
 * @label resource
 * @position 352 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (rKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var rKr = T((KLe) => {
  "use strict";
  Object.defineProperty(KLe, "__esModule", { value: !0 });
  KLe.hostDetector = void 0;
  var hSt = Pge(),
    tKr = Ae("os"),
    xOo = eKr(),
    TOo = pSt(),
    gSt = class {
      detect(e) {
        return {
          attributes: {
            [hSt.ATTR_HOST_NAME]: (0, tKr.hostname)(),
            [hSt.ATTR_HOST_ARCH]: (0, TOo.normalizeArch)((0, tKr.arch)()),
            [hSt.ATTR_HOST_ID]: (0, xOo.getMachineId)(),
          },
        };
      }
    };
  KLe.hostDetector = new gSt();
});