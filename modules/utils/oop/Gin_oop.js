/**
 * @module Gin
 * @category utils/oop
 * @label oop
 * @position 618 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Gin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Gin = T((lT) => {
  "use strict";
  Object.defineProperty(lT, "__esModule", { value: !0 });
  lT.serviceInstanceIdDetector = lT.processDetector = lT.osDetector = lT.hostDetector = void 0;
  var Gje = Qin();
  Object.defineProperty(lT, "hostDetector", {
    enumerable: !0,
    get: function () {
      return Gje.hostDetector;
    },
  });
  Object.defineProperty(lT, "osDetector", {
    enumerable: !0,
    get: function () {
      return Gje.osDetector;
    },
  });
  Object.defineProperty(lT, "processDetector", {
    enumerable: !0,
    get: function () {
      return Gje.processDetector;
    },
  });
  Object.defineProperty(lT, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return Gje.serviceInstanceIdDetector;
    },
  });
});