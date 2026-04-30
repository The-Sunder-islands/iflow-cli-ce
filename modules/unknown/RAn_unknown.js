/**
 * @module RAn
 * @category unknown
 * @label unknown
 * @position 866 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (RAn) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var RAn = T((Rrc, IAn) => {
  "use strict";
  var q$t = Ae("fs"),
    mbs = DAn();
  function dbs(t) {
    let r = Buffer.alloc(150),
      n;
    try {
      ((n = q$t.openSync(t, "r")), q$t.readSync(n, r, 0, 150, 0), q$t.closeSync(n));
    } catch {}
    return mbs(r.toString());
  }
  IAn.exports = dbs;
});