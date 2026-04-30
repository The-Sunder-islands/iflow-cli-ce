/**
 * @module Dsn
 * @category utils/oop
 * @label oop
 * @position 683 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Dsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Dsn = T((GQe) => {
  "use strict";
  Object.defineProperty(GQe, "__esModule", { value: !0 });
  GQe.osDetector = void 0;
  var xsn = bAe(),
    Tsn = Ae("os"),
    bXo = kRt(),
    PRt = class {
      detect(e) {
        return {
          attributes: {
            [xsn.ATTR_OS_TYPE]: (0, bXo.normalizeType)((0, Tsn.platform)()),
            [xsn.ATTR_OS_VERSION]: (0, Tsn.release)(),
          },
        };
      }
    };
  GQe.osDetector = new PRt();
});