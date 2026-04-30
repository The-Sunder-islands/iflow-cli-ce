/**
 * @module X9i
 * @category utils/oop
 * @label oop
 * @position 1775 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (X9i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var X9i = T((uy) => {
  "use strict";
  Object.defineProperty(uy, "__esModule", { value: !0 });
  uy.readFile = uy.fileIntercept = uy.filePromises = void 0;
  var ANa = Ae("node:fs/promises");
  uy.filePromises = {};
  uy.fileIntercept = {};
  var yNa = (t, e) =>
    uy.fileIntercept[t] !== void 0
      ? uy.fileIntercept[t]
      : ((!uy.filePromises[t] || e?.ignoreCache) && (uy.filePromises[t] = (0, ANa.readFile)(t, "utf8")),
        uy.filePromises[t]);
  uy.readFile = yNa;
});