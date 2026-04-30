/**
 * @module Lin
 * @category telemetry/resource
 * @label resource
 * @position 614 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Lin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Lin = T((Uje) => {
  "use strict";
  Object.defineProperty(Uje, "__esModule", { value: !0 });
  Uje.hostDetector = void 0;
  var V7t = uAe(),
    Bin = Ae("os"),
    CYo = Pin(),
    SYo = H7t(),
    W7t = class {
      detect(e) {
        return {
          attributes: {
            [V7t.ATTR_HOST_NAME]: (0, Bin.hostname)(),
            [V7t.ATTR_HOST_ARCH]: (0, SYo.normalizeArch)((0, Bin.arch)()),
            [V7t.ATTR_HOST_ID]: (0, CYo.getMachineId)(),
          },
        };
      }
    };
  Uje.hostDetector = new W7t();
});