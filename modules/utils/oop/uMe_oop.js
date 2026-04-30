/**
 * @module uMe
 * @category utils/oop
 * @label oop
 * @position 365 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (uMe) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var uMe = T((aMe) => {
  "use strict";
  Object.defineProperty(aMe, "__esModule", { value: !0 });
  aMe.AlwaysOnSampler = void 0;
  var qOo = Mge(),
    CSt = class {
      shouldSample() {
        return { decision: qOo.SamplingDecision.RECORD_AND_SAMPLED };
      }
      toString() {
        return "AlwaysOnSampler";
      }
    };
  aMe.AlwaysOnSampler = CSt;
});