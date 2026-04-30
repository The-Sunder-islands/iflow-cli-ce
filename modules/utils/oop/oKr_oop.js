/**
 * @module oKr
 * @category utils/oop
 * @label oop
 * @position 353 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (oKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var oKr = T((JLe) => {
  "use strict";
  Object.defineProperty(JLe, "__esModule", { value: !0 });
  JLe.osDetector = void 0;
  var nKr = Pge(),
    iKr = Ae("os"),
    DOo = pSt(),
    bSt = class {
      detect(e) {
        return {
          attributes: {
            [nKr.ATTR_OS_TYPE]: (0, DOo.normalizeType)((0, iKr.platform)()),
            [nKr.ATTR_OS_VERSION]: (0, iKr.release)(),
          },
        };
      }
    };
  JLe.osDetector = new bSt();
});