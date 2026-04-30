/**
 * @module J9i
 * @category unknown
 * @label unknown
 * @position 1774 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (J9i) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var J9i = T(($$) => {
  "use strict";
  Object.defineProperty($$, "__esModule", { value: !0 });
  $$.getSSOTokenFromFile = $$.tokenIntercept = void 0;
  var hNa = Ae("fs/promises"),
    gNa = fbr();
  $$.tokenIntercept = {};
  var bNa = async (t) => {
    if ($$.tokenIntercept[t]) return $$.tokenIntercept[t];
    let e = (0, gNa.getSSOTokenFilepath)(t),
      r = await (0, hNa.readFile)(e, "utf8");
    return JSON.parse(r);
  };
  $$.getSSOTokenFromFile = bNa;
});