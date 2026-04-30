/**
 * @module ksn
 * @category utils/oop
 * @label oop
 * @position 686 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (ksn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var ksn = T((hT) => {
  "use strict";
  Object.defineProperty(hT, "__esModule", { value: !0 });
  hT.serviceInstanceIdDetector = hT.processDetector = hT.osDetector = hT.hostDetector = void 0;
  var vXo = wsn();
  Object.defineProperty(hT, "hostDetector", {
    enumerable: !0,
    get: function () {
      return vXo.hostDetector;
    },
  });
  var CXo = Dsn();
  Object.defineProperty(hT, "osDetector", {
    enumerable: !0,
    get: function () {
      return CXo.osDetector;
    },
  });
  var SXo = Isn();
  Object.defineProperty(hT, "processDetector", {
    enumerable: !0,
    get: function () {
      return SXo.processDetector;
    },
  });
  var wXo = Rsn();
  Object.defineProperty(hT, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return wXo.serviceInstanceIdDetector;
    },
  });
});