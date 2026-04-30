/**
 * @module Psn
 * @category utils/oop
 * @label oop
 * @position 689 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Psn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Psn = T((d8) => {
  "use strict";
  Object.defineProperty(d8, "__esModule", { value: !0 });
  d8.noopDetector =
    d8.serviceInstanceIdDetector =
    d8.processDetector =
    d8.osDetector =
    d8.hostDetector =
    d8.envDetector =
      void 0;
  var xXo = hsn();
  Object.defineProperty(d8, "envDetector", {
    enumerable: !0,
    get: function () {
      return xXo.envDetector;
    },
  });
  var zQe = Osn();
  Object.defineProperty(d8, "hostDetector", {
    enumerable: !0,
    get: function () {
      return zQe.hostDetector;
    },
  });
  Object.defineProperty(d8, "osDetector", {
    enumerable: !0,
    get: function () {
      return zQe.osDetector;
    },
  });
  Object.defineProperty(d8, "processDetector", {
    enumerable: !0,
    get: function () {
      return zQe.processDetector;
    },
  });
  Object.defineProperty(d8, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return zQe.serviceInstanceIdDetector;
    },
  });
  var TXo = Nsn();
  Object.defineProperty(d8, "noopDetector", {
    enumerable: !0,
    get: function () {
      return TXo.noopDetector;
    },
  });
});