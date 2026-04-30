/**
 * @module GVr
 * @category utils/oop
 * @label oop
 * @position 221 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (GVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var GVr = T((Z5) => {
  "use strict";
  Object.defineProperty(Z5, "__esModule", { value: !0 });
  Z5.noopDetector =
    Z5.serviceInstanceIdDetector =
    Z5.processDetector =
    Z5.osDetector =
    Z5.hostDetector =
    Z5.envDetector =
      void 0;
  var bDo = SVr();
  Object.defineProperty(Z5, "envDetector", {
    enumerable: !0,
    get: function () {
      return bDo.envDetector;
    },
  });
  var UPe = jVr();
  Object.defineProperty(Z5, "hostDetector", {
    enumerable: !0,
    get: function () {
      return UPe.hostDetector;
    },
  });
  Object.defineProperty(Z5, "osDetector", {
    enumerable: !0,
    get: function () {
      return UPe.osDetector;
    },
  });
  Object.defineProperty(Z5, "processDetector", {
    enumerable: !0,
    get: function () {
      return UPe.processDetector;
    },
  });
  Object.defineProperty(Z5, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return UPe.serviceInstanceIdDetector;
    },
  });
  var ADo = QVr();
  Object.defineProperty(Z5, "noopDetector", {
    enumerable: !0,
    get: function () {
      return ADo.noopDetector;
    },
  });
});