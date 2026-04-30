/**
 * @module fsn
 * @category utils/oop
 * @label oop
 * @position 671 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (fsn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var fsn = T((OQe) => {
  "use strict";
  Object.defineProperty(OQe, "__esModule", { value: !0 });
  OQe.detectResources = void 0;
  var dsn = (Zt(), bt(cr)),
    IRt = DRt(),
    VJo = (t = {}) =>
      (t.detectors || [])
        .map((r) => {
          try {
            let n = (0, IRt.resourceFromDetectedResource)(r.detect(t));
            return (dsn.diag.debug(`${r.constructor.name} found resource.`, n), n);
          } catch (n) {
            return (dsn.diag.debug(`${r.constructor.name} failed: ${n.message}`), (0, IRt.emptyResource)());
          }
        })
        .reduce((r, n) => r.merge(n), (0, IRt.emptyResource)());
  OQe.detectResources = VJo;
});