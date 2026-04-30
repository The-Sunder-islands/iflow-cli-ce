/**
 * @module PVr
 * @category telemetry/resource
 * @label resource
 * @position 215 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (PVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var PVr = T((NPe) => {
  "use strict";
  Object.defineProperty(NPe, "__esModule", { value: !0 });
  NPe.hostDetector = void 0;
  var ECt = bge(),
    NVr = Ae("os"),
    sDo = OVr(),
    aDo = _Ct(),
    vCt = class {
      detect(e) {
        return {
          attributes: {
            [ECt.ATTR_HOST_NAME]: (0, NVr.hostname)(),
            [ECt.ATTR_HOST_ARCH]: (0, aDo.normalizeArch)((0, NVr.arch)()),
            [ECt.ATTR_HOST_ID]: (0, sDo.getMachineId)(),
          },
        };
      }
    };
  NPe.hostDetector = new vCt();
});