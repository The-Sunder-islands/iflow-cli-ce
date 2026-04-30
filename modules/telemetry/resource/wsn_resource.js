/**
 * @module wsn
 * @category telemetry/resource
 * @label resource
 * @position 682 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (wsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var wsn = T((QQe) => {
  "use strict";
  Object.defineProperty(QQe, "__esModule", { value: !0 });
  QQe.hostDetector = void 0;
  var ORt = bAe(),
    Ssn = Ae("os"),
    hXo = Csn(),
    gXo = kRt(),
    NRt = class {
      detect(e) {
        return {
          attributes: {
            [ORt.ATTR_HOST_NAME]: (0, Ssn.hostname)(),
            [ORt.ATTR_HOST_ARCH]: (0, gXo.normalizeArch)((0, Ssn.arch)()),
            [ORt.ATTR_HOST_ID]: (0, hXo.getMachineId)(),
          },
        };
      }
    };
  QQe.hostDetector = new NRt();
});