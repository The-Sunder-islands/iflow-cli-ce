/**
 * @module gYr
 * @category utils/oop
 * @label oop
 * @position 314 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (gYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var gYr = T((Lx) => {
  "use strict";
  Object.defineProperty(Lx, "__esModule", { value: !0 });
  Lx.serviceInstanceIdDetector = Lx.processDetector = Lx.osDetector = Lx.hostDetector = void 0;
  var gLe = hYr();
  Object.defineProperty(Lx, "hostDetector", {
    enumerable: !0,
    get: function () {
      return gLe.hostDetector;
    },
  });
  Object.defineProperty(Lx, "osDetector", {
    enumerable: !0,
    get: function () {
      return gLe.osDetector;
    },
  });
  Object.defineProperty(Lx, "processDetector", {
    enumerable: !0,
    get: function () {
      return gLe.processDetector;
    },
  });
  Object.defineProperty(Lx, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return gLe.serviceInstanceIdDetector;
    },
  });
});