/**
 * @module Yei
 * @category unknown
 * @label unknown
 * @position 1543 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Yei) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Yei = T((NCc, zei) => {
  "use strict";
  var Yda = pot();
  zei.exports = (t) => (e) =>
    function (n, o) {
      return e(n, new Yda({ ...n, retryOptions: { ...t, ...n.retryOptions } }, { handler: o, dispatch: e }));
    };
});