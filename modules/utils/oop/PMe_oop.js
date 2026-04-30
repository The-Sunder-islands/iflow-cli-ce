/**
 * @module PMe
 * @category utils/oop
 * @label oop
 * @position 387 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (PMe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var PMe = T((NMe) => {
  "use strict";
  Object.defineProperty(NMe, "__esModule", { value: !0 });
  NMe.AlwaysOnSampler = void 0;
  var INo = $ge(),
    KSt = class {
      shouldSample() {
        return { decision: INo.SamplingDecision.RECORD_AND_SAMPLED };
      }
      toString() {
        return "AlwaysOnSampler";
      }
    };
  NMe.AlwaysOnSampler = KSt;
});