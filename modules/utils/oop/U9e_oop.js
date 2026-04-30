/**
 * @module U9e
 * @category utils/oop
 * @label oop
 * @position 890 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (U9e) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var U9e = T((bQt) => {
  "use strict";
  Object.defineProperty(bQt, "__esModule", { value: !0 });
  var hQt = B9e(),
    gQt = class extends Error {
      constructor(e, r, n, o) {
        (super(o || `can't resolve reference ${n} from id ${r}`),
          (this.missingRef = (0, hQt.resolveUrl)(e, r, n)),
          (this.missingSchema = (0, hQt.normalizeId)((0, hQt.getFullPath)(e, this.missingRef))));
      }
    };
  bQt.default = gQt;
});