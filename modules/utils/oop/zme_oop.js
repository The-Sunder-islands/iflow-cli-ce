/**
 * @module zme
 * @category utils/oop
 * @label oop
 * @position 1761 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zme) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zme = T((dmt) => {
  "use strict";
  var Xgr = j8i(),
    Aka = {
      step: "build",
      tags: ["RECURSION_DETECTION"],
      name: "recursionDetectionMiddleware",
      override: !0,
      priority: "low",
    },
    yka = (t) => ({
      applyToStack: (e) => {
        e.add(Xgr.recursionDetectionMiddleware(), Aka);
      },
    });
  dmt.getRecursionDetectionPlugin = yka;
  Object.keys(Xgr).forEach(function (t) {
    t !== "default" &&
      !Object.prototype.hasOwnProperty.call(dmt, t) &&
      Object.defineProperty(dmt, t, {
        enumerable: !0,
        get: function () {
          return Xgr[t];
        },
      });
  });
});