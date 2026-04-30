/**
 * @module AYr
 * @category utils/oop
 * @label oop
 * @position 316 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (AYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var AYr = T((n8) => {
  "use strict";
  Object.defineProperty(n8, "__esModule", { value: !0 });
  n8.noopDetector =
    n8.serviceInstanceIdDetector =
    n8.processDetector =
    n8.osDetector =
    n8.hostDetector =
    n8.envDetector =
      void 0;
  var mko = Zzr();
  Object.defineProperty(n8, "envDetector", {
    enumerable: !0,
    get: function () {
      return mko.envDetector;
    },
  });
  var ALe = gYr();
  Object.defineProperty(n8, "hostDetector", {
    enumerable: !0,
    get: function () {
      return ALe.hostDetector;
    },
  });
  Object.defineProperty(n8, "osDetector", {
    enumerable: !0,
    get: function () {
      return ALe.osDetector;
    },
  });
  Object.defineProperty(n8, "processDetector", {
    enumerable: !0,
    get: function () {
      return ALe.processDetector;
    },
  });
  Object.defineProperty(n8, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return ALe.serviceInstanceIdDetector;
    },
  });
  var dko = bYr();
  Object.defineProperty(n8, "noopDetector", {
    enumerable: !0,
    get: function () {
      return dko.noopDetector;
    },
  });
});