/**
 * @module DAn
 * @category unknown
 * @label unknown
 * @position 865 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (DAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var DAn = T((Irc, TAn) => {
  "use strict";
  var lbs = xAn();
  TAn.exports = (t = "") => {
    let e = t.match(lbs);
    if (!e) return null;
    let [r, n] = e[0].replace(/#! ?/, "").split(" "),
      o = r.split("/").pop();
    return o === "env" ? n : n ? `${o} ${n}` : o;
  };
});