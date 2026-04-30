/**
 * @module mKr
 * @category utils/oop
 * @label oop
 * @position 359 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mKr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mKr = T((o8) => {
  "use strict";
  Object.defineProperty(o8, "__esModule", { value: !0 });
  o8.noopDetector =
    o8.serviceInstanceIdDetector =
    o8.processDetector =
    o8.osDetector =
    o8.hostDetector =
    o8.envDetector =
      void 0;
  var MOo = VYr();
  Object.defineProperty(o8, "envDetector", {
    enumerable: !0,
    get: function () {
      return MOo.envDetector;
    },
  });
  var rMe = cKr();
  Object.defineProperty(o8, "hostDetector", {
    enumerable: !0,
    get: function () {
      return rMe.hostDetector;
    },
  });
  Object.defineProperty(o8, "osDetector", {
    enumerable: !0,
    get: function () {
      return rMe.osDetector;
    },
  });
  Object.defineProperty(o8, "processDetector", {
    enumerable: !0,
    get: function () {
      return rMe.processDetector;
    },
  });
  Object.defineProperty(o8, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return rMe.serviceInstanceIdDetector;
    },
  });
  var FOo = lKr();
  Object.defineProperty(o8, "noopDetector", {
    enumerable: !0,
    get: function () {
      return FOo.noopDetector;
    },
  });
});