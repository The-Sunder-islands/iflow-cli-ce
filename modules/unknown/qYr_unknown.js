/**
 * @module qYr
 * @category unknown
 * @label unknown
 * @position 341 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (qYr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var qYr = T(($Le) => {
  "use strict";
  Object.defineProperty($Le, "__esModule", { value: !0 });
  $Le.detectResources = void 0;
  var GYr = (Zt(), bt(cr)),
    dSt = mSt(),
    nOo = (t = {}) =>
      (t.detectors || [])
        .map((r) => {
          try {
            let n = (0, dSt.resourceFromDetectedResource)(r.detect(t));
            return (GYr.diag.debug(`${r.constructor.name} found resource.`, n), n);
          } catch (n) {
            return (GYr.diag.debug(`${r.constructor.name} failed: ${n.message}`), (0, dSt.emptyResource)());
          }
        })
        .reduce((r, n) => r.merge(n), (0, dSt.emptyResource)());
  $Le.detectResources = nOo;
});