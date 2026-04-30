/**
 * @module jVr
 * @category utils/oop
 * @label oop
 * @position 219 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (jVr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var jVr = T((wx) => {
  "use strict";
  Object.defineProperty(wx, "__esModule", { value: !0 });
  wx.serviceInstanceIdDetector = wx.processDetector = wx.osDetector = wx.hostDetector = void 0;
  var MPe = $Vr();
  Object.defineProperty(wx, "hostDetector", {
    enumerable: !0,
    get: function () {
      return MPe.hostDetector;
    },
  });
  Object.defineProperty(wx, "osDetector", {
    enumerable: !0,
    get: function () {
      return MPe.osDetector;
    },
  });
  Object.defineProperty(wx, "processDetector", {
    enumerable: !0,
    get: function () {
      return MPe.processDetector;
    },
  });
  Object.defineProperty(wx, "serviceInstanceIdDetector", {
    enumerable: !0,
    get: function () {
      return MPe.serviceInstanceIdDetector;
    },
  });
});