/**
 * @module MVr
 * @category utils/oop
 * @label oop
 * @position 216 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (MVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var MVr = T((PPe) => {
  "use strict";
  Object.defineProperty(PPe, "__esModule", { value: !0 });
  PPe.osDetector = void 0;
  var BVr = bge(),
    LVr = Ae("os"),
    uDo = _Ct(),
    CCt = class {
      detect(e) {
        return {
          attributes: {
            [BVr.ATTR_OS_TYPE]: (0, uDo.normalizeType)((0, LVr.platform)()),
            [BVr.ATTR_OS_VERSION]: (0, LVr.release)(),
          },
        };
      }
    };
  PPe.osDetector = new CCt();
});