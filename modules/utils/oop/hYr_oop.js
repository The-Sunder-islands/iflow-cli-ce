/**
 * @module hYr
 * @category utils/oop
 * @label oop
 * @position 313 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (hYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var hYr = T((Bx) => {
  "use strict";
  Object.defineProperty(Bx, "__esModule", { value: !0 });
  Bx.serviceInstanceIdDetector = Bx.processDetector = Bx.osDetector = Bx.hostDetector = void 0;
  var ako = cYr();
  Object.defineProperty(Bx, "hostDetector", {
    enumerable: !0,
    get: function () {
      return ako.hostDetector;
    },
  });
  var uko = dYr();
  Object.defineProperty(Bx, "osDetector", {
    enumerable: !0,
    get: function () {
      return uko.osDetector;
    },
  });
  var cko = fYr();
  Object.defineProperty(Bx, "processDetector", {
    enumerable: !0,
    get: function () {
      return cko.processDetector;
    },
  });
  var lko = pYr();
  Object.defineProperty(Bx, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return lko.serviceInstanceIdDetector;
    },
  });
});