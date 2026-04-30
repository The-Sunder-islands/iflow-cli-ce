/**
 * @module sMe
 * @category utils/oop
 * @label oop
 * @position 364 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (sMe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var sMe = T((oMe) => {
  "use strict";
  Object.defineProperty(oMe, "__esModule", { value: !0 });
  oMe.AlwaysOffSampler = void 0;
  var GOo = Mge(),
    vSt = class {
      shouldSample() {
        return { decision: GOo.SamplingDecision.NOT_RECORD };
      }
      toString() {
        return "AlwaysOffSampler";
      }
    };
  oMe.AlwaysOffSampler = vSt;
});