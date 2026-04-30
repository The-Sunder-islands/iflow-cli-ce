/**
 * @module cKr
 * @category utils/oop
 * @label oop
 * @position 357 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (cKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var cKr = T((Ux) => {
  "use strict";
  Object.defineProperty(Ux, "__esModule", { value: !0 });
  Ux.serviceInstanceIdDetector = Ux.processDetector = Ux.osDetector = Ux.hostDetector = void 0;
  var eMe = uKr();
  Object.defineProperty(Ux, "hostDetector", {
    enumerable: !0,
    get: function () {
      return eMe.hostDetector;
    },
  });
  Object.defineProperty(Ux, "osDetector", {
    enumerable: !0,
    get: function () {
      return eMe.osDetector;
    },
  });
  Object.defineProperty(Ux, "processDetector", {
    enumerable: !0,
    get: function () {
      return eMe.processDetector;
    },
  });
  Object.defineProperty(Ux, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return eMe.serviceInstanceIdDetector;
    },
  });
});