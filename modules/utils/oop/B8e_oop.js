/**
 * @module B8e
 * @category utils/oop
 * @label oop
 * @position 814 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (B8e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var B8e = T((GUt) => {
  "use strict";
  Object.defineProperty(GUt, "__esModule", { value: !0 });
  var jUt = k8e(),
    QUt = class extends Error {
      constructor(e, r, n, o) {
        (super(o || `can't resolve reference ${n} from id ${r}`),
          (this.missingRef = (0, jUt.resolveUrl)(e, r, n)),
          (this.missingSchema = (0, jUt.normalizeId)((0, jUt.getFullPath)(e, this.missingRef))));
      }
    };
  GUt.default = QUt;
});