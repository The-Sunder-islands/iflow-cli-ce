/**
 * @module OB
 * @category utils/oop
 * @label oop
 * @position 176 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OB) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OB = T((kB) => {
  "use strict";
  Object.defineProperty(kB, "__esModule", { value: !0 });
  kB.DataPointType = kB.InstrumentType = void 0;
  var Nxo;
  (function (t) {
    ((t.COUNTER = "COUNTER"),
      (t.GAUGE = "GAUGE"),
      (t.HISTOGRAM = "HISTOGRAM"),
      (t.UP_DOWN_COUNTER = "UP_DOWN_COUNTER"),
      (t.OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER"),
      (t.OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE"),
      (t.OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER"));
  })((Nxo = kB.InstrumentType || (kB.InstrumentType = {})));
  var Pxo;
  (function (t) {
    ((t[(t.HISTOGRAM = 0)] = "HISTOGRAM"),
      (t[(t.EXPONENTIAL_HISTOGRAM = 1)] = "EXPONENTIAL_HISTOGRAM"),
      (t[(t.GAUGE = 2)] = "GAUGE"),
      (t[(t.SUM = 3)] = "SUM"));
  })((Pxo = kB.DataPointType || (kB.DataPointType = {})));
});