/**
 * @module Hei
 * @category unknown
 * @label unknown
 * @position 1541 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (Hei) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var Hei = T((kCc, qei) => {
  "use strict";
  var Hda = Hur();
  function Vda({ maxRedirections: t } = {}) {
    return (e) =>
      function (n, o) {
        let { maxRedirections: s = t, ...a } = n;
        if (s == null || s === 0) return e(n, o);
        let u = { ...a },
          c = new Hda(e, s, u, o);
        return e(u, c);
      };
  }
  qei.exports = Vda;
});