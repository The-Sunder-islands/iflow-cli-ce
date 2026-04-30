/**
 * @module Sin
 * @category utils/oop
 * @label oop
 * @position 603 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Sin) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Sin = T((Ije) => {
  "use strict";
  Object.defineProperty(Ije, "__esModule", { value: !0 });
  Ije.detectResources = void 0;
  var Cin = (Zt(), bt(cr)),
    G7t = Q7t(),
    eYo = (t = {}) =>
      (t.detectors || [])
        .map((r) => {
          try {
            let n = (0, G7t.resourceFromDetectedResource)(r.detect(t));
            return (Cin.diag.debug(`${r.constructor.name} found resource.`, n), n);
          } catch (n) {
            return (Cin.diag.debug(`${r.constructor.name} failed: ${n.message}`), (0, G7t.emptyResource)());
          }
        })
        .reduce((r, n) => r.merge(n), (0, G7t.emptyResource)());
  Ije.detectResources = eYo;
});