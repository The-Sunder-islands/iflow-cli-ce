/**
 * @module snn
 * @category utils/oop
 * @label oop
 * @position 565 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (snn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var snn = T((nL) => {
  "use strict";
  Object.defineProperty(nL, "__esModule", { value: !0 });
  nL.UBER_TRACE_ID_HEADER = nL.UBER_BAGGAGE_HEADER_PREFIX = nL.JaegerPropagator = void 0;
  var f7t = onn();
  Object.defineProperty(nL, "JaegerPropagator", {
    enumerable: !0,
    get: function () {
      return f7t.JaegerPropagator;
    },
  });
  Object.defineProperty(nL, "UBER_BAGGAGE_HEADER_PREFIX", {
    enumerable: !0,
    get: function () {
      return f7t.UBER_BAGGAGE_HEADER_PREFIX;
    },
  });
  Object.defineProperty(nL, "UBER_TRACE_ID_HEADER", {
    enumerable: !0,
    get: function () {
      return f7t.UBER_TRACE_ID_HEADER;
    },
  });
});