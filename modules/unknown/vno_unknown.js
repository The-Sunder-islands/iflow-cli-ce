/**
 * @module vno
 * @category unknown
 * @label unknown
 * @position 1983 / 1990
 * @source esbuild bundle from @iflow-ai/iflow-cli v0.5.19
 * @package iflow-cli-ce (Community Edition)
 * @license Apache-2.0
 *
 * This module was automatically extracted and categorized.
 * The original variable name (vno) is preserved for compatibility.
 * DO NOT rename this module's variable - it's referenced by other modules.
 */


var vno = T((HIl, Eno) => {
  "use strict";
  Eno.exports = Dbu;
  var xbu = DAt(),
    Tbu = IAt();
  function Dbu(t) {
    global.Buffer && global.Buffer.isBuffer(t) && (t = t.toString("utf8"));
    let e = new xbu();
    try {
      return (e.parse(t), e.finish());
    } catch (r) {
      throw Tbu(r, t);
    }
  }
});