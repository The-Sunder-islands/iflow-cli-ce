/**
 * @module SAn
 * @category unknown
 * @label unknown
 * @position 863 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (SAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var SAn = T((Trc, G$t) => {
  "use strict";
  var Q$t = /([()\][%!^"`<>&|;, *?])/g;
  function ubs(t) {
    return ((t = t.replace(Q$t, "^$1")), t);
  }
  function cbs(t, e) {
    return (
      (t = `${t}`),
      (t = t.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"')),
      (t = t.replace(/(?=(\\+?)?)\1$/, "$1$1")),
      (t = `"${t}"`),
      (t = t.replace(Q$t, "^$1")),
      e && (t = t.replace(Q$t, "^$1")),
      t
    );
  }
  G$t.exports.command = ubs;
  G$t.exports.argument = cbs;
});