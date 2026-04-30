/**
 * @module mWr
 * @category utils/oop
 * @label oop
 * @position 240 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (mWr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var mWr = T((tBe) => {
  "use strict";
  Object.defineProperty(tBe, "__esModule", { value: !0 });
  tBe.MeterProviderSharedState = void 0;
  var sIo = qC(),
    aIo = HVr(),
    uIo = lWr(),
    cIo = fge(),
    r4t = class {
      resource;
      viewRegistry = new aIo.ViewRegistry();
      metricCollectors = [];
      meterSharedStates = new Map();
      constructor(e) {
        this.resource = e;
      }
      getMeterSharedState(e) {
        let r = (0, sIo.instrumentationScopeId)(e),
          n = this.meterSharedStates.get(r);
        return (n == null && ((n = new uIo.MeterSharedState(this, e)), this.meterSharedStates.set(r, n)), n);
      }
      selectAggregations(e) {
        let r = [];
        for (let n of this.metricCollectors) r.push([n, (0, cIo.toAggregation)(n.selectAggregation(e))]);
        return r;
      }
    };
  tBe.MeterProviderSharedState = r4t;
});