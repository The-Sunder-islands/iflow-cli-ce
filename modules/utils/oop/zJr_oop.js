/**
 * @module zJr
 * @category utils/oop
 * @label oop
 * @position 422 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (zJr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var zJr = T((cq) => {
  "use strict";
  Object.defineProperty(cq, "__esModule", { value: !0 });
  cq.semconvStabilityFromStr = cq.SemconvStability = void 0;
  var mFe;
  (function (t) {
    ((t[(t.STABLE = 1)] = "STABLE"), (t[(t.OLD = 2)] = "OLD"), (t[(t.DUPLICATE = 3)] = "DUPLICATE"));
  })((mFe = cq.SemconvStability || (cq.SemconvStability = {})));
  function _Bo(t, e) {
    let r = mFe.OLD,
      n = e
        ?.split(",")
        .map((o) => o.trim())
        .filter((o) => o !== "");
    for (let o of n ?? [])
      if (o.toLowerCase() === t + "/dup") {
        r = mFe.DUPLICATE;
        break;
      } else o.toLowerCase() === t && (r = mFe.STABLE);
    return r;
  }
  cq.semconvStabilityFromStr = _Bo;
});