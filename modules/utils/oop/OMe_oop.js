/**
 * @module OMe
 * @category utils/oop
 * @label oop
 * @position 386 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (OMe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var OMe = T((kMe) => {
  "use strict";
  Object.defineProperty(kMe, "__esModule", { value: !0 });
  kMe.AlwaysOffSampler = void 0;
  var DNo = $ge(),
    YSt = class {
      shouldSample() {
        return { decision: DNo.SamplingDecision.NOT_RECORD };
      }
      toString() {
        return "AlwaysOffSampler";
      }
    };
  kMe.AlwaysOffSampler = YSt;
});