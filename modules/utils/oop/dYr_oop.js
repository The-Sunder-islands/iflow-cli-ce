/**
 * @module dYr
 * @category utils/oop
 * @label oop
 * @position 310 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (dYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var dYr = T((fLe) => {
  "use strict";
  Object.defineProperty(fLe, "__esModule", { value: !0 });
  fLe.osDetector = void 0;
  var lYr = Rge(),
    mYr = Ae("os"),
    rko = F4t(),
    j4t = class {
      detect(e) {
        return {
          attributes: {
            [lYr.ATTR_OS_TYPE]: (0, rko.normalizeType)((0, mYr.platform)()),
            [lYr.ATTR_OS_VERSION]: (0, mYr.release)(),
          },
        };
      }
    };
  fLe.osDetector = new j4t();
});