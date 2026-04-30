/**
 * @module IFi
 * @category unknown
 * @label unknown
 * @position 1850 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (IFi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var IFi = T((Zil, DFi) => {
  "use strict";
  DFi.exports = function (e) {
    if ((e === void 0 && (e = 2), e >= Error.stackTraceLimit))
      throw new TypeError(
        "getCallerFile(position) requires position be less then Error.stackTraceLimit but position was: `" +
          e +
          "` and Error.stackTraceLimit was: `" +
          Error.stackTraceLimit +
          "`",
      );
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = function (o, s) {
      return s;
    };
    var n = new Error().stack;
    if (((Error.prepareStackTrace = r), n !== null && typeof n == "object")) return n[e] ? n[e].getFileName() : void 0;
  };
});