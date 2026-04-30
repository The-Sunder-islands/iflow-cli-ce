/**
 * @module xAi
 * @category utils/id
 * @label id
 * @position 1734 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (xAi) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var xAi = T((c0t) => {
  "use strict";
  Object.defineProperty(c0t, "__esModule", { value: !0 });
  c0t.randomUUID = void 0;
  var kIa = (rI(), bt(tI)),
    wAi = kIa.__importDefault(Ae("crypto"));
  c0t.randomUUID = wAi.default.randomUUID.bind(wAi.default);
});