/**
 * @module Jzr
 * @category utils/oop
 * @label oop
 * @position 298 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Jzr) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Jzr = T((rLe) => {
  "use strict";
  Object.defineProperty(rLe, "__esModule", { value: !0 });
  rLe.detectResources = void 0;
  var Kzr = (Zt(), bt(cr)),
    L4t = B4t(),
    kRo = (t = {}) =>
      (t.detectors || [])
        .map((r) => {
          try {
            let n = (0, L4t.resourceFromDetectedResource)(r.detect(t));
            return (Kzr.diag.debug(`${r.constructor.name} found resource.`, n), n);
          } catch (n) {
            return (Kzr.diag.debug(`${r.constructor.name} failed: ${n.message}`), (0, L4t.emptyResource)());
          }
        })
        .reduce((r, n) => r.merge(n), (0, L4t.emptyResource)());
  rLe.detectResources = kRo;
});